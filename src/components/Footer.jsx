import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16222A] border-t border-gray-700 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">CUTTING EDGE</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional barbering services with precision, quality, and
              style. Transforming looks and building confidence one cut at a
              time.
            </p>
            <div className="flex space-x-4">
              {["📘", "📷", "🐦", "💼"].map((icon, index) => (
                <button
                  key={index}
                  className="bg-gray-700 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                >
                  <span className="text-white">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-amber-400 transition duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Barber Street</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ hello@cuttingedge.com</p>
              <p>🕒 Mon-Sun: 9AM-7PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Cutting Edge Barber Shop. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <button className="hover:text-amber-400 transition duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-amber-400 transition duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
