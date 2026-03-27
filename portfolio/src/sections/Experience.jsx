import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "2024 - Present",
    role: "Full Stack Learner & Developer",
    company: "Personal & Freelance Projects",
    desc: "Architecting high-performance web applications using the MERN stack. Developing premium front-end experiences with React, GSAP, and Tailwind. Building robust backend APIs and integrating modern cloud solutions.",
  },
  {
    period: "2023 - 2024",
    role: "Frontend Enthusiast",
    company: "Self-Taught & Hackathons",
    desc: "Explored advanced UI/UX patterns, mastered responsive design, and honed vanilla CSS/JS skills. Built several interactive prototypes focusing on sleek animations and optimal user journeys.",
  },
  {
    period: "2022 - 2023",
    role: "Foundations in Tech",
    company: "University Academic Pursuits",
    desc: "Focused on core computer science fundamentals, data structures, and algorithms. Started journey into web development with HTML, CSS, and basic JavaScript interactions.",
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate timeline items when they come into view
      gsap.from(itemsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      });
    }, sectionRef.current);
    
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        padding: "160px 80px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%" }}>
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            marginBottom: "80px",
          }}
        >
          Professional
          <br /> <span style={{ color: "rgba(255,255,255,0.4)" }}>Experience</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "40px",
                borderTop: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                paddingTop: i === 0 ? "40px" : "0",
              }}
            >
              {/* Period / Timeline marker */}
              <div>
                <span
                  style={{
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Role Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "rgba(118,152,220,0.8)",
                      margin: "8px 0 0 0",
                    }}
                  >
                    {exp.company}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.6)",
                    maxWidth: "600px",
                    margin: 0,
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* Responsive tweaks */}
<style>{`
  @media(max-width: 768px) {
    div[style*="gridTemplateColumns: 200px 1fr"] {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }
  }
`}</style>
    </div>
  );
}
