export default function TierCard({ tier, price, features, highlight }: { tier: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 border ${highlight ? 'border-brand-support bg-white/5' : 'border-white/10'}`}>
      <h3 className="text-2xl font-semibold">{tier}</h3>
      <div className="text-3xl font-extrabold mt-2">{price}</div>
      <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
        {features.map((f, i) => (<li key={i}>{f}</li>))}
      </ul>
    </div>
  );
}
