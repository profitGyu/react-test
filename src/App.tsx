import { Routes, Route } from "react-router-dom";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ScrollToTop from "@/components/layout/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
