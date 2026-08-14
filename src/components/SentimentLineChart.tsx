import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { sentimentSeries } from '../data/mockData';

const LEGEND = [
  { key: 'Positivo', color: '#22c55e', pct: '58%' },
  { key: 'Neutral', color: '#e5e7eb', pct: '21%' },
  { key: 'Negativo', color: '#ef4444', pct: '21%' },
];

export function SentimentLineChart() {
  return (
    <div className="card p-3 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[12px] font-semibold text-gray-200 truncate">
          Sentimiento en redes <span className="text-gray-500 font-normal text-[11px]">(últimas 24 horas)</span>
        </h3>
      </div>
      <div className="flex items-center gap-4 mb-2 text-xs">
        {LEGEND.map((l) => (
          <div key={l.key} className="flex items-center gap-1.5">
            {l.key === 'Neutral' ? (
              <span className="w-3 h-[2px]" style={{ background: l.color }} />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.color }} />
            )}
            <span className="text-gray-300">{l.key} {l.pct}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sentimentSeries} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#1f2533" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="hour"
              stroke="#6b7280"
              fontSize={10}
              tickLine={false}
              axisLine={{ stroke: '#232a3a' }}
              interval={3}
            />
            <YAxis
              stroke="#6b7280"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              contentStyle={{
                background: '#0f131c',
                border: '1px solid #2b3345',
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: '#e5e7eb' }}
            />
            <Line type="monotone" dataKey="Positivo" stroke="#22c55e" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Neutral" stroke="#e5e7eb" strokeWidth={2} dot={false} strokeDasharray="4 3" />
            <Line type="monotone" dataKey="Negativo" stroke="#ef4444" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
