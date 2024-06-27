import { StaticImageData } from "next/image";
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    Image: StaticImageData; // Assuming you're using next/image and StaticImageData type
  }




