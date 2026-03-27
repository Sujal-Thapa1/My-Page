import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [fields, setFields] = useState({ name:"", email:"", message:"" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const formRef  = useRef(null);
  const secRef   = useRef(null);
  const labelRef = useRef(null);
  const h2Ref    = useRef(null);
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  const SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const REPLY    = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  const KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current, { y:16,opacity:0 },
        { y:0,opacity:1,duration:0.9,ease:"expo.out",
          scrollTrigger:{ trigger:labelRef.current,start:"top 88%",once:true }});

      gsap.fromTo(h2Ref.current, { clipPath:"inset(0 0 100% 0)",y:20,opacity:0 },
        { clipPath:"inset(0 0 0% 0)",y:0,opacity:1,duration:1.2,ease:"expo.out",
          scrollTrigger:{ trigger:h2Ref.current,start:"top 86%",once:true }});

      gsap.fromTo(leftRef.current, { x:-50,opacity:0 },
        { x:0,opacity:1,duration:1.1,ease:"expo.out",delay:0.1,
          scrollTrigger:{ trigger:leftRef.current,start:"top 85%",once:true }});

      gsap.fromTo(rightRef.current, { x:50,opacity:0 },
        { x:0,opacity:1,duration:1.1,ease:"expo.out",delay:0.1,
          scrollTrigger:{ trigger:rightRef.current,start:"top 85%",once:true }});
    }, secRef.current);
    return () => ctx.revert();
  }, []);

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Required";
    if (!fields.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = "Invalid email";
    if (!fields.message.trim()) e.message = "Required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("Sending...");
    try {
      await emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, KEY);
      if (REPLY) await emailjs.send(SERVICE, REPLY, { email:fields.email, to_name:fields.name }, KEY);
      setStatus("Message sent!");
      setFields({ name:"", email:"", message:"" });
    } catch {
      setStatus("Failed. Please try again.");
    }
  };

  const field = (key, type="text", rows=null) => {
    const Tag = rows ? "textarea" : "input";
    return (
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        <label style={{ fontSize:10, fontWeight:500, letterSpacing:"0.14em",
          textTransform:"uppercase", color:"#6b6e8a" }}>
          {key.charAt(0).toUpperCase()+key.slice(1)}
        </label>
        <Tag
          name={`from_${key}`}
          type={type || undefined}
          rows={rows || undefined}
          value={fields[key]}
          onChange={e => setFields(f=>({...f,[key]:e.target.value}))}
          placeholder={key === "name" ? "Your full name" : key === "email" ? "hello@example.com" : "How can I help?"}
          style={{
            width:"100%",
            background:"transparent",
            border:"none",
            borderBottom:`1px solid ${errors[key] ? "#ef4444" : "rgba(0,0,0,0.2)"}`,
            padding:"12px 0",
            fontSize:15, fontWeight:300, color:"#1a1a2e",
            fontFamily:"'Inter','Helvetica Neue',sans-serif",
            outline:"none",
            resize:"none",
            transition:"border-color .2s",
          }}
          onFocus={e => (e.currentTarget.style.borderColor="#7698DC")}
          onBlur={e => (e.currentTarget.style.borderColor = errors[key] ? "#ef4444" : "rgba(0,0,0,0.2)")}
        />
        {errors[key] && (
          <span style={{ fontSize:10, color:"#ef4444", fontWeight:500, letterSpacing:"0.08em" }}>
            {errors[key]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section ref={secRef} id="contact" style={{ background:"transparent", padding:"120px 0", minHeight:"100vh" }}>
      <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 40px" }}>

        {/* Header */}
        <div style={{ display:"grid", gridTemplateColumns:"220px 1fr", gap:"4rem", marginBottom:80, alignItems:"start" }}>
          <span ref={labelRef} style={{ fontSize:11, fontWeight:500, letterSpacing:"0.14em",
            textTransform:"uppercase", color:"#6b6e8a", paddingTop:10, opacity:0 }}>
            Connectivity
          </span>
          <h2 ref={h2Ref} style={{
            fontSize:"clamp(2.4rem,5.5vw,5rem)",
            fontWeight:200, letterSpacing:"-0.04em", lineHeight:1.08,
            color:"#1a1a2e", opacity:0,
          }}>
            Let's Work Together
          </h2>
        </div>

        {/* Two columns */}
        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1fr",
          gap:"6rem", alignItems:"start",
        }} className="contact-grid">

          {/* Left — info */}
          <div ref={leftRef} style={{ opacity:0 }}>
            <p style={{
              fontSize:"clamp(1rem,1.35vw,1.15rem)",
              fontWeight:300, color:"#4a4c6a", lineHeight:1.75,
              marginBottom:48, maxWidth:400,
            }}>
              Have a project in mind, a question, or just want to say hi?
              I'm always open to meaningful conversations and exciting opportunities.
            </p>

            {/* Contact info blocks */}
            {[
              { label:"Email", value:"sujalmangar304@gmail.com" },
              { label:"Phone", value:"+91 9339271036" },
              { label:"Location", value:"Kalimpong, West Bengal, India" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                paddingBottom:28, marginBottom:28,
                borderBottom:"1px solid rgba(0,0,0,0.09)",
              }}>
                <p style={{ fontSize:10, fontWeight:500, letterSpacing:"0.14em",
                  textTransform:"uppercase", color:"#6b6e8a", marginBottom:8 }}>
                  {label}
                </p>
                <p style={{ fontSize:15, fontWeight:300, color:"#1a1a2e" }}>{value}</p>
              </div>
            ))}

            {/* Availability badge */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:8 }}>
              <div style={{
                width:8, height:8, borderRadius:"50%", background:"#22c55e",
                animation:"pulse 2s infinite",
              }} />
              <span style={{ fontSize:12, fontWeight:400, color:"#4a4c6a", letterSpacing:"0.04em" }}>
                Available for freelance &amp; full-time opportunities
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div ref={rightRef} style={{ opacity:0 }}>
            <form ref={formRef} onSubmit={handleSubmit}
              style={{ display:"flex", flexDirection:"column", gap:36 }}>
              {field("name")}
              {field("email", "email")}
              {field("message", null, 5)}

              {status && (
                <p style={{
                  fontSize:12, fontWeight:500,
                  color: status.includes("sent") ? "#22c55e" : status.includes("Failed") ? "#ef4444" : "#6b6e8a",
                  letterSpacing:"0.06em",
                }}>{status}</p>
              )}

              {/* ZJ-style submit button — minimal, with arrow */}
              <button type="submit" style={{
                alignSelf:"flex-start",
                display:"flex", alignItems:"center", gap:12,
                background:"#1a1a2e",
                color:"#ffffff",
                border:"none",
                padding:"16px 32px",
                borderRadius:6,
                fontSize:13, fontWeight:500, letterSpacing:"0.06em",
                fontFamily:"'Inter','Helvetica Neue',sans-serif",
                cursor:"pointer",
                transition:"background .25s, transform .2s",
              }}
                onMouseEnter={e=>{ e.currentTarget.style.background="#2e3060"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="#1a1a2e"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                Send Message
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; gap:3rem !important; } }
        @keyframes pulse { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.5; transform:scale(1.3); } }
      `}</style>
    </section>
  );
}
