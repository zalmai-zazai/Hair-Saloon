import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ServiceCard = ({ service, index, onBookNow }) => {
  const [cardRef, isVisible] = useScrollAnimation({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={cardRef}
      className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
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
        onClick={() => onBookNow(service.name)}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
