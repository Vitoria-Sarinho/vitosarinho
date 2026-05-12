import logoHero from "@/assets/logo-hero.png";

const menu = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Psicoterapia", href: "#psicoterapia" },
  { label: "Avaliação", href: "#avaliacao" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const labelStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  fontSize: 11,
  textTransform: "uppercase" as const,
  letterSpacing: "0.15em",
  color: "var(--terracota)",
  marginBottom: 20,
};

const itemStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
  fontSize: 13,
  color: "rgba(242,213,187,0.65)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  transition: "color 0.2s ease",
};

export default function Footer() {
  return (
    <footer style={{ background: "#1A0A04", borderTop: "2px solid var(--terracota)" }}>
      <div
        className="vs-container vs-footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
          padding: "48px 24px 32px",
        }}
      >
        <div>
          <img src={logoHero} alt="Vitória Sarinho" style={{ height: 40, width: "auto", objectFit: "contain", display: "block" }} />
          <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: 13, color: "rgba(242,213,187,0.45)", marginTop: 8 }}>
            Psicóloga Clínica e Neuropsicóloga
          </div>
          <div style={{ height: 1, background: "rgba(199,171,149,0.15)", margin: "20px 0" }} />
          <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, fontSize: 12, color: "var(--terracota)" }}>
            CRP 02/28587
          </div>
        </div>

        <div>
          <div style={labelStyle}>Contato</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="mailto:consultoriovitoriasarinho@gmail.com" style={itemStyle}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(242,213,187,0.4)" strokeWidth="1.4">
                <rect x="1.5" y="2.5" width="11" height="9" rx="1" />
                <path d="M1.5 3.5L7 8l5.5-4.5" />
              </svg>
              consultoriovitoriasarinho@gmail.com
            </a>
            <a href="tel:+5581998396041" style={itemStyle}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(242,213,187,0.4)" strokeWidth="1.4">
                <path d="M3 1.5h2l1 3-1.5 1a8 8 0 0 0 4 4l1-1.5 3 1v2a1 1 0 0 1-1 1A11 11 0 0 1 2 2.5a1 1 0 0 1 1-1z" strokeLinejoin="round" />
              </svg>
              (81) 99839-6041
            </a>
            <a href="https://instagram.com/vitoriasarinhopsi" target="_blank" rel="noopener noreferrer" style={itemStyle}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(242,213,187,0.4)" strokeWidth="1.4">
                <rect x="1.5" y="1.5" width="11" height="11" rx="3" />
                <circle cx="7" cy="7" r="2.5" />
                <circle cx="10.3" cy="3.7" r="0.5" fill="rgba(242,213,187,0.4)" />
              </svg>
              @vitoriasarinhopsi
            </a>
          </div>
        </div>

        <div>
          <div style={labelStyle}>Menu</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {menu.map((m) => (
              <a
                key={m.href}
                href={m.href}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "rgba(242,213,187,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(242,213,187,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,213,187,0.6)")}
              >
                {m.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "#130804", padding: "16px 0" }}>
        <div
          className="vs-container vs-footer-bottom"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, color: "rgba(242,213,187,0.35)" }}>
            © 2026 Vitória Sarinho — Todos os direitos reservados.
          </span>
          <a
            href="/privacidade"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, color: "rgba(242,213,187,0.35)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracota)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,213,187,0.35)")}
          >
            Política de Privacidade
          </a>
          <a
            href="https://nextassessoria.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, color: "rgba(242,213,187,0.3)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(242,213,187,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,213,187,0.3)")}
          >
            Desenvolvido por Next Assessoria
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .vs-footer-grid { grid-template-columns: 1fr 1fr 1fr !important; padding: 64px 24px 40px !important; }
          .vs-footer-bottom { flex-direction: row !important; justify-content: space-between !important; text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
