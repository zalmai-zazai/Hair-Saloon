import React, { useState } from "react";
import { testimonialsData } from "../data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? "text-amber-400" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#1a2a32] to-[#2d4a5a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeSlideIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say
            about their experience at Cutting Edge.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Testimonial Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <div className="text-center">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                <StarRating rating={testimonialsData[currentIndex].rating} />
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed">
                "{testimonialsData[currentIndex].review}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img
                  src={testimonialsData[currentIndex].avatar}
                  alt={testimonialsData[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                />
                <div className="text-left">
                  <h4 className="text-white font-bold text-lg">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-amber-400 text-sm">
                    {testimonialsData[currentIndex].service}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonialsData[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg"
          >
            ›
          </button>
        </div>

        {/* Testimonial Dots Indicator */}
        <div
          className="flex justify-center space-x-3 mt-8 opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.4s" }}
        >
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentIndex
                  ? "bg-amber-500"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (for smaller screens) */}
        <div
          className="mt-20 opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            More Happy Clients
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition duration-300"
              >
                {/* Stars */}
                <StarRating rating={testimonial.rating} />

                {/* Review Excerpt */}
                <p className="text-gray-300 my-4 line-clamp-3">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-amber-400 text-xs">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className="mt-16 text-center opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-gray-300">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">98%</div>
              <div className="text-gray-300">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">2,500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">12+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
