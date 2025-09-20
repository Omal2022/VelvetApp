"use client";

import React from "react";
import Link from "next/link";

const Navigation = () => {
    const links = [
        { href: "/", label: "HOME" },
        { href: "#about", label: "ABOUT" },
        { href: "#what-we-offer", label: "WHAT WE OFFER" },
        { href: "#supplyPage", label: "SUPPLIABLE ITEMS" },
        { href: "#contact", label: "CONTACT US" },
    ];

    return (
        <nav className="w-full">
            <ul className="flex flex-nowrap justify-center gap-6 sm:gap-10 md:gap-20 py-4 md:py-5 text-[#ffffff] text-lg sm:text-xl md:text-2xl font-medium">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="relative transition-colors text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#004953] hover:to-[#00a3b9] hover:bg-clip-text"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
