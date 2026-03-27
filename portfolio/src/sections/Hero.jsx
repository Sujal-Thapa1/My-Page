import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const line3Ref   = useRef(null);
  const imgRef     = useRef(null);
  const tagRef     = useRef(null);
  const scrollRef  = useRef(null);

  useEffect(() => {
    /* ── entrance sequence ── */
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(imgRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.8 }, 0)

      .fromTo(line1Ref.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.3 }, 0.15)

      .fromTo(line2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }, 0.3)

      .fromTo(line3Ref.current,
        { clipPath: "inset(0 0 0 100%)", opacity: 0 },
        { clipPath: "inset(0 0 0 0%)", opacity: 1, duration: 1.3 }, 0.4)

      .fromTo(tagRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }, 0.85)

      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }, 1.1);

    /* bouncing scroll dot */
    gsap.to(".hero-scroll-dot", {
      y: 9, duration: 1.3, ease: "sine.inOut", repeat: -1, yoyo: true,
    });

    /* scroll parallax — image moves up slower */
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 2,
      onUpdate: self => {
        gsap.set(imgRef.current,  { y: self.progress * -70 });
        gsap.set(line1Ref.current,{ y: self.progress * -28 });
        gsap.set(line3Ref.current,{ y: self.progress * -28 });
      },
    });

    return () => { st.kill(); tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg,#7698DC 0%,#9fb4e4 22%,#cbd8f0 42%,#e4d5c5 68%,#f0e2d0 84%,#F8E8D5 100%)",
        overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* ── MASSIVE text layer ── */}
      {/* LINE 1 : "Sujal" — top-left */}
      <div ref={line1Ref} style={{
        position:"absolute", top:"14%", left:0, right:0,
        paddingLeft:"4vw", zIndex:2, opacity:0, lineHeight:1,
      }}>
        <span style={{
          display:"block",
          fontSize:"clamp(4.5rem,17.5vw,18rem)",
          fontWeight:200, fontFamily:"'Inter','Helvetica Neue',sans-serif",
          color:"rgba(255,255,255,0.93)", letterSpacing:"-0.04em", lineHeight:0.9,
          whiteSpace:"nowrap",
        }}>Sujal</span>
      </div>

      {/* LINE 2 : "the" — mid, slightly transparent */}
      <div ref={line2Ref} style={{
        position:"absolute", top:"47%", left:"10vw",
        zIndex:2, opacity:0,
      }}>
        <span style={{
          display:"block",
          fontSize:"clamp(3rem,9.5vw,10rem)",
          fontWeight:200, fontFamily:"'Inter','Helvetica Neue',sans-serif",
          color:"rgba(255,255,255,0.65)", letterSpacing:"-0.03em", lineHeight:0.9,
        }}>the</span>
      </div>

      {/* LINE 3 : "Developer" — right-aligned */}
      <div ref={line3Ref} style={{
        position:"absolute", top:"57%", left:0, right:0,
        textAlign:"right", paddingRight:"2vw",
        zIndex:2, opacity:0, lineHeight:1,
      }}>
        <span style={{
          display:"inline-block",
          fontSize:"clamp(4.5rem,17.5vw,18rem)",
          fontWeight:200, fontFamily:"'Inter','Helvetica Neue',sans-serif",
          color:"rgba(255,255,255,0.93)", letterSpacing:"-0.04em", lineHeight:0.9,
          whiteSpace:"nowrap",
        }}>Developer</span>
      </div>

      {/* ── PROFILE IMAGE — centered, layered in front like ZJ's reactor ── */}
      <div ref={imgRef} style={{
        position:"absolute", top:"4%",
        left:"50%", transform:"translateX(-50%)",
        zIndex:10, opacity:0,
        width:"clamp(240px,36vw,560px)",
      }}>
        <img
          src="/images/profile.png"
          alt="Sujal Thapa"
          style={{
            width:"100%", height:"auto",
            objectFit:"contain", objectPosition:"top center",
            maxHeight:"92vh",
            filter:"drop-shadow(0 48px 80px rgba(0,0,0,0.16)) drop-shadow(0 12px 28px rgba(20,40,100,0.1))",
          }}
        />
      </div>

      {/* ── BOTTOM-LEFT TAGLINE — ZJ's exact detail ── */}
      <div ref={tagRef} style={{
        position:"absolute", bottom:"8%", left:"4vw",
        zIndex:20, display:"flex", alignItems:"flex-start", gap:16,
        opacity:0, maxWidth:300,
      }}>
        <div style={{ width:1, minHeight:56, background:"rgba(40,60,140,0.3)", flexShrink:0, marginTop:4 }} />
        <div>
          <p style={{
            fontSize:14, fontWeight:400,
            fontFamily:"'Inter','Helvetica Neue',sans-serif",
            color:"rgba(25,35,80,0.72)", lineHeight:1.55, letterSpacing:"0.01em",
          }}>
            Cloud Computing &amp; Full-Stack Development,
            <br />AI Exploration &amp; Scalable System Design
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:18, marginTop:18 }}>
            <a href="#projects" style={{
              display:"inline-flex", alignItems:"center", gap:7,
              fontSize:11, fontWeight:600, letterSpacing:"0.1em",
              textTransform:"uppercase", textDecoration:"none",
              color:"rgba(20,30,80,0.82)",
              transition:"gap .25s",
            }}
              onMouseEnter={e=>(e.currentTarget.style.gap="13px")}
              onMouseLeave={e=>(e.currentTarget.style.gap="7px")}>
              View Works
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/sujal-cv.pdf" target="_blank" rel="noreferrer" style={{
              fontSize:11, fontWeight:500, letterSpacing:"0.08em",
              color:"rgba(20,30,80,0.5)", textDecoration:"none",
              transition:"color .2s",
            }}
              onMouseEnter={e=>(e.currentTarget.style.color="rgba(20,30,80,0.9)")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(20,30,80,0.5)")}>
              Résumé ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR — bottom-right ── */}
      <div ref={scrollRef} style={{
        position:"absolute", bottom:"8%", right:"4vw",
        zIndex:20, opacity:0,
        display:"flex", flexDirection:"column", alignItems:"center", gap:10,
      }}>
        <div style={{
          width:22, height:36, borderRadius:99,
          border:"1.5px solid rgba(30,40,100,0.32)",
          display:"flex", alignItems:"flex-start", justifyContent:"center",
          padding:"5px 0",
        }}>
          <div className="hero-scroll-dot" style={{
            width:4, height:4, borderRadius:"50%",
            background:"rgba(30,40,100,0.45)",
          }} />
        </div>
        <span style={{
          fontSize:8, fontWeight:600, letterSpacing:"0.18em",
          textTransform:"uppercase", color:"rgba(30,40,100,0.45)",
          writingMode:"vertical-rl",
        }}>Scroll</span>
      </div>
    </section>
  );
}
