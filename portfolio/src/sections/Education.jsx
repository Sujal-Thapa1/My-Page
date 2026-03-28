import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    period: "2024 – Present",
    degree: "Bachelor of Computer Applications",
    institution: "Medhavi Skills University",
    spec: "Cloud Computing & Information Security",
    current: true,
  },
  {
    period: "2023 – 2024",
    degree: "Diploma in Computer Applications",
    institution: "AISECT University",
    spec: "Computer Applications",
    current: false,
  },
  {
    period: "2021 – 2023",
    degree: "Higher Secondary Education (10+2)",
    institution: "Scottish University Mission Institution",
    spec: "Science Stream",
    current: false,
  },
];

export default function Education() {
  const secRef   = useRef(null);
  const labelRef = useRef(null);
  const h2Ref    = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current,
        { y:16, opacity:0 },
        { y:0, opacity:1, duration:0.9, ease:"expo.out",
          scrollTrigger:{ trigger:labelRef.current, start:"top 88%", once:true } });

      gsap.fromTo(h2Ref.current,
        { clipPath:"inset(0 0 100% 0)", y:20, opacity:0 },
        { clipPath:"inset(0 0 0% 0)", y:0, opacity:1, duration:1.2, ease:"expo.out",
          scrollTrigger:{ trigger:h2Ref.current, start:"top 86%", once:true } });

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { y:40, opacity:0 },
          { y:0, opacity:1, duration:1, delay:i*0.1, ease:"expo.out",
            scrollTrigger:{ trigger:el, start:"top 88%", once:true } });
      });
    }, secRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} style={{ background:"transparent", padding:"120px 0", minHeight:"100vh" }}>
      <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 40px" }}>

        {/* Header */}
        <div style={{ display:"grid", gridTemplateColumns:"220px 1fr", gap:"4rem", marginBottom:80, alignItems:"start" }}>
          <span ref={labelRef} style={{
            fontSize:11, fontWeight:500, letterSpacing:"0.14em",
            textTransform:"uppercase", color:"#6b6e8a", paddingTop:10, opacity:0,
          }}>Journey</span>

          <h2 ref={h2Ref} style={{
            fontSize:"clamp(2.4rem,5.5vw,5rem)",
            fontWeight:200, letterSpacing:"-0.04em", lineHeight:1.08,
            color:"#1a1a2e", opacity:0,
          }}>
            Education &amp; Background
          </h2>
        </div>

        {/* Timeline list */}
        <div style={{
          display:"grid", gridTemplateColumns:"220px 1fr",
          gap:"0 4rem",
        }} className="edu-grid">
          <div />{/* spacer aligns to grid */}

          <div>
            {/* Header row */}
            <div style={{
              display:"grid",
              gridTemplateColumns:"1fr 1fr 1fr",
              padding:"12px 0",
              borderBottom:"1px solid rgba(0,0,0,0.09)",
            }}>
              {["Period","Degree","Institution"].map((t,i) => (
                <span key={i} style={{
                  fontSize:10, fontWeight:500, letterSpacing:"0.14em",
                  textTransform:"uppercase", color:"#6b6e8a",
                }}>{t}</span>
              ))}
            </div>

            {timeline.map((item, i) => (
              <div
                key={i}
                ref={el => (itemRefs.current[i] = el)}
                style={{
                  display:"grid",
                  gridTemplateColumns:"1fr 1fr 1fr",
                  padding:"36px 0",
                  borderBottom:"1px solid rgba(0,0,0,0.09)",
                  opacity:0,
                  transition:"background .3s",
                  gap:"1rem",
                }}
                onMouseEnter={e => (e.currentTarget.style.background="rgba(118,152,220,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background="transparent")}
              >
                {/* Period */}
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  <span style={{
                    fontSize:13, fontWeight:400, color:"#6b6e8a",
                    letterSpacing:"0.02em",
                  }}>{item.period}</span>
                  {item.current && (
                    <span style={{
                      display:"inline-block",
                      fontSize:9, fontWeight:600, letterSpacing:"0.12em",
                      textTransform:"uppercase",
                      color:"#7698DC",
                      background:"rgba(118,152,220,0.1)",
                      padding:"2px 8px", borderRadius:99,
                      width:"fit-content",
                    }}>Current</span>
                  )}
                </div>

                {/* Degree */}
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  <span style={{
                    fontSize:"clamp(0.95rem,1.3vw,1.1rem)",
                    fontWeight:300, color:"#1a1a2e",
                    letterSpacing:"-0.01em", lineHeight:1.3,
                  }}>{item.degree}</span>
                  <span style={{ fontSize:12, color:"#9a9cb5", fontStyle:"italic", fontWeight:300 }}>
                    {item.spec}
                  </span>
                </div>

                {/* Institution */}
                <span style={{
                  fontSize:13, fontWeight:400, color:"#4a4c6a",
                  lineHeight:1.45,
                }}>{item.institution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .edu-grid{ grid-template-columns:1fr !important; }
          .edu-grid > div:first-child { display:none; }
        }
      `}</style>
    </section>
  );
}
