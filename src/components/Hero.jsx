import React, { useState, useEffect } from "react";
import heroImg from "../assets/hero2.png";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openBookingModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#16222A] via-[#2d4a5a] to-[#3A6073] opacity-90"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />

        {/* Main hero image with parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 brightness-70 transition-transform duration-300 ease-out"
            style={{
              backgroundImage: `url(${heroImg})`,
              transform: `translate(${mousePosition.x * 0.3}px, ${
                mousePosition.y * 0.3
              }px) scale(1.1)`,
            }}
          />

          {/* Mobile optimization layer */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#16222A] to-transparent" />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16222A] via-transparent to-[#16222A]/80" />

        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto">
        {/* Main title with enhanced animation */}
        <div className="mb-8">
          <h1
            className={`text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              transform: `translate(${mousePosition.x * 0.1}px, ${
                mousePosition.y * 0.1
              }px)`,
            }}
          >
            <span className="block gradient-text">CUTTING</span>
            <span className="block text-white mt-2">EDGE</span>
          </h1>
        </div>

        {/* Subtitle with staggered animation */}
        <p
          className={`text-lg md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: "0.2s",
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px)`,
          }}
        >
          <span className="text-amber-400 font-semibold">Precision Cuts</span> •
          <span className="text-amber-400 font-semibold"> Modern Styles</span> •
          <span className="text-amber-400 font-semibold">
            {" "}
            Timeless Service
          </span>
        </p>

        {/* Buttons with enhanced interactions */}
        <div
          className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: "0.4s",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        >
          <button
            onClick={openBookingModal}
            className="group relative bg-amber-500 hover:bg-amber-600 cursor-pointer font-bold text-lg md:text-xl text-white px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-amber-500/25 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ease-out" />

            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2">
              <span>Book Your Cut</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </button>

          <button
            onClick={scrollToAbout}
            className="group relative bg-transparent border-2 border-white hover:border-amber-400 hover:bg-white/10 cursor-pointer font-bold text-lg md:text-xl text-white hover:text-amber-400 px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out backdrop-blur-sm"
          >
            <span className="relative flex items-center justify-center gap-2">
              <span>Our Story</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>

        {/* Additional CTA */}
        <div
          className={`mt-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <button
            onClick={scrollToServices}
            className="text-amber-400 hover:text-amber-300 font-semibold text-sm md:text-base underline underline-offset-4 transition-all duration-300 transform hover:scale-105"
          >
            View Our Services ↓
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1s" }}
      >
        <div className="text-center text-white/80">
          <div
            className="text-2xl animate-bounce-slow mb-2 transition-transform duration-300"
            style={{
              transform: `translateY(${mousePosition.y * 0.1}px)`,
            }}
          >
            ↓
          </div>
          <p className="text-sm font-light tracking-wider">Scroll to Explore</p>
        </div>
      </div>

      {/* Stats overlay for social proof */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <div className="grid grid-cols-2 gap-4 text-white text-sm">
            <div className="text-center">
              <div className="text-amber-400 font-bold text-lg">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-amber-400 font-bold text-lg">5★</div>
              <div className="text-gray-300">Reviews</div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService=""
      />
    </section>
  );
};

export default Hero;
