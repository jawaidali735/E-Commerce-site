import { CiSearch } from "react-icons/ci";
import React from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/Components/ui/sheet"; 

const Navbar2 = () => {
  return (
    <div className="max-w-[1177px] px-6 sm:px-16 mx-auto mt-none overflow-hidden">
      <div className="flex justify-between items-center pt-6">
        <div className="flex items-center gap-4 pl-4 sm:pl-20">
          <div className="pr-8 text-[30px] sm:text-[34px] font-semibold font-josefin">Hekto</div>
          
          <Link href="/" className="text-[#FB2E86] font-[14px] hidden sm:inline-block sm:font-[16px] hover:underline underline-offset-4 ">
            Home
          </Link>
          <Link href="/" className="text-[14px] sm:text-[16px] hidden sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4">Pages</Link>
          
          <Link href="/" className="text-[14px] sm:text-[16px] hidden sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4">Products</Link>
          <Link href="/" className="text-[14px] sm:text-[16px] hidden sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4">Blog</Link>
         
          <Link href="/" className="text-[14px] sm:text-[16px] hidden sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4">Shop</Link>
          <Link href="/" className="text-[14px] sm:text-[16px] hidden sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4">Contact</Link>
        </div>

        <div className="relative hidden sm:block lg:ml-40">
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-300 mr-3 p-[2px] text-[14px] sm:text-[16px]"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl bg-[#FB2E86] w-[40px] sm:w-[51px] font-semibold h-8 p-1" />
        </div>

        <Sheet>
          <SheetTrigger>
            <IoMenu className="text-[#FB2E86] text-xl sm:hidden" />
          </SheetTrigger>
          <SheetContent className="sm:hidden w-[70vw] max-w-[300px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Choose your desired page
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-4">
              <Link href="/" className="text-[16px]">Home</Link>
              <Link href="/" className="text-[16px]">Pages</Link>
              <Link href="/" className="text-[16px]">Products</Link>
              <Link href="/" className="text-[16px]">Blog</Link>
              <Link href="/" className="text-[16px]">Shop</Link>
              <Link href="/" className="text-[16px]">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar2;
