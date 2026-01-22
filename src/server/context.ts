import { cookies } from "next/headers";
import type { User } from "../../drizzle/schema";
import { COOKIE_NAME } from "@shared/const";
import { jwtVerify } from "jose";
import { ENV } from "@/lib/env";

export type TrpcContext = {
  user: User | null;
  cookies: Awaited<ReturnType<typeof cookies>>;
};

function getSessionSecret() {
  return new TextEncoder().encode(ENV.cookieSecret);
}

async function verifySession(
  cookieValue: string | undefined | null
): Promise<{ openId: string; appId: string; name: string } | null> {
  if (!cookieValue) {
    return null;
  }

  try {
    const secretKey = getSessionSecret();
    const { payload } = await jwtVerify(cookieValue, secretKey, {
      algorithms: ["HS256"],
    });
    const { openId, appId, name } = payload as Record<string, unknown>;

    if (
      typeof openId !== "string" ||
      typeof appId !== "string" ||
      typeof name !== "string"
    ) {
      return null;
    }

    return { openId, appId, name };
  } catch (error) {
    console.warn("[Auth] Session verification failed", String(error));
    return null;
  }
}

export async function createContext(): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(COOKIE_NAME)?.value;

    if (sessionCookie) {
      const session = await verifySession(sessionCookie);

      if (session) {
        // Create a simple user object for password-authenticated sessions
        user = {
          id: 1,
          openId: session.openId,
          name: session.name,
          email: null,
          loginMethod: "password",
          role: "user",
          createdAt: new Date(),
          lastSignedIn: new Date(),
        } as User;
      }
    }
  } catch (error) {
    // Authentication is optional for public procedures.
    user = null;
  }

  const cookieStore = await cookies();

  return {
    user,
    cookies: cookieStore,
  };
}
