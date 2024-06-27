
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import heroimage from "/public/heroimage.webp"
import pic1 from "/public/image1.webp"
import pic2 from "/public/image2.webp"
import pic3 from "/public/image3.webp"
import pic4 from "/public/image4.webp"


import Image from 'next/image'


export default function Hero() {
  return (
   <div className=''>

   <div className='flex sm: flex-col lg:flex-row gap-y-10 mt-16'> 
    <div className='flex-1'> 
    <Badge className='px-6 py-3 rounded-lg bg-blue-200 text-blue-700'>sale 70%</Badge>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-8">
    An Industrial <br className='' /> Take on <br className='' /> Streetwear
   
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-8 gap-2 text-gray-700 ">
      Anyone can beat you but no one can <br /> beat your outfit as long as you wear <br /> Dine outfits.
      </p>
      <Button className=' px-10 py-9 rounded-none mt-8'> Start <br /> Shopping</Button>
      <div className="flex gap-x-6 mt-6"> 
        < Image src={pic1} alt="image"/>
        < Image src={pic2} alt="image"/>
        < Image src={pic3} alt="image"/>
        < Image src={pic4} alt="image"/>
        
        </div>
    </div>
    <div className='flex-1'> 
   < Image  className='bg-orange-100 rounded-full' src={heroimage} alt='image'/>
   
    </div>
   
   </div>
   <div> 
   
   </div>
   </div>
  )
}
