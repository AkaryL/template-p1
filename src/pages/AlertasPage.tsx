import { Bell, AlertCircle, AlertTriangle, Info, MapPin, TrendingUp, Check, ExternalLink } from 'lucide-react';
import { allAlerts } from '../data/mockData';

const SEV = {
  orange: { Icon: AlertCircle, bg: 'bg-orange-500/15', ring: 'border-orange-500/30', text: 'text-orange-400', label: 'Naranja' },
  yellow: { Icon: AlertTriangle, bg: 'bg-yellow-500/15', ring: 'border-yellow-500/30', text: 'text-yellow-400', label: 'Amarilla' },
  blue: { Icon: Info, bg: 'bg-blue-500/15', ring: 'border-blue-500/30', text: 'text-blue-400', label: 'Informativa' },
} as const;

const FILTERS = [
  { label: 'Todas', count: 6 },
  { label: 'Naranjas', count: 2 },
  { label: 'Amarillas', count: 2 },
  { label: 'Informativas', count: 2 },
];

export function AlertasPage() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center relative">
            <Bell size={18} className="text-red-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
              6
            </span>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Centro de Alertas</h1>
            <p className="text-gray-400 text-[13px]">Eventos que requieren atención inmediata</p>
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
        <SeverityCard label="Alertas Naranjas" count={2} color="orange" description="Requieren acción" />
        <SeverityCard label="Alertas Amarillas" count={2} color="yellow" description="Monitorear de cerca" />
        <SeverityCard label="Informativas" count={2} color="blue" description="Contexto y avisos" />
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
        {allAlerts.map((a, i) => {
          const s = SEV[a.severity];
          const { Icon } = s;
          return (
            <div key={i} className="card p-4 flex items-start gap-3 hover:border-violet-500/30 transition-colors">
              <div className={`w-10 h-10 rounded-full ${s.bg} border ${s.ring} flex items-center justify-center shrink-0`}>
                <Icon size={18} className={s.text} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-[14px] font-semibold ${s.text}`}>{a.title}</h3>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-wider ${s.bg} ${s.ring} ${s.text}`}>
                        {s.label.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-[12.5px] text-gray-400 mt-1 leading-snug">{a.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {a.zone}
                      </span>
                      {a.trend !== '—' && (
                        <span className="flex items-center gap-1">
                          <TrendingUp size={11} /> {a.trend}
                        </span>
                      )}
                      <span>·</span>
                      <span>{a.time}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[11px] hover:bg-violet-500/20">
                      <span>Ver detalle</span>
                      <ExternalLink size={11} />
                    </button>
                    <button className="text-[11px] text-gray-500 hover:text-gray-300">
                      Marcar como leída
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
