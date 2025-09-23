"use client";

import Image from "next/image";
import Navigation from "./navigation";
import About from "./aboutPage/about";
import PageWhatWeOffer from "./whatWeOffer/page";
import SearchBar from "@/component/searchBar";
import Carousel from "./suupliableItemsPage/supplyPage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#f0f0f0]">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex flex-col items-center justify-center">
          
          {/* Navigation fixed on top */}
          <div className="absolute top-0 left-0 w-full z-50">
            <Navigation />
          </div>

          {/* Background Image */}
          <Image
            src="/landingImg.jpg"
            alt="Landing page image"
            fill
            className="object-cover"
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-8 md:px-20 py-12 sm:py-20 bg-[#f0f0f0] mt-10">
        <SearchBar />
        <About />
      </section>

      {/* What we offer */}
      <section id="what-we-offer" className="px-4 sm:px-8 md:px-20 py-12 sm:py-20">
        <PageWhatWeOffer />
      </section>

      {/* Carousel */}
      <section id="supplyPage" className="px-4 sm:px-8 md:px-20 py-12 sm:py-20">
        <Carousel />
      </section>
    </>
  );
}
