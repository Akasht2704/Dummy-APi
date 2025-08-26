import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "OTP verified successfully",
    result: `Phone number ${body.phoneNumber ?? "string"} verified with OTP ${
      body.otpCode ?? "string"
    }`,
  });
}
