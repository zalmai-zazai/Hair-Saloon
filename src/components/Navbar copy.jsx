import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="flex text-white justify-between items-center py-4 pt-8 px-8 sticky top-0 z-50 bg-[#16222A]/90 backdrop-blur-sm">
        <div>
          <h1 className="text-4xl font-bold">CUTTING EDGE</h1>
        </div>

        {/* Desktop Menu */}
        <div className="menu">
          <ul className="hidden md:flex gap-6 font-bold lg:text-xl uppercase">
            <li
              className="cursor-pointer hover:text-amber-400 transition duration-300"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-amber-400 transition duration-300"
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:text-amber-400 transition duration-300"
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </li>
            <li
              className="cursor-pointer hover:text-amber-400 transition duration-300"
              onClick={() => scrollToSection("testimonials")}
            >
              Reviews
            </li>
            <li
              className="cursor-pointer hover:text-amber-400 transition duration-300"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-amber-400 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl cursor-pointer hover:text-amber-400 transition duration-300"
        >
          ☰
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#16222A] z-40 flex flex-col items-center justify-center space-y-8 text-white text-2xl uppercase font-bold md:hidden animate-fadeSlideIn">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-amber-400 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-amber-400 transition duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="hover:text-amber-400 transition duration-300"
          >
            Gallery
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-amber-400 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-amber-400 transition duration-300"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-amber-400 transition duration-300"
          >
            Contact
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-3xl hover:text-amber-400 transition duration-300"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
