import { topics } from '../data/mockData';

export function TopicsTable() {
  return (
    <div className="card p-3 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h3 className="text-[12.5px] font-semibold text-gray-200 leading-tight">Temas que impulsan la conversación</h3>
        <button className="text-[11px] text-violet-400 hover:text-violet-300 shrink-0 whitespace-nowrap self-start">Ver todos</button>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_80px] gap-x-2 text-[9px] text-gray-500 uppercase tracking-wider mb-2">
        <span>Tema</span>
        <span className="text-right">Menc.</span>
        <span className="text-right">Sentimiento</span>
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        {topics.map((t) => {
          const abs = Math.abs(t.sentiment);
          return (
            <div key={t.name} className="grid grid-cols-[minmax(0,1fr)_auto_80px] gap-x-2 items-center">
              <span className="text-[12px] text-gray-200 leading-tight" title={t.name}>{t.name}</span>
              <span className="text-[12px] text-gray-300 text-right tabular-nums whitespace-nowrap">
                {t.mentions.toLocaleString()}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex-1 h-1.5 bg-[#1f2533] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${t.positive ? 'bg-emerald-500' : 'bg-red-500'}`}
                    style={{ width: `${abs}%` }}
                  />
                </div>
                <span
                  className={`text-[11px] font-semibold tabular-nums w-9 text-right whitespace-nowrap ${
                    t.positive ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {t.sentiment > 0 ? '' : '-'}
                  {abs}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
