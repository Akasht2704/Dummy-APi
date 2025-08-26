import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id =  Number(params.id || 0);
  return NextResponse.json({
    success: true,
    message: "Coupon details fetched successfully",
    result: {
      createdBy: "string",
      createdByName: "string",
      updatedBy: "string",
      updatedByName: "string",
      createdOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
      id,
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
  });
}
