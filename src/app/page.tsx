"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 py-6 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
        <div className="text-2xl font-light text-gray-300">
          <span className="font-bold text-white">S</span>M
        </div>

        <div className="hidden md:flex space-x-8">
          {[
            "home",
            "experience",
            "skills",
            "projects",
            "education",
            "contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative cursor-pointer capitalize text-sm tracking-wide hover:text-white transition-colors duration-300 whitespace-nowrap !rounded-button 
                ${
                  activeSection === item
                    ? "text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
                    : "text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white cursor-pointer !rounded-button whitespace-nowrap"
            aria-label="Toggle menu"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#121212] z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col justify-center items-center`}
      >
        {[
          "home",
          "experience",
          "skills",
          "projects",
          "education",
          "contact",
        ].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer capitalize text-xl my-4 tracking-wide hover:text-white transition-colors duration-300 whitespace-nowrap !rounded-button"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen relative flex flex-col md:flex-row items-center justify-center md:justify-start pt-20 md:pt-0 px-8 md:px-16"
      >
        <div className="md:w-2/5 z-10 mb-12 md:mb-0">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2">
            SAEDA
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-400 tracking-tight mb-6">
            MUGHARI
          </h2>
          <p className="text-xl text-gray-300 font-medium mb-2">
            Front-End Developer(NextJS)
          </p>
          <div className="text-l text-gray-400 space-y-2 mb-8">
            <p>
              Crafting exceptional digital experiences with Next.js and modern
              web technologies
            </p>
          </div>
          <Link
            href="mailto:saedaraed19@gmail.com"
            className="border border-gray-600 hover:border-white px-6 py-3 text-sm tracking-wider transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
          >
            LET&apos;S CONNECT
          </Link>
        </div>
        <div className="absolute right-0 top-0 h-full w-3/5 hidden md:block">
          <Image
            src="/saeda.png"
            alt="Saeda Mughari"
            fill
            className="object-cover object-center filter grayscale"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-[#121212] opacity-20"></div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />
      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}

      <Education />

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Home;
