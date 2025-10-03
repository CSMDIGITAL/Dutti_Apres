import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import { Stat } from '@/components/Stat';
import TierCard from '@/components/TierCard';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />

      {/* Sobre + Métricas */}
      <section className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">Sobre o Projeto</h2>
          <p className="text-lg leading-relaxed text-white/85">
            <strong>Vencedores II</strong> é um documentário fotográfico que retrata o
            esporte paralímpico em sua essência, acompanhando atletas em grandes
            competições nacionais e internacionais. A série valoriza técnica,
            emoção e diversidade, convidando o público a ver além do pódio.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat label="Atletas retratados" value="80+" />
          <Stat label="Países" value="10" />
          <Stat label="Eventos" value="15+" />
          <Stat label="Fotos" value="5.000+" />
        </div>
      </section>

      <Gallery />

      {/* Cotas de Patrocínio */}
      <section id="patrocinio" className="container py-24">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10">Cotas de Patrocínio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <TierCard tier="Bronze" price="—" features={["Logo no site", "Créditos oficiais"]} />
          <TierCard tier="Prata" price="—" features={["+ Posts dedicados", "+ Citação em releases"]} highlight />
          <TierCard tier="Ouro" price="—" features={["+ Presença em exposições", "+ Ativações de marca", "+ Destaque na capa"]} />
        </div>
        <div className="mt-8">
          <a
            href="https://wa.me/5500000000000?text=Quero%20patrocinar%20o%20Vencedores%20II"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-brand-accent text-black font-semibold"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
