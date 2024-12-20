"use client";
import { useEffect, useState } from "react"
import Container from "./Container"
import { FiSmartphone } from "react-icons/fi"
import { LuPcCase } from "react-icons/lu"
import { IoWatch } from "react-icons/io5"
import { MdCable } from "react-icons/md"
import Product from "./Product"
import { getProducts } from "../helper"
import Link from "next/link"

const Products = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="mt-10 mb-60 ">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">
            Explore dozens of customized layouts made by our brilliant designers.
          </p>

          <div className="text-zinc-500 flex items-center gap-2 md:gap-6 mt-5">
            <Link href="/phones" className="flex gap-2 items-center hover:text-black cursor-pointer duration-200">
              <FiSmartphone />
              <p>Phones</p>
            </Link>
            <div className="h-7 w-[1px] bg-yellow-500 inline-flex" />
            <Link href="/phonecase" className="flex gap-2 items-center hover:text-black cursor-pointer duration-200">
              <LuPcCase />
              <p>Phone Case</p>
            </Link>
            <div className="h-7 w-[1px] bg-yellow-500 inline-flex" />
            <Link href="/watches" className="flex gap-2 items-center hover:text-black cursor-pointer duration-200">
              <IoWatch />
              <p>Watches</p>
            </Link>
            <div className="h-7 w-[1px] bg-yellow-500 inline-flex" />
            <Link href="/accessories" className="flex gap-2 items-center hover:text-black cursor-pointer duration-200">
              <MdCable />
              <p>Accessories</p>
            </Link>
          </div>
        </div>
        <Product products={products} />
      </Container>
    </div>
  )
}

export default Products;
