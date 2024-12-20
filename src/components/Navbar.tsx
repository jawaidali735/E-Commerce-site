"use client";

import Link from "next/link";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StateProps } from "@/app/types";

export default function Navbar() {
    const { data: session } = useSession();
    const { productData, favoriteData } = useSelector((state: StateProps) => state.pro);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg md:shadow-none">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
                    <Link href="/" className="hover:opacity-90">
                        ShopEase
                    </Link>
                </div>

                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <Link href="/" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Home
                    </Link>
                    <Link href="/phones" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Phones
                    </Link>
                    <Link href="/phonecase" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        PhoneCase
                    </Link>
                    <Link href="/watches" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Watches
                    </Link>
                    <Link href="/accessories" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Accessories
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/wishlist" className="relative group">
                        <MdFavoriteBorder className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {favoriteData ? favoriteData.length : 0}
                        </span>
                    </Link>

                    <Link href="/cart" className="relative group">
                        <FaShoppingCart className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {productData ? productData.length : 0}
                        </span>
                    </Link>

                    {session ? (
                        <Link href="/profile" className="flex items-center space-x-2 group">
                            <FaUserCircle className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                            <span className="font-medium group-hover:text-yellow-400 duration-300">Profile</span>
                        </Link>
                    ) : (
                        <button onClick={() => signIn()} className="flex items-center space-x-2 group">
                            <FaUserCircle className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                            <span className="font-medium group-hover:text-yellow-400 duration-300">Login</span>
                        </button>
                    )}
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-yellow-400 focus:outline-none shadow-lg hover:shadow-xl transform transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden sticky top-0 bg-gray-700 text-white shadow-xl rounded-lg p-4 flex flex-col space-y-4">
                    <Link href="/" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Home
                    </Link>
                    <Link href="/phones" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Phones
                    </Link>
                    <Link href="/phonecase" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        PhoneCase
                    </Link>
                    <Link href="/watches" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Watches
                    </Link>
                    <Link href="/accessories" onClick={handleLinkClick} className="hover:text-yellow-400 duration-300">
                        Accessories
                    </Link>

                    <Link href="/wishlist" onClick={handleLinkClick} className="relative group">
                        <MdFavoriteBorder className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {favoriteData ? favoriteData.length : 0}
                        </span>
                    </Link>

                    <Link href="/cart" onClick={handleLinkClick} className="relative group">
                        <FaShoppingCart className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {productData ? productData.length : 0}
                        </span>
                    </Link>

                    {session ? (
                        <Link href="/profile" onClick={handleLinkClick} className="flex items-center space-x-2 group">
                            <FaUserCircle className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                            <span className="font-medium group-hover:text-yellow-400 duration-300">Profile</span>
                        </Link>
                    ) : (
                        <button onClick={() => signIn()} className="flex items-center space-x-2 group">
                            <FaUserCircle className="h-7 w-7 group-hover:text-yellow-400 duration-300" />
                            <span className="font-medium group-hover:text-yellow-400 duration-300">Login</span>
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
}
