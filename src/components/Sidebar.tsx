import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineChartBar, HiOutlineNewspaper, HiOutlineBell, HiOutlineChevronDown, HiOutlineDownload, HiOutlineLogout, HiOutlineUser, HiOutlineLightBulb, HiOutlineUsers } from 'react-icons/hi';

const NAV: { id: string; label: string; Icon: typeof HiOutlineViewGrid; to: string; badge?: number }[] = [
  { id: 'resumen', label: 'Resumen', Icon: HiOutlineViewGrid, to: '/' },
  { id: 'sentimiento', label: 'Sentimiento', Icon: HiOutlineChartBar, to: '/sentimiento' },
  { id: 'noticias', label: 'Noticias', Icon: HiOutlineNewspaper, to: '/noticias' },
  { id: 'alertas', label: 'Alertas', Icon: HiOutlineBell, to: '/alertas', badge: 3 },
  { id: 'recomendaciones', label: 'Recomendaciones', Icon: HiOutlineLightBulb, to: '/recomendaciones' },
  { id: 'competencia', label: 'Competencia', Icon: HiOutlineUsers, to: '/competencia' },
];

export function Sidebar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [menuOpen]);

  return (
    <aside className="w-[190px] shrink-0 h-screen flex flex-col bg-[#0b0e14] border-r border-[#1a1f2b] px-3 py-3 overflow-hidden">
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-white font-black tracking-[-0.02em] text-[18px] leading-none">
          Elección
        </span>
        <span className="text-red-500 font-black tracking-[-0.02em] text-[18px] leading-none">
          27
        </span>
      </div>

      <div className="mb-2 flex items-center gap-1.5">
        <span className="relative flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span className="absolute w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-75" />
        </span>
        <span className="text-red-400 text-[10px] font-semibold tracking-wide uppercase">En vivo</span>
      </div>

      <div className="mb-3">
        <p className="text-[9px] text-gray-500 leading-tight">Última actualización</p>
        <p className="text-[11px] text-gray-300 font-medium">10:24:18 AM</p>
      </div>

      <nav className="flex-1 flex flex-col gap-0.5 min-h-0">
        {NAV.map((item) => {
          const { Icon } = item;
          return (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors relative ${
                  isActive
                    ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30'
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`
              }
            >
              <Icon size={14} strokeWidth={2} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div ref={menuRef} className="relative mt-2 pt-2 border-t border-[#1a1f2b]">
        {menuOpen && (
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-[#141824] border border-[#232a3a] rounded-lg shadow-xl shadow-black/40 py-1 overflow-hidden">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate('/perfil');
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-gray-300 hover:bg-white/5 transition-colors"
            >
              <HiOutlineUser size={14} />
              <span>Mi perfil</span>
            </button>
            <div className="border-t border-[#232a3a]" />
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate('/login');
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <HiOutlineLogout size={14} />
              <span>Cerrar sesión</span>
            </button>
          </div>
        )}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="w-full flex items-center gap-2 rounded-lg px-1 py-1 hover:bg-white/5 transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-[10px] font-bold">
            A
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-[9px] text-gray-500 leading-tight">Analista</p>
            <p className="text-[11px] text-gray-200 font-medium truncate">War Room</p>
          </div>
          <HiOutlineChevronDown
            size={14}
            className={`text-gray-500 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <button className="mt-2 w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#141824] border border-[#232a3a] text-gray-300 text-[11px] hover:bg-[#1a1f2b] transition-colors">
        <HiOutlineDownload size={13} />
        <span>Exportar reporte</span>
      </button>
    </aside>
  );
}
