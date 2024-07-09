// import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
  title: string;
  price: number;
  image: StaticImageData;
}

export default function Productcard({ title, price, image }: ProductCardProps) {
  return (
    <div className='mt-28 p-4 border rounded-lg'>
      <div className='relative w-60 h-60'>
        <Image 
          src={image} 
          alt='photo'
          layout='fill' // Ensures the image fills the container
          objectFit='cover' // Ensures the image covers the container without distortion
          className='rounded-lg   overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
      </div>
      <p className='font-bold text-xl mt-2'>{title}</p>
      <p className='font-bold text-xl'>${price}</p>
    </div>
  );
}
