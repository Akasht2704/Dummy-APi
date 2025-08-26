import { NextResponse } from "next/server";

export async function GET(_req, context) {
  const { id } = await context.params; // ✅ await params in Next.js App Router
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
