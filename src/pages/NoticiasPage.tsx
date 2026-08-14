import { Newspaper, Search, ExternalLink, Bookmark } from 'lucide-react';
import { allNews } from '../data/mockData';

const BADGE: Record<string, string> = {
  POSITIVA: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  NEGATIVA: 'bg-red-500/15 text-red-400 border-red-500/30',
  NEUTRAL: 'bg-gray-500/15 text-gray-300 border-gray-500/30',
};

const FILTERS = ['Todas', 'Positivas', 'Negativas', 'Neutrales'];
const SOURCES = ['Todas las fuentes', 'El Sur de Guerrero', 'Diario 21', 'Milenio', 'Reforma', 'La Jornada'];

export function NoticiasPage() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Newspaper size={18} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Cobertura de prensa</h1>
            <p className="text-gray-400 text-[13px]">Noticias, artículos y menciones en medios</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select className="px-3 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-300 text-xs">
            {SOURCES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
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
        <StatCard label="Total del día" value="47" trend="+12 vs. ayer" />
        <StatCard label="Cobertura positiva" value="58%" trend="+3 pts" color="emerald" />
        <StatCard label="Cobertura negativa" value="21%" trend="+4 pts" color="red" />
        <StatCard label="Medios monitoreados" value="128" trend="12 activos hoy" />
      </div>

      <div className="flex items-center gap-2">
        {FILTERS.map((f, i) => (
          <button
            key={f}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              i === 0
                ? 'bg-violet-500/15 border border-violet-500/40 text-violet-300'
                : 'bg-[#141824] border border-[#232a3a] text-gray-400 hover:text-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        {allNews.map((n, i) => (
          <div key={i} className="card p-4 flex items-start gap-4 hover:border-violet-500/30 transition-colors">
            <div className="w-24 h-24 rounded-md bg-gradient-to-br from-slate-700 to-slate-900 shrink-0 border border-white/5 flex items-center justify-center">
              <Newspaper size={26} className="text-slate-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[15px] text-white font-semibold leading-tight">{n.title}</h3>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider shrink-0 ${BADGE[n.sentiment]}`}>
                  {n.sentiment}
                </span>
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
        ))}
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
