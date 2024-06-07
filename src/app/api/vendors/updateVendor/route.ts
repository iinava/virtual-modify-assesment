import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  console.log("endpoint hit put ");

  const { id, name, email, age, address, phone } = await request.json();
  console.log(id, name, email, age, address, phone);
  const ageInt = parseInt(age, 10);

  if (!id || !name || !address || !email || !phone || !age) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const existingVendor = await prisma.vendor.findUnique({
      where: { id },
      select: { id: true },
    });

    // console.log(existingVendor);

    if (!existingVendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    const updatedVendor = await prisma.vendor.update({
      where: { id },
      data: { name, email, age: ageInt, address, phone },
    });
    console.log();

    return NextResponse.json({ data: updatedVendor }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update vendor" },
      { status: 500 }
    );
  }
}
