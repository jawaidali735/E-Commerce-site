import Image from "next/image";

const products = [
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair1.png" },
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair2.png" },
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair3.png" },
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair4.png" },
  ];
  
  const TrendingProducts = () => {
    return (
      <div className="mx-auto bg-white max-w-[1177px] px-4 pb-6 overflow-hidden">
        <h2 className="text-[42px] font-semibold text-[#151875] font-josefin text-center mt-20 mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="text-center shadow hover:shadow-lg transition p-4 bg-[#FFFFFF]"
            >
              <div className="flex items-center justify-center w-full h-[200px] bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="max-h-full max-w-full"
                />
              </div>
              <h3 className="text-lg text-[16px] mt-4 font-semibold text-[#151875]">{product.name}</h3>
              <div className="flex justify-center items-center mt-2 space-x-2">
                <p className="text-[14px] font-bold text-[#151875]">{product.price}</p>
                <p className="text-sm text-[12px] text-gray-500 line-through">{product.originalPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TrendingProducts;
  