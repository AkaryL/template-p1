import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Target, AlertCircle, AlertTriangle, Info, Clock, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import { type RecommendationUrgency, type RecommendationCategory } from '../data/mockData';
import { useActiveProfile } from '../hooks/useActiveProfile';

const URGENCY: Record<RecommendationUrgency, { label: string; bg: string; border: string; text: string; Icon: typeof AlertCircle }> = {
  alta: { label: 'URGENTE', bg: 'bg-orange-500/15', border: 'border-orange-500/40', text: 'text-orange-300', Icon: AlertCircle },
  media: { label: 'MEDIA', bg: 'bg-yellow-500/15', border: 'border-yellow-500/40', text: 'text-yellow-300', Icon: AlertTriangle },
  baja: { label: 'BAJA', bg: 'bg-blue-500/15', border: 'border-blue-500/40', text: 'text-blue-300', Icon: Info },
};

const CATEGORY: Record<RecommendationCategory, { label: string; color: string }> = {
  crisis: { label: 'Manejo de crisis', color: 'text-red-300 border-red-500/40 bg-red-500/10' },
  narrativa: { label: 'Narrativa', color: 'text-violet-300 border-violet-500/40 bg-violet-500/10' },
  contenido: { label: 'Contenido', color: 'text-cyan-300 border-cyan-500/40 bg-cyan-500/10' },
  operacion: { label: 'Operación', color: 'text-blue-300 border-blue-500/40 bg-blue-500/10' },
  competencia: { label: 'Competencia', color: 'text-amber-300 border-amber-500/40 bg-amber-500/10' },
};

const FILTERS: { key: 'all' | RecommendationUrgency; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'alta', label: 'Urgentes' },
  { key: 'media', label: 'Media prioridad' },
  { key: 'baja', label: 'Baja prioridad' },
];

export function RecomendacionesPage() {
  const { recommendations, allAlerts, suggestedActions } = useActiveProfile();
  const { slug } = useParams<{ slug: string }>();
  const [filter, setFilter] = useState<'all' | RecommendationUrgency>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') {
      // ordenadas por urgencia
      const order: Record<RecommendationUrgency, number> = { alta: 0, media: 1, baja: 2 };
      return [...recommendations].sort((a, b) => order[a.urgency] - order[b.urgency]);
    }
    return recommendations.filter((r) => r.urgency === filter);
  }, [filter, recommendations]);

  const counts = useMemo(
    () => ({
      alta: recommendations.filter((r) => r.urgency === 'alta').length,
      media: recommendations.filter((r) => r.urgency === 'media').length,
      baja: recommendations.filter((r) => r.urgency === 'baja').length,
    }),
    [recommendations],
  );

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Target size={18} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Recomendaciones estratégicas</h1>
            <p className="text-gray-400 text-[13px]">Acciones priorizadas para el ciclo de campaña. Actualizadas continuamente según señales del monitoreo.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <StatCard label="Urgentes" value={counts.alta} color="orange" description="Requieren acción hoy" />
        <StatCard label="Media prioridad" value={counts.media} color="yellow" description="Ventana de 24-72h" />
        <StatCard label="Baja prioridad" value={counts.baja} color="blue" description="Para esta semana / mes" />
        <StatCard label="Acciones sugeridas" value={suggestedActions.length} color="violet" description="En próximas 24h" />
      </div>

      <div className="flex items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === f.key
                ? 'bg-violet-500/15 border border-violet-500/40 text-violet-300'
                : 'bg-[#141824] border border-[#232a3a] text-gray-400 hover:text-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>
        <div className="flex flex-col gap-3">
          {filtered.map((r) => {
            const u = URGENCY[r.urgency];
            const cat = CATEGORY[r.category];
            const alert = r.linkedAlertId ? allAlerts.find((a) => a.id === r.linkedAlertId) : null;
            return (
              <div key={r.id} className="card p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${u.bg} border ${u.border} flex items-center justify-center shrink-0`}>
                    <u.Icon size={16} className={u.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-wider uppercase ${u.bg} ${u.border} ${u.text}`}>
                        {u.label}
                      </span>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border tracking-wider uppercase ${cat.color}`}>
                        {cat.label}
                      </span>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Clock size={10} />
                        {r.timeframe}
                      </span>
                    </div>
                    <h3 className="text-[15px] text-white font-semibold leading-tight">{r.title}</h3>
                    <p className="text-[12.5px] text-gray-400 mt-1 leading-snug">{r.summary}</p>

                    <div className="mt-3 pl-3 border-l-2 border-[#232a3a]">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Acciones concretas</p>
                      <ul className="flex flex-col gap-1">
                        {r.actions.map((a, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[12px] text-gray-300">
                            <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-[3px]" />
                            <span className="leading-snug">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {alert && (
                      <div className="mt-3 pt-3 border-t border-[#1a1f2b]">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                            <ShieldAlert size={11} className={u.text} />
                            <span>Deriva de la alerta:</span>
                            <span className="text-gray-300 truncate">{alert.what.slice(0, 60)}…</span>
                          </div>
                          <Link
                            to={`/c/${slug}/alertas`}
                            className="text-[11px] text-violet-400 hover:text-violet-300 whitespace-nowrap shrink-0"
                          >
                            Ver alerta →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={14} className="text-violet-400" />
              <h3 className="text-[13px] font-semibold text-gray-200">Acciones para hoy</h3>
            </div>
            <div className="flex flex-col gap-2">
              {suggestedActions.map((a, i) => (
                <div key={i} className="p-2.5 rounded-md bg-[#0f131c] border border-[#232a3a]">
                  <p className="text-[12px] text-gray-200 leading-tight">{a.title}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{a.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Target size={14} className="text-emerald-400" />
              <h3 className="text-[13px] font-semibold text-gray-200">Objetivo del día</h3>
            </div>
            <p className="text-[12px] text-gray-300 leading-relaxed">
              Reducir sentimiento negativo sobre transporte de 63% a menos de 45% y mantener momentum favorable.
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px]">
              <span className="text-gray-500">Avance</span>
              <span className="text-emerald-400 font-bold">63%</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-[#1f2533] overflow-hidden">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: '63%' }} />
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[13px] font-semibold text-gray-200">Alertas sin recomendación asignada</h3>
              <Link to={`/c/${slug}/alertas`} className="text-[10px] text-violet-400 hover:text-violet-300">Ir a Alertas</Link>
            </div>
            <p className="text-[11px] text-gray-500 mb-2">Todas las alertas actuales ya tienen una recomendación asociada.</p>
            <Link
              to={`/c/${slug}/alertas`}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-[#141824] border border-[#232a3a] text-gray-300 text-[11px] hover:bg-[#1a1f2b]"
            >
              <span>Revisar alertas activas</span>
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, description }: { label: string; value: number; color: 'orange' | 'yellow' | 'blue' | 'violet'; description: string }) {
  const map = {
    orange: 'text-orange-400',
    yellow: 'text-yellow-400',
    blue: 'text-blue-400',
    violet: 'text-violet-400',
  } as const;
  return (
    <div className="card p-4">
      <p className="text-[11px] text-gray-400">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${map[color]}`}>{value}</p>
      <p className="text-[11px] text-gray-500 mt-1">{description}</p>
    </div>
  );
}
