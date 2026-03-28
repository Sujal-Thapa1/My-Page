import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Regular Stackable Sections ───
const SECTIONS_GROUP_1 = [
  { id: "about", Component: About, bg: "#F5F5F7", color: "#1a1a2e" },
  { id: "skills", Component: Skills, bg: "#FFFFFF", color: "#1a1a2e" },
];

const SECTIONS_GROUP_2 = [
  { id: "education", Component: Education, bg: "#F5F5F7", color: "#1a1a2e" },
  { id: "projects", Component: Projects, bg: "#0f0f11", color: "#ffffff" },
  { id: "contact", Component: Contact, bg: "#FFFFFF", color: "#1a1a2e" },
];

// ─── Individual stacked card component ───
function StackCard({ Component, bg, color, index, sectionId, isLastCard }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card || isLastCard) return;

    const stPin = ScrollTrigger.create({
      trigger: wrap,
      start: "bottom bottom",
      end: "+=100vh",
      pin: card,
      pinSpacing: false,
    });

    return () => {
      stPin.kill();
    }
  }, [isLastCard]);

  return (
    <div id={sectionId} ref={wrapRef} style={{ position: "relative", zIndex: 10 + index }}>
      <div
        ref={cardRef}
        style={{
          width: "100%",
          background: bg,
          color,
          borderRadius: "24px 24px 0 0",
          overflow: "hidden",
          transformOrigin: "top center",
          willChange: "transform, opacity, borderRadius",
          minHeight: "100vh",
          boxShadow: index > 0 ? "0 -2px 0 rgba(255,255,255,0.06) inset" : "none",
        }}
      >
        <Component />
      </div>
    </div>
  );
}

