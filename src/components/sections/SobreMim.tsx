import heroImg from "@/assets/foto-sobre.jpg";

const valores = ["Ética profissional", "Escuta ativa", "Sigilo garantido", "Humanização"];

export default function SobreMim() {
  return (
    <section id="sobre" className="vs-section" style={{ background: "#FFFFFF", overflowX: "hidden" }}>
      <div
        className="vs-container vs-sobre-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", overflow: "visible" }}>
          <div
            aria-hidden
            className="vs-sobre-deco"
            style={{
              position: "absolute",
              top: -16,
              left: -16,
              width: 180,
              height: 180,
              border: "2px solid var(--terracota)",
              borderRadius: 0,
              background: "transparent",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <img
            src={heroImg}
            alt="Vitória Sarinho em seu consultório"
            className="vs-sobre-img"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: 520,
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: "0 var(--vs-radius-xl) 0 var(--vs-radius-xl)",
              display: "block",
            }}
          />
        </div>

        <div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--terracota)",
              marginBottom: 16,
            }}
          >
            SOBRE MIM
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 38px)",
              color: "var(--marrom-escuro)",
              marginBottom: 24,
            }}
          >
            Cuidar é o meu propósito.
          </h2>

          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 16, color: "var(--texto-medio)", marginBottom: 20, lineHeight: 1.8 }}>
            Sou Vitória Sarinho, psicóloga clínica e neuropsicóloga com 5 anos de experiência. Meu
            trabalho nasceu de um propósito: criar um espaço onde cada pessoa seja realmente ouvida,
            respeitada e acolhida na sua individualidade.
          </p>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 16, color: "var(--texto-medio)", lineHeight: 1.8 }}>
            Acredito que o cuidado com a saúde mental transforma vidas, e me comprometo com esse
            processo em cada atendimento, com ética, escuta ativa e técnica baseada em evidências.
          </p>

          <div style={{ height: 1, background: "rgba(199,171,149,0.3)", margin: "28px 0" }} />

          <div
            className="vs-sobre-valores"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {valores.map((v) => (
              <div key={v} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12 13 4.5" stroke="var(--terracota)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, fontSize: 14, color: "var(--texto-medio)" }}>
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div
            className="vs-sobre-crp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1.5px solid rgba(140,65,48,0.25)",
              background: "rgba(242,213,187,0.3)",
              borderRadius: "var(--vs-radius-sm)",
              padding: "10px 18px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 13,
              color: "var(--marrom)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="var(--marrom)" strokeWidth="1.4" />
              <path d="M4.5 7L6 8.5 9.5 5" stroke="var(--marrom)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            CRP 02/28587 · Conselho Regional de Psicologia
          </div>
        </div>
      </div>

      {/* Faixa de cards abaixo da seção Sobre Mim */}
      <div
        className="vs-container cards-sobre"
        style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {/* Card 1 */}
        <div className="metric-card" style={{ background: "var(--marrom-escuro)", borderRadius: "var(--vs-radius-md)", padding: "28px 24px", textAlign: "center" }}>
          <div className="card-desktop">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 42, color: "#fff", marginBottom: 6 }}>5 anos</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 13, color: "rgba(242,213,187,0.8)" }}>de experiência clínica</div>
          </div>
          <div className="card-mobile">
            <span className="card-mobile-value">5 anos</span>
            <span className="card-mobile-sep" />
            <span className="card-mobile-desc">de experiência clínica</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="metric-card" style={{ background: "var(--marrom)", borderRadius: "var(--vs-radius-md)", padding: "28px 24px", textAlign: "center" }}>
          <div className="card-desktop">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 42, color: "#fff", marginBottom: 6 }}>Online</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 13, color: "rgba(242,213,187,0.8)" }}>Atendimento para todo o Brasil</div>
          </div>
          <div className="card-mobile">
            <span className="card-mobile-value">Online</span>
            <span className="card-mobile-sep" />
            <span className="card-mobile-desc">Atendimento para todo o Brasil</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="metric-card" style={{ background: "var(--marrom-medio)", borderRadius: "var(--vs-radius-md)", padding: "28px 24px", textAlign: "center" }}>
          <div className="card-desktop">
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--nude-claro)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>CRP</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 42, color: "#fff", marginBottom: 4 }}>02/28587</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, color: "rgba(242,213,187,0.75)" }}>Psicóloga registrada</div>
          </div>
          <div className="card-mobile">
            <span className="card-mobile-value">CRP</span>
            <span className="card-mobile-sep" />
            <span className="card-mobile-desc">02/28587 · Psicóloga registrada</span>
          </div>
        </div>
      </div>

      <style>{`
        .card-mobile { display: none; }
        @media (min-width: 1024px) {
          .vs-sobre-grid { grid-template-columns: 45% 55% !important; gap: 80px !important; }
        }
        @media (max-width: 768px) {
          .cards-sobre { grid-template-columns: 1fr !important; gap: 0 !important; }
          .cards-sobre > div { border-radius: 0 !important; padding: 20px 24px !important; text-align: left !important; }
          .card-desktop { display: none !important; }
          .card-mobile {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            gap: 16px;
          }
          .card-mobile-value {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 500;
            font-size: 32px;
            color: #FFFFFF;
            flex-shrink: 0;
            min-width: 80px;
          }
          .card-mobile-sep {
            display: block;
            width: 1px;
            height: 36px;
            background: rgba(242,213,187,0.2);
            flex-shrink: 0;
          }
          .card-mobile-desc {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 13px;
            color: rgba(242,213,187,0.65);
            line-height: 1.5;
          }
          .vs-sobre-img { height: 380px !important; border-radius: var(--vs-radius-lg) !important; }
          .vs-sobre-deco {
            display: block !important;
            top: -10px !important;
            left: -10px !important;
            width: 120px !important;
            height: 120px !important;
            border: 2px solid var(--terracota) !important;
            opacity: 0.7 !important;
            z-index: -1 !important;
          }
          .vs-sobre-valores { gap: 12px !important; }
          .vs-sobre-crp { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
