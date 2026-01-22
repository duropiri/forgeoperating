import { cookies } from "next/headers";
import { COOKIE_NAME } from "@shared/const";
import { jwtVerify } from "jose";
import { ENV } from "@/lib/env";

// Simple user type for password auth
export type User = {
  id: number;
  name: string;
  email: string | null;
};

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
        user = {
          id: 1,
          name: session.name,
          email: null,
        };
      }
    }
  } catch (error) {
    user = null;
  }

  const cookieStore = await cookies();

  return {
    user,
    cookies: cookieStore,
  };
}
