import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function Subscribepart() {
  return (
    <div className='h-auto w-100 flex justify-center items-center mt-36  flex-col'> 
<p className='font-bold text-4xl'>Subscribe Our Newsletter</p>
<p className='mt-4'>Get the latest information and promo offers directly</p>
<div className="flex w-full max-w-sm items-center space-x-2 mt-12">
<Input type="email" placeholder="Email" />
      <Button type="submit">Get Started</Button>
      </div>
    </div>
  )
}
 