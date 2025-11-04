import React, { useState } from "react";

const BookingModal = ({ isOpen, onClose, selectedService }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    service: selectedService || "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  // Available dates (next 14 days)
  const getAvailableDates = () => {
    const dates = [];
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceSelect = (service) => {
    setBookingData({
      ...bookingData,
      service: service,
    });
    setCurrentStep(2);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setCurrentStep(4);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setBookingData({
      service: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
    });
    onClose();
  };

  // Service data (same as in Services component)
  const services = [
    { name: "Classic Haircut", price: 25, duration: "30 min" },
    { name: "Beard Trim", price: 15, duration: "20 min" },
    { name: "Haircut + Beard Combo", price: 35, duration: "45 min" },
    { name: "Kids Haircut", price: 20, duration: "25 min" },
    { name: "Senior Citizen", price: 18, duration: "30 min" },
    { name: "Style Consultation", price: 10, duration: "15 min" },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeSlideIn">
      <div className="bg-gradient-to-b from-[#1a2a32] to-[#2d4a5a] rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            {currentStep === 4 ? "Booking Confirmed!" : "Book Your Appointment"}
          </h2>
          <button
            onClick={resetForm}
            className="text-gray-400 hover:text-white text-2xl transition duration-300"
          >
            ✕
          </button>
        </div>

        {/* Progress Steps */}
        {currentStep < 4 && (
          <div className="flex justify-center space-x-4 p-4 bg-gray-800/50">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  step === currentStep
                    ? "bg-amber-500"
                    : step < currentStep
                    ? "bg-amber-400"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-6">
              Select Service
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceSelect(service.name)}
                  className="w-full text-left p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl border border-gray-600 hover:border-amber-500/50 transition duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-amber-400 transition duration-300">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {service.duration}
                      </p>
                    </div>
                    <div className="text-amber-400 font-bold text-lg">
                      ${service.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {currentStep === 2 && (
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Select Date & Time
            </h3>
            <p className="text-gray-400 mb-6">for {bookingData.service}</p>

            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Select Date
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {getAvailableDates().map((date, index) => (
                    <button
                      key={date}
                      onClick={() => setBookingData({ ...bookingData, date })}
                      className={`p-3 rounded-lg border transition duration-300 ${
                        bookingData.date === date
                          ? "bg-amber-500 border-amber-500 text-white"
                          : "bg-gray-700 border-gray-600 text-gray-300 hover:border-amber-500/50"
                      }`}
                    >
                      {new Date(date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {bookingData.date && (
                <div>
                  <label className="block text-white font-medium mb-3">
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData({ ...bookingData, time })}
                        className={`p-2 rounded-lg border transition duration-300 ${
                          bookingData.time === time
                            ? "bg-amber-500 border-amber-500 text-white"
                            : "bg-gray-700 border-gray-600 text-gray-300 hover:border-amber-500/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 text-gray-300 hover:text-white transition duration-300"
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                disabled={!bookingData.date || !bookingData.time}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Customer Information */}
        {currentStep === 3 && (
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-6">
              Your Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Appointment Summary */}
              <div className="bg-gray-700/50 rounded-xl p-4 mt-6">
                <h4 className="text-white font-semibold mb-2">
                  Appointment Summary
                </h4>
                <div className="text-gray-300 space-y-1 text-sm">
                  <p>
                    <strong>Service:</strong> {bookingData.service}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(bookingData.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Time:</strong> {bookingData.time}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 text-gray-300 hover:text-white transition duration-300"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white rounded-lg transition duration-300 flex items-center justify-center min-w-32"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Booking...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="p-6 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Booking Confirmed!
            </h3>
            <p className="text-gray-300 mb-2">
              Thank you, <strong>{bookingData.name}</strong>!
            </p>
            <p className="text-gray-300 mb-6">
              Your {bookingData.service} is scheduled for{" "}
              {new Date(bookingData.date).toLocaleDateString()} at{" "}
              {bookingData.time}.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              You'll receive a confirmation email shortly. See you soon!
            </p>
            <button
              onClick={resetForm}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
