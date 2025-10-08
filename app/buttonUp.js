"use client";

import React from 'react'
import Link from "next/link";

const ButtonUp = () => {
    const links = { href: "/", label: "HOME" };

    return (
        <>
            <Link
                href={links.href}
                aria-label="Go to top"
                className="fixed bottom-4 right-4 z-50 bg-[#c5b358] text-white rounded-full shadow-lg cursor-pointer hover:bg-[#7c690a] transition w-[50px] h-[50px] flex items-center justify-center"
            >
                <i className="fa-solid fa-arrow-up fa-beat fa-sm"></i>
            </Link>
        </>
    )
}

export default ButtonUp