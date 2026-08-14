import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { Heart, TrendingUp, Search, Filter } from 'lucide-react';
import { sentimentSeries, sentimentByRegion, sentimentByTopic, recentMentions } from '../data/mockData';

const PLATFORM_COLORS: Record<string, string> = { x: '#1d9bf0', facebook: '#1877f2', instagram: '#e1306c' };
const SENTIMENT_COLORS: Record<string, string> = { positivo: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', negativo: 'text-red-400 bg-red-500/10 border-red-500/30', neutral: 'text-gray-300 bg-gray-500/10 border-gray-500/30' };

export function SentimientoPage() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Heart size={18} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Análisis de Sentimiento</h1>
            <p className="text-gray-400 text-[13px]">Monitoreo en tiempo real de percepción pública</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-300 text-xs whitespace-nowrap">
            <Filter size={12} />
            <span>Filtros</span>
          </button>
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              placeholder="Buscar menciones..."
              className="pl-8 pr-3 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-200 text-xs w-56 focus:outline-none focus:border-violet-500/60"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Sentimiento neto" value="+34%" delta="+2.1 pts" color="emerald" />
        <MetricCard label="Menciones positivas" value="10,687" delta="+8%" color="emerald" />
        <MetricCard label="Menciones negativas" value="3,862" delta="+18%" color="red" />
        <MetricCard label="Menciones neutrales" value="3,877" delta="+5%" color="gray" />
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <div className="card p-4">
          <h3 className="text-[13px] font-semibold text-gray-200 mb-3">Evolución del sentimiento (24 horas)</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={sentimentSeries}>
                <CartesianGrid stroke="#1f2533" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="hour" stroke="#6b7280" fontSize={10} interval={3} tickLine={false} axisLine={{ stroke: '#232a3a' }} />
                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip contentStyle={{ background: '#0f131c', border: '1px solid #2b3345', borderRadius: 8, fontSize: 12 }} labelStyle={{ color: '#e5e7eb' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="Positivo" stroke="#22c55e" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Neutral" stroke="#e5e7eb" strokeWidth={2} dot={false} strokeDasharray="4 3" />
                <Line type="monotone" dataKey="Negativo" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-4">
          <h3 className="text-[13px] font-semibold text-gray-200 mb-3">Sentimiento por tema</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={sentimentByTopic} layout="vertical" margin={{ left: 0 }}>
                <CartesianGrid stroke="#1f2533" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="topic" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} width={80} />
                <Tooltip contentStyle={{ background: '#0f131c', border: '1px solid #2b3345', borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="positive" stackId="a" fill="#22c55e" />
                <Bar dataKey="neutral" stackId="a" fill="#6b7280" />
                <Bar dataKey="negative" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div className="card p-4">
          <h3 className="text-[13px] font-semibold text-gray-200 mb-3">Sentimiento por región</h3>
          <div className="flex flex-col gap-3">
            {sentimentByRegion.map((r) => (
              <div key={r.region}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] text-gray-200">{r.region}</span>
                  <span className="text-[11px] text-gray-400 tabular-nums">{r.positive}%</span>
                </div>
                <div className="flex h-1.5 rounded-full overflow-hidden bg-[#1f2533]">
                  <div className="bg-emerald-500" style={{ width: `${r.positive}%` }} />
                  <div className="bg-gray-500" style={{ width: `${r.neutral}%` }} />
                  <div className="bg-red-500" style={{ width: `${r.negative}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13px] font-semibold text-gray-200">Menciones recientes</h3>
            <span className="text-[11px] text-gray-500">Actualizado hace 15s</span>
          </div>
          <div className="flex flex-col gap-3">
            {recentMentions.slice(0, 6).map((m, i) => (
              <div key={i} className="flex items-start gap-2.5 pb-3 border-b border-[#1a1f2b] last:border-0 last:pb-0">
                <div
                  className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ background: PLATFORM_COLORS[m.platform] || '#374151' }}
                >
                  {m.user[1]?.toUpperCase() || 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[12px] text-gray-200 font-medium">{m.user}</span>
                    <span className="text-[10px] text-gray-500 whitespace-nowrap">{m.time}</span>
                  </div>
                  <p className="text-[12px] text-gray-300 mt-0.5 leading-snug">{m.text}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${SENTIMENT_COLORS[m.sentiment]}`}
                    >
                      {m.sentiment}
                    </span>
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      <TrendingUp size={10} /> {m.engagement} interacciones
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, delta, color }: { label: string; value: string; delta: string; color: 'emerald' | 'red' | 'gray' }) {
  const colors = {
    emerald: 'text-emerald-400',
    red: 'text-red-400',
    gray: 'text-gray-300',
  } as const;
  return (
    <div className="card p-4">
      <p className="text-[11px] text-gray-400">{label}</p>
      <div className="flex items-end justify-between mt-1">
        <span className={`text-2xl font-bold ${colors[color]}`}>{value}</span>
        <span className={`text-[11px] font-semibold ${colors[color]}`}>▲ {delta}</span>
      </div>
      <p className="text-[10px] text-gray-500 mt-1">vs. ayer</p>
    </div>
  );
}
