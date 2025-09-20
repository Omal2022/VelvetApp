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
        <nav className="w-full overflow-x-auto">
            <ul className="flex flex-wrap sm:flex-nowrap justify-center gap-3 xs:gap-5 sm:gap-8 md:gap-14 lg:gap-20 py-3 sm:py-4 md:py-5 text-[#ffffff] text-base xs:text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap">
                {links.map((link, index) => (
                    <li key={index} className="px-1">
                        <Link
                            href={link.href}
                            className="relative transition-colors text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#004953] hover:to-[#00a3b9] hover:bg-clip-text px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#00a3b9]"
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
