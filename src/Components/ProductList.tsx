import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image";
const products = [
  { id: 1, name: "Comfort Handy Craft", price: "$49.00", oldPrice: "$65.00", image: "/imageA.png" },
  { id: 2, name: "Comfort Handy Craft", price: "$49.00", oldPrice: "$65.00", image: "/imageB.png" },
  { id: 3, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "/imageC.png" },
  { id: 4, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "/imageD.png" },
  { id: 5, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "/imageE.png" },
  { id: 6, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "/imageF.png" },
];

const ProductList = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 max-w-[1177px] mx-auto">
      <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-josefin font-semibold text-center mb-4 mt-20 text-[#151875]">
        Latest Products
      </h2>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-12 mb-8 text-[14px] sm:text-[16px] md:text-[18px] text-[#151875]">
        <span className="cursor-pointer text-[#FB2E86] underline underline-offset-4">New Arrival</span>
        <span>Best Seller</span>
        <span>Featured</span>
        <span>Special Offer</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 gap-y-8 md:gap-y-[110px]">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center group">
            <div className="w-full max-w-[360px] h-auto bg-white pb-2 relative ">
       
              <div className="w-full h-[250px] sm:h-[280px]  bg-[#F7F7F7] hover:bg-white relative overflow-hidden flex items-center justify-center">
                <div className="w-[178px] h-[178px] flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
               
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                  
                  <div className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center">
                    <PiShoppingCartSimple size={19} className="text-[#2F1AC4]" />
                  </div>

                  
                  <div className="h-[30px] w-[30px] p-2 flex items-center justify-center">
                    <GoHeart size={17} className="text-[#2F1AC4]" />
                  </div>

                
                  <div className="h-[30px] w-[30px] p-2 flex items-center justify-center">
                    <FaSearchPlus size={15} className="text-[#2F1AC4]" />
                  </div>
                </div>
              </div>

              
              <div className="flex flex-col mt-2 px-4">
                <div className="flex justify-between items-center mt-1">
                  <h3 className="text-sm sm:text-base font-medium underline underline-offset-4 decoration-[#EEEEFB] decoration-2 text-[#151875]">
                    {product.name}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-[#151875] text-sm sm:text-base font-josefin">{product.price}</p>
                    <p className="line-through text-xs sm:text-sm text-[#FB2448] font-josefin">{product.oldPrice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
