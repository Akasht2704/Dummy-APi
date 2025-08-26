import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "Login successful",
    result: `User '${body.username ?? "string"}' is logged in`,
  });
}
