import { useState } from 'react';
import { Mail, Building2, Calendar, Check, Sparkles, TrendingUp, TrendingDown, Users, Zap, Crown } from 'lucide-react';
import { analyst, candidate, politicians, activeSubscription, type Politician } from '../data/mockData';

export function PerfilPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <ProfileHeader />
      <ActivePlan />
      <Marketplace />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="card p-5 flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-violet-500/20">
        {analyst.initials}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="text-white text-xl font-bold tracking-tight">{analyst.name}</h1>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/40 text-violet-300 uppercase tracking-wider">
            {analyst.role}
          </span>
        </div>
        <div className="flex items-center gap-4 mt-1 text-[12px] text-gray-400">
          <span className="flex items-center gap-1.5">
            <Mail size={12} />
            {analyst.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Building2 size={12} />
            {analyst.organization}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            Miembro desde {analyst.memberSince}
          </span>
        </div>
      </div>
      <button className="px-3 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-300 text-xs hover:bg-[#1a1f2b]">
        Editar perfil
      </button>
    </div>
  );
}

function ActivePlan() {
  const pct = (activeSubscription.daysRemaining / activeSubscription.totalDays) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[15px] font-semibold text-white">Tu plan actual</h2>
        <span className="text-[11px] text-gray-500">Se renueva automáticamente al finalizar</span>
      </div>
      <div className="card p-5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 20%, #8b5cf6, transparent 50%), radial-gradient(circle at 80% 100%, #06b6d4, transparent 50%)' }}
        />
        <div className="relative flex items-start gap-5">
          <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-slate-800">
            <img src={candidate.photoUrl} alt={candidate.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 uppercase tracking-wider">
                <Sparkles size={10} />
                {activeSubscription.planName}
              </span>
              <span className="text-[10px] text-gray-500">
                Termina en {activeSubscription.daysRemaining} de {activeSubscription.totalDays} días
              </span>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight">{candidate.name}</h3>
            <p className="text-gray-400 text-[13px]">{candidate.role} · {candidate.eleccion}</p>

            <div className="mt-3 mb-2">
              <div className="h-1.5 rounded-full bg-[#1f2533] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
              {activeSubscription.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-[12px] text-gray-300">
                  <Check size={12} className="text-emerald-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-[24px] font-bold text-white leading-none">GRATIS</span>
            <span className="text-[11px] text-gray-400">durante {activeSubscription.totalDays} días</span>
            <button className="mt-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-semibold hover:from-violet-600 hover:to-cyan-600 shadow-lg shadow-violet-500/20">
              Convertir a plan completo
            </button>
          </div>
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
          <h2 className="text-[15px] font-semibold text-white">Contrata más personajes para monitorear</h2>
          <p className="text-[12px] text-gray-400 mt-0.5">
            Amplía tu War Room con acceso a los políticos más relevantes de <span className="text-orange-400 font-medium">Jalisco</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <TierBadge tier="starter" />
          <TierBadge tier="pro" />
          <TierBadge tier="enterprise" />
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
    starter: { Icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'Starter' },
    pro: { Icon: Sparkles, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', label: 'Pro' },
    enterprise: { Icon: Crown, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', label: 'Enterprise' },
  }[politician.tier];
  const { Icon } = tierMeta;
  const sentimentUp = politician.sentiment >= 50;

  return (
    <div className={`card p-4 flex flex-col gap-3 hover:border-violet-500/30 transition-colors ${contracted ? 'border-emerald-500/40 bg-emerald-500/[0.03]' : ''}`}>
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 relative bg-slate-800">
          {politician.photoUrl ? (
            <img src={politician.photoUrl} alt={politician.name} className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white text-lg font-black"
              style={{ background: `linear-gradient(135deg, ${politician.partyColor}, #1e293b)` }}
            >
              {politician.initials}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded ${tierMeta.bg} ${tierMeta.border} border ${tierMeta.color} uppercase tracking-wider`}
            >
              <Icon size={9} /> {tierMeta.label}
            </span>
          </div>
          <h3 className="text-white text-[14px] font-bold leading-tight mt-1 truncate">{politician.name}</h3>
          <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{politician.role}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: politician.partyColor }} />
            <span className="text-[10px] text-gray-500">{politician.party}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#1a1f2b]">
        <div>
          <p className="text-[9px] text-gray-500 uppercase tracking-wider">Menciones/día</p>
          <p className="text-white text-[15px] font-bold mt-0.5 flex items-center gap-1">
            <Users size={12} className="text-gray-500" />
            {politician.mentionsDay.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-[9px] text-gray-500 uppercase tracking-wider">Sentimiento</p>
          <p className={`text-[15px] font-bold mt-0.5 flex items-center gap-1 ${sentimentUp ? 'text-emerald-400' : 'text-red-400'}`}>
            {sentimentUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {politician.sentiment}%
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-white text-[18px] font-bold leading-none">
            ${politician.pricePerMonth.toLocaleString()}
            <span className="text-[11px] text-gray-500 font-normal ml-0.5">/mes</span>
          </p>
          <p className="text-[10px] text-gray-500 mt-1">IVA incluido · Cancela cuando quieras</p>
        </div>
        <button
          onClick={onToggle}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            contracted
              ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
              : 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:from-violet-600 hover:to-cyan-600 shadow shadow-violet-500/20'
          }`}
        >
          {contracted ? (
            <span className="flex items-center gap-1"><Check size={13} /> Contratado</span>
          ) : (
            'Contratar'
          )}
        </button>
      </div>
    </div>
  );
}

function TierBadge({ tier }: { tier: 'starter' | 'pro' | 'enterprise' }) {
  const meta = {
    starter: { Icon: Zap, label: 'Starter · desde $1,499', color: 'text-emerald-400', border: 'border-emerald-500/30' },
    pro: { Icon: Sparkles, label: 'Pro · desde $2,499', color: 'text-violet-400', border: 'border-violet-500/30' },
    enterprise: { Icon: Crown, label: 'Enterprise · desde $4,999', color: 'text-amber-400', border: 'border-amber-500/30' },
  }[tier];
  const { Icon } = meta;
  return (
    <div className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full border bg-white/5 ${meta.color} ${meta.border}`}>
      <Icon size={10} />
      {meta.label}
    </div>
  );
}
