import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribepart() {
  return (
    <div className='w-full flex justify-center items-center mt-24 px-4 sm:px-8 md:px-16 lg:px-32 flex-col text-center'>
      <p className='font-bold text-2xl sm:text-3xl md:text-4xl'>Subscribe to Our Newsletter</p>
      <p className='mt-2 sm:mt-4 text-sm sm:text-base md:text-lg'>
        Get the latest information and promo offers directly
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-6 sm:mt-8">
        <Input type="email" placeholder="Email" className="flex-grow" />
        <Button type="submit" className="flex-shrink-0">Get Started</Button>
      </div>
    </div>
  );
}

 