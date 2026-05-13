import Timeline from "./Timeline";

const steps = [
  {
    num: "01",
    title: "Acolhimento e escuta",
    text: "A psicoterapia começa em um espaço seguro, sigiloso e sem julgamentos, onde você pode falar livremente sobre suas emoções e experiências.",
  },
  {
    num: "02",
    title: "Compreensão da sua história",
    text: "Nas primeiras sessões, buscamos entender sua trajetória, suas queixas principais e o que você deseja transformar, construindo juntas um direcionamento personalizado.",
  },
  {
    num: "03",
    title: "Reflexão e mudança",
    text: "Ao longo das sessões, são utilizadas intervenções que ajudam a identificar padrões, compreender emoções e desenvolver estratégias mais saudáveis para o dia a dia.",
  },
  {
    num: "04",
    title: "Autoconhecimento e evolução",
    text: "Com o tempo, a psicoterapia favorece maior compreensão de si mesma, fortalecimento emocional e construção de autonomia, com mudanças consistentes e graduais.",
  },
];

export default function ComoFuncionaPsicoterapia() {
  return (
    <section id="psicoterapia" className="vs-section" style={{ background: "#FFFFFF" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
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
            PSICOTERAPIA CLÍNICA
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--marrom-escuro)",
              marginBottom: 16,
            }}
          >
            Como é o processo terapêutico
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 17,
              color: "var(--texto-suave)",
            }}
          >
            Um caminho estruturado e acolhedor, pensado para o seu ritmo.
          </p>
        </div>
        <Timeline steps={steps} />
      </div>
    </section>
  );
}
