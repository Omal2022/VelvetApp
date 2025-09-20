"use client"

import React from 'react'
import Image from 'next/image'

const ProductCard = ({ title, description, image }) => {
    return (
        <div className="relative w-[339px] h-[43vh] bg-[#F3F3F3] p-7 overflow-hidden rounded-[20px] shadow-md ">
            {/* Card Content */}
            <h3 className="text-[30px] font-bold text-[#004953] mb-3">
                {title}
            </h3>

            <p className="text-[15px] font-semibold text-[#8C8C8C] ">
                {description}
            </p>

            {/* Bottom-right ellipse */}
            <div className="absolute bottom-0 right-0 mt-10">
                <Image
                    src={image}
                    alt="Ellipse Icon"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}

export default ProductCard
