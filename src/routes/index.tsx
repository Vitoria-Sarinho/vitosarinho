import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SobreMim from "@/components/sections/SobreMim";
import Especialidades from "@/components/sections/Especialidades";
import ComoFuncionaPsicoterapia from "@/components/sections/ComoFuncionaPsicoterapia";
import ComoFuncionaAvaliacao from "@/components/sections/ComoFuncionaAvaliacao";
import Depoimentos from "@/components/sections/Depoimentos";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = "https://vitosarinho.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitória Sarinho — Psicóloga e Neuropsicóloga" },
      {
        name: "description",
        content:
          "Atendimento humanizado em Psicoterapia Clínica e Avaliação Neuropsicológica online para todo o Brasil. CRP 02/28587.",
      },
      { property: "og:title", content: "Vitória Sarinho — Psicóloga e Neuropsicóloga" },
      {
        property: "og:description",
        content:
          "Atendimento humanizado em Psicoterapia Clínica e Avaliação Neuropsicológica online para todo o Brasil.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": `${SITE_URL}/#business`,
          name: "Vitória Sarinho — Psicóloga e Neuropsicóloga",
          url: SITE_URL,
          medicalSpecialty: ["Psychiatric", "Psychological"],
          description:
            "Atendimento humanizado em Psicoterapia Clínica e Avaliação Neuropsicológica online para todo o Brasil.",
          areaServed: { "@type": "Country", name: "Brasil" },
          availableService: [
            { "@type": "MedicalTherapy", name: "Psicoterapia Clínica" },
            { "@type": "MedicalTest", name: "Avaliação Neuropsicológica" },
          ],
          founder: {
            "@type": "Person",
            name: "Vitória Sarinho",
            jobTitle: "Psicóloga Clínica e Neuropsicóloga",
            identifier: "CRP 02/28587",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.body.classList.add("vs-site");
    // Remove qualquer hash da URL e força scroll ao topo antes da pintura
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
    return () => document.body.classList.remove("vs-site");
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMim />
        <Especialidades />
        <ComoFuncionaPsicoterapia />
        <ComoFuncionaAvaliacao />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
