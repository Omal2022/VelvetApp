"use client";

import Image from "next/image";
import Navigation from "./navigation";

const Header = () => {
    return (
        <section className="w-full bg-[#f0f0f0] h-[940px] p-0 m-0">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex flex-col items-center justify-center w-full p-0 m-0">

                {/* Navigation fixed on top */}
                <div className="absolute top-0 left-0 w-full z-50">
                    <Navigation />
                </div>

                {/* Background Image */}
                <Image
                    src="/landingImg.jpg"
                    alt="Landing page image"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />

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
                <div className="absolute top-115 left-0 w-full flex items-center z-10">
                    {/* Left Gradient */}
                    <div className="flex-1 h-[60px] bg-gradient-to-r from-[#C8B762] to-transparent"></div>

                    {/* Text */}
                    <Image
                        src="/Landing_text.svg"
                        alt="About Us"
                        width={440}
                        height={440}
                        className="sm:w-[500px] md:w-[600px] lg:w-[600px] h-auto"
                    />

                    {/* Right Gradient */}
                    <div className="flex-1 h-[60px] bg-gradient-to-l from-[#C8B762] to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Header;
