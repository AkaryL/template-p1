// ═══════════════════════════════════════════════════════════════════
// Constantes globales — compartidas por todos los perfiles.
// Los datos específicos de cada candidato viven en ./profiles.ts
// ═══════════════════════════════════════════════════════════════════

export const kpis = [
  { label: 'Sentimiento Positivo', value: '58%', delta: '4.8 pts', up: true, color: 'positive', sparkColor: '#22c55e' },
  { label: 'Conversaciones', value: '18,426', delta: '22%', up: true, color: 'info', sparkColor: '#3b82f6' },
  { label: 'Alcance Estimado', value: '3.2 M', delta: '31%', up: true, color: 'accent', sparkColor: '#a78bfa' },
  { label: 'Menciones Negativas', value: '3,862', delta: '18%', up: true, color: 'negative', sparkColor: '#ef4444' },
  { label: 'Índice de Oportunidad', value: '72', delta: '6 pts', up: true, color: 'warning', sparkColor: '#f59e0b' },
  { label: 'Interacción', value: '6.7%', delta: '1.3 pts', up: true, color: 'cyan', sparkColor: '#06b6d4' },
];

function spark(seed: number, base: number, amp: number, n = 24) {
  const out = [];
  let v = base;
  for (let i = 0; i < n; i++) {
    v += Math.sin((i + seed) * 0.7) * amp * 0.4 + Math.cos((i + seed) * 0.3) * amp * 0.2;
    out.push({ i, v: Math.max(0, v) });
  }
  return out;
}

export const sparks = kpis.map((_, i) => spark(i * 3.1, 50, 10));

export const sentimentSeries = (() => {
  const hours = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'];
  return hours.map((h, i) => {
    const t = i / hours.length;
    const positivo = 55 + Math.sin(t * 6) * 6 + Math.cos(t * 3) * 3;
    const neutral = 22 + Math.sin(t * 4 + 1) * 3;
    const negativo = 23 + Math.cos(t * 5 + 2) * 4;
    return {
      hour: h,
      Positivo: Math.round(positivo * 10) / 10,
      Neutral: Math.round(neutral * 10) / 10,
      Negativo: Math.round(negativo * 10) / 10,
    };
  });
})();

export const platforms = [
  { name: 'X (Twitter)', value: 42, color: '#1d9bf0', icon: 'x' },
  { name: 'Facebook', value: 26, color: '#1877f2', icon: 'facebook' },
  { name: 'Instagram', value: 18, color: '#e1306c', icon: 'instagram' },
  { name: 'TikTok', value: 9, color: '#25f4ee', icon: 'tiktok' },
  { name: 'YouTube', value: 5, color: '#ff0000', icon: 'youtube' },
];

export type MediaTier = 'nacional-tv' | 'nacional-print' | 'regional' | 'digital-medio' | 'influencer';

export const mediaTierMeta: Record<MediaTier, { label: string; short: string; weight: number; color: string; bg: string; border: string; text: string }> = {
  'nacional-tv': {
    label: 'Televisora nacional',
    short: 'TV Nacional',
    weight: 3.0,
    color: '#eab308',
    bg: 'bg-yellow-500/15',
    border: 'border-yellow-500/40',
    text: 'text-yellow-300',
  },
  'nacional-print': {
    label: 'Prensa nacional',
    short: 'Nacional',
    weight: 2.5,
    color: '#a855f7',
    bg: 'bg-violet-500/15',
    border: 'border-violet-500/40',
    text: 'text-violet-300',
  },
  'regional': {
    label: 'Prensa regional',
    short: 'Regional',
    weight: 2.0,
    color: '#3b82f6',
    bg: 'bg-blue-500/15',
    border: 'border-blue-500/40',
    text: 'text-blue-300',
  },
  'digital-medio': {
    label: 'Medio digital',
    short: 'Digital',
    weight: 1.0,
    color: '#6b7280',
    bg: 'bg-gray-500/15',
    border: 'border-gray-500/40',
    text: 'text-gray-300',
  },
  'influencer': {
    label: 'Influencer / creador',
    short: 'Influencer',
    weight: 0.5,
    color: '#f97316',
    bg: 'bg-orange-500/15',
    border: 'border-orange-500/40',
    text: 'text-orange-300',
  },
};

export type AlertSeverity = 'orange' | 'yellow' | 'blue';
export type RecommendationUrgency = 'alta' | 'media' | 'baja';
export type RecommendationCategory = 'crisis' | 'narrativa' | 'contenido' | 'operacion' | 'competencia';

export function sentimentColor(v: number): string {
  if (v > 0.4) return '#16a34a';
  if (v > 0.1) return '#4ade80';
  if (v > -0.1) return '#facc15';
  if (v > -0.4) return '#f97316';
  return '#dc2626';
}

export const analyst = {
  name: 'Cari Ramírez',
  role: 'Analista War Room',
  email: 'analista@eleccion27.mx',
  organization: 'Datistics · Consultoría Estratégica',
  memberSince: 'Enero 2026',
  initials: 'C',
};
