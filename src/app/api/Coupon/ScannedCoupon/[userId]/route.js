import { NextResponse } from "next/server";

export async function GET( req, { params }) {

  const {userId} = await params;
  return NextResponse.json({
    success: true,
    message: "Scanned coupons fetched",
    result: [
      {
        id: 0,
        couponCode: "string",
        scannedBy: userId,
        scannedOn: new Date().toISOString(),
        orgAlias: "string",
        latitude: 0,
        longitude: 0,
      },
    ],
  });
}
