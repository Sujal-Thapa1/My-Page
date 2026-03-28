import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Project Data — adapted to ZJ "Solutions" card pattern ─── */
const projects = [
  {
    sector: "Transportation",
    title: "MSU Shuttle Service",
    desc: "A smart campus transportation management system for faculty, admins and drivers — real-time tracking, booking, and route optimisation.",
    image: "/images/msu-shuttle.png",
    link: "https://github.com/orgs/MSU-Shuttle-Service/repositories",
    status: "In Progress",
  },
  {
    sector: "Education",
    title: "MSU CSE Department Website",
    desc: "Official website for the CSE Department: academics, faculty directory, research highlights and event calendar — built with React & Vite.",
    image: "/images/cse-website.jpeg",
    link: "https://github.com/msu-scse/scse-website",
    status: "In Progress",
  },
  {
    sector: "Creative Tools",
    title: "Gradient Color Maker",
    desc: "A browser-based gradient generator: live CSS output, copy-to-clipboard, and real-time preview — showcasing clean React state management.",
    image: "/images/gradient-maker.png",
    link: "https://github.com/Sujal-Thapa1/React-Projects",
    status: "Completed",
  },
];

/* ─── IMAGE card (dark photo) ─── */
const ImageCard = ({ project }) => (
  <div style={{
    flex: "0 0 auto",
    width: "clamp(260px,34vw,440px)",
    height: "clamp(320px,44vw,560px)",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    background: "#1a1a1e",
  }} className="proj-slide-card">
    <img
      src={project.image}
      alt={project.title}
      style={{
        width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
        display: "block",
        transition: "transform .6s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    />
    {/* Status badge */}
    <div style={{
      position: "absolute", top: 16, right: 16,
      padding: "4px 12px",
      borderRadius: 99,
      fontSize: 10, fontWeight: 600, letterSpacing: "0.1em",
      textTransform: "uppercase",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      color: project.status === "Completed" ? "#4ade80" : "#fbbf24",
      background: project.status === "Completed"
        ? "rgba(34,197,94,0.15)"
        : "rgba(251,191,36,0.15)",
      border: `1px solid ${project.status === "Completed" ? "rgba(74,222,128,0.3)" : "rgba(251,191,36,0.3)"}`,
    }}>
      {project.status}
    </div>
  </div>
);

/* ─── TEXT card (dark taupe, like ZJ solution cards) ─── */
const TextCard = ({ project, onNext, isLast }) => (
  <div style={{
    flex: "0 0 auto",
    width: "clamp(260px,36vw,460px)",
    height: "clamp(320px,44vw,560px)",
    borderRadius: 20,
    background: "#2a2828",
    padding: "32px 36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  }} className="proj-slide-card proj-text-card">
    {/* Sector label */}
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 7, height: 7, borderRadius: "50%",
        background: "rgba(255,255,255,0.6)",
      }} />
      <span style={{
        fontSize: 12, fontWeight: 400,
        color: "rgba(255,255,255,0.6)",
        letterSpacing: "0.04em",
      }}>{project.sector}</span>
    </div>

    {/* Title + description */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, padding: "24px 0" }}>
      <h3 style={{
        fontSize: "clamp(1.2rem,2.2vw,1.75rem)",
        fontWeight: 300,
        color: "#ffffff",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      }}>{project.title}</h3>
      <p style={{
        fontSize: 13, fontWeight: 300,
        color: "rgba(255,255,255,0.55)",
        lineHeight: 1.7,
      }}>{project.desc}</p>
    </div>

    {/* Footer: "Learn More" + next arrow — exactly like ZJ */}
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 13, fontWeight: 400,
          color: "rgba(255,255,255,0.6)",
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "color .2s, gap .2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.color="#fff"; e.currentTarget.style.gap="12px"; }}
        onMouseLeave={e => { e.currentTarget.style.color="rgba(255,255,255,0.6)"; e.currentTarget.style.gap="8px"; }}
      >
        <span style={{ fontSize: 11, opacity: 0.5 }}>↳</span>
        View Project
      </a>

      {/* Next arrow — ZJ's signature square button */}
      <button
        onClick={onNext}
        style={{
          width: 40, height: 40,
          borderRadius: 8,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          color: "#ffffff",
          transition: "background .2s, transform .2s",
          flexShrink: 0,
        }}
        onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.2)"; e.currentTarget.style.transform="scale(1.08)"; }}
        onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.transform="scale(1)"; }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
);

