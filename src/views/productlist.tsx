"use client"
import React from 'react';
import { Products } from '@/utils/mock'; // Ensure this path is correct
import Productcard from '@/component/productcard'; // Ensure this path is correct
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImageData } from 'next/image'; // Ensure this import is correct

export default function Productlist() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productChunks = Products.slice(0, 7); // Ensure Products is correctly imported and available

  return (
    <div className='w-full h-auto px-4 sm:px-8 md:px-12 lg:px-16'>
      <Slider {...settings}>
        {productChunks.map((product) => (
          <div key={product.id} className='p-2 md:p-4'>
            <Productcard 
              title={product.name} 
              price={product.price}
              image={product.image as StaticImageData} // Ensure type compatibility
              id={product.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
