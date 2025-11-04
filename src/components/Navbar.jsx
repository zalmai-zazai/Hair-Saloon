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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="flex text-white justify-between items-center py-4 pt-8 px-8 sticky top-0 z-50 bg-[#16222A]/90 backdrop-blur-sm">
        <div>
          <h1 className="text-4xl font-bold">CUTTING EDGE</h1>
        </div>

        {/* Desktop Menu */}
        <div className="menu">
          <ul className="hidden md:flex gap-6 font-bold lg:text-lg uppercase">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-amber-400 transition duration-300 py-2"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl cursor-pointer hover:text-amber-400 transition duration-300 z-60"
        >
          {isOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-[#16222A] transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl uppercase font-bold">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-amber-400 transition duration-300 transform hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}

            {/* Book Now Button in Mobile Menu */}
            <button
              onClick={() => {
                scrollToSection("services");
                setIsOpen(false);
              }}
              className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full transition duration-300 transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
