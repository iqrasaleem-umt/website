
import { Products } from "@/utils/mock";
import Productcard from "@/component/productcard";
import { StaticImageData } from "next/image";

export default function AllProducts() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 p-4">
      {Products.map((product) => (
        <Productcard
          key={product.id}
          title={product.name}
          price={product.price}
          image={product.image as StaticImageData}
          id={product.id}
        />
      ))}
    </div>
  );
}

