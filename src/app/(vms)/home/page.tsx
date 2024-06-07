"use client";
import Addmodal from "@/Components/vms/Addmodal";
import VentorTable from "@/Components/vms/VentorTable";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { VendorData } from "@/constants/types";
export default function Homepage() {
  const [vendors, setVendors] = useState<VendorData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("/api/vendors/getall");
        // console.log(response.data.data);

        setVendors(response.data.data || []);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="bg-black h-screen overflow-x-hidden flex flex-col gap-5 px-[4vw] pt-14">
      <h1>List of vendors</h1>

      {isLoading && <p>Loading vendors...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {vendors ? <VentorTable vendors={vendors} setVendors={setVendors} /> : "no vendors"}
      <div>
        <Addmodal setVendors={setVendors}/>
      </div>
    </div>
  );
}
