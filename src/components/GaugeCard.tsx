import { Info, HelpCircle } from 'lucide-react';
import { HiArrowSmUp } from 'react-icons/hi';

interface Props {
  title: string;
  value: number;
  max?: number;
  trend?: string;
  trendLabel?: string;
  variant: 'momentum' | 'risk';
  riskLabel?: string;
}

export function GaugeCard({ title, value, max = 100, trend, trendLabel, variant, riskLabel }: Props) {
  return (
    <div className="card p-3 h-full flex flex-col">
      <div className="flex items-center justify-between mb-1.5 gap-1">
        <span className="text-[11px] text-gray-300 whitespace-nowrap truncate">{title}</span>
        {variant === 'momentum' ? (
          <HelpCircle size={13} className="text-gray-500 shrink-0" />
        ) : (
          <Info size={13} className="text-gray-500 shrink-0" />
        )}
      </div>
      {variant === 'momentum' ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-1">
          <MomentumRing value={value} max={max} />
          <div className="flex items-center gap-0 text-emerald-400 text-[11px] font-semibold whitespace-nowrap mt-1">
            <HiArrowSmUp size={13} />
            <span>{trend}</span>
          </div>
          <p className="text-[10px] text-gray-400 leading-tight text-center">{trendLabel}</p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <RiskGauge value={value} max={max} />
          <p className="text-orange-400 font-bold tracking-widest text-[13px] mt-1">{riskLabel}</p>
          <p className="text-[10px] text-gray-500 mt-0.5">{value}/{max}</p>
        </div>
      )}
    </div>
  );
}

function MomentumRing({ value, max }: { value: number; max: number }) {
  const pct = value / max;
  const r = 32;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);

  return (
    <div className="relative w-[86px] h-[86px] shrink-0">
      <svg width="86" height="86" className="-rotate-90">
        <circle cx="43" cy="43" r={r} stroke="#1f2533" strokeWidth="7" fill="none" />
        <circle
          cx="43"
          cy="43"
          r={r}
          stroke="url(#momentumGrad)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="momentumGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white text-xl font-bold leading-none">{value}</span>
        <span className="text-[10px] text-gray-500 mt-0.5">/{max}</span>
      </div>
    </div>
  );
}

function RiskGauge({ value, max }: { value: number; max: number }) {
  const pct = value / max;
  const angle = -180 + pct * 180;

  const cx = 60;
  const cy = 55;
  const r = 42;
  const needleLen = 38;
  const rad = (angle * Math.PI) / 180;
  const nx = cx + needleLen * Math.cos(rad);
  const ny = cy + needleLen * Math.sin(rad);

  const arcPath = (startAngle: number, endAngle: number) => {
    const s = (startAngle * Math.PI) / 180;
    const e = (endAngle * Math.PI) / 180;
    const x1 = cx + r * Math.cos(s);
    const y1 = cy + r * Math.sin(s);
    const x2 = cx + r * Math.cos(e);
    const y2 = cy + r * Math.sin(e);
    const large = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  return (
    <div className="w-[120px] h-[65px] shrink-0">
      <svg width="120" height="65" viewBox="0 0 120 65">
        <path d={arcPath(-180, -135)} stroke="#22c55e" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d={arcPath(-135, -90)} stroke="#eab308" strokeWidth="9" fill="none" />
        <path d={arcPath(-90, -45)} stroke="#f97316" strokeWidth="9" fill="none" />
        <path d={arcPath(-45, 0)} stroke="#dc2626" strokeWidth="9" fill="none" strokeLinecap="round" />
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="4" fill="#fff" />
      </svg>
    </div>
  );
}
