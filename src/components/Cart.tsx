"use client";

import { ProductType, StateProps } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { IoIosRemoveCircle } from "react-icons/io";
import { decreaseQuantity, deleteProduct, increaseQuantity, resetCart } from "@/redux/proSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { calculatePercentage } from "../helper";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const Cart = () => {
  const [TotalAmt, setTotalAmt] = useState(0);
  const [rowPrice, setRowPrice] = useState(0);

  const { productData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReset = () => {
    const confirmReset = window.confirm("Are you sure you want to reset your cart?");
    if (confirmReset) {
      dispatch(resetCart());
      toast.success("Cart Reset Successfully");
      router.push("/");
    }
  };

  useEffect(() => {
    let amt = 0;
    let rowAmt = 0;
    productData.map((item: ProductType) => {
      amt += item?.price * item?.quantity;
      return;
    });
    productData.map((item: ProductType) => {
      rowAmt += item?.previousePrice * item?.quantity;
    });

    setTotalAmt(amt);
    setRowPrice(rowAmt);
  }, [productData]);

  return (
    <>
      {productData.length > 0 ? (
        <div className="mt-5 flex flex-col lg:px-28">
          {/* Desktop View - Table Layout */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg hidden sm:block">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-6 py-3">Product Information</th>
                  <th scope="col" className="px-6 py-3">Unit Price</th>
                  <th scope="col" className="px-6 py-3">Quantity</th>
                  <th scope="col" className="px-6 py-3">SubTotal</th>
                  <th scope="col" className="px-6 py-3">Saving</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item: ProductType) => (
                  <tr key={item?._id} className="bg-[#fff] border-b-[1px] border-b-zinc-300">
                    <th
                      onClick={() => {
                        dispatch(deleteProduct(item?._id));
                        toast.success(`${item.title} is removed from Cart!`);
                      }}
                      scope="row"
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <IoIosRemoveCircle className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200" />
                      <Image src={item?.image} alt="product image" width={500} height={500} className="w-24 object-contain" />
                      <p className="text-base font-medium text-black">{item?.title}</p>
                    </th>
                    <td className="px-6 py-4"><FormattedPrice amount={item?.price} /></td>
                    <td className="px-6 py-4 flex items-center gap-4">
                      <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex">
                        <FaMinus
                          onClick={() =>
                            item?.quantity > 1
                              ? dispatch(decreaseQuantity(item)) && toast.success("Quantity decreased Successfully!")
                              : toast.error("Can't decrease below 1")
                          }
                          className="w-4 h-4"
                        />
                      </span>
                      <span>{item?.quantity}</span>
                      <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex">
                        <FaPlus
                          onClick={() => {
                            dispatch(increaseQuantity(item));
                            toast.success(`${item?.title}`);
                          }}
                          className="w-4 h-4"
                        />
                      </span>
                    </td>
                    <td className="px-6 py-4"><FormattedPrice amount={item?.price * item.quantity} /></td>
                    <td className="px-6 py-4">
                      <p className="bg-zinc-900 w-20 text-sm font-semibold text-center text-white py-1 rounded-md">
                        {calculatePercentage(item?.previousePrice, item?.price)}% save
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

       
          <div className="sm:hidden">
            {productData.map((item: ProductType) => (
              <div key={item?._id} className="flex flex-col bg-[#fff] border-b-[1px] border-b-zinc-300 p-4">
                <div className="flex items-center gap-3">
                  <IoIosRemoveCircle
                    className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                    onClick={() => {
                      dispatch(deleteProduct(item?._id));
                      toast.success(`${item.title} is removed from Cart!`);
                    }}
                  />
                  <Image src={item?.image} alt="product image" width={500} height={500} className="w-24 object-contain" />
                  <p className="text-base font-medium text-black">{item?.title}</p>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="font-semibold">Unit Price:</span>
                  <FormattedPrice amount={item?.price} />
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-semibold">Quantity:</span>
                  <div className="flex items-center gap-4">
                    <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex">
                      <FaMinus
                        onClick={() =>
                          item?.quantity > 1
                            ? dispatch(decreaseQuantity(item)) && toast.success("Quantity decreased Successfully!")
                            : toast.error("Can't decrease below 1")
                        }
                        className="w-4 h-4"
                      />
                    </span>
                    <span>{item?.quantity}</span>
                    <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex">
                      <FaPlus
                        onClick={() => {
                          dispatch(increaseQuantity(item));
                          toast.success(`${item?.title}`);
                        }}
                        className="w-4 h-4"
                      />
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-semibold">SubTotal:</span>
                  <FormattedPrice amount={item?.price * item?.quantity} />
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-semibold">Saving:</span>
                  <p className="text-sm text-gray-600">
                    {calculatePercentage(item?.previousePrice, item?.price)}% save
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={handleReset} className="bg-zinc-950 text-white w-36 py-3 mt-5 rounded-md uppercase text-xs font-semibold hover:border-r-red-700  hover:bg-red-700 hover:text-white duration-200">
            Reset Cart
          </button>

          <div className="mt-4 bg-white max-w-xl p-4 flex flex-col gap-1">
            <p className="border-b-[1px] border-b-yellow-500 py-1">Cart Summary</p>
            <p className="flex items-center justify-between">Total Items <span>{productData.length}</span></p>
            <p className="flex items-center justify-between">Price <span><FormattedPrice amount={rowPrice} /></span></p>
            <p className="flex items-center justify-between">Discount <span><FormattedPrice amount={rowPrice - TotalAmt} /></span></p>

            <p className="flex items-center justify-between">Total Price <span><FormattedPrice amount={TotalAmt} className="font-semibold text-lg" /></span></p>
            <button className="bg-zinc-800 text-zinc-200 my-2 py-2 uppercase text-center rounded-md hover:bg-black hover:text-white duration-200">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-2xl font-semibold text-zinc-700 py-10">No product found in the Cart!</div>
      )}
    </>
  );
};

export default Cart;
