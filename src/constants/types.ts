import { IconType } from "react-icons";

export interface CardProps {
    icon: IconType;
    title: string;
    count: number;
    total: string;
    available: string;
    used: string;
  }
  
export interface VendorData {
    id: string;
    name: string;
    email: string;
    age: string;
    phone: string;
    address: string;
  }
  
 export interface VentorTableProps {
    vendors: VendorData[];
    setVendors: React.Dispatch<React.SetStateAction<VendorData[]>>;
  } 
export interface AddModalProps {
    setVendors: React.Dispatch<React.SetStateAction<VendorData[]>>;
  }
