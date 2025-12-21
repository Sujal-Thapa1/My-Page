import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },

    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 'home'; // Default to home
      const navbarHeight = 64; // Approximate height of the fixed navbar

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in view and its top is above or at the navbar's bottom
          // AND it's not scrolled completely past.
          if (rect.top <= navbarHeight) {
            currentActive = link.id;
            break;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4"> {/* Container for toggle and logo */}
          <div className="text-2xl font-bold">
            <a href="#home">Sujal Thapa</a>
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-gray-400 ${
                activeLink === link.id ? "text-blue-400" : ""
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${
                  activeLink === link.id ? "text-blue-400" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
