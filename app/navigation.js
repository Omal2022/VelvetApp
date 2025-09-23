"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon";

const Navigation = () => {
    const links = [
        { href: "/", label: "HOME" },
        { href: "#about", label: "ABOUT" },
        { href: "#what-we-offer", label: "WHAT WE OFFER" },
        { href: "#supplyPage", label: "SUPPLIABLE ITEMS" },
        { href: "#contact", label: "CONTACT US" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    // Variants for the slide-in menu
    const menuVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
    };

    // Variants for the individual links
    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.3 },
        }),
    };

    return (
        <nav className="w-full relative">
            {/* Desktop Nav */}
            <ul className="hidden lg:flex justify-center gap-12 py-5 text-white text-xl font-medium">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="relative transition-colors hover:text-transparent hover:bg-gradient-to-r hover:from-[#004953] hover:to-[#00a3b9] hover:bg-clip-text px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#00a3b9]"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon (always visible, top-right) */}
            <div className="lg:hidden fixed top-4 right-6 z-50 bg-[#004953] rounded-full p-2 shadow-md">
                <HamburgerIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
            </div>

            {/* Mobile Slide-In Menu with Framer Motion */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="fixed top-0 right-0 w-3/4 max-w-xs bg-[#004953] z-40 h-[400px] rounded-b-lg shadow-lg py-6"
                    >
                        {/* Menu Links */}
                        <div className="flex flex-col items-center gap-6 mt-14">
                            {links.map((link, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-white text-lg font-semibold hover:text-transparent hover:bg-gradient-to-r hover:from-[#004953] hover:to-[#00a3b9] hover:bg-clip-text focus:outline-none focus:ring-2 focus:ring-[#00a3b9]"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
