import React from "react";
import { teamData } from "../data/team";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#2d4a5a] to-[#1a2a32]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeSlideIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over a decade, we've been crafting exceptional grooming
            experiences that blend timeless tradition with contemporary style.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6 opacity-0 animate-fadeSlideIn">
            <h3 className="text-3xl font-bold text-white">
              Precision Meets Passion
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2013, Cutting Edge began as a single-chair barbershop
              with a simple mission: to provide every client with an
              unparalleled grooming experience.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, we've grown into a team of skilled professionals who share
              a common passion for the art of barbering. We believe that a great
              haircut isn't just about looking good—it's about feeling
              confident.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-bold text-amber-400">2,500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-bold text-amber-400">12+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div
            className="opacity-0 animate-fadeSlideIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group rounded-2xl overflow-hidden border border-gray-600 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
              {/* Image Container */}
              <div className="relative h-80 md:h-96 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1671750145646-0f4d791b8025?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Modern barber shop interior with professional styling chairs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#16222A]/80 via-transparent to-[#16222A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-out" />
              </div>

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-light text-center">
                  Our Modern Barber Shop
                </p>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div
          className="opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Barbers
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our skilled team brings together decades of experience and a
              shared passion for perfection.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((barber, index) => (
              <div
                key={barber.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group"
              >
                {/* Barber Image */}
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Barber Info */}
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {barber.name}
                </h4>
                <p className="text-amber-400 font-semibold mb-3">
                  {barber.role}
                </p>

                {/* Experience & Specialty */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                    ⭐ {barber.experience}
                  </span>
                  <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                    ✂️ {barber.specialty}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {barber.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div
          className="mt-20 opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-3">Precision</h4>
              <p className="text-gray-300">
                Every cut is executed with meticulous attention to detail and
                perfection.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-4">💎</div>
              <h4 className="text-xl font-bold text-white mb-3">Quality</h4>
              <p className="text-gray-300">
                Using premium products and techniques to ensure exceptional
                results.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-3">Community</h4>
              <p className="text-gray-300">
                Building relationships and serving our local community with
                pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
