import React from 'react';
import Image from 'next/image';
import { Products } from '@/utils/mock';
import Productcard from '@/component/productcard'; // Correct import path

export default function Productlist() {
  const productChunks = Products.slice(0, 3); // Corrected variable name and source

  return (
    <div className='flex justify-evenly'>
      {productChunks.map((product) => (
        <Productcard 
          key={product.id} 
          title={product.name} 
          price={product.price}
          image={product.Image} // Correct prop name
        />
      ))}
    </div>
  );
}

