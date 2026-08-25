import { Link, useParams } from 'react-router-dom';
import { mediaTierMeta } from '../data/mockData';
import { useActiveProfile } from '../hooks/useActiveProfile';

const BADGE: Record<string, string> = {
  POSITIVA: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  NEGATIVA: 'bg-red-500/15 text-red-400 border-red-500/30',
  NEUTRAL: 'bg-gray-500/15 text-gray-300 border-gray-500/30',
};

export function TopNewsPanel() {
  const { topNews } = useActiveProfile();
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="card p-3 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h3 className="text-[12px] font-semibold text-gray-200 truncate">Noticias principales del día</h3>
        <Link to={`/c/${slug}/noticias`} className="text-[10px] text-violet-400 hover:text-violet-300 shrink-0 whitespace-nowrap">Ver todas</Link>
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        {topNews.map((n, i) => {
          const tier = mediaTierMeta[n.tier];
          return (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-11 h-11 rounded-md bg-gradient-to-br from-slate-700 to-slate-900 shrink-0 border border-white/5" />
              <div className="flex-1 min-w-0">
                <p className="text-[12px] text-gray-100 font-medium leading-tight line-clamp-2">{n.title}</p>
                <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                  <span
                    className={`text-[8px] font-bold px-1 py-0.5 rounded border tracking-wider uppercase ${tier.bg} ${tier.border} ${tier.text}`}
                    title={`${tier.label} · peso ×${tier.weight}`}
                  >
                    {tier.short}
                  </span>
                  <span className="text-[10px] text-gray-500 truncate">
                    {n.source} · {n.time}
                  </span>
                </div>
              </div>
              <span
                className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded border tracking-wider ${BADGE[n.sentiment]}`}
              >
                {n.sentiment}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
