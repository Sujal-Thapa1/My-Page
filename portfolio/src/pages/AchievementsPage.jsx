import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLenis } from "../hooks/useLenis";
import { ACHIEVEMENTS } from "../data/achievements";

gsap.registerPlugin(ScrollTrigger);

const BG_IMAGES = [
  "/images/blog/heroImage/coffee.jpg",
  "/images/blog/heroImage/dark.jpg",
  "/images/blog/heroImage/song.jpg",
  "/images/blog/heroImage/wide.jpg",
  "/images/blog/heroImage/filter.jpg"
];

const featured = ACHIEVEMENTS.find((p) => p.featured) || ACHIEVEMENTS[0];
const rest = ACHIEVEMENTS.filter((p) => !p.featured);

/* ── Single achievement card ── */
function AchievementCard({ item, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, delay: index * 0.1, ease: "expo.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        borderRadius: 18,
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        transition: "transform .35s ease, box-shadow .35s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
      }}
    >
      {/* Gradient banner */}
      <div
        style={{
          height: 190,
          background: `linear-gradient(135deg, ${item.categoryColor}18 0%, ${item.categoryColor}38 100%)`,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "20px 24px",
          borderBottom: `1px solid ${item.categoryColor}20`,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Decorative ring */}
        <div style={{
          position: "absolute", top: 24, right: 24,
          width: 56, height: 56, borderRadius: "50%",
          border: `1px solid ${item.categoryColor}30`,
        }} />
        <div style={{
          position: "absolute", top: 36, right: 36,
          width: 32, height: 32, borderRadius: "50%",
          border: `1px solid ${item.categoryColor}20`,
        }} />
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: item.categoryColor,
          background: `${item.categoryColor}18`,
          border: `1px solid ${item.categoryColor}40`,
          padding: "4px 12px", borderRadius: 99,
        }}>
          {item.category}
        </span>
        <span style={{ fontSize: 11, fontWeight: 400, color: "rgba(0,0,0,0.3)", letterSpacing: "0.04em" }}>
          {item.readTime}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "28px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{
          fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
          fontWeight: 400, color: "#1a1a2e",
          letterSpacing: "-0.02em", lineHeight: 1.35,
          marginBottom: 12,
        }}>
          {item.title}
        </h3>
        <p style={{
          fontSize: 13, fontWeight: 300, color: "#6b6e8a",
          lineHeight: 1.75, flex: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          marginBottom: 28,
        }}>
          {item.excerpt}
        </p>

        {/* Meta row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "#9a9cb5", fontWeight: 400, letterSpacing: "0.02em" }}>
            {item.date}
          </span>
          {/* <span style={{
            display: "flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 500, color: "#7698DC",
            letterSpacing: "0.04em", cursor: "pointer",
            transition: "gap .2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.gap = "5px"; }}
          >
            View Details
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span> */}
        </div>
      </div>
    </div>
  );
}

