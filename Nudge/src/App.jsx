import React, { useState, useEffect } from "react";

export default function NudgeLandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nudge</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main className="px-6">
        <HeroSection />
        <ServicesSection />
        <CallToAction />
        <Testimonials />
      </main>

      <footer className="p-6 text-center text-sm border-t border-gray-300 dark:border-gray-700">
        &copy; 2025 Nudge. All rights reserved.
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-extrabold mb-4">
        Navigating the digital landscape for success
      </h2>
      <p className="text-lg mb-6">
        Empowering users to stay consistent, inspired, and accountable using Nudge’s AI tools.
      </p>
      <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold">
        Book a Consultation
      </button>
    </section>
  );
}

function ServicesSection() {
  const services = [
    "Search Engine Optimization",
    "Pay-Per-Click Advertising",
    "Social Media Marketing",
    "Email Marketing",
    "Content Creation",
    "Analytics and Tracking",
  ];
  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold text-center mb-10">Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <h4 className="text-xl font-semibold mb-2">{service}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore how our {service.toLowerCase()} strategies can accelerate your growth.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-4">Let's make things happen</h3>
      <p className="mb-6 max-w-2xl mx-auto">
        Partner with Nudge to unleash your digital potential and achieve your goals faster with personalized AI support.
      </p>
      <button className="bg-green-500 dark:bg-green-400 text-white dark:text-black px-6 py-3 rounded-full font-semibold">
        Request Free Proposal
      </button>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Nudge transformed my productivity with AI-driven suggestions that actually made sense!",
    },
    {
      name: "Jane Smith",
      feedback:
        "I finally stuck to my goals, thanks to the nudges and clear direction this app gives.",
    },
  ];

  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold text-center mb-10">What Our Users Say</h3>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg max-w-md shadow-sm"
          >
            <p className="mb-4 italic">“{t.feedback}”</p>
            <p className="text-sm font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
