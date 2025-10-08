"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/component/button";
import SearchBar from "@/component/searchBar";

const About = ({ id = 1 }) => {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center gap-10 bg-[#f0f0f0] sm:gap-10 sm:mt-[80px] 
  md:flex-col lg:flex-row lg:items-center xl:items-start 
  overflow-visible"
        >
            {/* Wrapper for About text + image */}
            <div className="relative w-full flex flex-col lg:flex-row custom-lg:flex-col items-start justify-between gap-32">

                {/* Left content */}
                <motion.div
                    className="relative text-center lg:text-left lg:w-full custom-lg:w-full md:pr-20 px-6 sm:px-10 md:px-20 xl:px-36 justify-between gap-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* SearchBar */}
                    <div className="mb-6">
                        <SearchBar />
                    </div>

                    <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-6">
                        <span className="lg:text-[100px] xl:text-[130px]">A</span>
                        <span className="!text-[#004953]">bout us</span>
                    </h1>

                    <p className="custom-text max-w-[800px] text-justify px-4 mb-6">
                        VelvetCore is a luxury event supply and planning company dedicated to
                        transforming ordinary spaces into breathtaking experiences.
                        Specializing in high-end weddings, corporate functions, social
                        gatherings, exhibitions, and galas, we approach every event as a
                        work of art—elegant, timeless, and unforgettable.
                    </p>

                    <p className="custom-text max-w-[800px] text-justify px-4 mb-6">
                        Our strength lies in the fusion of creativity and precision. Every
                        fabric, every flower, every lighting choice is intentional. We go
                        beyond aesthetics to craft emotional atmospheres that linger long
                        after the event ends.
                    </p>

                    <Link href={`/aboutPage/${id}`}>
                        <Button className="mt-10 mb-16 bg-[#c5b358] text-white hover:bg-[#bfa23a]">
                            Read More...
                        </Button>
                    </Link>
                </motion.div>

                {/* ✅ Image visible below 1000px, side-by-side above 1000px */}
                <motion.div
                    className="flex justify-center md:justify-end relative h-[400px] md:h-[500px] lg:h-[600px]  2xl:w-1/2 w-full "
                    initial={{ opacity: 0, x: 50, rotate: 20 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute bottom-0 2xl:top-0 right-0 w-full flex justify-end xl:h-[900px] 2xl:h-[900px] overflow-hidden">
                        <Image
                            src="/design_2.svg"
                            alt="About VelvetCore"
                            width={600}
                            height={1000}
                            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-h-[900px] 2xl:object-contain 2xl:object-bottom 2xl:lg:object-right-top "
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
