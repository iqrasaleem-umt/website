
import Hero from "@/views/Hero";

import Photosection from "@/views/photosection";
import Midsection from "@/views/midsection";
import Promotion from "@/views/promotion"

import Productlist from "@/views/productlist";
import LabelProduct from "@/views/labelproduct";
import Subscribepart from "@/views/subscribepart";
import Detailpage from "@/views/detailpage";
export default function Home() {
  return (
   <div> 
  <Hero/>
  <Promotion/>
  <Photosection/>
  <Midsection/>
  <Productlist/>
  <LabelProduct/>
  <Subscribepart/>
 <Detailpage/> 

   </div>
  );
}
