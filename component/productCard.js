"use client"

import React from 'react'
import Image from 'next/image'

const ProductCard = ({ title, description, image }) => {
    return (
        <div className="group relative w-[310px] md:max-w-md  sm:max-w-xs xl:max-w-lg  min-h-[330px] h-[60vw] sm:h-[400px] md:h-[400px] xl:h-[410px] bg-[#F3F3F3] p-4 sm:p-6 md:p-7 overflow-hidden rounded-[20px] shadow-md flex flex-col ">
            {/* hover gradient layer (appears under the bottom-right image) */}
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 bg-gradient-to-b from-[#F3F3F3] from-40%  to-[#C5B358] to-90%"></div>

            {/* card content (above gradient) */}
            <div className="relative z-10">
                {/* Card Content */}
                <h3 className="text-[30px] font-bold mb-3 bg-gradient-to-r from-[#00A3B9] to-[#004953] bg-clip-text text-transparent">
                    {title}
                </h3>

                <p className="text-[15px] font-medium text-[#8C8C8C] " style={{ fontWeight: 400 }}>
                    {description}
                </p>
            </div>

            {/* Bottom-right ellipse (above gradient) */}
            <div className="absolute bottom-0 right-0 w-1/2 max-w-[130px] min-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] z-20">
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
