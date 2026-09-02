import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

/* ── ZJ letter-by-letter hover ── */
const ZJLink = ({ text, href, active, dark, navigate }) => {
  const ref = useRef(null);

  const onEnter = () => {
    const els = ref.current?.querySelectorAll("span");
    if (!els) return;
    gsap.killTweensOf(els);
    gsap.fromTo(els,
      { y: 0 },
      {
        y: -2, opacity: .55, stagger: .028, duration: .22, ease: "power2.out",
        onComplete() {
          gsap.to(els, { y: 0, opacity: 1, stagger: .028, duration: .28, ease: "power3.out" });
        }
      }
    );
  };

  const onClick = (e) => {
    e.preventDefault();
    /* absolute routes like /blog */
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }
    /* hash links — scroll if on home, navigate+scroll if on blog */
    const onHome = window.location.pathname === '/';
    if (onHome) {
      if (window.lenis) {
        window.lenis.scrollTo(href, { offset: 0, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (!el) return;
        if (window.lenis) window.lenis.scrollTo(el, { offset: 0, duration: 1.2 });
        else el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <a ref={ref} href={href} onMouseEnter={onEnter} onClick={onClick} style={{
      display: "inline-flex", textDecoration: "none",
      position: "relative",
    }}>
      {text.split("").map((c, i) => (
        <span key={i} style={{
          display: "inline-block",
          fontSize: 13, fontWeight: 400,
          fontFamily: "'Inter','Helvetica Neue',sans-serif",
          color: active
            ? (dark ? "#1a1a2e" : "rgba(255,255,255,1)")
            : (dark ? "rgba(26,26,46,.6)" : "rgba(255,255,255,.75)"),
          letterSpacing: ".02em",
        }}>{c === " " ? "\u00A0" : c}</span>
      ))}
      {active && (
        <span style={{
          position: "absolute", bottom: -4, left: 0, right: 0,
          height: 1,
          background: dark ? "rgba(26,26,46,.4)" : "rgba(255,255,255,.5)",
        }} />
      )}
    </a>
  );
};

const PORTFOLIO_LINKS = [
  { id: "home", title: "Home", href: "#home" },
  { id: "about", title: "About", href: "#about" },
  { id: "skills", title: "Skills", href: "#skills" },
  { id: "experience", title: "Experience", href: "#experience" },
  { id: "education", title: "Education", href: "#education" },
  { id: "projects", title: "Projects", href: "#projects" },
  { id: "contact", title: "Contact", href: "#contact" },
  { id: "blog", title: "Blog", href: "/blog" },
  // { id:"achievements", title:"Achievements", href:"/achievements" },
];

const BLOG_LINKS = [
  { id: "home", title: "← Portfolio", href: "/" },
  { id: "blog-top", title: "Blog", href: "#blog-top" },
];

const ACHIEVEMENTS_LINKS = [
  { id: "home", title: "← Portfolio", href: "/" },
  { id: "achievements-top", title: "Achievements", href: "#achievements-top" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnBlog = location.pathname.startsWith('/blog');
  const isOnAchievements = location.pathname.startsWith('/achievements');

  let LINKS = PORTFOLIO_LINKS;
  if (isOnBlog) LINKS = BLOG_LINKS;
  else if (isOnAchievements) LINKS = ACHIEVEMENTS_LINKS;

  const getInitialActive = () => {
    if (isOnBlog) return "blog-top";
    if (isOnAchievements) return "achievements-top";
    return "home";
  };

  const [active, setActive] = useState(getInitialActive());
  const [pastHero, setPast] = useState(false);
  const [scrolled, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  /* entrance */
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -64, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: .25, ease: "expo.out" });
  }, []);

  /* scroll tracking */
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScroll(y > 30);
      setPast(y > vh * .82);

      let cur = isOnBlog ? "blog-top" : (isOnAchievements ? "achievements-top" : "home");
      for (const l of LINKS) {
        if (!l.href.startsWith('#')) continue;
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 90) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ── derived style ── */
  const dark = pastHero;   // light-mode nav bg
  const navBg = dark
    ? `rgba(245,245,247,${scrolled ? ".92" : ".0"})`
    : `rgba(118,152,220,${scrolled ? ".1" : ".0"})`;
  const blurStyle = scrolled || dark
    ? { backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }
    : {};
  const borderBot = dark && scrolled
    ? "1px solid rgba(0,0,0,0.09)"
    : "1px solid transparent";
  const logoClr = dark ? "#1a1a2e" : "#fff";
  const ctaBg = dark ? "#1a1a2e" : "rgba(255,255,255,.15)";
  const ctaColor = dark ? "#ffffff" : "rgba(255,255,255,.95)";
  const ctaBorder = dark ? "1px solid transparent" : "1px solid rgba(255,255,255,.6)";

  return (
    <>
      <nav ref={navRef} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg, borderBottom: borderBot,
        ...blurStyle,
        transition: "background .5s, border-color .5s",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 32px", height: 66,
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 24,
        }}>
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
            {/* Concentric-ring mark (ZJ-style) */}
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="12" stroke={logoClr} strokeWidth="1.2" opacity=".9" />
              <circle cx="13" cy="13" r="8" stroke={logoClr} strokeWidth="1" opacity=".65" />
              <circle cx="13" cy="13" r="4" stroke={logoClr} strokeWidth=".8" opacity=".45" />
              <circle cx="13" cy="13" r="2" fill={logoClr} opacity=".75" />
            </svg>
            <span style={{
              fontSize: 15, fontWeight: 500,
              fontFamily: "'Inter','Helvetica Neue',sans-serif",
              color: logoClr, letterSpacing: ".02em",
              transition: "color .4s",
            }}>Sujal Thapa</span>
          </a>

          {/* Desktop links */}
          <div style={{
            display: "flex", alignItems: "center", gap: 32,
            flex: 1, justifyContent: "center",
          }} className="zj-desk-links">
            {LINKS.map(l => (
              <ZJLink key={l.id} text={l.title} href={l.href}
                active={active === l.id} dark={dark} navigate={navigate} />
            ))}
          </div>

          {/* Get in Touch CTA */}
          <a href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                if (window.lenis) window.lenis.scrollTo('#contact', { offset: 0, duration: 1.5 });
                else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/');
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (!el) return;
                  if (window.lenis) window.lenis.scrollTo(el, { offset: 0, duration: 1.2 });
                  else el.scrollIntoView({ behavior: 'smooth' });
                }, 350);
              }
            }}
            style={{
              flexShrink: 0,
              padding: "9px 20px",
              background: ctaBg, color: ctaColor, border: ctaBorder,
              borderRadius: 7, fontSize: 13, fontWeight: 500,
              fontFamily: "'Inter','Helvetica Neue',sans-serif",
              textDecoration: "none",
              letterSpacing: ".01em",
              cursor: "pointer",
              transition: "background .35s, color .35s, box-shadow .25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
            Get in Touch
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="menu"
            style={{
              display: "none", background: "none", border: "none",
              color: logoClr, cursor: "pointer", padding: 4,
            }}
            className="zj-ham"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 45,
        background: "rgba(248,232,213,.97)",
        backdropFilter: "blur(24px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 8,
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .45s cubic-bezier(.4,0,.2,1)",
      }} className="zj-mob-menu">
        {LINKS.map((l, i) => (
          <a key={l.id} href={l.href}
            onClick={(e) => {
              setOpen(false);
              if (l.href.startsWith('/')) {
                e.preventDefault();
                window.location.href = l.href;
              }
            }}
            style={{
              fontSize: 28, fontWeight: 300,
              fontFamily: "'Inter','Helvetica Neue',sans-serif",
              textDecoration: "none", padding: "16px 0", width: "100%", textAlign: "center",
              color: active === l.id ? "#1a1a2e" : "rgba(26,26,46,.5)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `opacity .45s ${i * .06 + .08}s, transform .45s ${i * .06 + .08}s, color .2s`,
            }}>
            {l.title}
          </a>
        ))}
      </div>

      <style>{`
        @media(max-width:860px){
          .zj-desk-links{ display:none !important; }
          .zj-ham{ display:block !important; }
          .zj-mob-menu{ display:flex !important; }
        }
        @media(min-width:861px){ .zj-mob-menu{ display:none !important; } }
      `}</style>
    </>
  );
}
