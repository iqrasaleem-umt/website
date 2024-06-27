import React from 'react'
import Image from 'next/image'
import picutre from "/public/productpic7.webp"
export default function LabelProduct() {
  return (
    <div>
    <div className='mt-32 flex justify-end'><h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
    Unique and  <br className='mt-1' />Authentic Vintage <br className='mt-1' /> Designer Jewellery
  </h1></div>
  <div className='flex flex-1 mt-10'>
  <div className=' mx-10'> 
    <div className=''> 
      <h2 className='font-bold text-xl'>Using Good <br /> Quality  Materials</h2>
      <p className='mt-4'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.</p>
    </div>
    <div> 
      <h2 className='font-bold text-xl mt-14'>Using Good <br /> Quality  Materials</h2>
      <p className='mt-4'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.</p>
    </div>
    </div>
    <div className=''>
    <div> 
      <h2 className='font-bold text-xl'>Using Good <br /> Quality  Materials</h2>
      <p className='mt-4'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.</p>
    </div>
    <div> 
      <h2 className='font-bold text-xl mt-14'>Using Good <br /> Quality  Materials</h2>
      <p className='mt-4'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.</p>
    </div>
    </div>
  
  <div className='flex  flex-1'>
  <div className='mx-12'> 
    <Image src={picutre} alt='photo'/>

  </div>
  <div className='mx-6 mt-6 text-lg'><p> This piece is ethically <br /> crafted in our small <br /> family-owned workshop <br /> in Peru with unmatched <br /> attention to detail and <br /> care. The Natural color is <br /> the actual natural color  <br /> of the   fiber, undyed  100% traceable.</p> 
  <button className='bg-black px-2 font-bold mt-12 py-3  text-white'>See ALL  Products</button>
  </div>
  </div>
  </div>
 </div>
  )
}
