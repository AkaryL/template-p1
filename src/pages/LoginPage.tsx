import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Radio, Eye, EyeOff } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('analista@eleccion27.mx');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 700);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.15), transparent 60%), radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.1), transparent 60%), #0b0e14',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative w-full max-w-md px-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <div className="w-3.5 h-3.5 rounded-sm bg-white/90" />
          </div>
          <span className="text-white font-black tracking-tight text-2xl">
            ELECCION
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">27</span>
          </span>
        </div>

        <div className="card p-7">
          <div className="flex items-center justify-center gap-1.5 mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30">
              <span className="relative flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-75" />
              </span>
              <span className="text-red-400 text-[10px] font-bold tracking-wider">WAR ROOM ACTIVO</span>
              <Radio size={10} className="text-red-400" />
            </div>
          </div>

          <h1 className="text-white text-xl font-bold text-center mb-1">Bienvenido, Analista</h1>
          <p className="text-gray-400 text-sm text-center mb-6">Ingresa a tu tablero de monitoreo</p>

          <form onSubmit={submit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Correo</span>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0f131c] border border-[#232a3a] text-gray-200 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  required
                />
              </div>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Contraseña</span>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-9 py-2.5 rounded-lg bg-[#0f131c] border border-[#232a3a] text-gray-200 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between mt-1 mb-2">
              <label className="flex items-center gap-1.5 text-[12px] text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-violet-500" defaultChecked />
                <span>Recordarme</span>
              </label>
              <a href="#" className="text-[12px] text-violet-400 hover:text-violet-300">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all disabled:opacity-60 shadow-lg shadow-violet-500/20"
            >
              {loading ? (
                <span>Autenticando...</span>
              ) : (
                <>
                  <span>Ingresar al War Room</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-[#1a1f2b] text-center">
            <p className="text-[11px] text-gray-500">
              Acceso restringido · Sesión monitoreada · v1.0.0
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-6">
          © 2026 ELECCION27 · Powered by Datistics
        </p>
      </div>
    </div>
  );
}
