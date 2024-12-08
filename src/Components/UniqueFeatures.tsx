import Image from "next/image";

export default function UniqueFeatures() {
  return (
    <div className="bg-[#F1F0FF] flex justify-center items-center px-4 py-8">
   
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
      
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/bluesofa.png" 
            alt="Italian Sofa"
            height={550}
            width={558}
            className=""
          />
        </div>

       
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl text-[#151875] font-bold mb-4">
            Unique Features Of Latest & <br /> Trending Products
          </h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#ACABC3] text-sm md:text-[16px]">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center text-[#ACABC3] text-sm md:text-[16px]">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Reinforced with double wood dowels, glue, and screw-nails
            </li>
            <li className="flex items-center text-[#ACABC3] text-sm md:text-[16px]">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-3 items-start">
            <button className="bg-[#FB2E86] text-white text-sm md:text-[17px] px-6 py-2 rounded-md hover:bg-pink-700 w-full md:w-[157px] h-[45px]">
              Add To Cart
            </button>
            <div className="text-sm md:text-[14px] text-[#151875]">
              <span className="font-bold">658 Italian Sofa</span>
              <p className="font-normal">- $32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
