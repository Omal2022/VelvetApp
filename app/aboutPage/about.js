"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/component/button";
import SearchBar from "@/component/searchBar";
import "../globals.css";

const About = ({ id = 1 }) => {
    // Animation Variants
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="about"
            className="
                relative flex flex-col items-center gap-10 sm:gap-10 sm:mt-[60px]
                md:flex-col lg:flex-row lg:items-center xl:items-start 
                overflow-visible 
                bg-none lg:bg-[url('/bkg.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat 
            "
        >
            <div
                className="
                    relative w-full flex flex-col lg:flex-row items-center lg:items-start 
                    justify-center lg:justify-between gap-16 md:gap-24 md:mt-10 lg:mt-10
                "
            >
                {/* Left content */}
                <motion.div
                    className="about-text-wrapper relative text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center xl:items-start p-10 gap-6 bg-[#f0f0f0] lg:ml-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={container}
                >
                    {/* SearchBar */}
                    <motion.div
                        className="mb-4 mt-14"
                        variants={fadeInUp}
                    >
                        <SearchBar />
                    </motion.div>

                    <motion.h1
                        className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="lg:text-[100px] xl:text-[130px]">A</span>
                        <span className="span-text !text-[#004953]">bout us</span>
                    </motion.h1>

                    <motion.p
                        className="custom-text max-w-full xl:max-w-[650px] md:max-w-[600px] lg:text-left md:text-center px-2 sm:px-4 mb-4"
                        variants={fadeInUp}
                        transition={{ duration: 0.7 }}
                    >
                        VelvetCore is a luxury event supply and planning company dedicated to
                        transforming ordinary spaces into breathtaking experiences.
                        Specializing in high-end weddings, corporate functions, social
                        gatherings, exhibitions, and galas, we approach every event as a
                        work of art—elegant, timeless, and unforgettable.
                    </motion.p>

                    <motion.p
                        className="custom-text max-w-full xl:max-w-[650px] md:max-w-[600px] lg:text-left md:text-center px-2 sm:px-4 mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Our strength lies in the fusion of creativity and precision. Every
                        fabric, every flower, every lighting choice is intentional. We go
                        beyond aesthetics to craft emotional atmospheres that linger long
                        after the event ends.
                    </motion.p>

                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
                        <Link href={`/aboutPage/${id}`}>
                            <Button className="mt-6 mb-16 bg-[#c5b358] text-white hover:bg-[#bfa23a]">
                                Read More...
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
