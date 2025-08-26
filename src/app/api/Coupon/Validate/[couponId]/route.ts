import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { couponId: string } }
) {
  const id = Number(params.couponId || 0);
  return NextResponse.json({
    success: true,
    message: "Coupon validated",
    result: {
      createdBy: "string",
      createdByName: "string",
      updatedBy: "string",
      updatedByName: "string",
      createdOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
      id,
      productName: "string",
      description: "string",
      quantity: 0,
      fssaiCode: "string",
      productCategoryId: 0,
      productCategoryName: "string",
      weightId: 0,
      weightDesc: "string",
      price: 0,
      expiryDays: 0,
      plantId: 0,
      orgId: 0,
      plantName: "string",
      orgName: "string",
    },
  });
}
