
import Image from "next/image";
import logo from "/public/Logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 md:p-8">
      <div className="flex-shrink-0">
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <ul className="hidden md:flex gap-x-8 lg:gap-x-10">
        <li>
          <Link className="text-sm md:text-lg" href={"/category/female"}>
            Female
          </Link>
        </li>
        <li>
          <Link className="text-sm md:text-lg" href={"/category/male"}>
            Male
          </Link>
        </li>
        <li>
          <Link className="text-sm md:text-lg" href={"/category/kids"}>
            Kids
          </Link>
        </li>
        <li>
          <Link className="text-sm md:text-lg" href={"/products"}>
            All Products
          </Link>
        </li>
      </ul>
      <div className="bg-gray-300 h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center">
        <ShoppingCart className="h-4 w-4 md:h-6 md:w-6" />
      </div>
    </div>
  );
}
