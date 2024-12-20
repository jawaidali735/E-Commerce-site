"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-400 duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-yellow-400 duration-300">Careers</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-yellow-400 duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-yellow-400 duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-yellow-400 duration-300">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-400 duration-300">FAQ</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-yellow-400 duration-300">Returns</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-yellow-400 duration-300">Shipping Information</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/phones" className="hover:text-yellow-400 duration-300">Phones</Link>
              </li>
              <li>
                <Link href="/phonecases" className="hover:text-yellow-400 duration-300">Phone Cases</Link>
              </li>
              <li>
                <Link href="/watches" className="hover:text-yellow-400 duration-300">Watches</Link>
              </li>
              <li>
                <Link href="/accessories" className="hover:text-yellow-400 duration-300">Accessories</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6 justify-start sm:justify-center lg:justify-start">
              <Link href="https://www.instagram.com" target="_blank" className="hover:text-yellow-400">
                <FaInstagram className="h-7 w-7" />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" className="hover:text-yellow-400">
                <FaFacebookF className="h-7 w-7" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" className="hover:text-yellow-400">
                <FaTwitter className="h-7 w-7" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" className="hover:text-yellow-400">
                <FaLinkedinIn className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-sm font-medium">
          <p>© 2024 ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
