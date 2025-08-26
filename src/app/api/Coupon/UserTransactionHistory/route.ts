import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "Transaction history fetched",
    result: [
      {
        id: 0,
        couponCode: "string",
        scannedBy: body.userId ?? "string",
        scannedOn: new Date().toISOString(),
        orgAlias: "string",
        latitude: 0,
        longitude: 0,
      },
    ],
  });
}
