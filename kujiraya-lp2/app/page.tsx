"use client";

import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowTo from "./components/HowTo";
import Benefits from "./components/Benefits";
import Difference from "./components/Difference";
import Voices from "./components/Voices";
import Product from "./components/Product";
import Faq from "./components/Faq";
import Purchase from "./components/Purchase";
import Footer from "./components/Footer";
import StickyCtaBar from "./components/StickyCtaBar";

export default function Home() {
  return (
    <>
      <Loading />
      <main>
        <Hero />
        <div className="accent-line" />
        <Problem />
        <div className="accent-line" />
        <Solution />
        <div className="accent-line" />
        <HowTo />
        <div className="accent-line" />
        <Benefits />
        <div className="accent-line" />
        <Difference />
        <div className="accent-line" />
        <Voices />
        <div className="accent-line" />
        <Product />
        <div className="accent-line" />
        <Faq />
        <div className="accent-line" />
        <Purchase />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
