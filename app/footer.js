"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const Footer = () => {
    const [activePopup, setActivePopup] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // ✅ Detect mobile (more reliable)
    useEffect(() => {
        const checkMobile = () =>
            /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
                navigator.userAgent
            );

        setIsMobile(checkMobile());
    }, []);

    return (
        <motion.footer
            id="contact"
            className="bg-[#004953] min-h-[200px] sm:min-h-[400px] flex flex-col items-center justify-center text-center py-10 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={staggerContainer}
        >
            <motion.div
                className="max-w-4xl mx-auto w-full transition-all duration-300"
                id="footer-details"
                variants={staggerContainer}
            >
                {/* Heading + Description */}
                <motion.div
                    className="mb-10 transition-all duration-300"
                    id="footer-heading-desc"
                    variants={fadeInUp}
                >
                    <motion.h1
                        className="h1-white text-3xl sm:text-4xl md:text-[48px] font-bold"
                        variants={fadeInUp}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 max-w-[600px] mx-auto text-center text-[#00e0ff]"
                        variants={fadeInUp}
                    >
                        You can reach out to us now with the click of a button. Hover over
                        accounts to view QR codes.
                    </motion.p>
                </motion.div>

                {/* Social Media Icons */}
                <motion.ul
                    className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 mt-6"
                    variants={staggerContainer}
                >
                    {/* Instagram */}
                    <motion.li
                        className="relative"
                        variants={fadeInUp}
                        onMouseEnter={() => !isMobile && setActivePopup("ig")}
                        onMouseLeave={() => !isMobile && setActivePopup(null)}
                    >
                        <a
                            href="https://www.instagram.com/velvetcore.event"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/1instagram.svg"
                                alt="Instagram"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                            />
                        </a>

                        {/* ✅ Desktop QR popup only */}
                        {!isMobile && activePopup === "ig" && (
                            <motion.div
                                className="absolute top-[-250px] left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl z-50 w-[200px] h-[220px]"
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src="/Rectangle26.svg"
                                    alt="Instagram QR"
                                    width={250}
                                    height={250}
                                    className="drop-shadow-lg"
                                />
                            </motion.div>
                        )}
                    </motion.li>

                    {/* TikTok */}
                    <motion.li
                        className="relative"
                        variants={fadeInUp}
                        onMouseEnter={() => !isMobile && setActivePopup("tiktok")}
                        onMouseLeave={() => !isMobile && setActivePopup(null)}
                    >
                        <a
                            href="https://www.tiktok.com/@velvetcore.event"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/2tiktok.svg"
                                alt="TikTok"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                            />
                        </a>

                        {/* ✅ Desktop QR popup only */}
                        {!isMobile && activePopup === "tiktok" && (
                            <motion.div
                                className="absolute top-[-250px] left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl z-50 w-[200px] h-[220px]"
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.85, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                            >
                                <Image
                                    src="/Rectangle27.svg"
                                    alt="TikTok QR"
                                    width={250}
                                    height={250}
                                    className="drop-shadow-lg"
                                />
                            </motion.div>
                        )}
                    </motion.li>

                    {/* Other icons (no popup) */}
                    <motion.li variants={fadeInUp}>
                        <a
                            href="https://www.pinterest.com/velvetcoreevents/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/3pinterest.svg"
                                alt="Pinterest"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                            />
                        </a>
                    </motion.li>

                    <motion.li variants={fadeInUp}>
                        <a href="mailto:velvetcore.events@gmail.com">
                            <Image
                                src="/4mail.svg"
                                alt="Email"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                            />
                        </a>
                    </motion.li>

                    <motion.li variants={fadeInUp}>
                        <a
                            href="https://youtube.com/@velvetcoreevents?si=T39q_uT1y2e_2T8i"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/5youtube.svg"
                                alt="YouTube"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                            />
                        </a>
                    </motion.li>

                    <motion.li variants={fadeInUp}>
                        <a
                            href="https://www.facebook.com/profile.php?id=61560364485351"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/6facebook.svg"
                                alt="Facebook"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                            />
                        </a>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;




// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//     hidden: {},
//     visible: {
//         transition: { staggerChildren: 0.12 },
//     },
// };

// const Footer = () => {
//     const [activePopup, setActivePopup] = useState(null);

//     const isTouchDevice =
//         typeof window !== "undefined" && "ontouchstart" in window;

//     const handleOverlayClick = (e) => {
//         if (e.target === e.currentTarget) {
//             setActivePopup(null);
//         }
//     };

//     return (
//         <motion.footer
//             id="contact"
//             className="bg-[#004953] min-h-[200px] sm:min-h-[400px] flex flex-col items-center justify-center text-center py-10 px-4"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.3 }}
//             variants={staggerContainer}
//         >
//             <motion.div
//                 className="max-w-4xl mx-auto w-full transition-all duration-300"
//                 variants={staggerContainer}
//             >
//                 {/* Heading + Description */}
//                 <motion.div className="mb-10" variants={fadeInUp}>
//                     <motion.h1
//                         className="h1-white text-3xl sm:text-4xl md:text-[48px] font-bold"
//                         variants={fadeInUp}
//                     >
//                         Contact Us
//                     </motion.h1>
//                     <motion.p
//                         className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 max-w-[600px] mx-auto text-center text-[#00e0ff]"
//                         variants={fadeInUp}
//                     >
//                         You can reach out to us now with the click of a button. Hover over
//                         accounts to view QR codes.
//                     </motion.p>
//                 </motion.div>

//                 {/* Social Icons */}
//                 <motion.ul
//                     className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 mt-6 relative"
//                     variants={staggerContainer}
//                 >
//                     {/* Instagram */}
//                     <motion.li
//                         className="relative"
//                         variants={fadeInUp}
//                         onMouseEnter={() => {
//                             if (!isTouchDevice) setActivePopup("ig");
//                         }}
//                         onMouseLeave={() => {
//                             if (!isTouchDevice) setActivePopup(null);
//                         }}
//                     >
//                         <a
//                             href="https://www.instagram.com/velvetcore.event"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => {
//                                 if (isTouchDevice) {
//                                     e.preventDefault();
//                                     setActivePopup(activePopup === "ig" ? null : "ig");
//                                 }
//                             }}
//                         >
//                             <Image
//                                 src="/1instagram.svg"
//                                 alt="Instagram"
//                                 width={40}
//                                 height={40}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
//                             />
//                         </a>

//                         {/* Desktop hover QR */}
//                         {!isTouchDevice && activePopup === "ig" && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 10 }}
//                                 className="absolute top-[-340px] left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl z-50"
//                             >
//                                 <Image
//                                     src="/Rectangle26.svg"
//                                     alt="Instagram QR"
//                                     width={220}
//                                     height={220}
//                                     className="drop-shadow-lg"
//                                 />
//                             </motion.div>
//                         )}
//                     </motion.li>

//                     {/* TikTok */}
//                     <motion.li
//                         className="relative"
//                         variants={fadeInUp}
//                         onMouseEnter={() => {
//                             if (!isTouchDevice) setActivePopup("tiktok");
//                         }}
//                         onMouseLeave={() => {
//                             if (!isTouchDevice) setActivePopup(null);
//                         }}
//                     >
//                         <a
//                             href="https://www.tiktok.com/@velvetcore.event"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => {
//                                 if (isTouchDevice) {
//                                     e.preventDefault();
//                                     setActivePopup(activePopup === "tiktok" ? null : "tiktok");
//                                 }
//                             }}
//                         >
//                             <Image
//                                 src="/2tiktok.svg"
//                                 alt="TikTok"
//                                 width={40}
//                                 height={40}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
//                             />
//                         </a>

//                         {/* Desktop hover QR */}
//                         {!isTouchDevice && activePopup === "tiktok" && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 10 }}
//                                 className="absolute top-[-340px] left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl z-50"
//                             >
//                                 <Image
//                                     src="/Rectangle27.svg"
//                                     alt="TikTok QR"
//                                     width={220}
//                                     height={220}
//                                     className="drop-shadow-lg"
//                                 />
//                             </motion.div>
//                         )}
//                     </motion.li>

//                     {/* Other static icons */}
//                     <motion.li variants={fadeInUp}>
//                         <a
//                             href="https://www.pinterest.com/velvetcoreevents/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Image
//                                 src="/3pinterest.svg"
//                                 alt="Pinterest"
//                                 width={40}
//                                 height={40}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
//                             />
//                         </a>
//                     </motion.li>

//                     <motion.li variants={fadeInUp}>
//                         <a href="mailto:velvetcore.events@gmail.com">
//                             <Image
//                                 src="/4mail.svg"
//                                 alt="Email"
//                                 width={40}
//                                 height={40}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
//                             />
//                         </a>
//                     </motion.li>

//                     <motion.li variants={fadeInUp}>
//                         <a
//                             href="https://youtube.com/@velvetcoreevents?si=T39q_uT1y2e_2T8i"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Image
//                                 src="/5youtube.svg"
//                                 alt="YouTube"
//                                 width={40}
//                                 height={40}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
//                             />
//                         </a>
//                     </motion.li>

//                     <motion.li variants={fadeInUp}>
//                         <a
//                             href="https://www.facebook.com/profile.php?id=61560364485351"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Image
//                                 src="/6facebook.svg"
//                                 alt="Facebook"
//                                 width={40}
//                                 height={40}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
//                             />
//                         </a>
//                     </motion.li>
//                 </motion.ul>
//             </motion.div>

//             {/* Mobile Fullscreen Popups */}
//             <AnimatePresence>
//                 {isTouchDevice && activePopup === "ig" && (
//                     <motion.div
//                         key="ig"
//                         className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={handleOverlayClick}
//                     >
//                         <motion.div
//                             className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-2xl"
//                             initial={{ scale: 0.85, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.85, opacity: 0 }}
//                             transition={{ duration: 0.22 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <Image
//                                 src="/Rectangle26.svg"
//                                 alt="Instagram QR"
//                                 width={300}
//                                 height={300}
//                                 className="drop-shadow-lg mb-4"
//                             />
//                             <a
//                                 href="https://www.instagram.com/velvetcore.event"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="mt-2 text-[#004953] underline"
//                             >
//                                 Open Instagram
//                             </a>
//                         </motion.div>
//                     </motion.div>
//                 )}

//                 {isTouchDevice && activePopup === "tiktok" && (
//                     <motion.div
//                         key="tiktok"
//                         className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={handleOverlayClick}
//                     >
//                         <motion.div
//                             className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-2xl"
//                             initial={{ scale: 0.85, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.85, opacity: 0 }}
//                             transition={{ duration: 0.22 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <Image
//                                 src="/Rectangle27.svg"
//                                 alt="TikTok QR"
//                                 width={300}
//                                 height={300}
//                                 className="drop-shadow-lg mb-4"
//                             />
//                             <a
//                                 href="https://www.tiktok.com/@velvetcore.event"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="mt-2 text-[#004953] underline"
//                             >
//                                 Open TikTok
//                             </a>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.footer>
//     );
// };

// export default Footer;
