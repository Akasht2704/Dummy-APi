import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  return NextResponse.json({
    success: true,
    message: "Scanned coupons fetched",
    result: [
      {
        id: 0,
        couponCode: "string",
        scannedBy: params.userId,
        scannedOn: new Date().toISOString(),
        orgAlias: "string",
        latitude: 0,
        longitude: 0,
      },
    ],
  });
}
