import { AlertCircle, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { alerts } from '../data/mockData';

const SEV = {
  orange: { Icon: AlertCircle, bg: 'bg-orange-500/15', ring: 'border-orange-500/30', text: 'text-orange-400' },
  yellow: { Icon: AlertTriangle, bg: 'bg-yellow-500/15', ring: 'border-yellow-500/30', text: 'text-yellow-400' },
  blue: { Icon: Info, bg: 'bg-blue-500/15', ring: 'border-blue-500/30', text: 'text-blue-400' },
} as const;

export function ActiveAlerts() {
  return (
    <div className="card p-3 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h3 className="text-[13px] font-semibold text-gray-200 truncate">Alertas activas</h3>
        <button className="text-[11px] text-violet-400 hover:text-violet-300 shrink-0 whitespace-nowrap">Ver todas</button>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {alerts.map((a, i) => {
          const s = SEV[a.severity];
          const { Icon } = s;
          return (
            <div key={i} className="flex items-start gap-2.5">
              <div className={`w-7 h-7 rounded-full ${s.bg} border ${s.ring} flex items-center justify-center shrink-0`}>
                <Icon size={14} className={s.text} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-[12px] font-semibold ${s.text} leading-tight min-w-0`}>{a.title}</p>
                  <span className="text-[10px] text-gray-500 shrink-0 whitespace-nowrap">{a.time}</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{a.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#141824] border border-violet-500/30 text-violet-300 text-xs hover:bg-violet-500/10 transition-colors">
        <span>Ver todas las alertas</span>
        <ArrowRight size={13} />
      </button>
    </div>
  );
}
