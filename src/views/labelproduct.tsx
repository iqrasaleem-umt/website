import React from 'react';
import Image from 'next/image';
import picture from '/public/productpic7.webp';

export default function ProductInfo() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start mt-10 lg:mt-16 px-4 sm:px-8 md:px-16 lg:px-32 ">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
        <Image src={picture} alt="Product Image" className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md" />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-6">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-20">
          This piece is ethically crafted in our small family-owned workshop in Peru with unmatched
          attention to detail and care. The natural color is the actual natural color of the fiber, undyed
          and 100% traceable.
        </p>
        <button className="bg-black px-6 py-3 mt-6 lg:mt-8 text-white font-bold rounded">
          See All Products
        </button>
      </div>
    </div>
  );
}
