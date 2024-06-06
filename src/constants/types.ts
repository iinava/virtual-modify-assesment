import { IconType } from "react-icons";

export interface CardProps {
    icon: IconType;
    title: string;
    count: number;
    total: string;
    available: string;
    used: string;
  }
  