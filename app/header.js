"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "./navigation";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-full bg-[#f0f0f0] lg:h-[940px] h-100 p-0 m-0">
            <div
                className="relative h-[400px] sm:h-[500px] md:h-[600px] flex flex-col items-center justify-center w-full p-0 m-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Navigation fixed on top */}
                <div className="absolute top-0 left-0 w-full z-50">
                    <Navigation />
                </div>

                {/* ✅ Background Image that changes on hover */}
                <div
                    className="absolute inset-0 z-0 overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Background Image with hover transition */}
                    <Image
                        src={isHovered ? "/LandingRectangle18.png" : "/landingImg.jpg"}
                        alt="Landing page image"
                        fill
                        className={`object-cover w-full h-full transition-all duration-700 ease-in-out transform 
      ${isHovered ? "scale-105 brightness-110 opacity-90" : "scale-100 brightness-100 opacity-100"}`}
                        priority
                    />

                    {/* Overlay gradient for depth & elegance */}
                    <div
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none 
      ${isHovered ? "opacity-30 bg-black" : "opacity-10 bg-black"}`}
                    />
                </div>


                {/* 👉 Center Logo stays in the middle */}
                <div className="z-10">
                    <Image
                        src="/velvetlogo.svg"
                        alt="Velvet Logo"
                        width={180}
                        height={180}
                        className="sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
                    />
                </div>

                {/* 👉 Gradient Line with About Us text fixed at bottom */}
                <div className="hidden md:flex absolute top-115 left-0 w-full items-center z-10">
                    <div className="w-[800px]  h-[60px] bg-gradient-to-r from-[#C8B762] to-transparent"></div>

                    <Image
                        src="/Landing_text.svg"
                        alt="About Us"
                        width={440}
                        height={440}
                        className="sm:w-[500px] md:w-[600px] lg:w-[600px] h-auto mr-[300px]"
                    />
                    ``
                    <div className="w-full h-[60px] bg-gradient-to-l from-[#C8B762] to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Header;
