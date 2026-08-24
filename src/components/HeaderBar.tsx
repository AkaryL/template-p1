import { BadgeCheck, Calendar, MapPin, Share2, ChevronDown } from 'lucide-react';
import { candidate } from '../data/mockData';

export function HeaderBar() {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      <div className="flex items-start gap-4 min-w-0">
        <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 border border-white/10 relative bg-slate-800">
          <img
            src={candidate.photoUrl}
            alt={candidate.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 min-w-0">
            <h1 className="text-white text-[17px] font-bold tracking-tight leading-tight truncate">
              {candidate.name}
            </h1>
            {candidate.verified && (
              <BadgeCheck size={16} className="text-blue-400 fill-blue-400/20 shrink-0" />
            )}
          </div>
          <p className="text-gray-400 text-[12px] mt-0.5 whitespace-nowrap">{candidate.role}</p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <FilterPill icon={<Calendar size={12} />} label="Hoy, 20 May" />
          <FilterPill icon={<MapPin size={12} />} label="Aguascalientes" />
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-violet-600 text-white text-xs font-medium hover:bg-violet-500 transition-colors whitespace-nowrap">
            <Share2 size={12} />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="card px-4 py-2 flex items-center gap-5 self-start">
        <ChipItem label="Coalición" value={candidate.coalicion} dot="bg-blue-400" />
        <span className="w-px h-8 bg-[#232a3a]" />
        <ChipItem label="Elección" value={candidate.eleccion} dot="bg-emerald-400" />
        <span className="w-px h-8 bg-[#232a3a]" />
        <ChipItem
          label="Días restantes"
          value={`${candidate.diasParaEleccion} días`}
          valueClass="text-red-400"
        />
      </div>
    </div>
  );
}

function ChipItem({
  label,
  value,
  dot,
  valueClass,
}: {
  label: string;
  value: string;
  dot?: string;
  valueClass?: string;
}) {
  return (
    <div className="flex flex-col whitespace-nowrap leading-tight">
      <span className="text-[9px] text-gray-500 uppercase tracking-wider">{label}</span>
      <div className="flex items-center gap-1.5 mt-0.5">
        {dot && <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />}
        <span className={`text-[13px] font-semibold ${valueClass ?? 'text-gray-100'}`}>{value}</span>
      </div>
    </div>
  );
}

function FilterPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-300 text-xs hover:bg-[#1a1f2b] transition-colors whitespace-nowrap">
      <span className="text-gray-400">{icon}</span>
      <span>{label}</span>
      <ChevronDown size={12} className="text-gray-500" />
    </button>
  );
}
