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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    document.body.classList.add("vs-site");
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
