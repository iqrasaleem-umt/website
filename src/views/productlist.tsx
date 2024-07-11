"use client"

import React from 'react';
import { Products } from '@/utils/mock';
import Productcard from '@/component/productcard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImageData } from 'next/image';

export default function Productlist() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const productChunks = Products.slice(0, 7);

  return (
    <div  className='w-1012.67 h-759'>
    <Slider {...settings}>
      {productChunks.map((product) => (
        <div key={product.id} className='flex p-[64px] '>
          <Productcard 
            title={product.name} 
            price = {product.price }
           
            image={product.image as StaticImageData}
            id={product.id}
          />
        </div>
      ))}
    </Slider>
  </div>
  )
}
