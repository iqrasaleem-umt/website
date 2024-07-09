import { Product } from "./types";
import pic1 from "/public/productpic1.png"; 
import pic2 from "/public/productpic2.png"; 
import pic3 from "/public/productpic3.png"; 
import pic4 from "/public/productpic4.png"; 
import pic5 from "/public/productpic5.png"; 
import pic6 from "/public/productpic6.png"; 
import pic7 from "/public/productpic7.webp"; 
import pic8 from "/public/productpic8.png"; 
import pic9 from "/public/productpic9.png"; 

export const Products: Product[] = [ 
    { 
        id: 1,
        name: "Brushed Reglan Shirt",
        category: "female",
        price: 205,
        image: pic1,
    }, 
    { 
        id: 2,
        name: "Cameryn Sash  Dress",
        category: "female",
        price: 280,
        image: pic2,
    }, 
    { 
        id: 3,
        name: "Seamless Sweat Shirt",
        category: "female",
        price: 205,
        image: pic3,
    }, 
    { 
        id: 4,
        name: "Flex Sweat Shirt",
        category: "female",
        price: 205,
        image: pic4,
    }, 
    { 
        id: 5,
        name: "Pink Fleece pants",
        category: "female",
        price: 205,
        image: pic5,
    }, 
    { 
        id: 6,
        name: "Lite Sweatpant",
        category: "female",
        price: 205,
        image: pic6,
    }, 
    { 
        id: 7,
        name: "Imperial Alpaca Hoodie",
        category: "kids",
        price: 205,
        image: pic7,
    }, 
    { 
        id: 8,
        name: "Flex Push Button Bomber",
        category: "male",
        price: 205,
        image: pic8,
    }, 
    { 
        id: 9,
        name: "Reglan Sweat Shirt",
        category: "male",
        price: 205,
        image: pic9,
    }
];