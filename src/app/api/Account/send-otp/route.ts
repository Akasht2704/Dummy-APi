import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return NextResponse.json({
    success: true,
    message: "OTP sent successfully",
    result: `OTP ${otp} sent to ${body.phoneNumber ?? "string"}`,
  });
}
