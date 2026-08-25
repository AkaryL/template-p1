import { Link, useParams } from 'react-router-dom';
import { Bell, AlertCircle, AlertTriangle, Info, MapPin, Check, ArrowRight, ShieldAlert, Users } from 'lucide-react';
import { useActiveProfile } from '../hooks/useActiveProfile';

const SEV = {
  orange: { Icon: AlertCircle, bg: 'bg-orange-500/15', ring: 'border-orange-500/30', text: 'text-orange-400', label: 'Naranja', riskLabel: 'Alto' },
  yellow: { Icon: AlertTriangle, bg: 'bg-yellow-500/15', ring: 'border-yellow-500/30', text: 'text-yellow-400', label: 'Amarilla', riskLabel: 'Medio' },
  blue: { Icon: Info, bg: 'bg-blue-500/15', ring: 'border-blue-500/30', text: 'text-blue-400', label: 'Informativa', riskLabel: 'Bajo' },
} as const;

export function AlertasPage() {
  const { allAlerts, recommendations } = useActiveProfile();
  const { slug } = useParams<{ slug: string }>();

  const FILTERS = [
    { label: 'Todas', count: allAlerts.length },
    { label: 'Naranjas', count: allAlerts.filter((a) => a.severity === 'orange').length },
    { label: 'Amarillas', count: allAlerts.filter((a) => a.severity === 'yellow').length },
    { label: 'Informativas', count: allAlerts.filter((a) => a.severity === 'blue').length },
  ];

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center relative">
            <Bell size={18} className="text-red-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
              {allAlerts.length}
            </span>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Centro de Alertas</h1>
            <p className="text-gray-400 text-[13px]">Cada alerta con el qué pasó, quién está detrás y el nivel de riesgo</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-300 text-xs whitespace-nowrap">
            <Check size={12} />
            <span>Marcar todas como leídas</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <SeverityCard label="Alertas Naranjas" count={FILTERS[1].count} color="orange" description="Requieren acción inmediata" />
        <SeverityCard label="Alertas Amarillas" count={FILTERS[2].count} color="yellow" description="Monitorear de cerca" />
        <SeverityCard label="Informativas" count={FILTERS[3].count} color="blue" description="Contexto y avisos" />
        <SeverityCard label="Resueltas hoy" count={4} color="green" description="Sin acción pendiente" />
      </div>

      <div className="flex items-center gap-2">
        {FILTERS.map((f, i) => (
          <button
            key={f.label}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              i === 0
                ? 'bg-violet-500/15 border border-violet-500/40 text-violet-300'
                : 'bg-[#141824] border border-[#232a3a] text-gray-400 hover:text-gray-200'
            }`}
          >
            <span>{f.label}</span>
            <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        {allAlerts.map((a) => {
          const s = SEV[a.severity];
          const { Icon } = s;
          const hasRecommendation = recommendations.some((r) => r.id === a.recommendationId);
          return (
            <div key={a.id} className="card p-4 flex items-start gap-3 hover:border-violet-500/30 transition-colors">
              <div className={`w-10 h-10 rounded-full ${s.bg} border ${s.ring} flex items-center justify-center shrink-0`}>
                <Icon size={18} className={s.text} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-wider ${s.bg} ${s.ring} ${s.text}`}>
                    {s.label.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-gray-500 flex items-center gap-1">
                    <MapPin size={10} /> {a.zone}
                  </span>
                  <span className="text-[10px] text-gray-500">·</span>
                  <span className="text-[10px] text-gray-500">{a.time}</span>
                </div>

                <div className="grid grid-cols-[80px_1fr] gap-x-3 gap-y-1.5 text-[12.5px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider pt-0.5">Qué pasó</span>
                  <p className={`font-semibold ${s.text} leading-snug`}>{a.what}</p>

                  <span className="text-[10px] text-gray-500 uppercase tracking-wider pt-0.5">Quién</span>
                  <p className="text-gray-300 leading-snug flex items-start gap-1">
                    <Users size={12} className="text-gray-500 shrink-0 mt-0.5" />
                    <span>{a.who}</span>
                  </p>

                  <span className="text-[10px] text-gray-500 uppercase tracking-wider pt-0.5">Riesgo</span>
                  <p className="text-gray-300 leading-snug flex items-start gap-1">
                    <ShieldAlert size={12} className={`${s.text} shrink-0 mt-0.5`} />
                    <span><span className={`font-semibold ${s.text}`}>{s.riskLabel}</span> · {a.risk}</span>
                  </p>
                </div>

                {hasRecommendation && (
                  <div className="mt-3 flex items-center gap-2 pt-3 border-t border-[#1a1f2b]">
                    <Link
                      to={`/c/${slug}/recomendaciones`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[11px] hover:bg-violet-500/20 transition-colors"
                    >
                      <span>Ver recomendación</span>
                      <ArrowRight size={11} />
                    </Link>
                    <button className="text-[11px] text-gray-500 hover:text-gray-300">
                      Marcar como leída
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SeverityCard({ label, count, color, description }: { label: string; count: number; color: 'orange' | 'yellow' | 'blue' | 'green'; description: string }) {
  const map = {
    orange: 'text-orange-400',
    yellow: 'text-yellow-400',
    blue: 'text-blue-400',
    green: 'text-emerald-400',
  } as const;
  return (
    <div className="card p-4">
      <p className="text-[11px] text-gray-400">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${map[color]}`}>{count}</p>
      <p className="text-[11px] text-gray-500 mt-1">{description}</p>
    </div>
  );
}
