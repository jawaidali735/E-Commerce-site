import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="overflow-hidden  w-full h-[53px] bg-[#E7E4F8] flex items-center justify-between px-6 py-4 sm:px-12 md:px-24 lg:px-52">
      <div className="text-sm text-[#9DA0AE] text-[14px] sm:text-[16px]">
        <p>©Jawaid Ali - All Rights Reserved</p>
      </div>

      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-[#151875] text-white flex items-center justify-center rounded-full w-5 h-5 hover:bg-[#0f1368]"
        >
          <FaFacebookF size={10} />
        </a>
        <a
          href="#"
          className="bg-[#151875] text-white flex items-center justify-center rounded-full w-5 h-5 hover:bg-[#0f1368]"
        >
          <FaInstagram size={10} />
        </a>
        <a
          href="#"
          className="bg-[#151875] text-white flex items-center justify-center rounded-full w-5 h-5 hover:bg-[#0f1368]"
        >
          <FaTwitter size={10} />
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
