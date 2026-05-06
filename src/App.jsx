import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import MouseGlow from "./components/MouseGlow";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import DeviceShowcase from "./components/DeviceShowcase";
import FAQ from "./sections/FAQ";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <main className="min-h-screen bg-[#06162B] text-white">
      <SmoothScroll />
      <MouseGlow />
      <Navbar />
      <Hero />
      <DeviceShowcase />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}