/* ── Main achievements page ── */
export default function AchievementsPage() {
  useLenis();
  const navigate = useNavigate();

  /* ── slideshow state ── */
  const [bgIdx, setBgIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setBgIdx(i => (i + 1) % BG_IMAGES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Academics", "Sports", "Co-curricular"];
  const filteredAchievements = rest.filter(item => activeCategory === "All" || item.category === activeCategory);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const scrollRef = useRef(null);
  const featuredRef = useRef(null);
  const gridLabelRef = useRef(null);
  const gridHeadRef = useRef(null);
  const hrRef = useRef(null);

  /* Hero entrance */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(titleRef.current,
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.4 }, 0.2)
      .fromTo(tagRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }, 0.85)
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }, 1.2);

    gsap.to(".blog-scroll-dot", {
      y: 9, duration: 1.3, ease: "sine.inOut", repeat: -1, yoyo: true,
    });

    return () => tl.kill();
  }, []);

  /* Featured post */
  useEffect(() => {
    if (!featuredRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(featuredRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: featuredRef.current, start: "top 85%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  /* Grid section header */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (hrRef.current) {
        gsap.fromTo(hrRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: hrRef.current, start: "top 90%", once: true } }
        );
      }
      if (gridLabelRef.current) {
        gsap.fromTo(gridLabelRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: gridLabelRef.current, start: "top 88%", once: true } }
        );
      }
      if (gridHeadRef.current) {
        gsap.fromTo(gridHeadRef.current,
          { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 },
          { clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: gridHeadRef.current, start: "top 86%", once: true } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", background: "#F5F5F7", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        id="achievements-top"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {/* ── Auto-changing background images ── */}
        {BG_IMAGES.map((src, i) => (
          <div key={i} style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === bgIdx ? 1 : 0,
            transition: "opacity 1.8s ease",
            willChange: "opacity",
          }} />
        ))}

        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)",
        }} />

        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* Title */}
        <div
          ref={titleRef}
          style={{
            position: "absolute", top: "16%", left: 0, right: 0,
            paddingLeft: "4vw", zIndex: 10, opacity: 0, lineHeight: 1,
          }}
        >
          <span style={{
            display: "block",
            fontSize: "clamp(3rem, 15vw, 17rem)",
            fontWeight: 200,
            fontFamily: "'Inter','Helvetica Neue',sans-serif",
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}>
            Honor.
          </span>
        </div>

        {/* Bottom-left tagline */}
        <div
          ref={tagRef}
          style={{
            position: "absolute", bottom: "8%", left: "4vw",
            zIndex: 20, display: "flex", alignItems: "flex-start", gap: 16,
            opacity: 0, maxWidth: 340,
          }}
        >
          <div style={{ width: 1, minHeight: 56, background: "rgba(118,152,220,0.3)", flexShrink: 0, marginTop: 4 }} />
          <div>
            <p style={{
              fontSize: 14, fontWeight: 300,
              color: "rgba(200, 210, 240, 1)",
              lineHeight: 1.7, letterSpacing: "0.01em",
              marginBottom: 20,
            }}>
              A showcase of milestones and achievements in Academics, Sports, and Co-curricular activities.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <a
                href="#achievements-list"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: "rgba(200,220,255,0.82)",
                  transition: "gap .25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "13px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "7px")}
              >
                Browse All
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span style={{ fontSize: 11, fontWeight: 400, color: "rgba(228, 198, 28, 0.97)", letterSpacing: "0.06em" }}>
                {ACHIEVEMENTS.length} Records
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          style={{
            position: "absolute", bottom: "8%", right: "4vw",
            zIndex: 20, opacity: 0,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          }}
        >
          <div style={{
            width: 22, height: 36, borderRadius: 99,
            border: "1.5px solid rgba(118,152,220,0.3)",
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            padding: "5px 0",
          }}>
            <div className="blog-scroll-dot" style={{
              width: 4, height: 4, borderRadius: "50%",
              background: "rgba(118,152,220,0.6)",
            }} />
          </div>
          <span style={{
            fontSize: 8, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(118,152,220,0.45)",
            writingMode: "vertical-rl",
          }}>Scroll</span>
        </div>
      </section>

      {/* ── HIGHLIGHTED ACHIEVEMENT ── */}
      <section style={{ background: "#0f0f11", padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
          {/* Section label */}
          <div style={{
            display: "grid", gridTemplateColumns: "220px 1fr",
            gap: "4rem", marginBottom: 48, alignItems: "center",
          }} className="blog-header-grid">
            <span style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
            }}>
              Major Highlight
            </span>
            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)" }} />
          </div>

          {/* Featured card */}
          {featured && (
            <div
              ref={featuredRef}
              style={{
                opacity: 0,
                borderRadius: 20,
                overflow: "hidden",
                background: "#1a1a26",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                minHeight: 420,
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
                transition: "transform .4s ease, box-shadow .4s ease",
              }}
              className="blog-featured-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 40px 100px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 32px 80px rgba(0,0,0,0.4)";
              }}
            >
              <div style={{
                background: `linear-gradient(135deg, ${featured.categoryColor}22 0%, ${featured.categoryColor}55 100%)`,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between",
                padding: "48px 44px",
                position: "relative", overflow: "hidden",
                borderRight: `1px solid ${featured.categoryColor}20`,
              }}>
                <div style={{ position: "absolute", bottom: -60, right: -60, width: 240, height: 240, borderRadius: "50%", border: `1px solid ${featured.categoryColor}18` }} />
                <div style={{ position: "absolute", bottom: -20, right: -20, width: 140, height: 140, borderRadius: "50%", border: `1px solid ${featured.categoryColor}28` }} />

                <span style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: featured.categoryColor,
                  background: `${featured.categoryColor}20`,
                  border: `1px solid ${featured.categoryColor}44`,
                  padding: "5px 14px", borderRadius: 99,
                  alignSelf: "flex-start",
                }}>
                  {featured.category}
                </span>

                <div>
                  <div style={{
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    fontWeight: 200, letterSpacing: "-0.04em",
                    color: `${featured.categoryColor}55`,
                    lineHeight: 1,
                  }}>
                    01
                  </div>
                  <p style={{ fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", marginTop: 6 }}>
                    FEATURED
                  </p>
                </div>
              </div>

              <div style={{
                padding: "48px 44px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 400, letterSpacing: "0.08em", marginBottom: 24 }}>
                    {featured.date} · {featured.readTime}
                  </p>
                  <h2 style={{
                    fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                    fontWeight: 300, color: "rgba(255,255,255,0.92)",
                    letterSpacing: "-0.03em", lineHeight: 1.3,
                    marginBottom: 24,
                  }}>
                    {featured.title}
                  </h2>
                  <p style={{
                    fontSize: 14, fontWeight: 300,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.75,
                  }}>
                    {featured.excerpt}
                  </p>
                </div>

                {/* <button
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    fontSize: 13, fontWeight: 500,
                    color: featured.categoryColor,
                    background: "none", border: "none",
                    letterSpacing: "0.04em",
                    marginTop: 36, cursor: "pointer",
                    transition: "gap .25s",
                    alignSelf: "flex-start",
                    fontFamily: "'Inter','Helvetica Neue',sans-serif",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "16px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "10px")}
                >
                  View Details
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button> */}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── ALL POSTS GRID ── */}
      <section id="achievements-list" style={{ background: "#F5F5F7", padding: "120px 0 140px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>

          <hr ref={hrRef} style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.09)", marginBottom: 60, transform: "scaleX(0)" }} />

          {/* Header */}
          <div style={{ marginBottom: 80, alignItems: "start" }}>
            <div ref={gridHeadRef} style={{ opacity: 0 }}>
              <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 300, letterSpacing: "-0.02em",
                lineHeight: 1.2, color: "#1a1a2e", marginBottom: 40,
                fontStyle: "italic", maxWidth: 800
              }}>
                "Excellence is never an accident; it is always the result of high intention, sincere effort, and intelligent execution."
                <span style={{ 
                  display: "block", fontSize: 16, marginTop: 16, 
                  color: "#6b6e8a", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.02em" 
                }}>
                  — Aristotle
                </span>
              </h2>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: activeCategory === cat ? "#1a1a2e" : "rgba(0,0,0,0.04)",
                      color: activeCategory === cat ? "#fff" : "#1a1a2e",
                      border: "none", padding: "8px 20px", borderRadius: 99,
                      fontSize: 13, fontWeight: 500, cursor: "pointer",
                      transition: "all 0.3s ease",
                      letterSpacing: "0.02em"
                    }}
                    onMouseEnter={(e) => {
                      if (activeCategory !== cat) e.currentTarget.style.background = "rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeCategory !== cat) e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3-column grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }} className="blog-grid">
            {filteredAchievements.length > 0 ? (
              filteredAchievements.map((item, i) => (
                <AchievementCard key={item.id} item={item} index={i} />
              ))
            ) : (
              <div style={{ padding: "40px 0", color: "#6b6e8a", fontSize: 15 }}>
                No achievements recorded in this category yet.
              </div>
            )}
          </div>

          {/* Bottom note */}
          <div style={{
            marginTop: 80, paddingTop: 48,
            borderTop: "1px solid rgba(0,0,0,0.09)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: "#6b6e8a" }}>
              More to come as the journey continues.
            </p>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (!el) return;
                  if (window.lenis) window.lenis.scrollTo(el, { offset: 0, duration: 1.2 });
                  else el.scrollIntoView({ behavior: 'smooth' });
                }, 350);
              }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 12, fontWeight: 500, letterSpacing: "0.06em",
                textTransform: "uppercase", color: "#1a1a2e",
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Inter','Helvetica Neue',sans-serif",
                transition: "gap .25s", padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
            >
              Get in touch
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .blog-featured-card { grid-template-columns: 1fr !important; }
          .blog-header-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
