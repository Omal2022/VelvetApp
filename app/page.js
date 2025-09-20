"use client";

import Image from "next/image";
import Navigation from "./navigation";
import About from "./aboutPage/about";
import PageWhatWeOffer from "./whatWeOffer/page"
import SearchBar from "@/component/searchBar";
import Carousel from "./suupliableItemsPage/supplyPage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#f0f0f0]">
        {/* Hero Image with Overlay */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] sm:mt-5 mx-3 sm:mx-6 md:mx-10 flex flex-col items-center justify-center">

          {/* Navigation overlayed on image */}
          <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-[100vw] overflow-x-auto text-center">
            <Navigation />
          </div>

          {/* Background Image */}
          <Image
            src="/landingImg.jpg"
            alt="Landing page image"
            fill
            className="object-cover my-3"
            priority
          />

          {/* Centered Logo */}
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

        {/* Gradient Bars with Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-full overflow-x-hidden">
          {/* Left gradient */}
          <div className="w-full max-w-[250px] h-[40px] sm:h-[50px] md:h-[60px] bg-[linear-gradient(to_right,#c5b358_0%,#f0f0f0_100%)]"></div>

          {/* Center logo */}
          <div className="flex-shrink-0 w-full max-w-[300px]">
            <Image
              src="/Landing_text.svg"
              alt="Line Logo"
              width={300}
              height={80}
              className="w-full h-auto"
            />
          </div>

          {/* Right gradient */}
          <div className="w-full max-w-[250px] h-[40px] sm:h-[50px] md:h-[60px] bg-[linear-gradient(to_left,#c5b358_0%,#f0f0f0_100%)]"></div>
        </div>

        {/* Text Section
        <div className="text-center px-4 mt-10 mb-16 sm:mb-20 md:mb-24">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
            Where MOOD Meets MATTER.
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-[30px] text-gray-600">
            Every Detail Speaks Luxury.
          </p>
        </div> */}

      </section >

      {/* About Section */}
      <section section className="px-4 sm:px-8 md:px-20 py-12 sm:py-20 bg-[#f0f0f0] mt-10" id="about" >
        <SearchBar />
        <About />
      </section >
      {/* What we are Section */}
      <section section className="px-4 sm:px-8 md:px-20 py-12 sm:py-20" id="what-we-offer" >
        <PageWhatWeOffer />
      </section >
      {/* What we are Section */}
      <section section className="px-4 sm:px-8 md:px-20 py-12 sm:py-20" id="what-we-offer" >
        <Carousel />
      </section >
    </>
  );
}
