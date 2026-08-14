import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff, HiOutlineArrowRight } from 'react-icons/hi';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('cari@datistics.mx');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <div className="min-h-screen flex bg-[#0b0e14]">
      <div className="hidden lg:flex flex-1 relative overflow-hidden border-r border-[#1a1f2b]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative m-auto max-w-sm px-8">
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-white font-black tracking-[-0.02em] text-3xl leading-none">
              Elección
            </span>
            <span className="text-red-500 font-black tracking-[-0.02em] text-3xl leading-none">
              27
            </span>
          </div>
          <p className="text-gray-300 text-lg leading-snug mb-4">
            Monitoreo de figuras políticas en redes, prensa y medios digitales.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sentimiento, alertas, cobertura y competencia. Todo en un solo lugar, actualizado en tiempo real.
          </p>
          <div className="mt-10 pt-6 border-t border-[#1a1f2b]">
            <p className="text-gray-500 text-xs">Un producto de <span className="text-gray-300 font-medium">Datistics</span></p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[440px] flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-baseline gap-1 mb-8 justify-center">
            <span className="text-white font-black text-2xl">Elección</span>
            <span className="text-red-500 font-black text-2xl">27</span>
          </div>

          <h1 className="text-white text-[22px] font-bold tracking-tight">Iniciar sesión</h1>
          <p className="text-gray-500 text-sm mt-1">Ingresa con tu cuenta de analista.</p>

          <form onSubmit={submit} className="flex flex-col gap-3 mt-6">
            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] text-gray-400 font-medium">Correo</span>
              <div className="relative">
                <HiOutlineMail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-md bg-[#0f131c] border border-[#232a3a] text-gray-200 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition"
                  required
                />
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] text-gray-400 font-medium">Contraseña</span>
              <div className="relative">
                <HiOutlineLockClosed size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-9 py-2.5 rounded-md bg-[#0f131c] border border-[#232a3a] text-gray-200 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <HiOutlineEyeOff size={15} /> : <HiOutlineEye size={15} />}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-1.5 text-[12px] text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-violet-500" defaultChecked />
                <span>Mantener sesión iniciada</span>
              </label>
              <a href="#" className="text-[12px] text-violet-400 hover:text-violet-300">
                Recuperar acceso
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition disabled:opacity-60"
            >
              {loading ? 'Verificando…' : (
                <>
                  <span>Entrar</span>
                  <HiOutlineArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-[11px] text-gray-600 text-center">
            v1.0.0 · Sesiones auditadas
          </p>
        </div>
      </div>
    </div>
  );
}
