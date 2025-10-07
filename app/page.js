"use client";
import About from "./aboutPage/about";
import PageWhatWeOffer from "./whatWeOffer/page";
import SearchBar from "@/component/searchBar";
import Carousel from "./suupliableItemsPage/supplyPage";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header />

      {/* About Section */}
      <section id="about" className="sm:flex sm:flex-col flex flex-col gap-10 sm:gap-10 bg-[#f0f0f0] sm:mt-[80px] pt-10 mt-10 md:items-center lg:items-start pl-8 sm:pl-10 md:pl-36">
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
