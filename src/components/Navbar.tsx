import { useEffect, useState } from "react";
import logoHero from "@/assets/logo-hero.png";
import logoColorido from "@/assets/logo-colorido.png";

const WA_URL =
  "https://wa.me/5581998396041?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20agendar%20uma%20consulta!";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Como Funciona", href: "#psicoterapia" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar({ forceLight = false }: { forceLight?: boolean } = {}) {
  const [scrolledState, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (forceLight) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceLight]);

  const scrolled = forceLight || scrolledState;
  const linkColor = scrolled ? "var(--texto-medio)" : "rgba(255,255,255,0.85)";
  const iconColor = scrolled ? "var(--marrom-escuro)" : "#FFFFFF";

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          background: scrolled ? "rgba(249,243,238,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 24px rgba(64,15,15,0.08)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          className="vs-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--nav-h, 72px)",
          }}
        >
          <a
            href="#top"
            aria-label="Vitória Sarinho · Início"
            style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
          >
            <img
              src={scrolled ? logoColorido : logoHero}
              alt="Vitória Sarinho"
              style={{ height: 44, width: "auto", objectFit: "contain", transition: "opacity 0.4s ease" }}
            />
          </a>

          <nav className="vs-nav-desktop" style={{ display: "none", alignItems: "center", gap: 36 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracota)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta pelo WhatsApp"
              style={{
                border: `1.5px solid ${scrolled ? "var(--marrom)" : "rgba(255,255,255,0.6)"}`,
                color: scrolled ? "var(--marrom)" : "rgba(255,255,255,0.95)",
                borderRadius: "var(--vs-radius-md)",
                padding: "10px 22px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--terracota)";
                e.currentTarget.style.borderColor = "var(--terracota)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = scrolled ? "var(--marrom)" : "rgba(255,255,255,0.6)";
                e.currentTarget.style.color = scrolled ? "var(--marrom)" : "rgba(255,255,255,0.95)";
              }}
            >
              Agendar consulta
            </a>
          </nav>

          <button
            className="vs-nav-mobile-btn"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: iconColor,
              transition: "color 0.4s ease",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 200,
          }}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 85vw)",
              background: "var(--marrom-escuro)",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "transparent",
                border: "none",
                color: "rgba(242,213,187,0.6)",
                cursor: "pointer",
                padding: 4,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", flex: 1 }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: "rgba(242,213,187,0.85)",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    fontSize: 17,
                    textDecoration: "none",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta pelo WhatsApp"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24,
                background: "var(--terracota)",
                color: "#fff",
                padding: "16px",
                width: "100%",
                borderRadius: "var(--vs-radius-md)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Agendar consulta
            </a>
          </aside>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .vs-nav-desktop { display: flex !important; }
          .vs-nav-mobile-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          header > .vs-container { height: 64px !important; }
        }
      `}</style>
    </>
  );
}
