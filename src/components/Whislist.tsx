"use client";

import { ProductType, StateProps } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { IoIosRemoveCircle } from "react-icons/io";
import { addToCart, deleteFavorite, resetFavorite } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Whishlist = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReset = () => {
    const confirmReset = window.confirm("Are you sure you want to reset your wishlist?");
    if (confirmReset) {
      dispatch(resetFavorite()); 
      toast.success("Wishlist Reset Successfully");
      router.push("/");
    }
  };

  return (
    <>
      {favoriteData.length > 0 ? (
        <div className="mt-5 flex flex-col lg:px-28">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left hidden sm:table">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-6 py-3">Product Information</th>
                  <th scope="col" className="px-6 py-3">Unit Price</th>
                  <th scope="col" className="px-6 py-3">Product Info</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {favoriteData.map((item: ProductType) => (
                  <tr key={item?._id} className="bg-[#fff] border-b-[1px] border-b-zinc-300">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <IoIosRemoveCircle
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                        onClick={() => {
                          dispatch(deleteFavorite(item?._id));
                          toast.success(`${item.title} is removed from Wishlist!`);
                        }}
                      />
                      <Image
                        src={item?.image}
                        alt="product image"
                        width={500}
                        height={500}
                        className="w-24 object-contain"
                      />
                      <p className="text-base font-medium text-black">{item?.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <FormattedPrice amount={item?.price} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap overflow-hidden w-20">
                      {item?.description?.length > 50
                        ? `${item?.description.slice(0, 50)}...`
                        : item?.description}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          dispatch(addToCart(item));
                          toast.success(`${item?.title} is added to Cart!`);
                        }}
                        className="hover:text-yellow-500 duration-200 cursor-pointer bg-zinc-900 w-20 text-sm font-semibold text-center text-white py-2 rounded-md"
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile View */}
            <div className="sm:hidden">
              {favoriteData.map((item: ProductType) => (
                <div key={item?._id} className="flex flex-col bg-[#fff] border-b-[1px] border-b-zinc-300 p-4">
                  <div className="flex items-center gap-3">
                    <IoIosRemoveCircle
                      className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      onClick={() => {
                        dispatch(deleteFavorite(item?._id));
                        toast.success(`${item.title} is removed from Wishlist!`);
                      }}
                    />
                    <Image
                      src={item?.image}
                      alt="product image"
                      width={500}
                      height={500}
                      className="w-24 object-contain"
                    />
                    <p className="text-base font-medium text-black">{item?.title}</p>
                  </div>

                  <div className="flex justify-between mt-3">
                    <span className="font-semibold">Unit Price:</span>
                    <FormattedPrice amount={item?.price} />
                  </div>

                  <div className="flex justify-between mt-2">
                    <span className="font-semibold">Product Info:</span>
                    <p className="text-sm text-gray-600 overflow-hidden w-20">
                      {item?.description?.length > 50
                        ? `${item?.description.slice(0, 50)}...`
                        : item?.description}
                    </p>
                  </div>

                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => {
                        dispatch(addToCart(item));
                        toast.success(`${item?.title} is added to Cart!`);
                      }}
                      className="hover:text-yellow-500 duration-200 cursor-pointer bg-zinc-900 w-full text-sm font-semibold text-center text-white py-2 rounded-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleReset} className="bg-zinc-950 text-white w-36 py-3 mt-5 rounded-md uppercase text-xs font-semibold hover:border-r-red-700 hover:bg-red-700 hover:text-white duration-200">Reset Wishlist</button>
        </div>
      ) : (
        <div className="py-10 flex flex-col items-center justify-center">
          <p className="text-lg font-bold">Your Wishlist is Empty</p>
          <Link href="/" className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-yellow-500 duration-200 cursor-pointer">Go back to Shopping</Link>
        </div>
      )}

      <Toaster position="bottom-right" toastOptions={{ style: { background: "#000", color: "#fff" } }} />
    </>
  );
};

export default Whishlist;
