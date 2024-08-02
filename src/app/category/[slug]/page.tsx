import { Products } from '@/utils/mock';
import Productcard from '@/component/productcard';
import { StaticImageData } from 'next/image';

const getproductsBycategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getproductsBycategory(params.slug);
  return (
    <div className="w-full flex flex-wrap justify-center lg:justify-start gap-4 p-4 px-28">
      {result.length > 0 ? (
        result.map((product) => (
          <Productcard
            key={product.id}
            title={product.name}
            price={product.price}
            image={product.image as StaticImageData}
            id={product.id}
          />
        ))
      ) : (
        <p className="text-center text-lg font-semibold">Products not found</p>
      )}
    </div>
  );
}
