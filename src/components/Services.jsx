import React, { useState } from "react";
import { servicesData } from "../data/services";
import BookingModal from "./BookingModal";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ServiceCard from "./ServiceCard"; // Add this import

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.1,
    once: true,
  });

  const openBookingModal = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#1a2a32] to-[#2d4a5a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional grooming services tailored to your style. Experience
            the perfect blend of traditional techniques and modern trends.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onBookNow={openBookingModal}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of
              professional barbering.
            </p>
            <button
              onClick={() => openBookingModal("")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;
