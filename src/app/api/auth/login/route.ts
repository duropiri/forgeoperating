import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Simple team password - in production, use environment variable
const TEAM_PASSWORD = process.env.TEAM_PASSWORD || "password123";

function getSessionSecret() {
  const secret = process.env.COOKIE_SECRET || "dev-secret-change-in-production";
  return new TextEncoder().encode(secret);
}

async function createSessionToken(): Promise<string> {
  const issuedAt = Date.now();
  const expirationSeconds = Math.floor((issuedAt + ONE_YEAR_MS) / 1000);
  const secretKey = getSessionSecret();

  return new SignJWT({
    openId: "team-member",
    appId: "fog-team",
    name: "Team Member",
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(expirationSeconds)
    .sign(secretKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    if (password !== TEAM_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // Create session token
    const sessionToken = await createSessionToken();

    // Set cookie
    const cookieStore = await cookies();
    const isSecure =
      request.headers.get("x-forwarded-proto") === "https" ||
      request.nextUrl.protocol === "https:";

    cookieStore.set(COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: isSecure,
      sameSite: "lax",
      maxAge: ONE_YEAR_MS / 1000,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Auth] Login failed", error);
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
