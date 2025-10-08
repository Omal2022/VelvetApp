"use client";
import About from "./aboutPage/about";
import PageWhatWeOffer from "./whatWeOffer/page";
import SearchBar from "@/component/searchBar";
import Carousel from "./suupliableItemsPage/supplyPage";
import Header from "./header";
import ButtonUp from "./buttonUp";

export default function Home() {
  return (
    <>
      <Header />

      {/* About Section */}
      <section id="about" >
        {/* <SearchBar /> */}
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

      <ButtonUp id="/" />
    </>
  );
}
