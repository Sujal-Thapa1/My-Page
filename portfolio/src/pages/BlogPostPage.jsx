import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLenis } from "../hooks/useLenis";
import { POSTS } from "../data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

/* ── Related article mini-card ── */
function RelatedCard({ post }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => { navigate(`/blog/${post.id}`); window.scrollTo(0, 0); }}
      style={{
        opacity: 0,
        borderRadius: 14,
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        cursor: "pointer",
        transition: "transform .3s ease, box-shadow .3s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
    >
      <div style={{
        height: 120,
        background: `linear-gradient(135deg, ${post.categoryColor}18, ${post.categoryColor}35)`,
        display: "flex", alignItems: "flex-end", padding: "16px 20px",
        borderBottom: `1px solid ${post.categoryColor}20`,
      }}>
        <span style={{
          fontSize: 9, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: post.categoryColor,
          background: `${post.categoryColor}18`, border: `1px solid ${post.categoryColor}40`,
          padding: "3px 10px", borderRadius: 99,
        }}>{post.category}</span>
      </div>
      <div style={{ padding: "20px" }}>
        <h4 style={{
          fontSize: 14, fontWeight: 400, color: "#1a1a2e",
          letterSpacing: "-0.01em", lineHeight: 1.4, marginBottom: 8,
        }}>{post.title}</h4>
        <p style={{ fontSize: 11, color: "#9a9cb5", fontWeight: 400 }}>{post.date} · {post.readTime}</p>
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  useLenis();
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.id === parseInt(id));
  const related = POSTS.filter((p) => p.id !== parseInt(id)).slice(0, 3);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const metaRef = useRef(null);
  const bodyRef = useRef(null);
  const hrRef = useRef(null);

  /* Redirect to /blog if post not found */
  useEffect(() => {
    if (!post) navigate("/blog");
  }, [post, navigate]);

  /* Hero entrance */
  useEffect(() => {
    if (!post) return;
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(titleRef.current,
      { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 },
      { clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.3 }, 0.2)
      .fromTo(metaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }, 0.7);
    return () => tl.kill();
  }, [post]);

  /* Body animations */
  useEffect(() => {
    if (!bodyRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(bodyRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: "expo.out",
          scrollTrigger: { trigger: bodyRef.current, start: "top 88%", once: true },
        }
      );
      if (hrRef.current) {
        gsap.fromTo(hrRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: hrRef.current, start: "top 90%", once: true } }
        );
      }
    });
    return () => ctx.revert();
  }, [post]);

  if (!post) return null;

  return (
    <div style={{ fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", background: "#F5F5F7" }}>
      <Navbar />

      {/* ── POST HERO ── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "75vh",
          background: "linear-gradient(160deg, #0a0a0e 0%, #131320 55%, #1a1a2e 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 0 80px",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "radial-gradient(rgba(118,152,220,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* Colored accent glow */}
        <div style={{
          position: "absolute", top: "20%", right: "8%", zIndex: 0,
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${post.categoryColor}15 0%, transparent 70%)`,
          filter: "blur(40px)",
        }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2, width: "100%" }}>
          {/* Back + category */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
            <button
              onClick={() => navigate("/blog")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.65)",
                fontSize: 12, fontWeight: 400, letterSpacing: "0.04em",
                padding: "8px 16px", borderRadius: 6, cursor: "pointer",
                transition: "background .2s, color .2s",
                fontFamily: "'Inter','Helvetica Neue',sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
            >
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Posts
            </button>

            <span style={{
              fontSize: 10, fontWeight: 600, letterSpacing: "0.14em",
              textTransform: "uppercase", color: post.categoryColor,
              background: `${post.categoryColor}20`,
              border: `1px solid ${post.categoryColor}44`,
              padding: "4px 12px", borderRadius: 99,
            }}>{post.category}</span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 200,
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              maxWidth: 820,
              marginBottom: 36,
              opacity: 0,
            }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div
            ref={metaRef}
            style={{
              display: "flex", alignItems: "center", gap: 24, opacity: 0,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: `linear-gradient(135deg, ${post.categoryColor}44, ${post.categoryColor}22)`,
                border: `1px solid ${post.categoryColor}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: post.categoryColor }}>S</span>
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1 }}>Sujal Thapa</p>
                <p style={{ fontSize: 10, fontWeight: 300, color: "rgba(255,255,255,0.35)", marginTop: 2, letterSpacing: "0.04em" }}>Author</p>
              </div>
            </div>

            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.12)" }} />

            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>{post.date}</span>

            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />

            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section style={{ background: "#fafafa", padding: "0" }}>

        {/* Progress accent bar */}
        <div style={{
          height: 3, background: `linear-gradient(90deg, ${post.categoryColor}, ${post.categoryColor}44)`,
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 120px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 680px 1fr",
            gap: "0 40px",
          }} className="post-body-grid">

            {/* Left sidebar — decorative line only */}
            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 6 }}>
              <div style={{
                width: 1, background: `linear-gradient(to bottom, ${post.categoryColor}60, transparent)`,
                minHeight: 120, marginRight: 0,
              }} />
            </div>

            {/* Center column — article content */}
            <article ref={bodyRef} style={{ opacity: 0 }}>
              {post.content.map((block, i) => {

                /* ── INTRO ── */
                if (block.type === "intro") return (
                  <p key={i} style={{
                    fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)",
                    fontWeight: 300, color: "#1a1a2e",
                    lineHeight: 1.85, letterSpacing: "-0.01em",
                    marginBottom: 52, paddingBottom: 52,
                    borderBottom: `2px solid ${post.categoryColor}22`,
                  }}>{block.text}</p>
                );

                /* ── H2 ── */
                if (block.type === "h2") return (
                  <div key={i} style={{ marginTop: 60, marginBottom: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 3, minHeight: 28, background: post.categoryColor,
                      borderRadius: 99, flexShrink: 0, marginTop: 6,
                    }} />
                    <h2 style={{
                      fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
                      fontWeight: 500, color: "#1a1a2e",
                      letterSpacing: "-0.03em", lineHeight: 1.25,
                      margin: 0,
                    }}>{block.text}</h2>
                  </div>
                );

                /* ── PARAGRAPH ── */
                if (block.type === "p") return (
                  <p key={i} style={{
                    fontSize: "clamp(0.97rem, 1.15vw, 1.06rem)",
                    fontWeight: 400, color: "#3a3c55",
                    lineHeight: 1.9, marginBottom: 28,
                    letterSpacing: "0.005em",
                  }}>{block.text}</p>
                );

                /* ── IMAGE ── */
                if (block.type === "image") return (
                  <figure key={i} style={{
                    margin: "72px -60px",
                    padding: "0 0 24px",
                    position: "relative",
                  }}>
                    {/* ── back slab: offset colour rectangle ── */}
                    <div style={{
                      position: "absolute",
                      top: 20, left: -12, right: 20, bottom: 8,
                      background: `linear-gradient(135deg, ${post.categoryColor}28, ${post.categoryColor}10)`,
                      borderRadius: 22,
                      border: `1px solid ${post.categoryColor}30`,
                      transform: "rotate(1.2deg)",
                    }} />

                    {/* ── main image card, counter-tilted ── */}
                    <div style={{
                      position: "relative",
                      borderRadius: 18,
                      overflow: "hidden",
                      transform: "rotate(-0.7deg)",
                      boxShadow: "0 32px 80px rgba(0,0,0,0.20), 0 8px 20px rgba(0,0,0,0.10)",
                      lineHeight: 0,
                    }}>
                      <img
                        src={block.src}
                        alt={block.alt || block.caption || ""}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        loading="lazy"
                      />

                      {/* ── bottom glossy scrim for caption overlay ── */}
                      {block.caption && (
                        <div style={{
                          position: "absolute", bottom: 0, left: 0, right: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                          padding: "48px 24px 20px",
                          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                        }}>
                          <p style={{
                            color: "rgba(255,255,255,0.82)",
                            fontSize: 11, fontStyle: "italic",
                            letterSpacing: "0.03em", margin: 0, maxWidth: "70%",
                          }}>{block.caption}</p>

                          {/* image index badge */}
                          <span style={{
                            fontSize: 9, fontWeight: 700, letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: post.categoryColor,
                            background: `${post.categoryColor}22`,
                            border: `1px solid ${post.categoryColor}55`,
                            backdropFilter: "blur(8px)",
                            padding: "4px 10px", borderRadius: 99,
                          }}>Fig. {i}</span>
                        </div>
                      )}
                    </div>

                    {/* ── top-right corner accent squares ── */}
                    <div style={{
                      position: "absolute", top: -6, right: 10,
                      display: "flex", flexDirection: "column", gap: 4,
                    }}>
                      {[1, 0.5, 0.25].map((op, k) => (
                        <div key={k} style={{
                          width: 6, height: 6, borderRadius: 2,
                          background: post.categoryColor, opacity: op,
                        }} />
                      ))}
                    </div>

                    {/* ── bottom-left bracket mark ── */}
                    <div style={{
                      position: "absolute", bottom: 16, left: -4,
                      width: 16, height: 16,
                      borderLeft: `2px solid ${post.categoryColor}70`,
                      borderBottom: `2px solid ${post.categoryColor}70`,
                      borderRadius: "0 0 0 4px",
                    }} />
                  </figure>
                );

                /* ── QUOTE / BLOCKQUOTE ── */
                if (block.type === "quote") return (
                  <blockquote key={i} style={{
                    margin: "48px 0",
                    padding: "28px 32px",
                    background: `${post.categoryColor}0d`,
                    borderLeft: `4px solid ${post.categoryColor}`,
                    borderRadius: "0 12px 12px 0",
                  }}>
                    <p style={{
                      fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                      fontWeight: 300, color: "#1a1a2e",
                      lineHeight: 1.75, fontStyle: "italic",
                      margin: 0, marginBottom: block.author ? 14 : 0,
                    }}>"{block.text}"</p>
                    {block.author && (
                      <cite style={{
                        fontSize: 12, fontWeight: 600, color: post.categoryColor,
                        letterSpacing: "0.06em", textTransform: "uppercase",
                        fontStyle: "normal",
                      }}>— {block.author}</cite>
                    )}
                  </blockquote>
                );

                /* ── CODE BLOCK ── */
                if (block.type === "code") return (
                  <div key={i} style={{ margin: "44px 0" }}>
                    {block.label && (
                      <div style={{
                        background: "#1a1a2e", borderRadius: "10px 10px 0 0",
                        padding: "10px 20px",
                        display: "flex", alignItems: "center", gap: 10,
                      }}>
                        <div style={{ display: "flex", gap: 6 }}>
                          {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                          ))}
                        </div>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 8, fontFamily: "monospace" }}>
                          {block.label}
                        </span>
                      </div>
                    )}
                    <pre style={{
                      background: "#0d0f1a",
                      borderRadius: block.label ? "0 0 10px 10px" : 10,
                      padding: "24px 24px",
                      overflowX: "auto",
                      margin: 0,
                      boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
                    }}>
                      <code style={{
                        fontFamily: "'Fira Code', 'Courier New', monospace",
                        fontSize: 13, lineHeight: 1.75,
                        color: "#a8b4f0",
                        whiteSpace: "pre",
                      }}>{block.text}</code>
                    </pre>
                  </div>
                );

                return null;
              })}

              {/* Tags */}
              <div style={{
                marginTop: 64, paddingTop: 40,
                borderTop: "1px solid rgba(0,0,0,0.08)",
                display: "flex", flexWrap: "wrap", gap: 8,
              }}>
                {[post.category, "Sujal Thapa", "Portfolio Blog"].map(tag => (
                  <span key={tag} style={{
                    fontSize: 11, fontWeight: 500, color: "#6b6e8a",
                    background: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    padding: "5px 14px", borderRadius: 99,
                    letterSpacing: "0.04em",
                  }}>#{tag}</span>
                ))}
              </div>

              {/* Author bio */}
              <div style={{
                marginTop: 52, padding: "28px 32px",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 16,
                display: "flex", alignItems: "center", gap: 20,
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${post.categoryColor}55, ${post.categoryColor}22)`,
                  border: `2px solid ${post.categoryColor}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 20, fontWeight: 400, color: post.categoryColor }}>S</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e", marginBottom: 5 }}>Sujal Thapa</p>
                  <p style={{ fontSize: 12, fontWeight: 400, color: "#6b6e8a", lineHeight: 1.65 }}>
                    BCA student at Medhavi Skills University, specialising in Cloud Computing &amp; Information Security.
                    Building full-stack apps, exploring AI, and writing about it all.
                  </p>
                </div>
              </div>
            </article>

            {/* Right sidebar — empty spacer */}
            <div />
          </div>
        </div>
      </section>

      {/* ── MORE ARTICLES ── */}
      <section style={{ background: "#F5F5F7", padding: "100px 0 120px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
          <hr ref={hrRef} style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.09)", marginBottom: 60, transform: "scaleX(0)" }} />

          <div style={{
            display: "grid", gridTemplateColumns: "220px 1fr",
            gap: "4rem", marginBottom: 60, alignItems: "start",
          }} className="post-header-grid">
            <span style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#6b6e8a", paddingTop: 10,
            }}>More Reading</span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 200, letterSpacing: "-0.04em",
              lineHeight: 1.1, color: "#1a1a2e",
            }}>Continue Exploring</h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
          }} className="related-grid">
            {related.map((p) => (
              <RelatedCard key={p.id} post={p} />
            ))}
          </div>

          <div style={{ marginTop: 56, textAlign: "center" }}>
            <button
              onClick={() => navigate("/blog")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#1a1a2e", color: "#ffffff",
                border: "none", padding: "15px 32px",
                borderRadius: 6, fontSize: 13, fontWeight: 500,
                letterSpacing: "0.06em", cursor: "pointer",
                fontFamily: "'Inter','Helvetica Neue',sans-serif",
                transition: "background .25s, transform .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2e3060"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a2e"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View All Posts
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .post-header-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .related-grid { grid-template-columns: 1fr !important; }
          .post-body-grid { grid-template-columns: 1fr !important; }
          .post-body-grid > div:first-child { display: none !important; }
          .post-body-grid > div:last-child { display: none !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .related-grid { grid-template-columns: 1fr 1fr !important; }
          .post-body-grid { grid-template-columns: 0 1fr 0 !important; }
        }
      `}</style>
    </div>
  );
}
