import { NextResponse } from "next/server";

// GET /api/Coupon?batchId=&startDate=&endDate=&isActive=&skipRecords=&takeRecords=
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  // you can read them if needed:
  // const batchId = Number(searchParams.get("batchId") ?? 0);
  return NextResponse.json({
    success: true,
    message: "Coupons fetched",
    result: [
      {
        createdBy: "string",
        createdByName: "string",
        updatedBy: "string",
        updatedByName: "string",
        createdOn: new Date().toISOString(),
        updatedOn: new Date().toISOString(),
        id: 0,
        uniqueId: "string",
        batchId: 0,
        orgAliasName: "string",
        parentCouponId: 0,
        isScanned: true,
        scannedDate: new Date().toISOString(),
        isActive: true,
        isPrinted: true,
        scanCount: 0,
      },
    ],
  });
}

// POST /api/Coupon
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "Coupon added successfully",
    result: `Coupon Code ${body.couponCode ?? "string"} has been added`,
  });
}

// PUT /api/Coupon
export async function PUT(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "Coupon updated successfully",
    result: `Coupon ID ${body.id ?? 0} has been updated`,
  });
}

// DELETE /api/Coupon?id=123
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") ?? "0";
  return NextResponse.json({
    success: true,
    message: "Coupon deleted successfully",
    result: `Coupon ID ${id} has been deleted`,
  });
}
