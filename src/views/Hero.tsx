
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroimage from "/public/heroimage.webp";
import pic1 from "/public/image1.webp";
import pic2 from "/public/image2.webp";
import pic3 from "/public/image3.webp";
import pic4 from "/public/image4.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col-reverse lg:flex-row gap-y-10 mt-16 items-center">
        <div className="flex-1 text-center lg:text-left">
          <Badge className="px-6 py-3 rounded-lg bg-blue-200 text-blue-700 inline-block mb-4 lg:mb-0">
            Sale 70%
          </Badge>
          <h1 className="text-3xl lg:text-6xl font-extrabold tracking-tight mt-4 lg:mt-8">
            An Industrial <br className="hidden lg:inline" />
            Take on <br className="hidden lg:inline" /> Streetwear
          </h1>
          <p className="leading-7 mt-4 lg:mt-8 text-gray-700">
            Anyone can beat you but no one can <br className="hidden lg:inline" />
            beat your outfit as long as you wear <br className="hidden lg:inline" />
            Dine outfits.
          </p>
          <Button className="px-6 py-3 rounded-none mt-8">
            Start Shopping
          </Button>
          <div className="flex justify-center lg:justify-start gap-x-4 mt-6">
            <Image src={pic1} alt="image" width={50} height={50} />
            <Image src={pic2} alt="image" width={50} height={50} />
            <Image src={pic3} alt="image" width={50} height={50} />
            <Image src={pic4} alt="image" width={50} height={50} />
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            className="bg-orange-100 rounded-full w-3/4 lg:w-full"
            src={heroimage}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
