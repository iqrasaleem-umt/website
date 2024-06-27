import photo1 from "/public/photo1.webp"
import photo3 from "/public/photo3.webp"
import photo4 from "/public/photo4.webp"
import Image from "next/image"

function Photosection() {
  return (
    <div className="flex justify-evenly">
      <div>
    <div className="bg-neutral-300 max-w-xl flex mt-4 sm:flex-col lg:flex-row"> 
           
   <span className="px-6"><h1 className="font-bold text-4xl">GET <br /> UP  <br />TO <br /> 60% <br /></h1>
 <p className="text-lg">For the  <br />summer  <br />season</p></span>
 <Image  src={photo1} alt="photo"/> </div>
     
        <div className="bg-black max-w-xl   "> 
        <div className="mx-8 mt-4 py-4">
        <h1 className="text-white text-bold text-4xl mt-4 px-2">GET 30% Off</h1>
            <p className="text-white mt-4 px-12 ">USE PROMO CODE</p>
            
           <button className="text-white px-12 py-2  bg-stone-700 border-stone-800 border-2 rounded-lg font-bold ">DINEWEEKENDSALE</button>
           </div>
           </div>
           
        </div>
        <div className="bg-orange-100 max-w-xs mt-4"> 
          <p className="font-bold">Flex Sweatshirt</p>
          <div className="font-bold">$100.00 
            <span className="font-bold">$75.00</span>
          </div>
           <Image src={photo3} alt="photo"/> 
           </div>
           <div className="bg-neutral-300 max-w-xs mt-4"> 
            <p className="font-bold">Flex Push Button Bombe</p>
            <div className="font-bold ">  $100.00

              <span className="font-bold mx-2">$190.00</span>
              <Image src={photo4} alt="photo"/>  
            </div>
           </div>
    </div>
  )
}

export default Photosection