"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/component/button";

const items = [
    {
        image: "/Ellipse21.svg",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#1 Tulip Flowers.",
        colors: ["#b6b1a9", "#e5e1d8", "#f7e6a2", "#e7d6e7", "#7b7b7b", "#c5b358", "#d13c4b"],
        description: "Tulips are a symbol of perfect love and elegance. Our tulip collection is available in a variety of colors for any event.",
        likes: "800+"
    },
    {
        image: "/Ellipse22.svg",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#2 Rose Flowers.",
        colors: ["#b6b1a9", "#e5e1d8", "#f7e6a2", "#e7d6e7", "#7b7b7b", "#c5b358", "#d13c4b"],
        description: "Roses are classic and timeless. Perfect for weddings, anniversaries, and special occasions.",
        likes: "1K+"
    },
    {
        image: "/Ellipse23.svg",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#3 Sunflower Bunch.",
        colors: ["#f7e6a2", "#c5b358", "#e5e1d8", "#d13c4b", "#e7d6e7", "#7b7b7b", "#b6b1a9"],
        description: "Sunflowers bring brightness and cheer to any event. Rent our vibrant sunflower bunches for a lively atmosphere.",
        likes: "600+"
    },
    {
        image: "/Ellipse24.svg",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#4 Orchid Mix.",
        colors: ["#e7d6e7", "#b6b1a9", "#c5b358", "#f7e6a2", "#e5e1d8", "#7b7b7b", "#d13c4b"],
        description: "Orchids are exotic and luxurious. Our orchid mix is perfect for upscale events and decor.",
        likes: "500+"
    },
];

// Variants for animations
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function SupplyPage() {
    const [current, setCurrent] = useState(1); // Centered on 2nd item for demo

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + items.length) % items.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % items.length);
    };

    return (
        <motion.div
            className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto min-h-[700px] bg-white rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            id="supplyPage"
        >
            {/* Left Info Section */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:py-0 bg-white">
                <motion.h1
                    className="font-bold text-[24px] sm:text-[350px] md:text-[40px] lg:text-[40px] xl:text-[48px] text-[#004953] mb-4"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <span className="lg:text-[100px] xl:text-[130px]">S</span>
                    <span>uppliable items.</span>
                </motion.h1>

                <motion.p
                    className="text-gray-500 mb-8 max-w-md"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Here are some of the products we have available for rental. Feel free to browse through the carousel to find our luxury items.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            backgroundColor="bg-[#c5b358]"
                            textColor="text-white"
                            hoverColor="bg-[#bfa23a]"
                            width="w-[220px]"
                        >
                            View All Products
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    className="bg-[#f5f6f7] rounded-2xl p-6 mt-8 max-w-[400px] shadow flex flex-col gap-2"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="text-[#004953] font-semibold">Bimbo Tomisin</div>
                    <div className="text-xs text-[#c5b358] mb-2">Event Planner, Bloom Events</div>
                    <div className="text-gray-500 text-sm mb-2">
                        “Lorem ipsum dolor sit amet consectetur. Varius gravida vivamus id eu faucibus. Adipiscing in sit tortor ultrices nunc felis ipsum. Convallis amet proin eu et sit quam tortor volutpat vitae. Ultrices a pharetra lectus leo sollicitudin id aenean.”
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-[#c5b358] text-xl">★★★★☆</span>
                    </div>
                </motion.div>
            </div>

            {/* Right Carousel & Product Info Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 bg-white relative">
                {/* Carousel */}
                <motion.div
                    className="relative flex items-center justify-center w-full h-[320px] mb-6"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow text-3xl text-[#004953] hover:bg-[#c5b358] ml-10"
                        aria-label="Previous"
                    >
                        &#8592;
                    </button>
                    <div className="relative flex items-center justify-center w-full py-2 overflow-hidden h-[180px]">
                        {items.map((item, index) => {
                            // Modular offset for infinite carousel
                            let offset = (index - current + items.length) % items.length;
                            if (offset > items.length / 2) offset -= items.length;
                            if (Math.abs(offset) > 1) return null;
                            const isActive = offset === 0;
                            // Center the active image absolutely in the container
                            const left = `calc(50% + ${offset * 160}px - 70px)`;
                            return (
                                <motion.div
                                    key={index}
                                    className={`absolute top-1/2 -translate-y-1/2 rounded-full overflow-hidden flex-shrink-0 cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
                                    style={{ width: 140, height: 140, left }}
                                    animate={{
                                        scale: isActive ? 1.1 : 0.8,
                                        opacity: isActive ? 1 : 0.4,
                                        filter: isActive ? "blur(0px)" : "blur(6px)",
                                    }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                                    onClick={() => setCurrent(index)}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={140}
                                        height={140}
                                        className="rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow text-3xl text-[#004953] hover:bg-[#c5b358] mr-10"
                        aria-label="Next"
                    >
                        &#8594;
                    </button>
                </motion.div>

                {/* Product Info (sync with current item) */}
                <motion.div
                    className="w-full max-w-[500px] mx-auto text-center"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="text-[#004953] font-semibold text-lg mb-1 flex items-center justify-center gap-2"
                        variants={fadeInUp}
                    >
                        {items[current].category} <span className="text-xs">▼</span>
                    </motion.div>

                    <motion.div
                        className="text-xs text-[#00a3b9] mb-1"
                        variants={fadeInUp}
                    >
                        {items[current].subtitle}
                    </motion.div>

                    <motion.div
                        className="text-3xl font-bold text-[#004953] mb-2"
                        variants={fadeInUp}
                    >
                        <span className="text-[#c5b358]">{items[current].title.split(" ")[0]}</span> {items[current].title.split(" ").slice(1).join(" ")}
                    </motion.div>

                    {/* Color Dots */}
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-3"
                        variants={fadeInUp}
                    >
                        {items[current].colors.map((color, i) => (
                            <span
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-white"
                                style={{ backgroundColor: color }}
                            ></span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-gray-500 text-sm mb-4"
                        variants={fadeInUp}
                    >
                        {items[current].description}
                    </motion.div>

                    {/* Avatars and likes */}
                    <motion.div
                        className="flex items-center justify-center gap-2"
                        variants={fadeInUp}
                    >
                        <div className="flex -space-x-2">
                            <span className="w-8 h-8 rounded-full bg-[#004953] border-2 border-white inline-block"></span>
                            <span className="w-8 h-8 rounded-full bg-[#c5b358] border-2 border-white inline-block"></span>
                            <span className="w-8 h-8 rounded-full bg-[#00a3b9] border-2 border-white inline-block"></span>
                        </div>
                        <span className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">{items[current].likes}</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
