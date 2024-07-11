import { Products } from '@/utils/mock';
import Quantity from '@/component/Quantity';
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
import Productinformation from '@/component/productinformation';

const getproductsDetail=(id:number | string)=>{ 
return  Products.filter((product)=>product.id==id)
}
let sizes=["xs","sm","md","lg", "xl"]

export default function Page({ params }: { params: { id: string } }) {
   const result= getproductsDetail(params.id)
 return <div>
 <div className='flex justify-evenly gap-x-2 flex-wrap'>
  { 
   result.map((product) => (
    <div key={product.id} className='flex justify-between gap-6'> 
      <div> 
        <Image src={product.image} alt={product.name} />
      </div>
      <div  className=''> 
       <h1 className='text-2xl'>{product.name} </h1>
       <h2 className='text-base font-semibold text-gray-300'>{product.tagline}</h2>
       <div> 
        <h3 className='text-xs font-semibold mt-6'>SELECT SIZE</h3>
        <div className='flex gap-3'>
        {sizes.map((item,index)=>{ 
          return <div key={index} className='gap-x-3'>
        <span className='h-6 w-6 mt-4 bg-slate-100 rounded-full hover:bg-gray-50 flex justify-center duration-300'>{item}</span>
        
        </div>
       
        })}
</div>
<div className='flex mt-4 gap-x-3'> 
  <h3 className='text-base font-semibold'>Quantity:</h3>
<Quantity/>

</div>

        
       
      </div>
       </div>
     
    </div>
  ))
}

</div> 
<Productinformation/> 
</div>
}
    
 

  