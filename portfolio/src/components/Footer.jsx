import React, { useEffect, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { href: "https://www.linkedin.com/in/sujal-thapa-47880530b/", Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com/Sujal-Thapa1", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/be_uni.que__/", Icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/SujalThapa304", Icon: FaXTwitter, label: "X (Twitter)" },
];

export default function Footer() {
  const secRef = useRef(null);
  const bigRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bigRef.current,
        { clipPath: "inset(0 0 100% 0)", y: 24, opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: bigRef.current, start: "top bottom-=20", once: true },
          clearProps: "clipPath"
        });
    }, secRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={secRef} style={{
      background: "#1a1a2e",
      color: "#ffffff",
      padding: "100px 0 48px",
      position: "relative",
    }}>
      {/* Thin top accent */}
      <div style={{
        position: "absolute", top: 0, left: 40, right: 40,
        height: 1, background: "rgba(255,255,255,0.08)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>

        {/* Giant name — ZJ footer logo style */}
        <div ref={bigRef} style={{ marginBottom: 80 }}>
          <h2 className="zj-footer-title" style={{
            fontSize: "clamp(3.5rem, 14vw, 10rem)",
            fontWeight: 200, letterSpacing: "-0.05em", lineHeight: 0.9,
            color: "rgba(255,255,255,0.88)",
            margin: 0,
            paddingTop: "0.15em",  // Expands bounding box so "S" doesn't get clipped
            marginTop: "-0.15em",  // Counteracts padding so layout doesn't shift
          }}>
            Sujal<br />
            <span style={{ color: "rgba(118,152,220,0.7)" }}>Thapa</span>
          </h2>
        </div>

        {/* Middle row: links + social */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "3rem",
          paddingBottom: 64,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }} className="footer-grid">

          {/* Explore */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20
            }}>Explore</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["About", "#about"], ["Works", "#projects"], ["Education", "#education"], ["Contact", "#contact"]].map(([t, h]) => (
                <a key={t} href={h} style={{
                  fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)",
                  textDecoration: "none", transition: "color .2s", letterSpacing: ".01em",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20
            }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["sujalmangar304@gmail.com", "+91 9339271036", "Kalimpong, West Bengal"].map(v => (
                <p key={v} style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{v}</p>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20
            }}>Presence</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {socials.map(({ href, Icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
                  color: "rgba(255,255,255,0.55)", transition: "color .2s",
                  fontSize: 13, fontWeight: 300,
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                  <Icon style={{ fontSize: 14 }} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 28, flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", fontWeight: 400, letterSpacing: ".08em" }}>
            © 2025 Sujal Thapa — All rights reserved
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", fontWeight: 400, letterSpacing: ".08em" }}>
            Built with ❤️ by Sujal Thapa
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .footer-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}
