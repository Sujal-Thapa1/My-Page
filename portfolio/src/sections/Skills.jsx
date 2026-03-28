import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaCloud,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiPostman } from "react-icons/si";
import { SiDocker, SiPostgresql, SiMongodb, SiDart } from "react-icons/si";
import { FaLinux, FaPython } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", Icon: FaHtml5, color: "#E44D26", pct: 92 },
  { name: "CSS3", Icon: FaCss3Alt, color: "#2965f1", pct: 88 },
  { name: "JavaScript", Icon: FaJsSquare, color: "#f7df1e", pct: 82 },
  { name: "React", Icon: FaReact, color: "#61DAFB", pct: 80 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8", pct: 60 },
  { name: "Node.js", Icon: FaNodeJs, color: "#68A063", pct: 70 },
  { name: "Express", Icon: SiExpress, color: "#555555", pct: 68 },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", pct: 55 },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", pct: 65 },
  { name: "GitHub", Icon: FaGithub, color: "#1a1a2e", pct: 80 },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37", pct: 70 },
  { name: "AWS", Icon: FaCloud, color: "#FF9900", pct: 55 },
  { name: "n8n", Icon: FaProjectDiagram, color: "#EA4B71", pct: 60 },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", pct: 50 },
  { name: "Linux", Icon: FaLinux, color: "#FCC624", pct: 75 },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", pct: 50 },
  { name: "Dart", Icon: SiDart, color: "#0175C2", pct: 50 },
  { name: "Python", Icon: FaPython, color: "#3776AB", pct: 70 },

];

/* Each skill row — ZJ's horizontal bar style */
const SkillRow = ({ skill, index }) => {
  const rowRef = useRef(null);
  const barRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(rowRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.9, delay: index * 0.055, ease: "expo.out",
        scrollTrigger: { trigger: rowRef.current, start: "top 90%", once: true }
      });

    gsap.fromTo(barRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1, duration: 1.1, delay: index * 0.055 + 0.2, ease: "expo.out",
        scrollTrigger: { trigger: rowRef.current, start: "top 90%", once: true }
      });
  }, [index]);

  const hover = e => { gsap.to(e.currentTarget, { x: 8, duration: .3, ease: "power2.out" }); };
  const leave = e => { gsap.to(e.currentTarget, { x: 0, duration: .4, ease: "power2.inOut" }); };

  return (
    <div ref={rowRef} onMouseEnter={hover} onMouseLeave={leave} style={{
      display: "flex", alignItems: "center", gap: 20,
      padding: "18px 0",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
      opacity: 0, cursor: "default",
    }}>
      {/* Icon */}
      <div style={{ width: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <skill.Icon style={{ fontSize: 22, color: skill.color }} />
      </div>

      {/* Name */}
      <span style={{
        width: 110, fontSize: 14, fontWeight: 400, color: "#1a1a2e",
        letterSpacing: "0.01em", flexShrink: 0,
      }}>{skill.name}</span>

      {/* Bar track */}
      <div style={{
        flex: 1, height: 1, background: "rgba(0,0,0,0.09)",
        position: "relative", overflow: "visible",
      }}>
        {/* Filled bar */}
        <div ref={barRef} style={{
          position: "absolute", left: 0, top: "50%", marginTop: -1,
          height: 2, width: `${skill.pct}%`,
          background: `linear-gradient(90deg,${skill.color},${skill.color}66)`,
          transformOrigin: "left center", transform: "scaleX(0)",
          borderRadius: 99,
        }} />
      </div>

      {/* Percentage */}
      <span style={{
        fontSize: 11, fontWeight: 500, color: "#6b6e8a",
        letterSpacing: "0.06em", width: 36, textAlign: "right",
      }}>{skill.pct}%</span>
    </div>
  );
};

export default function Skills() {
  const secRef = useRef(null);
  const labelRef = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 88%", once: true }
        });

      gsap.fromTo(h2Ref.current,
        { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: h2Ref.current, start: "top 86%", once: true }
        });
    }, secRef.current);
    return () => ctx.revert();
  }, []);

  const half = Math.ceil(skills.length / 2);

  return (
    <section ref={secRef} style={{ background: "transparent", padding: "120px 0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "4rem", marginBottom: 80, alignItems: "start" }}>
          <span ref={labelRef} style={{
            fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#6b6e8a", paddingTop: 10, opacity: 0,
          }}>Capabilities</span>

          <h2 ref={h2Ref} style={{
            fontSize: "clamp(2.4rem,5.5vw,5rem)",
            fontWeight: 200, letterSpacing: "-0.04em", lineHeight: 1.08,
            color: "#1a1a2e", opacity: 0,
          }}>
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Two-column skill list */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "0 80px",
        }} className="skills-grid">
          <div>{skills.slice(0, half).map((s, i) => <SkillRow key={s.name} skill={s} index={i} />)}</div>
          <div>{skills.slice(half).map((s, i) => <SkillRow key={s.name} skill={s} index={i + half} />)}</div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .skills-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
