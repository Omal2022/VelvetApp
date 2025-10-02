"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/app/navigation";
import "./page.css";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#f0f0f0] h-full p-0 m-0">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex flex-col items-center justify-center w-full p-0 m-0">

          {/* Navigation fixed on top */}
          <div className="absolute top-0 left-0 w-full z-50">
            <Navigation />
          </div>

          {/* Background Image */}
          <Image
            src="/landingImg.jpg"
            alt="Landing page image"
            fill
            className="object-cover w-full h-full"
            priority
          />

          {/* Center Logo */}
          <div className="z-10">
            <Image
              src="/velvetlogo.svg"
              alt="Velvet Logo"
              width={180}
              height={180}
              className="sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
            />
          </div>

          {/* Gradient Line with About Us text */}
          <div className="absolute lg:top-165 md:top-160 sm:top-135 top-110 left-0 w-full flex items-center z-10">
            <div className="flex-1 h-[60px] bg-gradient-to-r from-[#C8B762] to-transparent"></div>
            <h1>ABOUT US</h1>
            <div className="flex-1 h-[60px] bg-gradient-to-l from-[#C8B762] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-container">
        {/* Page Intro */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <p className="text-lg leading-relaxed">
            VelvetCore is a luxury event supply and planning company dedicated to
            transforming ordinary spaces into breathtaking experiences. Specializing
            in high-end weddings, corporate functions, social gatherings, exhibitions,
            and galas, we approach every event as a work of art—elegant, timeless, and
            unforgettable.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our strength lies in the fusion of creativity and precision. Every fabric,
            every flower, every lighting choice is intentional. We go beyond aesthetics
            to craft emotional atmospheres that linger long after the event ends.
          </p>
        </motion.section>

        <hr className="border-0 h-[2px] bg-[#C5B358] max-w-[1000px] mx-auto my-12" />

        {/* Vision */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            In the next 3–5 years, Velvetcore aims to become a leading name in luxury
            event planning across major cities. Our roadmap includes expanding our elite
            vendor network, curating a signature product line, and building an online
            portfolio that reflects the full breadth of our artistry.
          </p>
        </motion.section>

        {/* Objectives */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Primary Objectives</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <b>Global Market Presence:</b> Establish a strong presence in the global
              event supplies market, catering to diverse client needs both locally and
              internationally.
            </li>
            <li>
              <b>Comprehensive Product Offerings:</b> Provide a wide range of
              high-quality products—utensils, furniture, equipment, and more—to meet
              the varied requirements of events.
            </li>
            <li>
              <b>Customer Satisfaction:</b> Ensure exceptional customer service, timely
              delivery, and flexible rental options to build long-term client relationships.
            </li>
            <li>
              <b>Logistical Excellence:</b> Develop efficient logistics and supply chain
              management systems to support seamless product delivery, setup, and retrieval.
            </li>
          </ul>
        </motion.section>

        {/* Signature */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Signature</h2>
          <p className="text-lg leading-relaxed">
            What sets Velvetcore apart is our obsessive attention to detail. We don’t copy
            trends—we translate your vision into a visual language that’s entirely yours.
            With a team experienced in both grand-scale execution and intimate touches,
            every Velvetcore event is a reflection of excellence.
          </p>
        </motion.section>

        {/* Philosophy */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Philosophy</h2>
          <p className="text-lg leading-relaxed">
            At Velvetcore, we believe luxury is found in the details. It&apos;s the weight of
            velvet, the shimmer of gold under soft lights, the flow of a room that speaks
            silently to its guests. Our mission is to translate our clients visions into
            fully immersive realities—always with sophistication, always with heart.
          </p>
        </motion.section>

        {/* Ideal Client */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Ideal Client</h2>
          <p className="text-lg leading-relaxed">
            We serve clients who value elegance, exclusivity, and authenticity. From visionary
            brides and corporate tastemakers to high-profile hosts and refined celebrants,
            our clients understand that excellence is not accidental—it’s curated.
          </p>
        </motion.section>
      </main>
    </>
  );
};

