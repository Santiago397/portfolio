import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { LanguageContext } from "./context/Languaje";

function App() {

  const [language, setLanguage] = useState(true)

  return (
    <div>
      <LanguageContext.Provider value={{ language, setLanguage }} >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
