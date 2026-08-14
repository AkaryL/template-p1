import { useState } from 'react';
import { HiOutlineMail, HiOutlineCalendar, HiCheck, HiUsers } from 'react-icons/hi';
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2';
import { analyst, candidate, politicians, activeSubscription, type Politician } from '../data/mockData';

export function PerfilPage() {
  return (
    <div className="p-4 flex flex-col gap-5">
      <ProfileHeader />
      <ActivePlan />
      <Marketplace />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="flex items-center gap-4 pb-4 border-b border-[#1a1f2b]">
      <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white text-2xl font-bold">
        {analyst.initials}
      </div>
      <div className="flex-1">
        <h1 className="text-white text-xl font-bold tracking-tight">{analyst.name}</h1>
        <p className="text-gray-400 text-[13px]">{analyst.role} · {analyst.organization}</p>
        <div className="flex items-center gap-4 mt-2 text-[12px] text-gray-500">
          <span className="flex items-center gap-1.5">
            <HiOutlineMail size={13} />
            {analyst.email}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineCalendar size={13} />
            Desde {analyst.memberSince}
          </span>
        </div>
      </div>
      <button className="px-3 py-1.5 rounded-md bg-[#141824] border border-[#232a3a] text-gray-300 text-xs hover:bg-[#1a1f2b]">
        Editar
      </button>
    </div>
  );
}

function ActivePlan() {
  const pct = (activeSubscription.daysRemaining / activeSubscription.totalDays) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-[14px] font-semibold text-white">Plan actual</h2>
        <span className="text-[11px] text-gray-500">Termina en {activeSubscription.daysRemaining} días</span>
      </div>
      <div className="card p-4 flex items-start gap-4">
        <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 border border-white/10 bg-slate-800">
          <img src={candidate.photoUrl} alt={candidate.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
              Prueba gratuita
            </span>
            <span className="text-[11px] text-gray-500">
              {activeSubscription.daysRemaining} de {activeSubscription.totalDays} días restantes
            </span>
          </div>
          <h3 className="text-white text-[16px] font-semibold leading-tight">{candidate.name}</h3>
          <p className="text-gray-400 text-[12px] mt-0.5">{candidate.role} · {candidate.eleccion}</p>

          <div className="mt-3 h-1 rounded-full bg-[#1f2533] overflow-hidden max-w-md">
            <div className="h-full rounded-full bg-amber-500" style={{ width: `${pct}%` }} />
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 max-w-lg">
            {activeSubscription.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-[12px] text-gray-400">
                <HiCheck size={12} className="text-emerald-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="text-right">
            <p className="text-white text-[20px] font-bold leading-none">$0<span className="text-[13px] text-gray-500 font-normal ml-0.5">/mes</span></p>
            <p className="text-[10px] text-gray-500 mt-0.5">Cambia a $1,999/mes al terminar</p>
          </div>
          <button className="mt-1 px-3 py-1.5 rounded-md bg-violet-600 text-white text-xs font-semibold hover:bg-violet-500">
            Ver planes
          </button>
        </div>
      </div>
    </div>
  );
}

function Marketplace() {
  const [contracted, setContracted] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setContracted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div>
      <div className="flex items-end justify-between mb-3">
        <div>
          <h2 className="text-[14px] font-semibold text-white">Agregar personajes</h2>
          <p className="text-[12px] text-gray-500 mt-0.5">
            Otros perfiles públicos disponibles en Jalisco. Cobro mensual, cancelas cuando quieras.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {politicians.map((p) => (
          <PoliticianCard
            key={p.id}
            politician={p}
            contracted={contracted.has(p.id)}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

function PoliticianCard({ politician, contracted, onToggle }: { politician: Politician; contracted: boolean; onToggle: () => void }) {
  const tierMeta = {
    starter: { color: 'text-gray-400', border: 'border-[#232a3a]', label: 'Starter' },
    pro: { color: 'text-violet-300', border: 'border-violet-500/40', label: 'Pro' },
    enterprise: { color: 'text-amber-300', border: 'border-amber-500/40', label: 'Enterprise' },
  }[politician.tier];
  const sentimentUp = politician.sentiment >= 50;

  return (
    <div className={`card p-3.5 flex flex-col gap-3 transition-colors ${contracted ? 'border-emerald-500/40 bg-emerald-500/[0.03]' : 'hover:border-[#2b3345]'}`}>
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 border border-white/10 bg-slate-800">
          {politician.photoUrl ? (
            <img src={politician.photoUrl} alt={politician.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold bg-slate-700">
              {politician.initials}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border uppercase tracking-wider ${tierMeta.color} ${tierMeta.border} bg-white/[0.02]`}>
            {tierMeta.label}
          </span>
          <h3 className="text-white text-[13.5px] font-semibold leading-tight mt-1.5 truncate">{politician.name}</h3>
          <p className="text-[11px] text-gray-500 leading-tight mt-0.5 truncate">{politician.role}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: politician.partyColor }} />
            <span className="text-[10px] text-gray-500">{politician.party}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#1a1f2b]">
        <div>
          <p className="text-[9px] text-gray-500 uppercase tracking-wider">Menciones/día</p>
          <p className="text-white text-[14px] font-bold mt-0.5 flex items-center gap-1">
            <HiUsers size={12} className="text-gray-500" />
            {politician.mentionsDay.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-[9px] text-gray-500 uppercase tracking-wider">Sentimiento</p>
          <p className={`text-[14px] font-bold mt-0.5 flex items-center gap-1 ${sentimentUp ? 'text-emerald-400' : 'text-red-400'}`}>
            {sentimentUp ? <HiArrowTrendingUp size={12} /> : <HiArrowTrendingDown size={12} />}
            {politician.sentiment}%
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-white text-[17px] font-bold leading-none">
            ${politician.pricePerMonth.toLocaleString()}
            <span className="text-[11px] text-gray-500 font-normal ml-0.5">/mes</span>
          </p>
          <p className="text-[10px] text-gray-500 mt-1">MXN · factura mensual</p>
        </div>
        <button
          onClick={onToggle}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
            contracted
              ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
              : 'bg-violet-600 text-white hover:bg-violet-500'
          }`}
        >
          {contracted ? (
            <span className="flex items-center gap-1"><HiCheck size={13} /> Agregado</span>
          ) : (
            'Agregar'
          )}
        </button>
      </div>
    </div>
  );
}
