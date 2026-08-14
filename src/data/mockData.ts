export const candidate = {
  name: 'Esthela Damián Peralta',
  role: 'Candidata a la Gubernatura',
  verified: true,
  coalicion: 'Fuerza por Guerrero',
  eleccion: 'Gubernatura 2027',
  diasParaEleccion: 87,
  photoInitials: 'ED',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Foto_de_Perfil_Esthela_Dami%C3%A1n_%28cropped%29.jpg/250px-Foto_de_Perfil_Esthela_Dami%C3%A1n_%28cropped%29.jpg',
};

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

export const topNews = [
  {
    title: 'Esthela Damián presenta plan de seguridad estatal',
    source: 'El Sur de Guerrero',
    time: '10:02 AM',
    sentiment: 'POSITIVA' as const,
  },
  {
    title: 'Críticas por declaración sobre transporte público',
    source: 'Diario 21',
    time: '09:15 AM',
    sentiment: 'NEGATIVA' as const,
  },
  {
    title: 'Empresarios respaldan propuestas económicas de Damián',
    source: 'Negocios Guerrero',
    time: '08:40 AM',
    sentiment: 'NEUTRAL' as const,
  },
];

export const topics = [
  { name: 'Seguridad', mentions: 4230, sentiment: 71, positive: true },
  { name: 'Cercanía con la gente', mentions: 2810, sentiment: 66, positive: true },
  { name: 'Transporte público', mentions: 1920, sentiment: -63, positive: false },
  { name: 'Economía', mentions: 1540, sentiment: 47, positive: true },
  { name: 'Corrupción', mentions: 1210, sentiment: -38, positive: false },
];

export const wordCloud = [
  { text: 'seguridad', value: 100, color: '#ef4444' },
  { text: 'transporte', value: 88, color: '#f97316' },
  { text: 'propuestas', value: 74, color: '#a855f7' },
  { text: 'honesto', value: 55, color: '#22c55e' },
  { text: 'mejor', value: 48, color: '#22c55e' },
  { text: 'ciudadanos', value: 45, color: '#eab308' },
  { text: 'futuro', value: 42, color: '#3b82f6' },
  { text: 'cambio', value: 40, color: '#eab308' },
  { text: 'experiencia', value: 38, color: '#22c55e' },
  { text: 'educación', value: 36, color: '#a855f7' },
  { text: 'pejor', value: 30, color: '#f97316' },
  { text: 'ciudadanos', value: 28, color: '#eab308' },
  { text: 'juntos', value: 26, color: '#eab308' },
  { text: 'resultados', value: 24, color: '#22c55e' },
  { text: 'emplea', value: 22, color: '#3b82f6' },
  { text: 'honesto', value: 22, color: '#eab308' },
];

export const alerts = [
  {
    title: 'Alerta Naranja · Transporte Público',
    description: 'Crecimiento rápido en la conversación negativa. Velocidad: 38% en la última hora.',
    time: 'Hace 15 min',
    severity: 'orange' as const,
  },
  {
    title: 'Alerta Amarilla · Seguridad',
    description: 'Video crítico comienza a tomar alcance en redes sociales.',
    time: 'Hace 42 min',
    severity: 'yellow' as const,
  },
  {
    title: 'Alerta Informativa · Competencia',
    description: 'Competidor A anunció evento masivo para mañana en tu bastión.',
    time: 'Hace 1 h',
    severity: 'blue' as const,
  },
];

export const suggestedActions = [
  { title: 'Publicar postura sobre transporte', time: 'Hoy · 12:00 PM' },
  { title: 'Activar voceros técnicos', time: 'Hoy · 02:00 PM' },
  { title: 'Contenido positivo en redes', time: 'Hoy · 04:00 PM' },
  { title: 'Monitoreo y ajuste de narrativa', time: 'Continuo' },
];

export const navItems = [
  { id: 'resumen', label: 'Resumen', icon: 'grid', active: true },
  { id: 'sentimiento', label: 'Sentimiento', icon: 'heart' },
  { id: 'noticias', label: 'Noticias', icon: 'newspaper' },
  { id: 'alertas', label: 'Alertas', icon: 'bell', badge: 3 },
  { id: 'estrategia', label: 'Estrategia', icon: 'target' },
  { id: 'ruta', label: 'Ruta Electoral', icon: 'map' },
  { id: 'competencia', label: 'Competencia', icon: 'users' },
  { id: 'reportes', label: 'Reportes', icon: 'chart' },
  { id: 'config', label: 'Configuración', icon: 'settings' },
];

const guerreroSentiment: Record<string, number> = {
  'Guerrero': 0.85,
  'Michoacán': 0.35,
  'Oaxaca': 0.55,
  'Puebla': 0.25,
  'Morelos': 0.65,
  'Estado de México': 0.15,
  'Ciudad de México': 0.05,
  'Veracruz': -0.15,
  'Jalisco': -0.25,
  'Chiapas': -0.35,
  'Tabasco': -0.45,
  'Nuevo León': -0.55,
  'Sonora': -0.65,
};

