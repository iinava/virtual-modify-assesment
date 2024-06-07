import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // console.log("Endpoint hit: get by id");

  const id = params.id;

  try {
    const vendor = await prisma.vendor.findUnique({
      where: { id },
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    return NextResponse.json({ data: vendor }, { status: 200 });
  } catch (error) {
    console.error("Failed to find vendor:", error);
    return NextResponse.json(
      { error: "Failed to find vendor" },
      { status: 500 }
    );
  }
}
