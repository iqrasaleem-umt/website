import React from 'react';
import Image from 'next/image';
import logo from '/public/Logo.webp';
import { Facebook, Linkedin, Github } from 'lucide-react';

export default function Detailpage() {
  return (
    <div className="flex flex-col lg:flex-row mt-24 justify-between px-4 sm:px-8 md:px-16 lg:px-32 space-y-8 lg:space-y-0">
      <div className="flex flex-col items-center lg:items-start">
        <Image src={logo} alt="Company Logo" width={150} height={150} />
        <p className="mt-8 text-center lg:text-left">
          Small, artisan label that offers a <br /> thoughtfully curated collection of high <br />
          quality everyday essentials made.
        </p>
        <div className="flex mt-6 gap-x-4 text-black">
          <Facebook className="bg-slate-200 rounded-lg h-8 w-8 p-1" />
          <Linkedin className="bg-slate-200 rounded-lg h-8 w-8 p-1" />
          <Github className="bg-slate-200 rounded-lg h-8 w-8 p-1" />
        </div>
      </div>
      <div className="text-center lg:text-left">
        <p className="font-bold text-slate-700 text-xl lg:text-2xl">Company</p>
        <ul className="mt-4 space-y-2">
          <li>About</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="text-center lg:text-left">
        <p className="font-bold text-slate-700 text-xl lg:text-2xl">Support</p>
        <ul className="mt-4 space-y-2">
          <li>Support Career</li>
          <li>24th Service</li>
          <li>Quick Chat</li>
        </ul>
      </div>
      <div className="text-center lg:text-left">
        <p className="font-bold text-slate-700 text-xl lg:text-2xl">Contact</p>
        <ul className="mt-4 space-y-2">
          <li>WhatsApp</li>
          <li>Support 24th</li>
        </ul>
      </div>
    </div>
  );
}
