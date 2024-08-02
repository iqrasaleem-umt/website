import React from 'react';

export default function Footer() {
  return (
    <div className="border-black border-t-2 mt-36 p-7 flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="text-lg">Copyright © 2024</p>
        <p>Dine Market</p>
      </div>
      <div className="text-lg text-center lg:text-left my-4 lg:my-0">
        <p>
          Design by. Weird <br />
          Design Studio
        </p>
      </div>
      <div className="text-lg text-center lg:text-left">
        <p>
          Code by <br className="lg:hidden" />
          <span className="font-semibold">iqrasaleem</span> <br />
          UMT batch52 on GitHub
        </p>
      </div>
    </div>
  );
}
