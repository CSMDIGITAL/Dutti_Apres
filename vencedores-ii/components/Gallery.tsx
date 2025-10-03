'use client';
import Image from 'next/image';
import { useState } from 'react';
import { photos } from '@/data/photos';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => { setIndex(i); setOpen(true); };

  return (
    <section id="galeria" className="container py-20">
      <h2 className="text-3xl md:text-5xl font-semibold mb-8">Galeria</h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((p, i) => (
          <figure key={p.id} className="mb-4 break-inside-avoid cursor-zoom-in" onClick={() => openAt(i)}>
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              className="w-full h-auto rounded-2xl hover:opacity-90 transition"
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
            {p.caption && (
              <figcaption className="text-sm text-white/70 mt-2">{p.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {open && (
        <Lightbox index={index} onClose={() => setOpen(false)} />
      )}
    </section>
  );
}
