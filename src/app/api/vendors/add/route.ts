import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    console.log("endpoint hit post ");
    
  const { name, email, age, address, phone } = await request.json();
  console.log(name, email, age, address, phone);
  const ageInt = parseInt(age, 10);

  if (!name || !address || !email || !phone || !age) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const existingVendor = await prisma.vendor.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingVendor) {
      return NextResponse.json(
        { error: "Email address already exists" },
        { status: 409 }
      );
    }

    const vendor = await prisma.vendor.create({
      data: { name, email, age: ageInt, address, phone },
    });
    return NextResponse.json(vendor, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create vendor" },
      { status: 500 }
    );
  }
}
