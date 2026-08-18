export const candidate = {
  name: 'José Eduardo Torres',
  role: 'Aspirante a la Alcaldía de Guadalajara',
  verified: true,
  coalicion: 'Equipo GDL',
  eleccion: 'Municipal 2027',
  diasParaEleccion: 124,
  photoInitials: 'JE',
  photoUrl: '',
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
    title: 'José Eduardo Torres presenta plan de movilidad para Guadalajara',
    source: 'Milenio Jalisco',
    time: '10:02 AM',
    sentiment: 'POSITIVA' as const,
  },
  {
    title: 'Cuestionan a Torres por postura sobre inseguridad en la ZMG',
    source: 'El Informador',
    time: '09:15 AM',
    sentiment: 'NEGATIVA' as const,
  },
  {
    title: 'Cámara de Comercio recibe a José Eduardo Torres en foro empresarial',
    source: 'NTR Guadalajara',
    time: '08:40 AM',
    sentiment: 'NEUTRAL' as const,
  },
];

export const topics = [
  { name: 'Movilidad urbana', mentions: 4230, sentiment: 68, positive: true },
  { name: 'Seguridad ZMG', mentions: 3480, sentiment: -42, positive: false },
  { name: 'Cercanía con vecinos', mentions: 2810, sentiment: 66, positive: true },
  { name: 'Corrupción', mentions: 1920, sentiment: -55, positive: false },
  { name: 'Empleo y economía', mentions: 1540, sentiment: 47, positive: true },
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
    title: 'Alerta Naranja · Seguridad ZMG',
    description: 'Crecimiento rápido en la conversación negativa sobre inseguridad. Velocidad: 38% en la última hora.',
    time: 'Hace 15 min',
    severity: 'orange' as const,
  },
  {
    title: 'Alerta Amarilla · TikTok',
    description: 'Video crítico sobre José Eduardo Torres comienza a tomar alcance con creadores locales.',
    time: 'Hace 42 min',
    severity: 'yellow' as const,
  },
  {
    title: 'Alerta Informativa · Competencia',
    description: 'Aspirante rival anunció recorrido masivo para mañana en Zapopan.',
    time: 'Hace 1 h',
    severity: 'blue' as const,
  },
];

