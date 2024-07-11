"use client"
import React, { useState } from 'react';


function Quantity() {
    const [num, setNum] = useState(1);
    const [showMessage, setShowMessage] = useState(false);
    const addToCart = () => {
        console.log(`Added ${num} item(s) to cart.`);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000); // Hide the message after 3 seconds
      };
  return (
    <div>
    <div className='flex gap-x-6'> 
        <div className='h-6 w-6 rounded-full bg-gray-100 text-black flex justify-center items-center cursor-pointer' onClick={()=>{setNum( num<=1 ? 1 :num-1)}}>-</div>
        <div> {num}</div>
        <div className='h-6 w-6 rounded-full bg-gray-100 text-black flex justify-center items-center border border--black cursor-pointer 'onClick={()=>{setNum(num+1)}}>+</div>
        
    </div>
    <div className='flex gap-6 items-center justify-center mt-12'>
        <button 
        className='mt-4 bg-black text-white px-4 py-2 rounded flex justify-start'
        onClick={addToCart}
      >
        Add to Cart
      </button>
      {showMessage && (
        <div className='mt-4 p-2 bg-gray-200 text-black rounded'>
          Added Cameryn Sash Dress to the cart!
        </div>
      )}
       <span className='text-2xl font-bold mt-3'>$150</span>
      </div>
     
    </div>
  )
}

export default Quantity
