"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/component/button";

const About = () => {
    return (
        <div className="relative flex flex-col md:flex-row w-full items-center justify-between gap-10 px-5 md:px-12 lg:px-20">
            {/* Text Section */}
            <motion.div
                className="text-center md:text-left md:max-w-[600px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            // viewport={{ once: true }}
            >
                <h1
                    className="font-bold 
          text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 
          mb-6"
                >
                    About us
                </h1>

                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] mb-6">
                    VelvetCore is a luxury event supply and planning company dedicated to
                    transforming ordinary spaces into breathtaking experiences.
                    Specializing in high-end weddings, corporate functions, social
                    gatherings, exhibitions, and galas, we approach every event as a work
                    of art—elegant, timeless, and unforgettable.
                </p>

                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                    Our strength lies in the fusion of creativity and precision. Every
                    fabric, every flower, every lighting choice is intentional. We go
                    beyond aesthetics to craft emotional atmospheres that linger long
                    after the event ends.
                </p>

                <Button className="mt-10 bg-[#c5b358] text-white hover:bg-[#bfa23a]">Read More...</Button>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="flex justify-center md:justify-end relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute bottom-0 right-0 w-full flex justify-end">
                    <Image
                        src="/design_2.svg"
                        alt="About VelvetCore"
                        width={600}
                        height={600}
                        className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default About;
