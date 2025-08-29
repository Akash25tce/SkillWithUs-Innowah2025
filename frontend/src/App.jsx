import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/About"; // Add this import
import PricingPage from "./pages/Pricing"; // Add this import

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Add this route */}
        <Route path="/pricing" element={<PricingPage />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;