import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaHtml5, FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiMysql, SiMongodb, SiFlutter, SiPostgresql } from "react-icons/si";
import profile from "/public/images/profile.png";
import resume from "/public/sujal-cv.pdf";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      className="relative bg-[#F6F1EB] min-h-screen flex items-center pt-36 pb-36"
    >
      <div style={{
        position: "absolute", inset: 0,
        overflow: "hidden", pointerEvents: "none", zIndex: 0,
      }}>
        <div style={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          width: 1300,
          height: 1300,
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          transform: "translateY(-50%) rotate(45deg)",
          borderRadius: 130,
        }} />
      </div>

      {/* ── Two-column grid (same container as other sections) ── */}
      <div
        className="relative container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-76 items-center"
        style={{ zIndex: 10 }}
      >

        {/* ════════════════════════════
            LEFT — Text (mobile: order-2, desktop: order-1)
        ════════════════════════════ */}
        <section className="order-2 lg:order-1">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: 20,
              color: "#111827",
              letterSpacing: "-0.02em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "60px" }}>Sujal Thapa </span><br /><br /> Cloud &amp; Full-Stack{" "}
            <span style={{ background: "#d9f99d", padding: "0 4px", borderRadius: 4 }}>
              Technology
            </span>{" "}
            Learner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              color: "#6b7280", fontSize: 14, marginBottom: 28,
              maxWidth: 300, lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Focused on Cloud Computing, Full-Stack Development, AI,
            Java DSA, and scalable system design.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 28 }}
          >
            <a
              href="#projects"
              style={{
                background: "#000", color: "#fff",
                padding: "12px 28px", borderRadius: 999,
                fontSize: 14, fontWeight: 500, textDecoration: "none",
                transition: "background 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#1f2937"}
              onMouseLeave={e => e.currentTarget.style.background = "#000"}
            >
              View Projects
            </a>

            <div style={{ color: "#9ca3af" }}>
              <svg fill="none" height="18" viewBox="0 0 48 24" width="40">
                <path d="M1 12H46M46 12L36 2M46 12L36 22"
                  stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>

            <a href={resume} target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: 13, color: "#6b7280",
                textDecoration: "underline", textUnderlineOffset: 3,
                fontFamily: "'Inter', sans-serif",
              }}>
              Resume ↗
            </a>
          </motion.div>

          {/* Divider + tech stack + socials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            style={{ paddingTop: 20, borderTop: "1px solid #e5e7eb" }}
          >
            <p style={{
              color: "#9ca3af", fontSize: 12, marginBottom: 14,
              fontFamily: "'Inter', sans-serif",
            }}>
              Technologies I work with
            </p>

            {/* ── Auto-sliding tech ticker ─────────────────────────────
                techs is defined once; [...techs, ...techs] doubles it so
                translateX(-50%) always = exactly one copy → seamless loop
                no bounce, no jump, works for any list length.
            ─────────────────────────────────────────────────────────── */}
            {(() => {
              const techs = [
                { Icon: FaHtml5, label: "HTML", color: "#E44D26" },
                { Icon: FaReact, label: "React", color: "#61DAFB" },
                { Icon: FaNodeJs, label: "Node", color: "#68A063" },
                { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
                { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
                { Icon: SiFlutter, label: "Flutter", color: "#02569B" },
                { Icon: FaPython, label: "Python", color: "#3776AB" },
                { Icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
                { Icon: FaAws, label: "AWS", color: "#FF9900" },
                { Icon: FaGithub, label: "GitHub", color: "#181717" },
                { Icon: FaDocker, label: "Docker", color: "#2496ED" },
              ];
              return (
                <div style={{ overflow: "hidden", width: "100%", marginBottom: 14 }}>
                  <div className="tech-ticker">
                    {[...techs, ...techs].map(({ Icon, label, color }, i) => (
                      <div key={i} className="tech-ticker-item">
                        <Icon style={{ color, fontSize: 16 }} />
                        <span style={{
                          fontWeight: 700, fontSize: 13,
                          color: "#374151", fontFamily: "'Inter', sans-serif",
                          whiteSpace: "nowrap",
                        }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: "https://www.linkedin.com/in/sujal-thapa-47880530b/", Icon: FaLinkedinIn, hc: "#0A66C2" },
                { href: "https://github.com/Sujal-Thapa1", Icon: FaGithub, hc: "#171515" },
                { href: "https://www.instagram.com/be_uni.que__/", Icon: FaInstagram, hc: "#E4405F" },
                { href: "https://x.com/SujalThapa304", Icon: FaXTwitter, hc: "#1DA1F2" },
              ].map(({ href, Icon, hc }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  style={{
                    width: 30, height: 30, borderRadius: "50%",
                    border: "1px solid #e5e7eb",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#6b7280", fontSize: 12, textDecoration: "none",
                    transition: "color .18s, border-color .18s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = hc; e.currentTarget.style.borderColor = hc; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════
            RIGHT — Visual (mobile: order-1 = shows first on mobile)
        ════════════════════════════ */}
        <section
          className="order-1 lg:order-2"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 460,
            alignSelf: "stretch",
          }}>

          {/* ── ORIGINAL THREE-CIRCLE DESIGN ────────────────────────
            Blue (top-left), Orange (top-right), Purple (bottom-left).
            Circles extend OUTSIDE the image bounds so they’re always
            visible regardless of image transparency.
            All sizes are responsive via CSS media queries below.
          ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero-circles-wrapper"
          >
            {/* Blue — top-left, extends outside image boundary */}
            <div className="hero-circle-blue" />

            {/* Orange — top-right, extends outside image boundary */}
            <div className="hero-circle-orange" />

            {/* Purple — bottom-left, extends outside image boundary */}
            <div className="hero-circle-purple" />

            {/* Profile image in front of all circles */}
            <motion.img
              src={profile}
              alt="Sujal Thapa"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-profile-img"
              style={{
                position: "relative",
                top: "260px",
                height: "1000px",
                width: "1000px",
                zIndex: 10,
                borderRadius: "50%",
                objectFit: "contain",
                filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.14))",
              }}
            />
          </motion.div>

          {/* ── CARD 1: "Active now" pill — left side ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.48 },
              x: { duration: 0.5, delay: 0.48 },
              y: { duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.48 },
            }}
            style={{
              position: "absolute", top: "22%", left: "-5%",
              background: "rgba(255,255,255,0.95)",
              borderRadius: 999, padding: "6px 12px 6px 14px",
              display: "flex", alignItems: "center", gap: 6,
              border: "1px solid rgba(243,244,246,0.7)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              backdropFilter: "blur(10px)", zIndex: 20, whiteSpace: "nowrap",
            }}
          >
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22c55e", flexShrink: 0,
              animation: "hpulse 2s infinite",
            }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: "#374151", fontFamily: "'Inter', sans-serif" }}>
              Active now
            </span>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              overflow: "hidden", marginLeft: 3,
              border: "2px solid #e5e7eb", flexShrink: 0,
            }}>
              <img src={profile} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </motion.div>

          {/* ── CARD 2: Chart + "Application Developer Intern" pill — top-right ── */}
          <motion.div
            initial={{ opacity: 0, x: 18, y: -10 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.54 },
              x: { duration: 0.5, delay: 0.54 },
              y: { duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 },
            }}
            style={{
              position: "absolute", top: "4%", right: "-2%",
              display: "flex", flexDirection: "column",
              alignItems: "flex-end", gap: 8, zIndex: 30,
            }}
          >
            <div style={{
              background: "#fff", padding: 8, borderRadius: 10,
              boxShadow: "0 6px 18px rgba(0,0,0,0.07)", border: "1px solid #f3f4f6",
            }}>
              <svg fill="none" height="15" viewBox="0 0 24 24" width="15">
                <path d="M3 17L9 11L13 15L21 7" stroke="#1a1a1a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M18 7H21V10" stroke="#1a1a1a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div style={{
              background: "#bef264", color: "#000",
              padding: "6px 14px", borderRadius: 999,
              fontSize: 10, fontWeight: 700,
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
              fontFamily: "'Inter', sans-serif",
              textAlign: "center",
            }}>
              <span>Application Developer Intern</span>
              <span style={{ fontSize: 8, fontWeight: 600, opacity: 0.75 }}>EMEYC PVT LTD</span>
            </div>
          </motion.div>

          {/* ── CARD 3: Metrics — right-middle, floats at a slower pace ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.62 },
              x: { duration: 0.5, delay: 0.62 },
              y: { duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 },
            }}
            style={{
              position: "absolute", top: "38%", right: "-8%",
              background: "#fff", borderRadius: 12,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "12px 14px", width: 168, zIndex: 20,
              border: "1px solid #f3f4f6",
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              {[
                { label: "Projects", val: "+15", sub: "+25%", w: "70%", c: "#22c55e" },
                { label: "Skills", val: "+12", sub: "+18%", w: "40%", c: "#d1d5db" },
              ].map(({ label, val, sub, w, c }) => (
                <div key={label} style={{ flex: 1 }}>
                  <p style={{
                    fontSize: 8, fontWeight: 700, color: "#9ca3af",
                    textTransform: "uppercase", marginBottom: 7,
                    letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif",
                  }}>{label}</p>
                  <div style={{ height: 4, background: "#f3f4f6", borderRadius: 999, marginBottom: 7, overflow: "hidden" }}>
                    <div style={{ background: c, height: "100%", width: w }} />
                  </div>
                  <p style={{ fontSize: 9, fontWeight: 800, color: "#111827", fontFamily: "'Inter', sans-serif" }}>
                    {val} <span style={{ color: "#22c55e", fontWeight: 600 }}>({sub})</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CARD 4: New follower — bottom-right, fast flutter ── */}
          <motion.div
            initial={{ opacity: 0, x: 14, y: 14 }}
            animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.72 },
              x: { duration: 0.5, delay: 0.72 },
              y: { duration: 2.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2 },
            }}
            className="hero-card-github"
            style={{
              position: "absolute", bottom: "4%", right: "0%",
              display: "flex", alignItems: "center", gap: 10, zIndex: 30,
            }}
          >
            <div style={{ position: "relative" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                border: "3px solid #fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.11)",
                background: "#f3f4f6",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <FaGithub style={{ fontSize: 18, color: "#374151" }} />
              </div>
              <div style={{
                position: "absolute", top: -3, right: -62,
                background: "rgba(243,244,246,0.94)",
                backdropFilter: "blur(8px)", padding: "3px 8px",
                borderRadius: 999, display: "flex", alignItems: "center", gap: 4,
                border: "1px solid #fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)", whiteSpace: "nowrap",
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#facc15" }} />
                <span style={{
                  fontSize: 6.5, fontWeight: 900,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  color: "#4b5563", fontFamily: "'Inter', sans-serif",
                }}>
                  MY PROJECTS
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── CARD 5: Calling pill — bottom-centre, slow gentle bob ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.82 },
              y: { duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
            }}
            className="hero-card-phone"
            style={{
              position: "absolute", bottom: -20,
              left: "50%", transform: "translateX(-50%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 8, zIndex: 30,
            }}
          >
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                position: "absolute", width: 62, height: 62,
                border: "1px solid #d1d5db", borderRadius: "50%",
                opacity: 0.35, animation: "hring 2s infinite",
              }} />
              <div style={{
                position: "absolute", width: 50, height: 50,
                border: "1px solid #d1d5db", borderRadius: "50%",
              }} />
              <div style={{
                position: "relative", width: 36, height: 36,
                background: "#fff", borderRadius: "50%",
                boxShadow: "0 6px 16px rgba(0,0,0,0.10)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid #f9fafb",
              }}>
                <svg fill="none" height="14" stroke="#111827" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
            </div>
            <div style={{
              background: "#d9f99d", padding: "6px 22px",
              borderRadius: 999, fontSize: 11, fontWeight: 900,
              boxShadow: "0 5px 14px rgba(0,0,0,0.08)", color: "#111827",
              fontFamily: "'Inter', sans-serif",
            }}>
              +91 9339271036
            </div>
          </motion.div>

        </section>
      </div>

      <style>{`
        /* ─── Hero: Three-Circle Responsive System ──────────────────────────
           Circles extend outside the image so all 3 are always visible.
           Breakpoints: desktop (>1024) | tablet (640-1024) | mobile (<640)
        ─────────────────────────────────────────────────────────────────── */

        .hero-circles-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 5;
          /* Desktop default */
          width: 420px;
          height: 460px;
        }

        /* Base circle styles */
        .hero-circle-blue,
        .hero-circle-orange,
        .hero-circle-purple {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
        }

        /* ── Desktop (> 1024px) ── */
        .hero-circle-blue   { top: -30px; left: -50px;  width: 190px; height: 190px; background: #5B8DEF; }
        .hero-circle-orange { top:  45px; right: -50px; width: 210px; height: 210px; background: #F2A65A; }
        .hero-circle-purple { bottom: 0;  left:  -80px;  width: 150px; height: 150px; background: #8B5CF6; }
        .hero-profile-img   { width: 280px; }

        /* ── Tablet (641px – 1024px) ── */
        @media (max-width: 1024px) {
          .hero-circles-wrapper { width: 340px; height: 380px; }
          .hero-circle-blue     { top: -24px; left: -36px; width: 150px; height: 150px; }
          .hero-circle-orange   { top:  36px; right: -36px; width: 170px; height: 170px; }
          .hero-circle-purple   { bottom: 0;  left: 16px;  width: 120px; height: 120px; }
          .hero-profile-img     { width: 230px; }
        }

        /* ── Mobile (≤ 640px) ── */
        @media (max-width: 640px) {
          .hero-circles-wrapper { width: 260px; height: 300px; }
          .hero-circle-blue     { top: -18px; left: -28px; width: 110px; height: 110px; }
          .hero-circle-orange   { top:  28px; right: -28px; width: 126px; height: 126px; }
          .hero-circle-purple   { bottom: 0;  left: 12px;  width:  90px; height:  90px; }
          .hero-profile-img     { width: 180px; }

          /* Phone & GitHub cards move to the LEFT on mobile */
          .hero-card-github {
            right: auto !important;
            left: 70% !important;
            bottom: 60px !important;
          }
          .hero-card-phone {
            left: 5% !important;
            transform: none !important;
            bottom: 5px !important;
            align-items: flex-start !important;
          }
        }

        /* ── Tech ticker (auto-sliding marquee) ── */
        .tech-ticker {
          display: flex;
          align-items: center;
          /* NO gap here — use margin-right on items instead so -50% is exact */
          width: max-content;
          animation: techSlide 22s linear infinite;
        }
        .tech-ticker-item {
          display: flex;
          align-items: center;
          gap: 6px;          /* icon ↔ label spacing */
          flex-shrink: 0;
          margin-right: 36px; /* trailing space on EVERY item incl. last of copy1 */
        }
        @keyframes techSlide {
          /* List doubled → -50% = exactly one copy's width = seamless loop */
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Pulse animations ── */
        @keyframes hpulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0.0); }
        }
        @keyframes hring {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50%       { transform: scale(1.1); opacity: 0.1; }
        }
        /* Force Roboto everywhere — overrides every inline 'Inter' */
        #home, #home * { box-sizing: border-box; font-family: 'Roboto', sans-serif !important; }
      `}</style>
    </section>
  );
}
