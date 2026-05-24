import { useState, useEffect } from "react";

const BLUE = "#1D4ED8";
const BLUE_LIGHT = "#93C5FD";
const BLUE_DARK = "#1e3a8a";
const BLUE_MID = "#2563EB";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e2e8f0",
      padding: isMobile ? "0 20px" : "0 40px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
      boxShadow: "0 1px 20px rgba(29,78,216,0.07)"
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <svg width="34" height="34" viewBox="0 0 180 180" fill="none">
          <defs>
            <linearGradient id="navG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={BLUE_LIGHT} />
              <stop offset="100%" stopColor={BLUE} />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="150" height="150" rx="32" fill="#EFF6FF" stroke="url(#navG)" strokeWidth="3"/>
          <line x1="15" y1="55" x2="15" y2="15" stroke="url(#navG)" strokeWidth="5" strokeLinecap="round"/>
          <line x1="15" y1="15" x2="55" y2="15" stroke="url(#navG)" strokeWidth="5" strokeLinecap="round"/>
          <line x1="165" y1="125" x2="165" y2="165" stroke="url(#navG)" strokeWidth="5" strokeLinecap="round"/>
          <line x1="165" y1="165" x2="125" y2="165" stroke="url(#navG)" strokeWidth="5" strokeLinecap="round"/>
          <text x="62" y="112" textAnchor="middle" fontFamily="Georgia,serif" fontSize="82" fontWeight="900" fill="url(#navG)">O</text>
          <text x="128" y="118" textAnchor="middle" fontFamily="Georgia,serif" fontSize="38" fontWeight="700" fill="url(#navG)" opacity="0.85">v</text>
        </svg>
        <div>
          <div style={{ fontSize: "18px", fontWeight: "900", color: BLUE_DARK, letterSpacing: "-0.5px", fontFamily: "Georgia, serif" }}>Opsvia</div>
          {!isMobile && <div style={{ fontSize: "9px", color: "#94a3b8", letterSpacing: "2px", textTransform: "uppercase", marginTop: "-2px" }}>Operations via Zoho</div>}
        </div>
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Services", "About", "Contact"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: "#475569", fontSize: "14px", textDecoration: "none",
              fontWeight: "500", letterSpacing: "0.3px"
            }}>{link}</a>
          ))}
          <a href="#contact" style={{
            background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`,
            color: "#fff", padding: "9px 22px", borderRadius: "8px",
            fontSize: "13px", fontWeight: "700", textDecoration: "none",
            letterSpacing: "0.5px", boxShadow: `0 4px 14px ${BLUE}44`
          }}>Get in Touch</a>
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", gap: "5px", padding: "4px"
        }}>
          <div style={{ width: 24, height: 2, background: BLUE_DARK, borderRadius: 2, transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: BLUE_DARK, borderRadius: 2,
            opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: 24, height: 2, background: BLUE_DARK, borderRadius: 2, transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0,
          background: "#fff", borderBottom: "1px solid #e2e8f0",
          padding: "20px", display: "flex", flexDirection: "column", gap: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 99
        }}>
          {["Services", "About", "Contact"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#475569", fontSize: "16px", textDecoration: "none",
                fontWeight: "600", padding: "8px 0", borderBottom: "1px solid #f1f5f9"
              }}>{link}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`,
            color: "#fff", padding: "12px 22px", borderRadius: "8px",
            fontSize: "14px", fontWeight: "700", textDecoration: "none",
            textAlign: "center", boxShadow: `0 4px 14px ${BLUE}44`
          }}>Get in Touch</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #eff6ff 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: isMobile ? "100px 20px 60px" : "120px 40px 80px",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{ maxWidth: "900px", textAlign: "center", position: "relative", width: "100%" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "#EFF6FF", border: `1px solid ${BLUE_LIGHT}`,
          borderRadius: "100px", padding: "6px 14px", marginBottom: "24px"
        }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE_MID, flexShrink: 0 }} />
          <span style={{ fontSize: isMobile ? "10px" : "12px", color: BLUE_MID, fontWeight: "600", letterSpacing: "0.5px" }}>
            CERTIFIED ZOHO CUSTOMIZATION EXPERT
          </span>
        </div>

        <h1 style={{
          fontSize: isMobile ? "34px" : "58px", fontWeight: "900", lineHeight: 1.15,
          color: "#0f172a", fontFamily: "Georgia, serif",
          letterSpacing: isMobile ? "-1px" : "-2px", marginBottom: "20px"
        }}>
          Your Business,{" "}
          <span style={{
            background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Perfectly Configured</span>
          {" "}on Zoho
        </h1>

        <p style={{
          fontSize: isMobile ? "15px" : "18px", color: "#64748b", lineHeight: 1.7,
          maxWidth: "620px", margin: "0 auto 32px", fontFamily: "system-ui, sans-serif"
        }}>
          We customize Zoho CRM, People, Recruit, Creator, Desk, Campaigns & Analytics
          to fit exactly how your business works — not the other way around.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`,
            color: "#fff", padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: "10px",
            fontSize: isMobile ? "14px" : "15px", fontWeight: "700", textDecoration: "none",
            boxShadow: `0 6px 24px ${BLUE}44`
          }}>Start Your Project →</a>
          <a href="#services" style={{
            background: "#fff", color: BLUE_DARK,
            padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: "10px",
            fontSize: isMobile ? "14px" : "15px", fontWeight: "700", textDecoration: "none",
            border: `2px solid ${BLUE_LIGHT}`
          }}>View Services</a>
        </div>

        <div style={{ marginTop: "48px" }}>
          <div style={{ fontSize: "11px", color: "#94a3b8", letterSpacing: "3px", marginBottom: "14px" }}>
            ZOHO PRODUCTS WE SPECIALIZE IN
          </div>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            {["CRM", "People", "Recruit", "Creator", "Desk", "Campaigns", "Analytics"].map(p => (
              <div key={p} style={{
                background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px",
                padding: "6px 12px", fontSize: "12px", color: "#334155", fontWeight: "600",
                fontFamily: "system-ui, sans-serif", boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
              }}>{p}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const isMobile = useIsMobile();
  const services = [
    { icon: "👥", title: "Zoho People", desc: "Custom HR workflows, leave management, attendance, onboarding automation tailored to your organization." },
    { icon: "🎯", title: "Zoho Recruit", desc: "End-to-end recruitment pipelines, custom job boards, candidate tracking and interview automation." },
    { icon: "💼", title: "Zoho CRM", desc: "Sales pipelines, lead scoring, automation rules, custom modules and third-party integrations." },
    { icon: "🛠️", title: "Zoho Creator", desc: "Custom low-code applications built to solve unique business problems no off-the-shelf tool can fix." },
    { icon: "🎧", title: "Zoho Desk", desc: "Support ticket workflows, SLA configuration, agent automation and customer portal setup." },
    { icon: "📣", title: "Zoho Campaigns", desc: "Email campaign setup, audience segmentation, automation journeys and performance tracking." },
    { icon: "📊", title: "Zoho Analytics", desc: "Custom dashboards, cross-module reports, KPI tracking and executive-level data visualization." },
    { icon: "🔗", title: "Zoho Integrations", desc: "Connect Zoho apps with each other and external tools like WhatsApp, Payment Gateways and more." },
  ];
  return (
    <section id="services" style={{ background: "#ffffff", padding: isMobile ? "60px 20px" : "100px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", color: BLUE_MID, letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>What We Do</div>
          <h2 style={{ fontSize: isMobile ? "28px" : "38px", fontWeight: "900", color: "#0f172a", fontFamily: "Georgia, serif", letterSpacing: "-1px", marginBottom: "12px" }}>Zoho Services We Offer</h2>
          <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "500px", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
            Every service is fully customized to your business — no templates, no shortcuts.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: "16px"
        }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: "#f8fafc", borderRadius: "16px",
              padding: "24px 20px", border: "1px solid #e2e8f0",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${BLUE}22`; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "26px", marginBottom: "12px" }}>{s.icon}</div>
              <div style={{ fontSize: "15px", fontWeight: "800", color: "#1e293b", marginBottom: "8px", fontFamily: "Georgia, serif" }}>{s.title}</div>
              <div style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const isMobile = useIsMobile();
  const stats = [
    { num: "5+", label: "Zoho Products" },
    { num: "100%", label: "Custom Work" },
    { num: "Fast", label: "Turnaround" },
    { num: "1:1", label: "Support" },
  ];
  return (
    <section id="about" style={{
      background: "linear-gradient(160deg, #eff6ff 0%, #f8fafc 100%)",
      padding: isMobile ? "60px 20px" : "100px 40px"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          alignItems: "center"
        }}>
          <div>
            <div style={{ fontSize: "11px", color: BLUE_MID, letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700", marginBottom: "12px" }}>Who We Are</div>
            <h2 style={{ fontSize: isMobile ? "28px" : "36px", fontWeight: "900", color: "#0f172a", fontFamily: "Georgia, serif", letterSpacing: "-1px", lineHeight: 1.2, marginBottom: "18px" }}>We Speak Zoho.<br />Fluently.</h2>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.8, fontFamily: "system-ui, sans-serif", marginBottom: "14px" }}>
              Opsvia is a specialized Zoho customization consultancy. We don't do generic IT — we go deep into the Zoho ecosystem and build solutions that work exactly the way your business needs them to.
            </p>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.8, fontFamily: "system-ui, sans-serif", marginBottom: "24px" }}>
              From CRM pipelines to HR workflows, helpdesk automations to custom Creator apps — we configure, customize, and connect Zoho so you can focus on growing your business.
            </p>
            <a href="#contact" style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`,
              color: "#fff", padding: "12px 28px", borderRadius: "8px",
              fontSize: "14px", fontWeight: "700", textDecoration: "none",
              boxShadow: `0 4px 16px ${BLUE}33`
            }}>Work With Us →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: "16px",
                padding: "24px 16px", textAlign: "center",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 12px rgba(29,78,216,0.06)"
              }}>
                <div style={{
                  fontSize: "30px", fontWeight: "900",
                  background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  fontFamily: "Georgia, serif", marginBottom: "4px"
                }}>{s.num}</div>
                <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{s.label}</div>
              </div>
            ))}
            <div style={{
              gridColumn: "1 / -1",
              background: `linear-gradient(135deg, ${BLUE_DARK}, ${BLUE_MID})`,
              borderRadius: "16px", padding: "18px",
              display: "flex", alignItems: "center", gap: "12px"
            }}>
              <div style={{ fontSize: "28px" }}>⚡</div>
              <div>
                <div style={{ color: "#fff", fontSize: "13px", fontWeight: "800", marginBottom: "2px" }}>Zoho Ecosystem Expert</div>
                <div style={{ color: "#93c5fd", fontSize: "11px", lineHeight: 1.5 }}>CRM · People · Recruit · Creator · Desk · Campaigns · Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleSubmit = () => { if (form.name && form.email && form.message) setSent(true); };
  return (
    <section id="contact" style={{ background: "#ffffff", padding: isMobile ? "60px 20px" : "100px 40px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", color: BLUE_MID, letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>Get Started</div>
          <h2 style={{ fontSize: isMobile ? "28px" : "38px", fontWeight: "900", color: "#0f172a", fontFamily: "Georgia, serif", letterSpacing: "-1px", marginBottom: "12px" }}>Let's Talk Zoho</h2>
          <p style={{ color: "#64748b", fontSize: "15px", fontFamily: "system-ui, sans-serif" }}>Tell us what you need and we'll get back to you within 24 hours.</p>
        </div>
        {sent ? (
          <div style={{ background: "#eff6ff", border: `2px solid ${BLUE_LIGHT}`, borderRadius: "20px", padding: "50px 30px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "14px" }}>✅</div>
            <div style={{ fontSize: "22px", fontWeight: "900", color: BLUE_DARK, fontFamily: "Georgia, serif", marginBottom: "8px" }}>Message Sent!</div>
            <div style={{ color: "#64748b", fontFamily: "system-ui, sans-serif" }}>We'll reach out to <strong>{form.email}</strong> within 24 hours.</div>
          </div>
        ) : (
          <div style={{ background: "#f8fafc", borderRadius: "20px", padding: isMobile ? "28px 20px" : "44px 40px", border: "1px solid #e2e8f0", boxShadow: "0 4px 32px rgba(29,78,216,0.07)" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              {[{ key: "name", label: "Your Name", placeholder: "e.g. Ravi Kumar" }, { key: "email", label: "Email Address", placeholder: "you@company.com" }].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: "12px", fontWeight: "700", color: "#374151", display: "block", marginBottom: "6px", fontFamily: "system-ui, sans-serif" }}>{f.label}</label>
                  <input value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1.5px solid #e2e8f0", fontSize: "14px", fontFamily: "system-ui, sans-serif", outline: "none", boxSizing: "border-box", background: "#fff", color: "#1e293b" }}
                    onFocus={e => e.target.style.borderColor = BLUE_MID} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#374151", display: "block", marginBottom: "6px", fontFamily: "system-ui, sans-serif" }}>Zoho Product</label>
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                style={{ width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1.5px solid #e2e8f0", fontSize: "14px", fontFamily: "system-ui, sans-serif", outline: "none", background: "#fff", color: form.service ? "#1e293b" : "#94a3b8" }}>
                <option value="">Select a Zoho product...</option>
                {["Zoho CRM", "Zoho People", "Zoho Recruit", "Zoho Creator", "Zoho Desk", "Zoho Campaigns", "Zoho Analytics", "Multiple Products"].map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: "22px" }}>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#374151", display: "block", marginBottom: "6px", fontFamily: "system-ui, sans-serif" }}>Tell Us What You Need</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your requirements..." rows={4}
                style={{ width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1.5px solid #e2e8f0", fontSize: "14px", fontFamily: "system-ui, sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box", background: "#fff", color: "#1e293b" }}
                onFocus={e => e.target.style.borderColor = BLUE_MID} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
            </div>
            <button onClick={handleSubmit} style={{ width: "100%", padding: "14px", background: `linear-gradient(135deg, ${BLUE_MID}, ${BLUE_DARK})`, color: "#fff", borderRadius: "10px", border: "none", fontSize: "15px", fontWeight: "800", cursor: "pointer", letterSpacing: "0.5px", boxShadow: `0 6px 20px ${BLUE}44`, fontFamily: "system-ui, sans-serif" }}>Send Message →</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      background: BLUE_DARK, padding: isMobile ? "30px 20px" : "40px",
      display: "flex", flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
      gap: "12px"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ fontSize: "20px", fontWeight: "900", color: "#fff", fontFamily: "Georgia, serif" }}>Opsvia</div>
        <div style={{ color: "#93c5fd", fontSize: "11px", letterSpacing: "2px" }}>· OPSVIA.IN</div>
      </div>
      <div style={{ color: "#64748b", fontSize: "12px", fontFamily: "system-ui, sans-serif" }}>© 2026 Opsvia · Zoho Customization Experts</div>
      <div style={{ color: "#93c5fd", fontSize: "12px", fontFamily: "system-ui, sans-serif" }}>hello@opsvia.in</div>
    </footer>
  );
}

export default function OpsviaWebsite() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
