import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const CafitoApp = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Apply RTL styling for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Menu language={language} />
        <About language={language} />
        <Locations language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CafitoApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
