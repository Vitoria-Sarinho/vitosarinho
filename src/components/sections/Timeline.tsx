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
        gap: 40,
        marginTop: 56,
        position: "relative",
      }}
    >
      {steps.map((s, i) => (
        <div key={s.num} className="vs-step" style={{ position: "relative" }}>
          <div
            aria-hidden
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "var(--terracota)",
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {s.num}
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: 17,
              color: "var(--marrom-escuro)",
              marginTop: 20,
            }}
          >
            {s.title}
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              color: "var(--texto-suave)",
              lineHeight: 1.8,
              marginTop: 10,
            }}
          >
            {s.text}
          </p>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="vs-step-connector"
              style={{
                position: "absolute",
                left: 25,
                top: 60,
                bottom: -40,
                width: 1,
                borderLeft: "1px dashed rgba(199,171,149,0.6)",
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @media (min-width: 1024px) {
          .vs-timeline { grid-template-columns: repeat(4, 1fr) !important; gap: 32px !important; }
          .vs-step-connector {
            left: 60px !important; top: 26px !important; bottom: auto !important;
            width: calc(100% - 60px) !important; height: 1px !important;
            border-left: none !important;
            border-top: 1px dashed rgba(199,171,149,0.6) !important;
          }
        }
      `}</style>
    </div>
  );
}
