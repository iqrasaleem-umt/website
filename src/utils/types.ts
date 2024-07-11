import { StaticImageData } from "next/image";
export interface Product {
    id: number;
    name: string;
    tagline:string
    category: string;
    price: number;
    
    image: string|StaticImageData; // Assuming you're using next/image and StaticImageData type
  }




