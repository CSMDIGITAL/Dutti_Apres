import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vencedores II — Documentário Fotográfico',
  description: 'Esporte paralímpico em sua essência. Fotos com impacto e patrocínio.',
  openGraph: {
    title: 'Vencedores II',
    description: 'Documentário fotográfico do esporte paralímpico',
    images: ['/images/vencedores/cover-vencedores-2.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
