"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/component/button";
import SearchBar from "@/component/searchBar";

const About = ({ id = 1 }) => {
    return (
        <div className="relative flex flex-col md:flex-row w-full items-center justify-between gap-10 pl-5 md:pl-12 lg:pl-20 bg-[#f0f0f0] mt-10 lg:mt-[100px] sm:mt-10 md:sm:mt-[70px] xl:mt-20 2xl:mt-20">

            {/* Text Section */}
            <motion.div
                className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:max-w-[600px] lg:h-[900px] gap-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mt-10 mb-7 w-full flex justify-center md:justify-start">
                    <SearchBar />
                </div>

                <div>
                    <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-6">
                        <span className="lg:text-[100px] xl:text-[130px]">A</span>
                        <span className="!text-[#004953]">bout us</span>
                    </h1>

                    <p className="text-[14px!important] sm:text-[16px!important] md:text-[18px!important] lg:text-[20px!important] xl:text-[24px!important] mb-6 max-w-[600px] text-center md:text-left">
                        VelvetCore is a luxury event supply and planning company dedicated to
                        transforming ordinary spaces into breathtaking experiences.
                        Specializing in high-end weddings, corporate functions, social
                        gatherings, exhibitions, and galas, we approach every event as a work
                        of art—elegant, timeless, and unforgettable.
                    </p>

                    <p className="text-[14px!important] sm:text-[16px!important] md:text-[18px!important] lg:text-[20px!important] xl:text-[24px!important] mb-6 max-w-[600px] text-center md:text-left">
                        Our strength lies in the fusion of creativity and precision. Every
                        fabric, every flower, every lighting choice is intentional. We go
                        beyond aesthetics to craft emotional atmospheres that linger long
                        after the event ends.
                    </p>

                    <div className="w-full flex justify-center md:justify-start">
                        <Link href={`/aboutPage/${id}`}>
                            <Button className="mt-10 mb-16 bg-[#c5b358] text-white hover:bg-[#bfa23a]">
                                Read More...
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>


            {/* Image Section inside main div with bg-red-200 */}
            <motion.div
                className="relative w-full flex justify-center items-center md:mt-0 "
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full max-w-[100vw]">
                    <Image
                        src="/design_2.svg"
                        alt="About VelvetCore"
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default About;
