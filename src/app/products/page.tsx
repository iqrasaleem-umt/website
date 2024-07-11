import { Products } from "@/utils/mock"
import Productcard from "@/component/productcard"
import { StaticImageData } from "next/image"
export default function AllProducts() {
  return (
    <div className='flex justify-evenly gap-x-2 flex-wrap'>
    
      {Products.map((product) => (
         
        <Productcard 
          key={product.id} 
          title={product.name} 
          price={product.price}
          image={product.image as StaticImageData } // Correct prop name
          id={product.id}
        />
      ))}
      
    </div>
  )
}
