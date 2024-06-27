
import Image from "next/image";
import logo from "/public/Logo.webp"
import Link from "next/link";
import {ShoppingCart} from "lucide-react"
export default function Header() {
  return (
    <div className="flex justify-between items-center p-8"> 
       < Image src={logo} alt="logo"/>
       <ul className="gap-x-10 flex justify-between" > 
        <Link className="text-lg" href={""} >Female</Link>
        <Link  className="text-lg"  href={""} >Male</Link>
        <Link  className="text-lg" href={""} >Kids</Link>
        <Link  className="text-lg" href={""} >All Products</Link>
       </ul>
       <div className="bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center"> 
        <ShoppingCart/>
         </div>
    </div>
  )
}
