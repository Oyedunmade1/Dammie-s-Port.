import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import { useState } from "react";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import ContactMe from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      className={`font-['Karla'] w-full h-full min-h-[100vh] bg-[#FCF2F4] ${
        darkMode && "dark"
      }`}
    >
      <div className="dark:bg-[#011627] ">
        <div className="bg-[#e01b84] dark:bg-black fixed z-10 min-w-full">
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
        </div>

        <section id="home" className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
          <Header />
        </section>

        <div className=" p-10">
          <section className={`w-full bg [#] py-20 ${darkMode ? "dark" : ""}`}>
            <Project darkMode={darkMode} />
          </section>
        </div>
        <div className=" p-10">
          <section>
            <About />
          </section>
        </div>
        <div className="">
          <section>
            <Services />
          </section>
        </div>
        <div className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
          <section>
            <Work />
          </section>
        </div>
        <div className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
          <section>
            <Skills />
          </section>
        </div>
        <div className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
          <section>
            <ContactMe />
          </section>
        </div>
        <div className="">
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
