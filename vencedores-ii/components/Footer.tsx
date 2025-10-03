export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Vencedores II — Todos os direitos reservados.</p>
        <div className="text-white/60 text-sm">Apoio: CAIXA</div>
      </div>
    </footer>
  );
}
