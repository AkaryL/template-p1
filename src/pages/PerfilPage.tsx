import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineMail, HiOutlineCalendar, HiCheck, HiUsers, HiArrowRight } from 'react-icons/hi';
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2';
import { analyst } from '../data/mockData';
import { profiles, type Profile } from '../data/profiles';
import { useActiveProfile } from '../hooks/useActiveProfile';

export function PerfilPage() {
  const active = useActiveProfile();
  return (
    <div className="p-4 flex flex-col gap-5">
      <ProfileHeader />
      <ActiveCandidate active={active} />
      <Switcher activeSlug={active.slug} />
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

function ActiveCandidate({ active }: { active: Profile }) {
  const worstTopic = active.topics.reduce((a, b) => (a.sentiment < b.sentiment ? a : b));
  const bestTopic = active.topics.reduce((a, b) => (a.sentiment > b.sentiment ? a : b));

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-[14px] font-semibold text-white">Candidato que estás monitoreando</h2>
        <span className="text-[11px] text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Monitoreo activo
        </span>
      </div>
      <div className="card p-5 flex items-start gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-slate-800">
          {active.candidate.photoUrl ? (
            <img src={active.candidate.photoUrl} alt={active.candidate.name} className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white text-2xl font-black"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0891b2 100%)' }}
            >
              {active.candidate.photoInitials}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-lg font-bold leading-tight">{active.candidate.name}</h3>
          <p className="text-gray-400 text-[13px]">{active.candidate.role}</p>
          <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-500">
            <span>{active.candidate.coalicion}</span>
            <span>·</span>
            <span>{active.candidate.eleccion}</span>
            <span>·</span>
            <span className="text-red-400">{active.candidate.diasParaEleccion} días para elección</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <MiniStat label="Alertas activas" value={active.alerts.length.toString()} tone="orange" />
            <MiniStat label="Tema mejor evaluado" value={bestTopic.name} tone="emerald" />
            <MiniStat label="Tema con más riesgo" value={worstTopic.name} tone="red" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value, tone }: { label: string; value: string; tone: 'emerald' | 'red' | 'orange' }) {
  const color = tone === 'emerald' ? 'text-emerald-400' : tone === 'red' ? 'text-red-400' : 'text-orange-400';
  return (
    <div className="bg-[#0f131c] border border-[#232a3a] rounded-md px-3 py-2">
      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</p>
      <p className={`text-[13px] font-semibold mt-0.5 truncate ${color}`}>{value}</p>
    </div>
  );
}

function Switcher({ activeSlug }: { activeSlug: string }) {
  const navigate = useNavigate();
  const { slug: currentSlug } = useParams<{ slug: string }>();
  const currentPath = window.location.pathname.split('/').slice(3).join('/') || '';

  const goToProfile = (newSlug: string) => {
    const target = currentSlug ? currentPath : '';
    navigate(target ? `/c/${newSlug}/${target}` : `/c/${newSlug}`);
  };

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-[14px] font-semibold text-white">Cambiar a otro candidato</h2>
        <span className="text-[11px] text-gray-500">
          {profiles.length} personajes disponibles
        </span>
      </div>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
      >
        {profiles.map((p) => {
          const isActive = p.slug === activeSlug;
          const worstTopic = p.topics.reduce((a, b) => (a.sentiment < b.sentiment ? a : b));
          const sentimentUp = worstTopic.sentiment >= 0;
          return (
            <div
              key={p.slug}
              className={`card p-4 flex flex-col gap-3 transition-colors ${
                isActive ? 'border-emerald-500/40 bg-emerald-500/[0.03]' : 'hover:border-violet-500/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 border border-white/10 bg-slate-800">
                  {p.candidate.photoUrl ? (
                    <img src={p.candidate.photoUrl} alt={p.candidate.name} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white text-lg font-black"
                      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0891b2 100%)' }}
                    >
                      {p.candidate.photoInitials}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  {isActive && (
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded border uppercase tracking-wider text-emerald-300 border-emerald-500/40 bg-emerald-500/10 inline-block mb-1">
                      Actual
                    </span>
                  )}
                  <h3 className="text-white text-[14px] font-semibold leading-tight truncate">{p.candidate.name}</h3>
                  <p className="text-[11px] text-gray-500 leading-tight mt-0.5 truncate">{p.candidate.role}</p>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {p.candidateScope.area} · {p.candidate.coalicion}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#1a1f2b]">
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">Alertas activas</p>
                  <p className="text-white text-[14px] font-bold mt-0.5 flex items-center gap-1">
                    <HiUsers size={12} className="text-gray-500" />
                    {p.alerts.length}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">Tema en riesgo</p>
                  <p className={`text-[13px] font-bold mt-0.5 flex items-center gap-1 truncate ${sentimentUp ? 'text-emerald-400' : 'text-red-400'}`}>
                    {sentimentUp ? <HiArrowTrendingUp size={12} /> : <HiArrowTrendingDown size={12} />}
                    <span className="truncate">{worstTopic.name}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => goToProfile(p.slug)}
                disabled={isActive}
                className={`w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 cursor-default'
                    : 'bg-violet-600 text-white hover:bg-violet-500'
                }`}
              >
                {isActive ? (
                  <>
                    <HiCheck size={13} />
                    <span>Visualizando</span>
                  </>
                ) : (
                  <>
                    <span>Ver dashboard</span>
                    <HiArrowRight size={13} />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
