import { useState, useMemo } from 'react';
import { Newspaper, Search, ExternalLink, Bookmark, SlidersHorizontal } from 'lucide-react';
import { allNews, mediaTierMeta, type MediaTier } from '../data/mockData';

const BADGE: Record<string, string> = {
  POSITIVA: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  NEGATIVA: 'bg-red-500/15 text-red-400 border-red-500/30',
  NEUTRAL: 'bg-gray-500/15 text-gray-300 border-gray-500/30',
};

const SENTIMENT_FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'POSITIVA', label: 'Positivas' },
  { key: 'NEGATIVA', label: 'Negativas' },
  { key: 'NEUTRAL', label: 'Neutrales' },
] as const;

const TIER_FILTERS: { key: MediaTier | 'all'; label: string }[] = [
  { key: 'all', label: 'Todos los medios' },
  { key: 'nacional-tv', label: 'TV nacional' },
  { key: 'nacional-print', label: 'Prensa nacional' },
  { key: 'regional', label: 'Regional' },
  { key: 'digital-medio', label: 'Digital' },
  { key: 'influencer', label: 'Influencers' },
];

export function NoticiasPage() {
  const [sentimentFilter, setSentimentFilter] = useState<'all' | 'POSITIVA' | 'NEGATIVA' | 'NEUTRAL'>('all');
  const [tierFilter, setTierFilter] = useState<MediaTier | 'all'>('all');
  const [sortByWeight, setSortByWeight] = useState(true);

  const filtered = useMemo(() => {
    let arr = [...allNews];
    if (sentimentFilter !== 'all') arr = arr.filter((n) => n.sentiment === sentimentFilter);
    if (tierFilter !== 'all') arr = arr.filter((n) => n.tier === tierFilter);
    if (sortByWeight) arr.sort((a, b) => mediaTierMeta[b.tier].weight - mediaTierMeta[a.tier].weight);
    return arr;
  }, [sentimentFilter, tierFilter, sortByWeight]);

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Newspaper size={18} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Cobertura de prensa</h1>
            <p className="text-gray-400 text-[13px]">Ponderadas por peso del medio: TV nacional ×3, prensa nacional ×2.5, regional ×2, digital ×1, influencer ×0.5</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSortByWeight((s) => !s)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-colors ${
              sortByWeight ? 'bg-violet-500/15 border-violet-500/40 text-violet-300' : 'bg-[#141824] border-[#232a3a] text-gray-300 hover:bg-[#1a1f2b]'
            }`}
          >
            <SlidersHorizontal size={12} />
            <span>{sortByWeight ? 'Ordenadas por peso' : 'Orden cronológico'}</span>
          </button>
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              placeholder="Buscar en noticias..."
              className="pl-8 pr-3 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-200 text-xs w-60 focus:outline-none focus:border-violet-500/60"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <StatCard label="Total del día" value={String(allNews.length)} trend="+12 vs. ayer" />
        <StatCard label="Cobertura positiva" value={`${Math.round(allNews.filter(n => n.sentiment === 'POSITIVA').length / allNews.length * 100)}%`} trend="+3 pts" color="emerald" />
        <StatCard label="Cobertura negativa" value={`${Math.round(allNews.filter(n => n.sentiment === 'NEGATIVA').length / allNews.length * 100)}%`} trend="+4 pts" color="red" />
        <StatCard label="Medios monitoreados" value="128" trend="12 activos hoy" />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {SENTIMENT_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setSentimentFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              sentimentFilter === f.key
                ? 'bg-violet-500/15 border border-violet-500/40 text-violet-300'
                : 'bg-[#141824] border border-[#232a3a] text-gray-400 hover:text-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="w-px h-4 bg-[#232a3a] mx-1" />
        {TIER_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setTierFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              tierFilter === f.key
                ? 'bg-violet-500/15 border border-violet-500/40 text-violet-300'
                : 'bg-[#141824] border border-[#232a3a] text-gray-400 hover:text-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        {filtered.map((n, i) => {
          const tier = mediaTierMeta[n.tier];
          return (
            <div key={i} className="card p-4 flex items-start gap-4 hover:border-violet-500/30 transition-colors">
              <div className="w-24 h-24 rounded-md bg-gradient-to-br from-slate-700 to-slate-900 shrink-0 border border-white/5 flex items-center justify-center">
                <Newspaper size={26} className="text-slate-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[15px] text-white font-semibold leading-tight">{n.title}</h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-wider uppercase ${tier.bg} ${tier.border} ${tier.text}`}
                      title={`${tier.label} · peso ×${tier.weight}`}
                    >
                      {tier.short} ×{tier.weight}
                    </span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider ${BADGE[n.sentiment]}`}>
                      {n.sentiment}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-gray-400 mt-1.5 leading-snug">{n.summary}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500">
                    <span className="font-medium text-gray-400">{n.source}</span>
                    <span>·</span>
                    <span>{n.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded hover:bg-white/5 text-gray-500 hover:text-gray-300">
                      <Bookmark size={13} />
                    </button>
                    <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#141824] border border-[#232a3a] text-violet-400 hover:text-violet-300 text-[11px]">
                      <span>Leer completa</span>
                      <ExternalLink size={11} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({ label, value, trend, color }: { label: string; value: string; trend: string; color?: 'emerald' | 'red' }) {
  const c = color === 'emerald' ? 'text-emerald-400' : color === 'red' ? 'text-red-400' : 'text-gray-200';
  return (
    <div className="card p-4">
      <p className="text-[11px] text-gray-400">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${c}`}>{value}</p>
      <p className="text-[10px] text-gray-500 mt-1">{trend}</p>
    </div>
  );
}
