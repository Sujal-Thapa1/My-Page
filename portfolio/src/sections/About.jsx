import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── ZJ stat item ── */
const Stat = ({ value, label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{
      fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 200,
      letterSpacing: "-0.04em", color: "#1a1a2e", lineHeight: 1,
    }}>{value}</span>
    <span style={{
      fontSize: 12, fontWeight: 500, letterSpacing: "0.1em",
      textTransform: "uppercase", color: "#6b6e8a"
    }}>{label}</span>
  </div>
);

export default function About() {
  const secRef = useRef(null);
  const labelRef = useRef(null);
  const h2Ref = useRef(null);
  const paraRef = useRef(null);
  const statsRef = useRef(null);
  const imgRef = useRef(null);
  const hrTop = useRef(null);
  const hrBottom = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Divider lines draw in */
      [hrTop, hrBottom].forEach((r, i) =>
        gsap.fromTo(r.current, { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1, duration: 1.4, delay: i * 0.1, ease: "expo.out",
            scrollTrigger: { trigger: r.current, start: "top 90%", once: true }
          })
      );

      /* Label */
      gsap.fromTo(labelRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 88%", once: true }
        });

      /* Heading — clip reveal */
      gsap.fromTo(h2Ref.current,
        { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1,
          duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: h2Ref.current, start: "top 86%", once: true }
        });

      /* Paragraphs */
      gsap.fromTo(paraRef.current.querySelectorAll("p"),
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.14, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: paraRef.current, start: "top 85%", once: true }
        });

      /* Stats */
      gsap.fromTo(statsRef.current.querySelectorAll("div > span:first-child"),
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true }
        });

      /* Image */
      gsap.fromTo(imgRef.current,
        { scale: 0.93, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "expo.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 86%", once: true }
        });
    }, secRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} style={{
      background: "transparent", padding: "120px 0 0", minHeight: "100vh",
    }}>
      <hr ref={hrTop} style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.09)", margin: "0 40px", transform: "scaleX(0)" }} />

      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "100px 40px 120px",
      }}>
        {/* Top row: label + heading */}
        <div style={{
          display: "grid", gridTemplateColumns: "220px 1fr",
          gap: "4rem", marginBottom: 80,
          alignItems: "start",
        }}>
          <span ref={labelRef} className="zj-label" style={{
            paddingTop: 10, opacity: 0,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#6b6e8a",
          }}>
            About Me
          </span>

          <h2 ref={h2Ref} style={{
            fontSize: "clamp(2.4rem,5.5vw,5rem)",
            fontWeight: 200, letterSpacing: "-0.04em",
            lineHeight: 1.08, color: "#1a1a2e",
            opacity: 0,
          }}>
            Building Software That<br />Matters
          </h2>
        </div>

        {/* Content grid: text left, image right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }} className="about-grid">

          {/* Left: paragraphs + stats */}
          <div>
            <div ref={paraRef} style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 60 }}>
              <p style={{
                fontSize: "clamp(1rem,1.3vw,1.15rem)",
                fontWeight: 300, color: "#4a4c6a", lineHeight: 1.75,
              }}>
                I’m a passionate tech enthusiast with a strong interest in cloud computing, AI-driven applications, and web automation. I enjoy learning and working with modern technologies to build scalable, efficient, and impactful solutions.
              </p>
              <p style={{
                fontSize: "clamp(0.9rem,1.15vw,1.05rem)",
                fontWeight: 300, color: "#6b6e8a", lineHeight: 1.75,
              }}>
                I focus on continuous learning and hands-on development, aiming to create intelligent systems that solve real-world problems and deliver meaningful user experiences.
              </p>
              <p style={{
                fontSize: "clamp(0.9rem,1.15vw,1.05rem)",
                fontWeight: 300, color: "#6b6e8a", lineHeight: 1.75,
              }}>
                My long-term vision is to become a versatile developer capable of building end-to-end intelligent systems
                that combine software engineering, automation, and AI to solve real-world problems at scale.
              </p>
            </div>

            {/* Stats row */}
            <div ref={statsRef} style={{
              display: "flex", gap: "3rem", flexWrap: "wrap",
              paddingTop: 48,
              borderTop: "1px solid rgba(0,0,0,0.09)",
            }}>
              <Stat value="3+" label="Years Learning" />
              <Stat value="5+" label="Projects Built" />
              <Stat value="12+" label="Technologies" />
              <Stat value="2+" label="Team Collab" />
            </div>
          </div>

          {/* Right: Photo */}
          <div ref={imgRef} style={{
            borderRadius: 20, overflow: "hidden",
            background: "#e8e8ee",
            aspectRatio: "4/5",
            opacity: 0,
            boxShadow: "0 32px 64px rgba(0,0,0,0.08)",
          }}>
            <img
              src="/images/about.jpeg"
              alt="Sujal Thapa"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top center",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <hr ref={hrBottom} style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.09)", margin: "0 40px", transform: "scaleX(0)" }} />

      <style>{`
        @media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; gap:3rem !important; } }
      `}</style>
    </section>
  );
}
