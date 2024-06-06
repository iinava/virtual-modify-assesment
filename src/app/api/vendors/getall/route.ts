import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export  async function GET(request: Request) {
    console.log("hit get");
    
  try {
    const vendors = await prisma.vendor.findMany();
    return NextResponse.json({data:vendors}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to retrieve vendors" },
      { status: 500 }
    );
  }
}