/* ─── Main Projects section ─── */
export default function Projects() {
  /* Embla carousel */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  /* Reveal animations */
  const secRef    = useRef(null);
  const introRef  = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Big intro text reveal */
      gsap.fromTo(
        introRef.current.querySelectorAll(".proj-reveal"),
        { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1,
          stagger: 0.12, duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: introRef.current, start: "top 82%", once: true },
        }
      );

      /* Slider fade-in */
      gsap.fromTo(sliderRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: sliderRef.current, start: "top 88%", once: true },
        }
      );
    }, secRef.current);
    return () => ctx.revert();
  }, []);

  /* Build flat slide array: [img, text, img, text, ...] */
  const slides = projects.flatMap(p => [
    { type: "image", project: p },
    { type: "text",  project: p },
  ]);

  return (
    <section
      ref={secRef}
      style={{
        background: "transparent",   /* StackCard wrapper provides #0f0f11 bg */
        padding: "120px 0 100px",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* ─── Intro text — exactly like ZJ "Together, these capabilities..." ─── */}
      <div
        ref={introRef}
        style={{
          maxWidth: 1240, margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "4rem",
          marginBottom: 80,
          alignItems: "start",
        }}
        className="proj-header-grid"
      >
        {/* Left col: label */}
        <div style={{ paddingTop: 8 }}>
          <span className="proj-reveal" style={{
            display: "block",
            fontSize: 11, fontWeight: 500,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 12,
          }}>Portfolio</span>
          <span className="proj-reveal" style={{
            display: "block",
            fontSize: 11, fontWeight: 400,
            color: "rgba(255,255,255,0.2)",
            lineHeight: 1.6,
          }}>Selected Works<br />2023 – 2025</span>
        </div>

        {/* Right col: big descriptor (ZJ's key sentence) */}
        <p className="proj-reveal" style={{
          fontSize: "clamp(1.4rem,2.8vw,2.5rem)",
          fontWeight: 300,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "-0.02em",
          lineHeight: 1.45,
          maxWidth: 720,
        }}>
          Together, these projects unlock solutions across key domains —
          campus mobility, academic platforms, developer tooling, and
          creative interfaces — built for real-world impact.
        </p>
      </div>

      {/* ─── Horizontal card slider — ZJ Solutions style ─── */}
      <div ref={sliderRef} style={{ opacity: 0 }}>
        {/* Navigation arrows — above slider, right-aligned */}
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          marginBottom: 24,
        }}>
          <button
            onClick={scrollPrev}
            style={{
              width: 44, height: 44, borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background="rgba(255,255,255,0.16)")}
            onMouseLeave={e => (e.currentTarget.style.background="rgba(255,255,255,0.08)")}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={scrollNext}
            style={{
              width: 44, height: 44, borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background="rgba(255,255,255,0.16)")}
            onMouseLeave={e => (e.currentTarget.style.background="rgba(255,255,255,0.08)")}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Embla viewport — full bleed like ZJ */}
        <div
          ref={emblaRef}
          data-cursor="drag"
          style={{ overflow: "hidden", paddingLeft: 40 }}
          className="proj-embla-viewport"
        >
          <div style={{
            display: "flex",
            gap: 20,
            userSelect: "none",
          }}>
            {slides.map((slide, i) =>
              slide.type === "image"
                ? <ImageCard key={i} project={slide.project} />
                : <TextCard  key={i} project={slide.project} onNext={scrollNext} isLast={i === slides.length - 1} />
            )}
          </div>
        </div>
      </div>

      {/* ─── Slide counter ─── */}
      <div style={{
        maxWidth: 1240, margin: "32px auto 0",
        padding: "0 40px",
        display: "flex", alignItems: "center", gap: 16,
      }}>
        {projects.map((_, i) => (
          <div key={i} onClick={() => emblaApi?.scrollTo(i * 2)}
            style={{
              width: 24, height: 1,
              background: "rgba(255,255,255,0.25)",
              cursor: "pointer",
              transition: "background .2s, width .3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.width="40px"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.25)"; e.currentTarget.style.width="24px"; }}
          />
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          .proj-header-grid{ grid-template-columns:1fr !important; gap:2rem !important; }
        }
        @media(max-width:640px){
          /* Cards take ~82% of screen width so one fills view at a time */
          .proj-slide-card {
            width: 82vw !important;
          }
          /* Image card: fixed proportional height */
          .proj-slide-card:not(.proj-text-card) {
            height: 72vw !important;
            min-height: 220px !important;
            max-height: 320px !important;
          }
          /* Text card: let height grow to fit all content */
          .proj-text-card {
            height: auto !important;
            min-height: 280px !important;
            padding: 22px 20px !important;
          }
          /* Start cards flush to the edge on mobile */
          .proj-embla-viewport {
            padding-left: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
