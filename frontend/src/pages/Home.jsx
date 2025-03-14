// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default HomePage;