export const suggestedActions = [
  { title: 'Publicar postura sobre seguridad ZMG', time: 'Hoy · 12:00 PM' },
  { title: 'Activar red de voceros en TikTok', time: 'Hoy · 02:00 PM' },
  { title: 'Contenido positivo de movilidad', time: 'Hoy · 04:00 PM' },
  { title: 'Monitoreo de menciones críticas', time: 'Continuo' },
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

const jaliscoSentiment: Record<string, number> = {
  'Jalisco': 0.85,
  'Nayarit': 0.55,
  'Colima': 0.62,
  'Aguascalientes': 0.45,
  'Michoacán': 0.35,
  'Guanajuato': 0.28,
  'Zacatecas': 0.15,
  'Ciudad de México': 0.10,
  'San Luis Potosí': -0.05,
  'Sinaloa': -0.18,
  'Guerrero': -0.25,
  'Nuevo León': -0.32,
  'Sonora': -0.45,
  'Chiapas': -0.55,
};

export function stateSentiment(name: string): number {
  return jaliscoSentiment[name] ?? (Math.sin(name.length * 3.7) * 0.5);
}

export function sentimentColor(v: number): string {
  if (v > 0.4) return '#16a34a';
  if (v > 0.1) return '#4ade80';
  if (v > -0.1) return '#facc15';
  if (v > -0.4) return '#f97316';
  return '#dc2626';
}

export const recentMentions = [
  { user: '@tapatio_gdl', platform: 'x', text: 'Buena propuesta de @joseeduardo_tq sobre movilidad urbana en GDL. Ojalá se concrete.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
  { user: 'Marisol Ríos', platform: 'facebook', text: 'No confío en las promesas de José Eduardo Torres sobre seguridad. Falta ver acciones.', sentiment: 'negativo', time: 'Hace 8 min', engagement: 89 },
  { user: '@gdl_noticias', platform: 'x', text: 'Torres se reúne con empresarios de la Cámara de Comercio en Guadalajara.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
  { user: '@analista_jalisco', platform: 'x', text: 'La estrategia digital de José Eduardo Torres está sumando seguidores rápido.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
  { user: 'Adrián Camarena', platform: 'facebook', text: 'Videos en TikTok muestran contradicciones en el discurso de Torres.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 1230 },
  { user: '@lorena_reportera', platform: 'instagram', text: 'Cobertura del recorrido de José Eduardo Torres en el Centro Histórico: buena convocatoria.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 892 },
  { user: '@encuestas_mx', platform: 'x', text: 'Encuesta local ubica a Torres 3 puntos arriba entre aspirantes a la alcaldía de GDL.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
  { user: 'Ricardo Ochoa', platform: 'facebook', text: 'Muchas propuestas, pocos resultados hasta ahora. A ver si esta vez sí.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 78 },
];

export const allNews = [
  { title: 'José Eduardo Torres presenta plan integral de movilidad para Guadalajara', source: 'Milenio Jalisco', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'El aspirante detalló propuestas específicas para ciclovías, transporte público y rutas alimentadoras al Mi Macro.' },
  { title: 'Cuestionan a Torres por postura sobre inseguridad en la ZMG', source: 'El Informador', time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Colectivos ciudadanos rechazan que se minimicen los índices delictivos en Guadalajara y Zapopan.' },
  { title: 'Cámara de Comercio recibe a José Eduardo Torres en foro empresarial', source: 'NTR Guadalajara', time: '08:40 AM', sentiment: 'NEUTRAL', summary: 'Presentó su visión para atraer inversión al centro de la ciudad y detonar el corredor de Chapultepec.' },
  { title: 'Torres lidera preferencia entre aspirantes de Guadalajara', source: 'Reforma', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Encuesta interna lo coloca 3 puntos arriba con 34% de intención de voto en la ZMG.' },
  { title: 'Debate por origen de recursos en spots de José Eduardo Torres', source: 'Proceso', time: '07:50 AM', sentiment: 'NEGATIVA', summary: 'Oposición pide al IEPC-Jalisco investigar contratación de pauta digital reciente.' },
  { title: 'Torres recorre las colonias del Cerro del Cuatro con vecinos', source: 'La Jornada Jalisco', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Visitó tres colonias con líderes vecinales para escuchar demandas de servicios básicos.' },
  { title: 'Anuncia gabinete técnico y paritario si gana la alcaldía', source: 'El Occidental', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Adelantó perfiles académicos y con experiencia municipal para las principales carteras.' },
  { title: 'Jóvenes convocan marcha por transparencia rumbo al 2027', source: 'UdeG Radio', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Piden a todos los aspirantes publicar declaraciones 3 de 3 completas antes del proceso.' },
];

export const allAlerts = [
  {
    title: 'Alerta Naranja · Seguridad ZMG',
    description: 'Crecimiento rápido en la conversación negativa sobre inseguridad en Guadalajara y Zapopan. Velocidad: 38% en la última hora. Volumen actual: 2,340 menciones.',
    time: 'Hace 15 min',
    severity: 'orange',
    zone: 'Zona Metropolitana',
    trend: '+38%',
  },
  {
    title: 'Alerta Amarilla · TikTok crítico',
    description: 'Video crítico sobre José Eduardo Torres comienza a tomar alcance con creadores locales. 12,500 views en 40 minutos.',
    time: 'Hace 42 min',
    severity: 'yellow',
    zone: 'Guadalajara',
    trend: '+22%',
  },
  {
    title: 'Alerta Informativa · Competencia',
    description: 'Aspirante rival anunció recorrido masivo para mañana en Zapopan. Estimado: 5,000 asistentes.',
    time: 'Hace 1 h',
    severity: 'blue',
    zone: 'Zapopan',
    trend: '—',
  },
  {
    title: 'Alerta Amarilla · Financiamiento',
    description: 'Incremento en menciones negativas sobre origen de recursos para spots digitales. Origen: cuentas críticas en X.',
    time: 'Hace 2 h',
    severity: 'yellow',
    zone: 'Digital',
    trend: '+18%',
  },
  {
    title: 'Alerta Informativa · Prensa',
    description: 'El Informador publica reportaje sobre trayectoria y equipo cercano de Torres. Tono neutral.',
    time: 'Hace 3 h',
    severity: 'blue',
    zone: 'Jalisco',
    trend: '—',
  },
  {
    title: 'Alerta Naranja · Ataque coordinado',
    description: 'Detectada campaña coordinada de desinformación con hashtag #NoAlAspiranteTorres. 89 cuentas identificadas en X.',
    time: 'Hace 4 h',
    severity: 'orange',
    zone: 'Digital',
    trend: '+120%',
  },
] as const;

export const sentimentByRegion = [
  { region: 'Guadalajara', positive: 64, neutral: 22, negative: 14 },
  { region: 'Zapopan', positive: 58, neutral: 24, negative: 18 },
  { region: 'Tlaquepaque', positive: 52, neutral: 26, negative: 22 },
  { region: 'Tonalá', positive: 47, neutral: 28, negative: 25 },
  { region: 'Tlajomulco', positive: 44, neutral: 30, negative: 26 },
  { region: 'El Salto', positive: 39, neutral: 32, negative: 29 },
];

export const sentimentByTopic = [
  { topic: 'Movilidad', positive: 68, neutral: 18, negative: 14 },
  { topic: 'Empleo', positive: 60, neutral: 23, negative: 17 },
  { topic: 'Educación', positive: 62, neutral: 22, negative: 16 },
  { topic: 'Seguridad', positive: 28, neutral: 30, negative: 42 },
  { topic: 'Corrupción', positive: 24, neutral: 21, negative: 55 },
  { topic: 'Servicios públicos', positive: 45, neutral: 30, negative: 25 },
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
  politicianId: 'jose-eduardo-torres',
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
