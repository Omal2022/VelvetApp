"use client"

import React from 'react'
import Image from 'next/image'

const ProductCard = ({ title, description, image }) => {
    return (
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[45vw] min-h-[220px] max-h-[400px] sm:h-[40vw] md:h-[32vw] lg:h-[24vw] xl:h-[300px] bg-[#F3F3F3] p-5 sm:p-7 overflow-hidden rounded-[20px] shadow-md flex flex-col">
            {/* Card Content */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004953] mb-2 sm:mb-3">
                {title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#8C8C8C] mb-2 flex-1">
                {description}
            </p>

            {/* Bottom-right ellipse */}
            <div className="absolute bottom-0 right-0 w-1/2 max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                <Image
                    src={image}
                    alt="Ellipse Icon"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                />
            </div>
        </div>
    )
}

export default ProductCard
