import { useState } from 'react';
import { Users, MessageSquare, FileText } from 'lucide-react';
import { SentimentLineChart } from '../components/SentimentLineChart';
import { PlatformDonut } from '../components/PlatformDonut';
import { TopNewsPanel } from '../components/TopNewsPanel';

type CompetitorSlot = 1 | 2 | 3;

const COMPETITORS: {
  slot: CompetitorSlot;
  name: string;
  role: string;
  accent: string;
  bg: string;
  border: string;
  statementQuote: string;
  statementSource: string;
  statementTime: string;
  postulation: string;
  postulationDate: string;
}[] = [
  {
    slot: 1,
    name: 'Candidato 1',
    role: 'Aspirante · Partido A',
    accent: 'text-orange-300',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/40',
    statementQuote: 'En 100 días tendremos operativos permanentes de seguridad en las regiones más afectadas.',
    statementSource: 'Milenio',
    statementTime: '11:15 AM',
    postulation: 'Precampaña activa desde marzo. Registro formal ante la autoridad electoral pendiente.',
    postulationDate: 'Actualizado hoy',
  },
  {
    slot: 2,
    name: 'Candidato 2',
    role: 'Aspirante · Partido B',
    accent: 'text-cyan-300',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/40',
    statementQuote: 'Devolveremos a las comunidades el poder de decidir sobre su presupuesto local.',
    statementSource: 'Reforma',
    statementTime: '10:40 AM',
    postulation: 'Formalizó postulación oficial la semana pasada. Coalición ya inscrita ante autoridad electoral.',
    postulationDate: 'Actualizado hoy',
  },
  {
    slot: 3,
    name: 'Candidato 3',
    role: 'Aspirante · Partido C',
    accent: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/40',
    statementQuote: 'La agenda económica es la prioridad: sin empleo digno no hay bienestar posible para las familias.',
    statementSource: 'El Universal',
    statementTime: '09:55 AM',
    postulation: 'En proceso de precampaña. Recorridos territoriales en la zona metropolitana desde febrero.',
    postulationDate: 'Actualizado ayer',
  },
];

export function CompetenciaPage() {
  const [active, setActive] = useState<CompetitorSlot>(1);
  const current = COMPETITORS.find((c) => c.slot === active)!;

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
            <Users size={18} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold tracking-tight">Competencia</h1>
            <p className="text-gray-400 text-[13px]">
              Análisis paralelo de los 3 competidores principales — selecciona uno para ver su detalle
            </p>
          </div>
        </div>
      </div>

      <div className="card p-3">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Selecciona un competidor</p>
        <div className="grid grid-cols-3 gap-2">
          {COMPETITORS.map((c) => {
            const isActive = active === c.slot;
            return (
              <button
                key={c.slot}
                onClick={() => setActive(c.slot)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors ${
                  isActive
                    ? `${c.bg} border ${c.border}`
                    : 'bg-[#0f131c] border border-[#232a3a] hover:bg-[#141824]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-black shrink-0 ${
                    isActive ? `${c.accent} border ${c.border}` : 'text-slate-500 bg-slate-800 border border-slate-700'
                  }`}
                >
                  {c.slot}
                </div>
                <div className="min-w-0">
                  <p className={`text-[13px] font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>{c.name}</p>
                  <p className="text-[10.5px] text-gray-500 truncate">{c.role}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-dashed border-[#232a3a] bg-[#0f131c]/60 px-3 py-2">
        <p className="text-[11px] text-gray-500">
          <span className={`font-semibold ${current.accent}`}>Viendo:</span> {current.name} · {current.role}. Los datos abajo son placeholders
          maquetados; cuando lleguen los nombres reales solo se sustituyen los strings, la estructura permanece igual.
        </p>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: '4fr 3fr 3fr' }}>
        <SentimentLineChart />
        <PlatformDonut />
        <TopNewsPanel />
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={14} className="text-violet-400" />
            <h3 className="text-[13px] font-semibold text-gray-200">Declaración importante del día</h3>
            <span className={`ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-wider uppercase ${current.bg} ${current.border} ${current.accent}`}>
              {current.name}
            </span>
          </div>
          <blockquote className="text-[13px] text-gray-100 leading-snug italic pl-3 border-l-2 border-[#232a3a]">
            "{current.statementQuote}"
          </blockquote>
          <div className="flex items-center gap-2 mt-3 text-[11px] text-gray-500">
            <span className="text-gray-400 font-medium">{current.statementSource}</span>
            <span>·</span>
            <span>{current.statementTime}</span>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-2 mb-3">
            <FileText size={14} className="text-violet-400" />
            <h3 className="text-[13px] font-semibold text-gray-200">Declaración política de postulación</h3>
            <span className={`ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-wider uppercase ${current.bg} ${current.border} ${current.accent}`}>
              {current.name}
            </span>
          </div>
          <p className="text-[13px] text-gray-100 leading-snug">{current.postulation}</p>
          <p className="text-[11px] text-gray-500 mt-3">{current.postulationDate}</p>
        </div>
      </div>
    </div>
  );
}
