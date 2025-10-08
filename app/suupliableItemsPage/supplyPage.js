"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/component/button";

const items = [
    {
        image: "/Ellipse22.png",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#1 Pionies.",
        colors: [
            "linear-gradient(135deg,#A95B2B 0%,#E3D0A5 100%)",
            "#D2DBDA",
            "linear-gradient(135deg,#8E1435 0%,#AB5058 100%)",
            "linear-gradient(135deg,#CFC7C1 0%,#D4B089 100%)",
        ],
        // map each color dot to a preview image; adjust paths to match your public images
        imageVariants: [
            "/Ellipse22.png",
            "/Ellipse21.png", // your requested pairing for #D2DBDA
            "/Ellipse23.png", // your requested pairing for linear-gradient(135deg,#8E1435 0%,#AB5058 100%)
            "/Ellipse24.png", // your requested pairing for linear-gradient(135deg,#CFC7C1 0%,#D4B089 100%)
        ],
        description: "Roses are classic and timeless. Perfect for weddings, anniversaries, and special occasions.",

    },
    {
        image: "/Ellipse(1).png",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#2 Rose Flowers.",
        colors: ["#876287", "#CEBAAB", "#FED810", "#8D096F", "#2F4BCC", "#B81538"],
        imageVariants: [
            "/Ellipse(1).png", // paired with #876287
            "/r1.png", // paired with #CEBAAB
            "/r2.png", // paired with #FED810
            "/r3.png", // paired with #8D096F
            "/r5.png", // paired with #2F4BCC
            "/r6.png", // paired with #B81538
        ],
        description: "Tulips are a symbol of perfect love and elegance. Our tulip collection is available in a variety of colors for any event.",

    },
    {
        image: "/Ellipse22(2).png",
        category: "Flowers Category",
        subtitle: "Most rented flower from VelvetCore",
        title: "#3 Wisteria.",
        colors: ["#9FD6CF", "#C23456", "#BD210D", "#DCC116", "#C2CF4A", "#BCBD8F", "#AC76D0", "#333C38", "#F0C46E"],
        imageVariants: [
            "/Ellipse22(2).png",
            "/1.png",
            "/2.png",
            "/3.png",
            "/4.png",
            "/5.png",
            "/6.png",
            "/7.png",
            "/8.png",
        ],
        description: "Sunflowers bring brightness and cheer to any event. Rent our vibrant sunflower bunches for a lively atmosphere.",

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

    // current index for carousel (start on second item for demo)
    const [current, setCurrent] = useState(1);
    // which color dot is selected for preview (null = use default item.image)
    const [selectedVariant, setSelectedVariant] = useState(null);

    // Reset selected variant when current item changes
    useEffect(() => {
        setSelectedVariant(null);
    }, [current]);

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
                    className="custom-text-lg text-gray-500 mb-8 max-w-md"
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
                    <p className="text-[#004953] font-semibold">Bimbo Tomisin</p>
                    <p className="text-xs text-[#c5b358] mb-2">Event Planner, Bloom Events</p>
                    <p className="text-gray-500 text-sm mb-2">
                        “Lorem ipsum dolor sit amet consectetur. Varius gravida vivamus id eu faucibus. Adipiscing in sit tortor ultrices nunc felis ipsum. Convallis amet proin eu et sit quam tortor volutpat vitae. Ultrices a pharetra lectus leo sollicitudin id aenean.”
                    </p>
                    <div className="flex items-center gap-1">
                        {/* <span className="text-[#c5b358] text-xl">★★★★☆</span> */}
                        <Image src="/Frame28.png" alt="Star Icon" width={100} height={100} />
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
                        className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 p-2 w-12 h-12 rounded-full flex shadow justify-center items-center text-3xl text-[#004953] bg-white/80 hover:bg-[#c5b358] ml-10 z-20"
                        aria-label="Previous"
                    >
                        <i className="fa-solid fa-arrow-left fa-beat fa-sm"></i>
                    </button>
                    <div className="relative flex items-center justify-center w-full py-2 overflow-hidden h-[280px]">
                        {items.map((item, index) => {
                            // Modular offset for infinite carousel
                            let offset = (index - current + items.length) % items.length;
                            if (offset > items.length / 2) offset -= items.length;
                            // If a color variant is selected, only render the active (front) item
                            if (selectedVariant !== null && offset !== 0) return null;
                            if (Math.abs(offset) > 1) return null;
                            const isActive = offset === 0;
                            // Center the active image absolutely in the container
                            const left = `calc(50% + ${offset * 260}px - 120px)`;
                            return (
                                <motion.div
                                    key={index}
                                    className={`absolute top-1/2 -translate-y-1/2 rounded-full overflow-hidden flex-shrink-0 cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
                                    style={{ width: 240, height: 240, left }}
                                    animate={{
                                        scale: isActive ? 1.15 : 0.82,
                                        opacity: isActive ? 1 : 0.5,
                                        filter: isActive ? "blur(0px)" : "blur(6px)",
                                    }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                                    onClick={() => setCurrent(index)}
                                >
                                    {/* use selected variant if set, otherwise use the item's default image */}
                                    <Image
                                        src={items[current].imageVariants?.[selectedVariant] ?? item.image}
                                        alt={item.title}
                                        width={240}
                                        height={240}
                                        className="rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 w-12 h-12 rounded-full flex justify-center items-center shadow text-3xl text-[#004953] hover:bg-[#c5b358] mr-10 z-20"
                        aria-label="Next"
                    >
                        <i className="fa-solid fa-arrow-right fa-beat fa-sm"></i>
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
                            <button
                                key={i}
                                onClick={() => {
                                    // if there is a mapped image for this color, select it for preview
                                    if (items[current].imageVariants && items[current].imageVariants[i]) {
                                        setSelectedVariant(i);
                                    } else {
                                        // otherwise clear selection (fallback to default image)
                                        setSelectedVariant(null);
                                    }
                                }}
                                className={`w-7 h-7 rounded-full border-2 border-white focus:outline-none cursor-pointer ${selectedVariant === i ? 'ring-2 ring-[#c5b358]' : ''}`}
                                style={{ background: color }}
                                aria-label={`Select color ${i + 1}`}
                            />
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
                        <Image src="/Frame27.png" alt="User Avatars" width={130} height={130} />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
