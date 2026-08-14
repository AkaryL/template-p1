import { Target, ChevronDown } from 'lucide-react';
import { suggestedActions } from '../data/mockData';

export function StrategyFooter() {
  return (
    <div className="grid gap-2.5" style={{ gridTemplateColumns: '3fr 6fr 3fr' }}>
      <div className="card p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Target size={14} className="text-violet-400" />
          </div>
          <h3 className="text-[12px] font-semibold text-gray-200 truncate">Recomendación estratégica</h3>
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed">
          Enfocar próximos mensajes en propuestas de movilidad sostenible y soluciones concretas. Evitar confrontación
          directa y utilizar voceros técnicos.
        </p>
      </div>

      <div className="card p-3">
        <div className="flex items-center gap-2 mb-3 min-w-0">
          <h3 className="text-[12px] font-semibold text-gray-200 whitespace-nowrap">Acciones sugeridas</h3>
          <span className="text-[11px] text-gray-500 truncate">(próximas 24 horas)</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {suggestedActions.map((a, i) => (
            <div
              key={i}
              className="bg-[#0f131c] border border-[#232a3a] rounded-lg p-2.5 flex flex-col justify-between min-h-[88px]"
            >
              <p className="text-[12px] text-gray-200 leading-tight">{a.title}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-gray-500 whitespace-nowrap">{a.time}</span>
                <ChevronDown size={12} className="text-gray-500 -rotate-90" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Target size={14} className="text-violet-400" />
          </div>
          <h3 className="text-[12px] font-semibold text-gray-200 truncate">Objetivo del día</h3>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[11px] text-gray-400 leading-relaxed flex-1">
            Reducir sentimiento negativo sobre transporte de 63% a menos de 45% y mantener momentum favorable.
          </p>
          <GoalRing pct={63} />
        </div>
      </div>
    </div>
  );
}

function GoalRing({ pct }: { pct: number }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);
  return (
    <div className="relative w-[80px] h-[80px] shrink-0">
      <svg width="80" height="80" className="-rotate-90">
        <circle cx="40" cy="40" r={r} stroke="#1f2533" strokeWidth="7" fill="none" />
        <circle
          cx="40"
          cy="40"
          r={r}
          stroke="#22c55e"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-emerald-400 text-lg font-bold leading-none">{pct}%</span>
        <span className="text-[9px] text-gray-500 mt-0.5">Avance</span>
      </div>
    </div>
  );
}
