import React from 'react'
import Image from 'next/image'
import logo from "/public/Logo.webp"
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
export default function Detailpage() {
  return (
    <div className='flex mt-24 justify-between'>
        <div className=''>
      <Image src={ logo } alt=''/> 
      <p className='mt-8'>Small, artisan label that offers a <br /> thoughtfully curated collection of high <br /> quality everyday essentials made.</p> 
      <div className='flex mt-6 gap-x-8 text-black'> <Facebook className='bg-slate-200 rounded-lg h-8 w-8'/>
      <Linkedin className='bg-slate-200 rounded-lg h-8 w-8 ' />
      <Github className='bg-slate-200 rounded-lg h-8 w-8' /></div>
      </div> 
      <div><p className='font-bold text-slate-700 text-2xl' > Company</p> 
      <ul className='mt-6'> 
        <li>About</li>
        <li>Terms of Use</li>
         <li>Privacy Policy</li>
         <li>How it Works</li>
          <li>Contact Us</li>
      </ul>
      </div>
      <div> 
      <p className='font-bold text-slate-700 text-2xl' > Support</p> 
      <ul className='mt-6'> 
        <li>Support Carrer</li>
        <li>24th service</li>
         <li>Quick Chat</li>
        
      </ul>
      </div>
      <div> 
      <p className='font-bold text-slate-700 text-2xl' > Contact</p> 
      <ul className='mt-6'>
        <li>Whatapp</li>
        <li>Suport 24th</li>
      </ul>
      </div>
     
    </div>
  )
}
