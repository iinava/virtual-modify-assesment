import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(request: Request) {
    try {
      const { id } = await request.json();
      
      // console.log(id);
      
  
      if (!id) {
        return NextResponse.json(
          { error: "Vendor ID is required for deletion" },
          { status: 400 }
        );
      }
  
      const vendorToDelete = await prisma.vendor.findUnique({
        where: { id },
      });
  
      if (!vendorToDelete) {
        return NextResponse.json(
          { error: "Vendor with the provided ID not found" },
          { status: 404 }
        );
      }
  
      await prisma.vendor.delete({ where: { id } });
  
      return NextResponse.json({ message: "Vendor deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to delete vendor" },
        { status: 500 }
      );
    }
  }