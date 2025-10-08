"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/component/button";
import SearchBar from "@/component/searchBar";

const About = ({ id = 1 }) => {
    return (
        <section
            id="about"
            className="
            relative flex flex-col items-center gap-10 sm:gap-10 sm:mt-[80px]
            md:flex-col lg:flex-row lg:items-center xl:items-start 
            overflow-visible 
            bg-none lg:bg-[url('/bkg.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat 
            "
        >
            {/* Wrapper for About text + image */}
            <div className="
                relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-16 md:gap-24 md:mt-28
            ">

                {/* Left content */}
                <motion.div
                    className="about-text-wrapper relative text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center xl:items-start p-10 gap-6 bg-[#f0f0f0] "
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* SearchBar */}
                    <div className="mb-4 mt-14 mx-20">
                        <SearchBar />
                    </div>

                    <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-6">
                        <span className="lg:text-[100px] xl:text-[130px]">A</span>
                        <span className="!text-[#004953]">bout us</span>
                    </h1>

                    <p className="custom-text max-w-full xl:max-w-[650px] md:max-w-[600px] lg:text-left md:text-center px-2 sm:px-4 mb-4">
                        VelvetCore is a luxury event supply and planning company dedicated to
                        transforming ordinary spaces into breathtaking experiences.
                        Specializing in high-end weddings, corporate functions, social
                        gatherings, exhibitions, and galas, we approach every event as a
                        work of art—elegant, timeless, and unforgettable.
                    </p>

                    <p className="custom-text max-w-full xl:max-w-[650px] md:max-w-[600px] lg:text-left md:text-center px-2 sm:px-4 mb-6">
                        Our strength lies in the fusion of creativity and precision. Every
                        fabric, every flower, every lighting choice is intentional. We go
                        beyond aesthetics to craft emotional atmospheres that linger long
                        after the event ends.
                    </p>

                    <Link href={`/aboutPage/${id}`}>
                        <Button className="mt-6 mb-16 bg-[#c5b358] text-white hover:bg-[#bfa23a]">
                            Read More...
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
