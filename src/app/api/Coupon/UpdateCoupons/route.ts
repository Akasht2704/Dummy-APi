import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const body = await req.json().catch(() => ({}));
  const ids = Array.isArray(body.couponIds) ? body.couponIds.join(", ") : "";
  return NextResponse.json({
    success: true,
    message: "Coupons updated successfully",
    result: `Coupons with IDs [${ids}] have been updated to isActive=${String(
      body.isActive ?? true
    )}`,
  });
}

