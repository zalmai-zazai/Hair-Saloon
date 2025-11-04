import React, { useState } from "react";
import { galleryData } from "../data/gallery";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["all", "fade", "beard", "classic", "modern"];

  const filteredGallery =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#2d4a5a] to-[#1a2a32]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeSlideIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse through our portfolio of precision cuts and transformations.
            Every style tells a story of craftsmanship.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.2s" }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category === "all"
                ? "All Work"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fadeSlideIn"
          style={{ animationDelay: "0.4s" }}
        >
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                  <div className="mt-3 inline-block bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeSlideIn">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        )}

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
              See something you like? Book your appointment and let us create
              your perfect style.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Book Your Style
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
