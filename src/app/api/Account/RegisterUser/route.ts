import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "User registered successfully",
    result: `User '${body.username ?? "string"}' has been registered`,
  });
}