export function stateSentiment(name: string): number {
  return guerreroSentiment[name] ?? (Math.sin(name.length * 3.7) * 0.5);
}

export function sentimentColor(v: number): string {
  if (v > 0.4) return '#16a34a';
  if (v > 0.1) return '#4ade80';
  if (v > -0.1) return '#facc15';
  if (v > -0.4) return '#f97316';
  return '#dc2626';
}

export const recentMentions = [
  { user: '@carlosMX_', platform: 'x', text: 'Excelente propuesta de @EsthelaDamian sobre seguridad en Guerrero. Es lo que necesitamos.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
  { user: 'Jimena Flores', platform: 'facebook', text: 'No confío en las promesas de Damián sobre transporte. Ya lo prometió antes.', sentiment: 'negativo', time: 'Hace 8 min', engagement: 89 },
  { user: '@guerrero_hoy', platform: 'x', text: 'Damián presenta plan económico con propuestas concretas para PYMEs.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
  { user: '@analista_pol', platform: 'x', text: 'La estrategia de campaña de Esthela Damián muestra madurez política.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
  { user: 'Marcos Herrera', platform: 'facebook', text: 'Videos virales muestran incongruencias en el discurso de Damián.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 1230 },
  { user: '@laura_periodista', platform: 'instagram', text: 'Cobertura del evento de Damián en Acapulco: gran asistencia y buen recibimiento.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 892 },
  { user: '@datos_gro', platform: 'x', text: 'Encuesta muestra a Damián 4 puntos arriba en intención de voto.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
  { user: 'Roberto Vega', platform: 'facebook', text: 'Muchas propuestas, pocos resultados hasta ahora. Veremos si esta vez es diferente.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 78 },
];

export const allNews = [
  { title: 'Esthela Damián presenta plan integral de seguridad estatal', source: 'El Sur de Guerrero', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'La candidata detalló propuestas específicas para reducir violencia en zonas críticas del estado.' },
  { title: 'Críticas por declaración sobre transporte público en foro empresarial', source: 'Diario 21', time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Sector transportista rechaza propuestas de modernización tarifaria mencionadas por Damián.' },
  { title: 'Empresarios respaldan propuestas económicas de Damián', source: 'Negocios Guerrero', time: '08:40 AM', sentiment: 'NEUTRAL', summary: 'Cámara de Comercio expresa interés en el plan de incentivos fiscales para PYMEs.' },
  { title: 'Damián lidera en encuestas con 4 puntos sobre competencia', source: 'Milenio', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de intención de voto la coloca como favorita.' },
  { title: 'Debate sobre financiamiento de campaña genera polémica', source: 'Reforma', time: '07:50 AM', sentiment: 'NEGATIVA', summary: 'Cuestionan origen de recursos para spots publicitarios recientes.' },
  { title: 'Damián visita comunidades indígenas de la Montaña', source: 'La Jornada Guerrero', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Recorrido incluye 4 municipios y encuentros con líderes tradicionales.' },
  { title: 'Anuncia gabinete técnico paritario si gana elecciones', source: 'Excélsior', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Presentó lista preliminar con 50% mujeres y perfiles académicos destacados.' },
  { title: 'Movimiento juvenil convoca marcha por transparencia', source: 'Proceso', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Piden a todos los candidatos publicar declaraciones patrimoniales completas.' },
];

export const allAlerts = [
  {
    title: 'Alerta Naranja · Transporte Público',
    description: 'Crecimiento rápido en la conversación negativa. Velocidad: 38% en la última hora. Volumen actual: 2,340 menciones.',
    time: 'Hace 15 min',
    severity: 'orange',
    zone: 'Nacional',
    trend: '+38%',
  },
  {
    title: 'Alerta Amarilla · Seguridad',
    description: 'Video crítico comienza a tomar alcance en redes sociales. 12,500 views en 40 minutos.',
    time: 'Hace 42 min',
    severity: 'yellow',
    zone: 'Guerrero',
    trend: '+22%',
  },
  {
    title: 'Alerta Informativa · Competencia',
    description: 'Competidor A anunció evento masivo para mañana en tu bastión. Estimado: 5,000 asistentes.',
    time: 'Hace 1 h',
    severity: 'blue',
    zone: 'Chilpancingo',
    trend: '—',
  },
  {
    title: 'Alerta Amarilla · Menciones negativas',
    description: 'Incremento en menciones negativas sobre financiamiento. Origen: cuentas de derecha en X.',
    time: 'Hace 2 h',
    severity: 'yellow',
    zone: 'Nacional',
    trend: '+18%',
  },
  {
    title: 'Alerta Informativa · Prensa',
    description: 'El Universal publica investigación sobre trayectoria política. Tono neutral.',
    time: 'Hace 3 h',
    severity: 'blue',
    zone: 'Nacional',
    trend: '—',
  },
  {
    title: 'Alerta Naranja · Ataque coordinado',
    description: 'Detectada campaña coordinada de desinformación con hashtag #FueraDamian. 89 cuentas identificadas.',
    time: 'Hace 4 h',
    severity: 'orange',
    zone: 'Digital',
    trend: '+120%',
  },
] as const;

export const sentimentByRegion = [
  { region: 'Guerrero', positive: 62, neutral: 22, negative: 16 },
  { region: 'Ciudad de México', positive: 45, neutral: 30, negative: 25 },
  { region: 'Morelos', positive: 58, neutral: 24, negative: 18 },
  { region: 'Oaxaca', positive: 51, neutral: 27, negative: 22 },
  { region: 'Puebla', positive: 43, neutral: 31, negative: 26 },
  { region: 'Estado de México', positive: 39, neutral: 33, negative: 28 },
];

export const sentimentByTopic = [
  { topic: 'Seguridad', positive: 71, neutral: 15, negative: 14 },
  { topic: 'Economía', positive: 60, neutral: 23, negative: 17 },
  { topic: 'Educación', positive: 68, neutral: 20, negative: 12 },
  { topic: 'Transporte', positive: 22, neutral: 15, negative: 63 },
  { topic: 'Salud', positive: 55, neutral: 25, negative: 20 },
  { topic: 'Corrupción', positive: 32, neutral: 30, negative: 38 },
];

export const analyst = {
  name: 'Cari Ramírez',
  role: 'Analista War Room',
  email: 'analista@eleccion27.mx',
  organization: 'Datistics · Consultoría Estratégica',
  memberSince: 'Enero 2026',
  initials: 'C',
};

export type Politician = {
  id: string;
  name: string;
  role: string;
  region: string;
  party: string;
  partyColor: string;
  photoUrl?: string;
  initials: string;
  mentionsDay: number;
  sentiment: number;
  pricePerMonth: number;
  tier: 'starter' | 'pro' | 'enterprise';
};

export const politicians: Politician[] = [
  {
    id: 'lemus',
    name: 'Pablo Lemus Navarro',
    role: 'Gobernador de Jalisco',
    region: 'Jalisco',
    party: 'Movimiento Ciudadano',
    partyColor: '#ff6b00',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gobernador_Pablo_Lemus_Navarro_%28cropped%29.jpg/250px-Gobernador_Pablo_Lemus_Navarro_%28cropped%29.jpg',
    initials: 'PL',
    mentionsDay: 24680,
    sentiment: 52,
    pricePerMonth: 4999,
    tier: 'enterprise',
  },
  {
    id: 'alfaro',
    name: 'Enrique Alfaro Ramírez',
    role: 'Ex-Gobernador de Jalisco',
    region: 'Jalisco',
    party: 'Movimiento Ciudadano',
    partyColor: '#ff6b00',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Enrique_Alfaro.jpg/250px-Enrique_Alfaro.jpg',
    initials: 'EA',
    mentionsDay: 12340,
    sentiment: 38,
    pricePerMonth: 2999,
    tier: 'pro',
  },
  {
    id: 'frangie',
    name: 'Juan José Frangie',
    role: 'Presidente Municipal de Zapopan',
    region: 'Zapopan · Jalisco',
    party: 'Movimiento Ciudadano',
    partyColor: '#ff6b00',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Juan_Jos%C3%A9_Frangie.png/250px-Juan_Jos%C3%A9_Frangie.png',
    initials: 'JF',
    mentionsDay: 9820,
    sentiment: 61,
    pricePerMonth: 2499,
    tier: 'pro',
  },
  {
    id: 'delgadillo',
    name: 'Verónica Delgadillo',
    role: 'Presidenta Municipal de Guadalajara',
    region: 'Guadalajara · Jalisco',
    party: 'Movimiento Ciudadano',
    partyColor: '#ff6b00',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ver%C3%B3nica_Delgadillo_Garc%C3%ADa.jpg/250px-Ver%C3%B3nica_Delgadillo_Garc%C3%ADa.jpg',
    initials: 'VD',
    mentionsDay: 8540,
    sentiment: 55,
    pricePerMonth: 2499,
    tier: 'pro',
  },
  {
    id: 'zamora',
    name: 'Salvador Zamora Zamora',
    role: 'Presidente Municipal de Tlajomulco',
    region: 'Tlajomulco · Jalisco',
    party: 'Movimiento Ciudadano',
    partyColor: '#ff6b00',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Salvador_Zamora_Zamora.png/250px-Salvador_Zamora_Zamora.png',
    initials: 'SZ',
    mentionsDay: 3420,
    sentiment: 47,
    pricePerMonth: 1499,
    tier: 'starter',
  },
  {
    id: 'lomeli',
    name: 'Carlos Lomelí Bolaños',
    role: 'Senador por Jalisco',
    region: 'Jalisco',
    party: 'Morena',
    partyColor: '#8b0000',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Carlos_Lomeli_Bolanos.jpg',
    initials: 'CL',
    mentionsDay: 2180,
    sentiment: 42,
    pricePerMonth: 1499,
    tier: 'starter',
  },
];

export const activeSubscription = {
  politicianId: 'esthela',
  planName: 'Plan de Prueba',
  daysRemaining: 12,
  totalDays: 14,
  features: [
    'Monitoreo 24/7 de 1 personaje',
    'Alertas en tiempo real',
    'Análisis de sentimiento',
    'Reportes descargables',
  ],
};
