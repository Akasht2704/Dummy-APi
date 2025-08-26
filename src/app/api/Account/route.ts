import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Accounts fetched successfully",
    result: [
      {
        createdBy: "string",
        createdByName: "string",
        updatedBy: "string",
        updatedByName: "string",
        createdOn: new Date().toISOString(),
        updatedOn: new Date().toISOString(),
        id: "string",
        userName: "string",
        normalizedUserName: "string",
        email: "string",
        normalizedEmail: "string",
        emailConfirmed: true,
        organizationId: 0,
        plantId: 0,
        organization: "string",
        plant: "string",
        roleId: "string",
        role: "string",
      },
    ],
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    success: true,
    message: "Account created successfully",
    result: `User '${body.username ?? "string"}' has been created with role ID ${
      body.roleid ?? "string"
    }`,
  });
}
