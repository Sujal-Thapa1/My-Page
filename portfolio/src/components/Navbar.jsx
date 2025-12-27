import React, { useState, useEffect, useMemo } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = useMemo(
    () => [
      { id: "home", title: "Home" },
      { id: "about", title: "About" },
      { id: "skills", title: "Skills" },
      { id: "projects", title: "Projects" },
      { id: "education", title: "Education" },
      { id: "contact", title: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      let currentActive = "home";
      const navbarHeight = 72;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight) {
            currentActive = navLinks[i].id;
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1C1C1C]/90 backdrop-blur-md border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className={`text-3xl font-serif font-semibold tracking-wide ${isScrolled ? "text-gray-100" : "text-gray-800 hover:text-blue-500"}`}
        >
          Sujal Thapa
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                activeLink === link.id
                  ? isScrolled ? "text-white" : "text-gray-800 hover:text-blue-500"
                  : isScrolled
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-800 hover:text-blue-500"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${isScrolled ? "text-gray-200" : "text-gray-700"}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1C1C1C] border-t border-gray-700">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block text-sm uppercase tracking-wider ${
                  activeLink === link.id
                    ? "text-white"
                    : "text-gray-400"
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
