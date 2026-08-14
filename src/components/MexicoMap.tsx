import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import geoData from '../data/mexico-states.json';
import { stateSentiment, sentimentColor } from '../data/mockData';

const LEGEND = [
  { color: '#16a34a', label: 'Muy positivo' },
  { color: '#4ade80', label: 'Positivo' },
  { color: '#facc15', label: 'Neutral' },
  { color: '#f97316', label: 'Negativo' },
  { color: '#dc2626', label: 'Muy negativo' },
];

export function MexicoMap() {
  return (
    <div className="card p-3 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h3 className="text-[12.5px] font-semibold text-gray-200 leading-tight">Mapa de sentimiento por región</h3>
        <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#141824] border border-[#232a3a] text-gray-300 text-[11px] shrink-0 whitespace-nowrap self-start">
          <span>Sentimiento</span>
          <ChevronDown size={11} />
        </button>
      </div>
      <div className="flex-1 flex gap-3 relative">
        <div className="flex-1 relative">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 550, center: [-102, 23.5] }}
            width={280}
            height={200}
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={geoData as object}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = geo.properties.state_name as string;
                  const v = stateSentiment(name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={sentimentColor(v)}
                      stroke="#0b0e14"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', opacity: 0.85 },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          <div className="absolute right-1 top-1 flex flex-col gap-1">
            <button className="w-6 h-6 rounded bg-[#141824] border border-[#232a3a] text-gray-300 flex items-center justify-center">
              <Plus size={12} />
            </button>
            <button className="w-6 h-6 rounded bg-[#141824] border border-[#232a3a] text-gray-300 flex items-center justify-center">
              <Minus size={12} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 text-[11px] shrink-0">
          {LEGEND.map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
              <span className="text-gray-300">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
