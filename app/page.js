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
      <section id="about" className="sm:flex sm:flex-col sm:gap-10 px-4 sm:px-8 md:px-20 py-12 sm:py-20 bg-[#f0f0f0] mt-10">
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
