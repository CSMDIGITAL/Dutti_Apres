'use client';
import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { photos } from '@/data/photos';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Lightbox({ index, onClose }: { index: number; onClose: () => void }) {
  const [i, setI] = useState(index);

  const prev = useCallback(() => setI((v) => (v - 1 + photos.length) % photos.length), []);
  const next = useCallback(() => setI((v) => (v + 1) % photos.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey as any);
    return () => window.removeEventListener('keydown', onKey as any);
  }, [next, prev, onClose]);

  const p = photos[i];

  return (
    <div role="dialog" aria-label="Lightbox" className="fixed inset-0 bg-black/90 backdrop-blur z-50 flex items-center justify-center p-4">
      <button aria-label="Fechar" onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20"><X /></button>
      <button aria-label="Anterior" onClick={prev} className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20"><ChevronLeft /></button>
      <figure className="max-w-6xl w-full">
        <Image src={p.src} alt={p.alt} width={p.width} height={p.height} className="w-full h-auto rounded-xl" />
        {(p.caption || p.credit) && (
          <figcaption className="mt-3 text-center text-white/70 text-sm">
            {p.caption} {p.credit && <span className="ml-2">— {p.credit}</span>}
          </figcaption>
        )}
      </figure>
      <button aria-label="Próxima" onClick={next} className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20"><ChevronRight /></button>
    </div>
  );
}
