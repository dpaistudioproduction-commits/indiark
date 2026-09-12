import { NextRequest, NextResponse } from "next/server";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "indiark2026password",
};

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const response = NextResponse.json({ success: true, message: "Authenticated" });
      response.cookies.set("indiark_admin_session", "authenticated_token_2026", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: "Authentication error" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("indiark_admin_session");
  return response;
}
