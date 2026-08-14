import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface Props {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  color: 'positive' | 'negative' | 'info' | 'accent' | 'warning' | 'cyan';
  sparkColor: string;
  data: { i: number; v: number }[];
}

const VALUE_COLORS: Record<Props['color'], string> = {
  positive: 'text-emerald-400',
  negative: 'text-red-400',
  info: 'text-blue-400',
  accent: 'text-violet-400',
  warning: 'text-orange-400',
  cyan: 'text-cyan-400',
};

const DELTA_COLORS: Record<Props['color'], string> = {
  positive: 'text-emerald-400',
  negative: 'text-red-400',
  info: 'text-blue-400',
  accent: 'text-violet-400',
  warning: 'text-orange-400',
  cyan: 'text-cyan-400',
};

export function KpiCard({ label, value, delta, up, color, sparkColor, data }: Props) {
  return (
    <div className="card p-2.5 flex flex-col gap-0.5 min-w-0">
      <div className="flex items-start justify-between gap-1.5">
        <span className="text-[10px] text-gray-400 truncate leading-tight">{label}</span>
        <div className={`flex items-center gap-0.5 text-[10px] font-semibold whitespace-nowrap shrink-0 ${DELTA_COLORS[color]}`}>
          <span className="text-[8px] leading-none">{up ? '▲' : '▼'}</span>
          <span>{delta}</span>
        </div>
      </div>
      <div className={`text-[24px] font-bold leading-tight ${VALUE_COLORS[color]}`}>{value}</div>
      <div className="flex items-end justify-between mt-0.5 gap-2">
        <span className="text-[10px] text-gray-500 whitespace-nowrap">vs. ayer</span>
        <div className="flex-1 h-6 min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="v"
                stroke={sparkColor}
                strokeWidth={1.8}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
