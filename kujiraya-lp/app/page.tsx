"use client";

import Loading from "./components/Loading";
import Hero from "./components/Hero";
import History from "./components/History";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Product from "./components/Product";
import MineralChart from "./components/MineralChart";
import ProductLineup from "./components/ProductLineup";
import Usage from "./components/Usage";
import Testimonials from "./components/Testimonials";
import Press from "./components/Press";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCtaBar from "./components/StickyCtaBar";

export default function Home() {
  return (
    <>
      <Loading />
      <main>
        <Hero />
        <div className="gold-line" />
        <History />
        <div className="gold-line" />
        <About />
        <div className="gold-line" />
        <Philosophy />
        <div className="gold-line" />
        <Product />
        <div className="gold-line" />
        <MineralChart />
        <div className="gold-line" />
        <ProductLineup />
        <div className="gold-line" />
        <Usage />
        <div className="gold-line" />
        <Testimonials />
        <div className="gold-line" />
        <Press />
        <div className="gold-line" />
        <Contact />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