export default function App() {
  useLenis();
  const footerInnerRef = useRef(null);
  const footerWrapRef = useRef(null);
  const spacerRef = useRef(null);

  const expInnerRef = useRef(null);
  const expWrapRef = useRef(null);
  const expSpacerRef = useRef(null);

  const [footerHeight, setFooterHeight] = useState(400);
  const [expHeight, setExpHeight] = useState(1000); // Dynamic Experience height!

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!expWrapRef.current || !footerWrapRef.current) return;
    
    let timer;
    const ro = new ResizeObserver(() => {
      // Debounce the refresh to prevent pinning "bounce" issues during intense resizes / native scrollbar hiding
      clearTimeout(timer);
      timer = setTimeout(() => {
        setExpHeight(expWrapRef.current.getBoundingClientRect().height);
        setFooterHeight(footerWrapRef.current.getBoundingClientRect().height);
        ScrollTrigger.refresh();
      }, 150);
    });
    
    ro.observe(footerWrapRef.current);
    ro.observe(expWrapRef.current);
    
    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
  }, [isMobile]); // Re-measure if mobile state changes

  useEffect(() => {
    if (!footerInnerRef.current || !spacerRef.current || !expInnerRef.current || !expSpacerRef.current || isMobile) return;

    // ── FOOTER PARALLAX & TALL-FOOTER SCROLL FIX ──
    const overflowFoot = Math.max(0, footerHeight - window.innerHeight);

    const stFoot = ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      onUpdate(self) {
        const t = self.progress;
        // If footer is taller than screen, it starts anchored at bottom:0 (meaning its top is above the screen).
        // To show the top, we push it down by `overflowFoot` initially, then smoothly translate it UP as you scroll.
        // We add the 40px parallax offset so it still has that "Zetta Joule" reveal slide!
        gsap.set(footerInnerRef.current, {
          y: (overflowFoot + 40) * (1 - t)
        });
      },
    });

    // ── EXPERIENCE WIPE AND SCROLL ──
    // 1. As Skills leaves, Experience is revealed. It stays at y: 0.
    // 2. ONLY once Skills has completely left (spacer is fully occupying the viewport),
    //    we scroll Experience up exactly by its overflow amount!
    const overflowExp = Math.max(0, expHeight - window.innerHeight);

    const stExpScroll = ScrollTrigger.create({
      trigger: expSpacerRef.current,
      start: "top top", 
      end: "bottom bottom",
      scrub: true,
      onUpdate(self) {
        // Linearly translate up to simulate perfect native scrolling of the tall content
        gsap.set(expInnerRef.current, {
          y: -overflowExp * self.progress
        });
      },
    });

    // 3. Hide Experience when it is completely covered by Education
    const stExpVisibility = ScrollTrigger.create({
      trigger: expSpacerRef.current,
      start: "bottom top",
      onEnter: () => gsap.set(expInnerRef.current, { visibility: "hidden" }),
      onLeaveBack: () => gsap.set(expInnerRef.current, { visibility: "visible" })
    });

    const refresh = () => ScrollTrigger.refresh();
    setTimeout(refresh, 300);

    return () => {
      stFoot.kill();
      stExpScroll.kill();
      stExpVisibility.kill();
    }
  }, [footerHeight, expHeight]);

  return (
    <>
      <Navbar />
      {/* ── FIXED EXPERIENCE UNDER-LAYER (DESKTOP) ── */}
      {!isMobile && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1, height: "100vh", overflow: "visible", pointerEvents: "none",
          }}
        >
          <div ref={expInnerRef} style={{ width: "100%", pointerEvents: "auto", willChange: "transform", borderRadius: "24px 24px 0 0", overflow: "hidden", background: "#0f0f11", color: "#ffffff" }}>
            <div ref={expWrapRef}>
              <Experience />
            </div>
          </div>
        </div>
      )}

      {/* ── FIXED FOOTER (DESKTOP) ── */}
      {!isMobile && (
        <div
          style={{
            position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 0, background: "#1a1a2e", height: footerHeight, overflow: "hidden",
          }}
        >
          <div ref={footerWrapRef}>
            <div ref={footerInnerRef} style={{ transform: "translateY(40px)" }}>
              <Footer />
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN SCROLLING CONTENT FLOW ── */}
      <div style={{ position: "relative", zIndex: 2, fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: "#1a1a2e", background: "transparent", pointerEvents: "none" }}>

        {/* GROUP 1: Slides UP revealing Experience */}
        <div style={{ background: "#F8E8D5", position: "relative", zIndex: 10, pointerEvents: "auto" }}>
          <Hero />
          {SECTIONS_GROUP_1.map(({ id, Component, bg, color }, i) => (
            <StackCard
              key={"g1-" + i}
              sectionId={id}
              Component={Component}
              bg={bg}
              color={color}
              index={i}
              isLastCard={true} // Disabled overstacking pinning for Group 1 
            />
          ))}
        </div>

        {/* ── EXPERIENCE SPACER / NATIVE EXP BLOCK ── */}
        {!isMobile ? (
          <div
            ref={expSpacerRef}
            id="experience" // For navbar scroll anchor!
            style={{
              height: Math.max(window.innerHeight, expHeight), // Minimum 100vh, expanding to fit actual content!
              background: "transparent",
              pointerEvents: "none",
            }}
          />
        ) : (
          <div id="experience" style={{ position: "relative", zIndex: 10, background: "#0f0f11", color: "#ffffff", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
            <div ref={expWrapRef}><Experience /></div>
          </div>
        )}

        {/* GROUP 2: Slides UP covering Experience, ultimately revealing Footer */}
        <div style={{ position: "relative", zIndex: 20, pointerEvents: "auto" }}>
          {SECTIONS_GROUP_2.map(({ id, Component, bg, color }, i) => (
            <StackCard
              key={"g2-" + i}
              sectionId={id}
              Component={Component}
              bg={bg}
              color={color}
              index={i + SECTIONS_GROUP_1.length + 1}
              isLastCard={i === SECTIONS_GROUP_2.length - 1}
            />
          ))}
        </div>

        {/* ── FOOTER SPACER / NATIVE FOOTER BLOCK ── */}
        {!isMobile ? (
          <div ref={spacerRef} style={{ height: footerHeight, background: "transparent", pointerEvents: "none" }} />
        ) : (
          <div style={{ position: "relative", zIndex: 10, background: "#1a1a2e" }}>
            <div ref={footerWrapRef}><Footer /></div>
          </div>
        )}
      </div>
    </>
  );
}
