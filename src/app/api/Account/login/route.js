import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


const SECRET_KEY = "Akash";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));

  // JWT payload
  const payload = {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier":
      "3d8a9365-dc12-4910-86b1-3e9cc002b995",
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name":
      body.username ?? "guest",
    IsActive: "True",
    iss: "localhost",
    aud: "localhost",
  };

  
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "7h" });

  return NextResponse.json({
    success: true,
    message: "Login Successed.",
    result: token, 
  });
}
