
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  price: number;
  image: StaticImageData;
  id: number;
}

export default function ProductCard({ title, price, image, id }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} >
      <div className='mt-28 p-4 border rounded-lg'>
        <div className='relative w-60 h-60'>
          <Image 
            src={image} 
            alt='photo'
            layout='fill' // Ensures the image fills the container
            objectFit='cover' // Ensures the image covers the container without distortion
            className='rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
        </div>
        <p className='font-bold text-xl mt-2'>{title}</p>
        <p className='font-bold text-xl'>${price}</p>
      </div>
    </Link>
  );
}
