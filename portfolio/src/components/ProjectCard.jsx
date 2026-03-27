import React, { useRef } from "react";
import { gsap } from "gsap";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const glowRef = useRef(null);
  const titleRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, { y: -8, boxShadow: "0 32px 64px rgba(0,0,0,0.6)", duration: 0.4, ease: "power2.out" });
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.7, ease: "power2.out" });
    gsap.to(glowRef.current, { opacity: 1, duration: 0.4 });
    gsap.to(titleRef.current, { color: "#00daf8", duration: 0.3 });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, { y: 0, boxShadow: "0 8px 32px rgba(0,0,0,0.3)", duration: 0.5, ease: "power2.inOut" });
    gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: "power2.inOut" });
    gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    gsap.to(titleRef.current, { color: "#e5e2e1", duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: "#1a1a1a",
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid rgba(141,144,162,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        transition: "border-color 0.3s",
      }}
    >
      {/* Hover glow overlay */}
      <div
        ref={glowRef}
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 50% 0%, rgba(0,218,248,0.07), transparent 70%)",
          opacity: 0, pointerEvents: "none", zIndex: 1,
        }}
      />

      {/* Image */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1)", display: "block" }}
        />
        {/* Gradient overlay on image */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(26,26,26,0.8) 0%, transparent 50%)" }} />

        {/* Status chip — Zetta Joule style */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          background: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(12px)",
          padding: "4px 12px",
          borderRadius: 999,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          border: "1px solid rgba(0,218,248,0.2)",
          display: "flex", alignItems: "center", gap: 6,
          zIndex: 2,
        }}>
          <div style={{
            width: 5, height: 5, borderRadius: "50%",
            background: project.status === "finished" ? "#22c55e" : "#e9c176",
            animation: project.status !== "finished" ? "statusPulse 2s infinite" : "none",
          }} />
          <span style={{ color: project.status === "finished" ? "#22c55e" : "#e9c176" }}>
            {project.status === "finished" ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 28px 28px", flexGrow: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
        <h3
          ref={titleRef}
          style={{ fontSize: "clamp(1.1rem,1.6vw,1.3rem)", fontFamily: "Noto Serif, serif", fontWeight: 500, color: "#e5e2e1", marginBottom: 10, lineHeight: 1.3 }}
        >
          {project.title}
        </h3>
        <p style={{ color: "#9a9cb5", fontSize: 13, lineHeight: 1.75, marginBottom: 24, fontWeight: 300, flexGrow: 1 }}>
          {project.description}
        </p>

        {/* Links — Zetta Joule style split buttons */}
        <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                color: "#00daf8",
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
            >
              Live Demo
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              color: "#e9c176",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
          >
            GitHub
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
