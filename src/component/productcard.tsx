
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductcardProps {
  title: string;
  price: number;
  image: StaticImageData; // Assuming you're using StaticImageData for images
}

export default function Productcard({ title, price, image }: ProductcardProps) {
  return (
    <div className='mt-28'>
      <Image className='transform transition-transform duration-500 hover:scale-110' src={image} alt='photo' />
      <p className='font-bold text-xl'>{title}</p>
      <p className='font-bold text-xl mx-32'>${price}</p>
    </div>
  );
}