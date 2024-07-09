import { Products } from '@/utils/mock';
import Productcard from '@/component/productcard';
import { StaticImageData } from 'next/image';

const getproductsBycategory=(category:string)=>{ 
return  Products.filter((product)=>product.category==category)
}


export default function Page({ params }: { params: { slug: string } }) {
  const result=getproductsBycategory(params.slug)
 return  <div className='flex justify-evenly gap-x-2 flex-wrap'>
  { 
    result.length>0 ?result.map((product) => (
    
      <Productcard 
        key={product.id} 
        title={product.name} 
        price={product.price}
        image={product.image as StaticImageData } // Correct prop name
      />
    )):<p>products not found</p>
  }
    
 
 
</div>
  }