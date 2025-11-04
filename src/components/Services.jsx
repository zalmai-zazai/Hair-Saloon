import React, { useState } from "react";
import { servicesData } from "../data/services";
import BookingModal from "./BookingModal"; // Add this import

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBookingModal = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#1a2a32] to-[#2d4a5a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeSlideIn">
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
            <div
              key={service.id}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group opacity-0 animate-fadeSlideIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="inline-block bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              {/* Service Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <span className="text-amber-400 text-xl font-bold">
                  ${service.price}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center text-gray-400 mb-4">
                <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                  ⏱️ {service.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Book Button */}
              <button
                onClick={() => openBookingModal(service.name)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.6s" }}
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

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;
