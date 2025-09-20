"use client";

import React from "react";
import Card from "../../component/productCard";
import { motion } from "framer-motion";
import detailsOnCards from "@/mockdata/offerData";

const page = () => {
  // Animation for the text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Stagger container for cards
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-col items-center mb-15"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={textVariants}
      >
        <motion.h1
          className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-6"
          variants={textVariants}
        >
          What We Offer.
        </motion.h1>
        <motion.p
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] mb-6 max-w-[600px] text-center"
          variants={textVariants}
        >
          What sets VelvetCore apart is our obsessive attention to detail. We
          don’t copy trends—we translate your vision into a visual language
          that’s entirely yours.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap gap-10 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {detailsOnCards.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>      
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default page;
