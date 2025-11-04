import React from "react";
import Home from "./pages/Home";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#16222A] to-[#3A6073] min-h-screen">
      <ScrollProgress />
      <Home />
      <ScrollToTop />
    </div>
  );
};

export default App;
