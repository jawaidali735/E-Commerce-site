
import React from 'react'

const TopHeader = () => {
  return (
    <div className="bg-black text-white py-2">
    <div className="container mx-auto flex justify-between items-center px-6 text-sm">
        <div className="flex space-x-4">
            <span>📞 +92 300 1234567</span>
            <span>📧 support@shopease.com</span>
        </div>
        <div className="hidden md:block">Fast & Secure Delivery Worldwide</div>
    </div>
</div>
  )
}

export default TopHeader