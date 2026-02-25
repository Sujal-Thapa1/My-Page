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
    [],
  );

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentActive = "home";
      const navbarHeight = 72;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.getBoundingClientRect().top <= navbarHeight) {
          currentActive = navLinks[i].id;
          break;
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#007a9b]/90 backdrop-blur-md" : "bg-transparent"
        }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className={`text-3xl font-serif font-semibold tracking-wide ${
              isScrolled ? "text-white" : "text-gray-800"
            }`}
            onClick={close}>
            Sujal Thapa
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative pb-1 transition-all duration-300
                  ${isScrolled ? "text-white" : "text-gray-800"}
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                  after:h-[2px] after:bg-white after:transition-all after:duration-300
                  ${
                    activeLink === link.id
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}>
                {link.title}
              </a>
            ))}
          </div>

          {/* Hamburger — visible on mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`md:hidden z-[60] relative transition-colors duration-200 ${
              isOpen
                ? "text-white"
                : isScrolled
                  ? "text-white"
                  : "text-gray-700"
            }`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          /* Slide in from right */
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          /* Blurry glass background */
          background: "rgba(0, 40, 60, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
        /* Click backdrop to close */
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}>
        {/* Nav links — large, centred */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            width: "100%",
          }}>
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={close}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "18px 0",
                fontSize: 22,
                fontWeight: activeLink === link.id ? 700 : 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                color:
                  activeLink === link.id ? "#bef264" : "rgba(255,255,255,0.85)",
                borderBottom:
                  i < navLinks.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                transition: "color 0.2s",
                /* Stagger in when open */
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(12px)",
                transitionDelay: isOpen ? `${i * 0.05 + 0.15}s` : "0s",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "0.35s",
              }}>
              {link.title}
            </a>
          ))}
        </nav>

        {/* Bottom hint */}
        <p
          style={{
            position: "absolute",
            bottom: 32,
            color: "rgba(255,255,255,0.3)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
          Tap a link or ✕ to close
        </p>
      </div>
    </>
  );
};

export default Navbar;
