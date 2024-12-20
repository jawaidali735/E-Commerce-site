"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductType, StateProps } from "@/app/types";
import { MdFavoriteBorder } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";

interface item {
  products: ProductType[];
}

const Product = ({ products }: item) => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);

  const isFavorite = (productId: number) => {
    return favoriteData.some((favoriteItem) => favoriteItem._id === productId);
  };

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 lg:px-28 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {products.map((item) => (
        <div
          key={item._id}
          className="relative z-0 bg-white rounded-xl shadow-lg group border border-zinc-200 hover:shadow-2xl duration-300 overflow-hidden"
        >
          <Link href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}>
            <Image
              src={item.image}
              alt="Product image"
              width={500}
              height={500}
              className="w-full h-72 object-cover group-hover:scale-110 duration-500"
            />
          </Link>
          <MdFavoriteBorder
            fill={isFavorite(item._id) ? "red" : "black"}
            onClick={() => {
              dispatch(addToFavorite(item));
              if (isFavorite(item?._id)) {
                toast.error(`${item.title} is already in favorites`); // Fixed error
              } else {
                toast.success(`${item.title} added to favorites`);
              }
            }}
            className="absolute top-4 right-4 text-red-400 w-6 h-6 hover:text-red-500 cursor-pointer duration-200"
          />
          <div className="p-6 bg-gray-100 group-hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 duration-300 truncate">
              {item?.title}
            </h3>
            <p className="text-gray-600 mt-2">
              <FormattedPrice amount={item?.price} />
            </p>
            <div className="flex justify-between items-center text-sm mt-4">
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  toast.success(`${item?.title} is added to Cart!`);
                }}
                className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 duration-300"
              >
                Add to cart
              </button>
              <Link
                href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}
                className="text-yellow-500 font-semibold hover:text-yellow-600 duration-300"
              >
                More info
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Product;
