"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MacbookScroll } from "../ui/page";
import { Card, Carousel } from "../ui/page1";
import { HoverEffect } from "../ui/page2";
const cards = [
  {
    src: "/do.png", // Use string path for image
    title: "Hi, I'm Lucas",
    category: "Full-Stack Developer",
    content: (
      <p className="text-white">
        I'm an 18-year-old full-stack web developer passionate about building
        modern, fast, and beautiful web apps.
      </p>
    ),
  },
  {
    src: "/123.jpg",
    title: "What I Use",
    category: "Technologies",
    content: (
      <p className="text-white">
        JavaScript / TypeScript • React • Next.js • Tailwind CSS • Material UI •
        MongoDB — I craft scalable, performant web apps with these tools.
      </p>
    ),
  },
  {
    src: "/456.jpg",
    title: "What I Love",
    category: "Creative Code",
    content: (
      <p className="text-white">
        I love bringing interfaces to life with smooth animations using Framer
        Motion, Three.js, and thoughtful transitions.
      </p>
    ),
  },
];
const hoverCards = [
  {
    title: "Responsive Design",
    description:
      "Crafting interfaces that look great on every screen — mobile, tablet, and desktop.",
    link: "/responsive-design",
  },
  {
    title: "SEO Optimization",
    description:
      "Building sites with clean, semantic code and meta best practices for maximum visibility.",
    link: "/seo-optimization",
  },
  {
    title: "Advanced Animations",
    description:
      "Using Framer Motion, GSAP, and Three.js to create smooth, engaging animations.",
    link: "/advanced-animations",
  },
  {
    title: "Modern UI/UX Design",
    description:
      "Designing pixel-perfect layouts using Tailwind CSS and Material UI.",
    link: "/modern-ui-ux",
  },
  {
    title: "Dead-Line Master",
    description: "Trust me on this one :)",
    link: "/modern-ui-ux",
  },
];

const Header = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  }, [menu]);

  return (
    <>
      {/* Intro animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.h1
              className="text-white text-5xl md:text-7xl font-bold tracking-wide"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Luka ZH
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      
      <header className="h-20 shadow-md   sticky top-0 z-40">
        <nav className="flex items-center justify-between h-full px-6 md:px-12">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-100">
            <span className="text-blue-600">Luka</span> ZH
          </h1>
          <IoMenu
            className="cursor-pointer text-3xl text-neutral-100"
            onClick={() => setMenu(true)}
          />
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
            />

            {/* Menu panel */}
            <motion.div
              key="menu"
              className="fixed top-0 right-0 z-50 w-64 h-screen bg-white p-8 shadow-xl"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex justify-end mb-6">
                <IoClose
                  className="text-3xl cursor-pointer text-neutral-800"
                  onClick={() => setMenu(false)}
                />
              </div>
              <ul className="space-y-6 font-semibold text-lg text-neutral-700">
                <li className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                  Home
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                  About
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                  Projects
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                  Contact
                </li>
              </ul>
              <div className="mt-10 flex justify-around text-2xl text-neutral-700">
                <FaGithub className="hover:text-black cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Featured Work / Cards */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-neutral-100">
          About Me
        </h2>
        <Carousel
          initialScroll={0}
          items={cards.map((card, i) => (
            <Card key={i} index={i} card={card} layout />
          ))}
        />
      </section>

      <HoverEffect items={hoverCards} />

      <div className="lg:hidden">
        <MacbookScroll />
      </div>
    </>
  );
};

export default Header;
