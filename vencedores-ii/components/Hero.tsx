'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/vencedores/cover-vencedores-2.jpg"
          alt="Vencedores II capa"
          fill
          className="object-cover kenburns"
          priority
        />
      </div>

      <div className="relative container min-h-[70vh] flex flex-col items-start justify-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow"
        >
          Vencedores <span className="text-brand-support">II</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-white/90"
        >
          Um documentário fotográfico que retrata o esporte paralímpico em sua essência,
          destacando sua presença nas mais importantes competições.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a href="#galeria" className="rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/20">
            Ver Galeria
          </a>
          <a href="#patrocinio" className="rounded-2xl px-6 py-3 bg-brand-accent text-black font-semibold">
            Quero Patrocinar
          </a>
        </div>
      </div>
    </section>
  );
}
