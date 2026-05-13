export interface Step {
  num: string;
  title: string;
  text: string;
}

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div
      className="vs-timeline"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 32,
        marginTop: 56,
        position: "relative",
      }}
    >
      {steps.map((s, i) => (
        <div key={s.num} className="vs-step" style={{ position: "relative", display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div
            aria-hidden
            className="vs-step-circle"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--terracota)",
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            {s.num}
          </div>
          <div className="vs-step-body" style={{ flex: 1 }}>
            <h3
              className="vs-step-title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: 16,
                color: "var(--marrom-escuro)",
                marginTop: 0,
              }}
            >
              {s.title}
            </h3>
            <p
              className="vs-step-text"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "var(--texto-suave)",
                lineHeight: 1.75,
                marginTop: 8,
              }}
            >
              {s.text}
            </p>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="vs-step-connector"
              style={{
                position: "absolute",
                left: 21,
                top: 44,
                bottom: -32,
                width: 2,
                background: "rgba(198,122,99,0.2)",
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @media (min-width: 1024px) {
          .vs-timeline { grid-template-columns: repeat(4, 1fr) !important; gap: 32px !important; }
          .vs-step { display: block !important; }
          .vs-step-circle { width: 52px !important; height: 52px !important; font-size: 20px !important; }
          .vs-step-title { font-size: 17px !important; margin-top: 20px !important; }
          .vs-step-text { font-size: 14px !important; margin-top: 10px !important; }
          .vs-step-connector {
            left: 60px !important; top: 26px !important; bottom: auto !important;
            width: calc(100% - 60px) !important; height: 2px !important;
            background: transparent !important;
            border-top: 1px dashed rgba(199,171,149,0.6) !important;
          }
        }
      `}</style>
    </div>
  );
}
