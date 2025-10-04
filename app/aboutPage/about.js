"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/component/button";

const About = ({ id = 1 }) => {
    return (
        <div className="relative flex flex-col md:flex-row w-full items-center justify-between gap-10">
            {/* Text Section */}
            <motion.div
                className="text-center md:text-left md:max-w-[600px] px-5 md:px-12 lg:px-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-6">
                    <span className="lg:text-[100px] xl:text-[130px]">A</span>
                    <span className="!text-[#004953]">bout us</span>
                </h1>

                <p className="!text-[14px] sm:!text-[16px] md:!text-[18px] lg:!text-[20px] xl:!text-[24px] mb-6">
                    VelvetCore is a luxury event supply and planning company dedicated to
                    transforming ordinary spaces into breathtaking experiences.
                    Specializing in high-end weddings, corporate functions, social
                    gatherings, exhibitions, and galas, we approach every event as a work
                    of art—elegant, timeless, and unforgettable.
                </p>

                <p className="!text-[14px] sm:!text-[16px] md:!text-[18px] lg:!text-[20px] xl:!text-[24px]">
                    Our strength lies in the fusion of creativity and precision. Every
                    fabric, every flower, every lighting choice is intentional. We go
                    beyond aesthetics to craft emotional atmospheres that linger long
                    after the event ends.
                </p>

                <Link href={`/aboutPage/${id}`}>
                    <Button className="mt-10 mb-14 bg-[#c5b358] text-white hover:bg-[#bfa23a]">
                        Read More...
                    </Button>
                </Link>
            </motion.div>

            {/* Image Section */}
            <div className="relative w-screen overflow-hidden flex justify-center md:justify-end">
                <motion.div
                    className="relative  md:h-[500px] lg:h-[600px] w-full flex justify-center md:justify-end"
                    initial={{ opacity: 0, x: 50, rotate: 20 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/design_2.svg"
                        alt="About VelvetCore"
                        width={600}
                        height={600}
                        className="w-full h-auto max-w-none object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
