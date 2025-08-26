import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const { id } = await params; 
  return NextResponse.json({
    success: true,
    message: "Batch details fetched",
    result: [
      {
        createdBy: "string",
        createdByName: "string",
        updatedBy: "string",
        updatedByName: "string",
        createdOn: new Date().toISOString(),
        updatedOn: new Date().toISOString(),
        id: Number(id || 0),
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
