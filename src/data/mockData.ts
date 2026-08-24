export const candidate = {
  name: 'Antonio Arámbula',
  role: 'Secretario General de Gobierno · Aguascalientes',
  verified: true,
  coalicion: 'Coalición por Aguascalientes',
  eleccion: 'Gubernatura 2028',
  diasParaEleccion: 458,
  photoInitials: 'AA',
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

export const topNews = [
  {
    title: 'Noticieros Televisa cubre agenda de gobierno de Arámbula en Aguascalientes',
    source: 'Noticieros Televisa',
    tier: 'nacional-tv' as MediaTier,
    time: '10:02 AM',
    sentiment: 'POSITIVA' as const,
  },
  {
    title: 'Reforma analiza posicionamiento político de Arámbula rumbo al 2028',
    source: 'Reforma',
    tier: 'nacional-print' as MediaTier,
    time: '09:15 AM',
    sentiment: 'NEUTRAL' as const,
  },
  {
    title: 'Empresarios de Aguascalientes respaldan agenda de obras públicas',
    source: 'Heraldo de Aguascalientes',
    tier: 'regional' as MediaTier,
    time: '08:40 AM',
    sentiment: 'POSITIVA' as const,
  },
];

export const topics = [
  { name: 'Obras públicas', mentions: 4230, sentiment: 74, positive: true },
  { name: 'Seguridad estatal', mentions: 3480, sentiment: 58, positive: true },
  { name: 'Cercanía con la gente', mentions: 2810, sentiment: 66, positive: true },
  { name: 'Empleo y economía', mentions: 1920, sentiment: 52, positive: true },
  { name: 'Transparencia', mentions: 1540, sentiment: -34, positive: false },
];

export const wordCloud = [
  { text: 'obras', value: 100, color: '#22c55e' },
  { text: 'gobierno', value: 88, color: '#3b82f6' },
  { text: 'aguascalientes', value: 78, color: '#a855f7' },
  { text: 'trabajo', value: 62, color: '#22c55e' },
  { text: 'seguridad', value: 55, color: '#22c55e' },
  { text: 'garantía', value: 50, color: '#eab308' },
  { text: 'ciudadanos', value: 48, color: '#eab308' },
  { text: 'resultados', value: 44, color: '#22c55e' },
  { text: 'compromiso', value: 40, color: '#3b82f6' },
  { text: 'estado', value: 38, color: '#a855f7' },
  { text: 'inversión', value: 34, color: '#22c55e' },
  { text: 'transparencia', value: 30, color: '#f97316' },
  { text: 'proyecto', value: 28, color: '#eab308' },
  { text: 'familias', value: 26, color: '#22c55e' },
  { text: 'progreso', value: 24, color: '#3b82f6' },
  { text: 'oposición', value: 20, color: '#f97316' },
];

export type AlertSeverity = 'orange' | 'yellow' | 'blue';

export const alerts = [
  {
    id: 'alt-01',
    what: 'Menciones críticas por licitación de obra pública en Jesús María',
    who: 'Colectivos vecinales + prensa local (LJA, Heraldo)',
    risk: 'Medio · afecta narrativa de transparencia',
    time: 'Hace 15 min',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-obra-jesus-maria',
  },
  {
    id: 'alt-02',
    what: 'Video sobre nombramiento en Secretaría toma alcance en X',
    who: 'Cuentas de oposición en Aguascalientes',
    risk: 'Medio · potencial viralización en 6h',
    time: 'Hace 42 min',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-03',
    what: 'Nota positiva del Heraldo sobre agenda de obras públicas',
    who: 'Heraldo de Aguascalientes · sección Estado',
    risk: 'Bajo · oportunidad de amplificar mensaje',
    time: 'Hace 1 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-prensa-nacional',
  },
];

export const suggestedActions = [
  { title: 'Publicar avance de obra pública en Jesús María', time: 'Hoy · 12:00 PM' },
  { title: 'Coordinar entrevista con Heraldo de Aguascalientes', time: 'Hoy · 02:00 PM' },
  { title: 'Contenido en Instagram sobre agenda territorial', time: 'Hoy · 04:00 PM' },
  { title: 'Monitoreo de menciones en X y TikTok', time: 'Continuo' },
];

export type RecommendationUrgency = 'alta' | 'media' | 'baja';
export type RecommendationCategory = 'crisis' | 'narrativa' | 'contenido' | 'operacion' | 'competencia';

export const recommendations: {
  id: string;
  title: string;
  category: RecommendationCategory;
  urgency: RecommendationUrgency;
  summary: string;
  actions: string[];
  linkedAlertId?: string;
  timeframe: string;
}[] = [
  {
    id: 'rec-obra-jesus-maria',
    title: 'Aclarar dudas sobre licitación de obra en Jesús María',
    category: 'crisis',
    urgency: 'alta',
    summary: 'Menciones críticas sobre proceso de licitación de obra pública crecen. Colectivos vecinales y prensa local amplifican. Ventana de acción: próximas 6 horas.',
    actions: [
      'Publicar bitácora de licitación con documentos y bases técnicas',
      'Convocar rueda de prensa con la Secretaría de Obras Públicas',
      'Ofrecer entrevistas a Heraldo de Aguascalientes y LJA',
      'Preparar carrusel visual con el proceso paso a paso',
    ],
    linkedAlertId: 'alt-01',
    timeframe: 'Próximas 6 horas',
  },
  {
    id: 'rec-video-critico',
    title: 'Contención de video crítico en X',
    category: 'crisis',
    urgency: 'media',
    summary: 'Video de oposición sobre nombramiento en Secretaría comienza a tomar alcance. Evitar respuesta directa que amplifique.',
    actions: [
      'NO responder directamente al video (evitar Streisand effect)',
      'Producir contenido propio en el mismo formato para saturar el algoritmo',
      'Activar red de aliados con contenido paralelo sobre el nombramiento',
      'Monitorear réplicas cada 30 minutos y reportar patrones',
    ],
    linkedAlertId: 'alt-02',
    timeframe: 'Próximas 4 horas',
  },
  {
    id: 'rec-prensa-nacional',
    title: 'Aprovechar cobertura positiva del Heraldo',
    category: 'narrativa',
    urgency: 'baja',
    summary: 'El Heraldo publicó nota positiva sobre agenda de obras públicas. Oportunidad para amplificar y reforzar posicionamiento.',
    actions: [
      'Compartir la nota en redes propias con quote seleccionada',
      'Enviar agradecimiento privado a la redacción y ofrecer seguimiento',
      'Producir 3 piezas de contenido derivadas (video, carrusel, hilo)',
    ],
    linkedAlertId: 'alt-03',
    timeframe: 'Esta semana',
  },
  {
    id: 'rec-territorio-oriente',
    title: 'Densificar presencia en el oriente del estado',
    category: 'operacion',
    urgency: 'media',
    summary: 'Los municipios del oriente muestran menor volumen de menciones pero sentimiento positivo alto. Oportunidad para consolidar.',
    actions: [
      'Programar recorridos comunitarios en Rincón de Romos y Pabellón',
      'Coordinar reuniones con líderes de organizaciones agrícolas',
      'Producir contenido específico para audiencia rural',
    ],
    timeframe: 'Próximas 2 semanas',
  },
  {
    id: 'rec-agenda-2028',
    title: 'Perfilar agenda rumbo al 2028',
    category: 'narrativa',
    urgency: 'media',
    summary: 'Reforma publicó análisis sobre posicionamiento político rumbo al 2028. Momento oportuno para articular narrativa de largo plazo.',
    actions: [
      'Preparar posicionamiento sobre 3 temas prioritarios estatales',
      'Rueda de prensa mensual para consolidar presencia mediática',
      'Alianzas con analistas y líderes de opinión clave',
    ],
    timeframe: 'Próximo mes',
  },
  {
    id: 'rec-instagram',
    title: 'Fortalecer presencia en Instagram (@soyantonioarambula)',
    category: 'contenido',
    urgency: 'baja',
    summary: 'La cuenta verificada de Instagram muestra buen engagement con contenido de eventos y obras públicas. Oportunidad de sistematizar.',
    actions: [
      'Calendario semanal de publicaciones con temáticas fijas',
      'Reels dedicados a "Soy Toño" con formato personal',
      'Historias diarias con avances de obras',
    ],
    timeframe: 'Continuo',
  },
];

export type Statement = {
  candidateId: string;
  candidateName: string;
  party: string;
  headline: string;
  quote: string;
  source: string;
  time: string;
  tier: MediaTier;
};

export const importantStatements: Statement[] = [
  {
    candidateId: 'competitor-1',
    candidateName: 'Competidor A',
    party: 'Partido A',
    headline: 'Anuncia programa emergente contra la violencia en zonas rurales',
    quote: 'La seguridad no espera: en 100 días tendremos operativos permanentes en las 8 regiones del estado.',
    source: 'Milenio',
    time: '11:15 AM',
    tier: 'nacional-print',
  },
  {
    candidateId: 'competitor-2',
    candidateName: 'Competidor B',
    party: 'Partido B',
    headline: 'Propone reformar la ley de participación ciudadana',
    quote: 'Devolveremos a las comunidades el poder de decisión sobre su presupuesto.',
    source: 'Reforma',
    time: '10:40 AM',
    tier: 'nacional-print',
  },
];

export const politicalPostulations: { candidateId: string; declaration: string; date: string }[] = [
  { candidateId: 'competitor-1', declaration: 'Registro formal ante la autoridad electoral pendiente. Precampaña activa desde marzo.', date: 'Actualizado hoy' },
  { candidateId: 'competitor-2', declaration: 'Formalizó postulación oficial la semana pasada. Coalición ya inscrita.', date: 'Actualizado hoy' },
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

const aguascalientesSentiment: Record<string, number> = {
  'Aguascalientes': 0.85,
  'Zacatecas': 0.55,
  'San Luis Potosí': 0.42,
  'Jalisco': 0.38,
  'Guanajuato': 0.32,
  'Querétaro': 0.28,
  'Nayarit': 0.18,
  'Ciudad de México': 0.10,
  'Michoacán': 0.05,
  'Colima': -0.05,
  'Durango': -0.12,
  'Nuevo León': -0.22,
  'Sinaloa': -0.35,
  'Sonora': -0.48,
};

export function stateSentiment(name: string): number {
  return aguascalientesSentiment[name] ?? (Math.sin(name.length * 3.7) * 0.5);
}

export function sentimentColor(v: number): string {
  if (v > 0.4) return '#16a34a';
  if (v > 0.1) return '#4ade80';
  if (v > -0.1) return '#facc15';
  if (v > -0.4) return '#f97316';
  return '#dc2626';
}

export const recentMentions = [
  { user: '@ags_hoy', platform: 'x', text: 'Buena la gestión de @soyantonioarambula sobre las obras públicas en Aguascalientes. Se nota el avance.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
  { user: 'María Fernanda Ruiz', platform: 'facebook', text: 'Cuestionable el proceso de licitación de la obra en Jesús María. Falta transparencia.', sentiment: 'negativo', time: 'Hace 8 min', engagement: 189 },
  { user: '@heraldo_ags', platform: 'x', text: 'Arámbula presenta avances de agenda territorial en el oriente del estado.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
  { user: '@analista_ags', platform: 'x', text: 'El posicionamiento político de Toño Arámbula lo perfila como el candidato natural del 2028.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
  { user: 'Jorge Serna', platform: 'facebook', text: 'Video en X sobre nombramientos recientes en la Secretaría genera dudas.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 830 },
  { user: '@rocio_reportera', platform: 'instagram', text: 'Cobertura del evento de Arámbula con jóvenes en San Marcos: gran convocatoria.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 692 },
  { user: '@encuestas_norte', platform: 'x', text: 'Encuesta local ubica a Arámbula como el mejor evaluado del gabinete estatal.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
  { user: 'Ernesto Padilla', platform: 'facebook', text: 'Muchas obras anunciadas, pocas concluidas. Habrá que verificar los tiempos.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 98 },
];

export const allNews = [
  { title: 'Noticieros Televisa cubre agenda de gobierno de Arámbula en Aguascalientes', source: 'Noticieros Televisa', tier: 'nacional-tv' as MediaTier, time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. El Secretario detalló avances de la agenda estatal y proyectos de obras públicas para 2026.' },
  { title: 'TV Azteca reporta inversión en infraestructura del gobierno de Aguascalientes', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv' as MediaTier, time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota de dos minutos con recorrido por obras estratégicas y anuncio de nuevas licitaciones para el segundo semestre.' },
  { title: 'Reforma analiza posicionamiento político de Arámbula rumbo al 2028', source: 'Reforma', tier: 'nacional-print' as MediaTier, time: '09:15 AM', sentiment: 'NEUTRAL', summary: 'Análisis de trayectoria y perfil político del Secretario General de Gobierno como aspirante natural a la gubernatura.' },
  { title: 'El Universal: Arámbula fortalece agenda de obras en Aguascalientes', source: 'El Universal', tier: 'nacional-print' as MediaTier, time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Reportaje sobre la ejecución del plan estatal de infraestructura y la coordinación con municipios.' },
  { title: 'Milenio: Arámbula figura entre los perfiles mejor evaluados del estado', source: 'Milenio', tier: 'nacional-print' as MediaTier, time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de percepción pública lo coloca con alta evaluación entre funcionarios de Aguascalientes.' },
  { title: 'Empresarios de Aguascalientes respaldan agenda de obras públicas', source: 'Heraldo de Aguascalientes', tier: 'regional' as MediaTier, time: '08:40 AM', sentiment: 'POSITIVA', summary: 'Cámaras empresariales expresan respaldo al plan de infraestructura y al esquema de licitaciones abiertas.' },
  { title: 'Cuestionan proceso de licitación de obra en Jesús María', source: 'La Jornada Aguascalientes', tier: 'regional' as MediaTier, time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Colectivos vecinales y prensa local piden mayor transparencia en la asignación de contratos recientes.' },
  { title: 'Jóvenes convocan a foro sobre transparencia rumbo al 2028', source: 'UAA Radio', tier: 'digital-medio' as MediaTier, time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Universitarios organizan foro para pedir a aspirantes publicar declaraciones patrimoniales y agenda de gobierno.' },
  { title: 'Influencer local viraliza video crítico sobre nombramientos en Secretaría', source: '@ags_critico · X', tier: 'influencer' as MediaTier, time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 210k seguidores acumula 18k reproducciones en tres horas cuestionando decisiones recientes.' },
];

export const allAlerts = [
  {
    id: 'alt-01',
    what: 'Menciones críticas por licitación de obra pública en Jesús María (+38% en la última hora, 1,240 menciones)',
    who: 'Colectivos vecinales de Jesús María + prensa local (LJA, Heraldo)',
    risk: 'Medio · afecta narrativa de transparencia',
    zone: 'Jesús María',
    time: 'Hace 15 min',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-obra-jesus-maria',
  },
  {
    id: 'alt-02',
    what: 'Video sobre nombramiento en Secretaría toma alcance: 4,500 views en 40 minutos',
    who: 'Cuentas de oposición en X (Aguascalientes) + réplicas en TikTok',
    risk: 'Medio · viralización probable en 6h',
    zone: 'Digital',
    time: 'Hace 42 min',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-03',
    what: 'Nota positiva del Heraldo sobre agenda de obras públicas',
    who: 'Heraldo de Aguascalientes · sección Estado',
    risk: 'Bajo · oportunidad de amplificar mensaje',
    zone: 'Aguascalientes',
    time: 'Hace 1 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-prensa-nacional',
  },
  {
    id: 'alt-04',
    what: 'Menciones sobre proceso de nombramientos en Secretaría (+18%)',
    who: 'Cuentas críticas en X + reporte de LJA',
    risk: 'Medio · afecta narrativa de meritocracia',
    zone: 'Digital',
    time: 'Hace 2 h',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-05',
    what: 'Reforma publica análisis sobre posicionamiento rumbo al 2028 (tono neutral)',
    who: 'Reforma · sección Estados',
    risk: 'Bajo · oportunidad de reforzar perfil político',
    zone: 'Nacional',
    time: 'Hace 3 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-agenda-2028',
  },
  {
    id: 'alt-06',
    what: 'Video en Instagram Reels alcanza 22k views con contenido positivo',
    who: '@soyantonioarambula · cuenta oficial',
    risk: 'Bajo · oportunidad de replicar formato exitoso',
    zone: 'Digital',
    time: 'Hace 4 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-instagram',
  },
] as const;

// Foco geográfico del candidato: municipios/estados donde compite
// - Candidato estatal (gubernatura) → breakdown por municipios del estado
// - Candidato municipal (alcaldía) → breakdown por colonias/distritos
export const candidateScope = {
  level: 'estatal' as 'estatal' | 'municipal',
  area: 'Aguascalientes',
  breakdownLabel: 'municipios',
};

export const sentimentByArea = [
  { area: 'Aguascalientes',       positive: 72, neutral: 18, negative: 10, mentions: 12580, trend: '+4.1 pts' },
  { area: 'Jesús María',          positive: 54, neutral: 24, negative: 22, mentions: 4820,  trend: '-1.8 pts' },
  { area: 'Calvillo',             positive: 65, neutral: 21, negative: 14, mentions: 2210,  trend: '+2.5 pts' },
  { area: 'Rincón de Romos',      positive: 68, neutral: 20, negative: 12, mentions: 1840,  trend: '+3.2 pts' },
  { area: 'Pabellón de Arteaga',  positive: 66, neutral: 22, negative: 12, mentions: 1650,  trend: '+2.8 pts' },
  { area: 'San Francisco de los Romo', positive: 61, neutral: 24, negative: 15, mentions: 1240, trend: '+1.1 pts' },
  { area: 'Cosío',                positive: 58, neutral: 25, negative: 17, mentions: 780,   trend: '+0.6 pts' },
  { area: 'Tepezalá',             positive: 57, neutral: 26, negative: 17, mentions: 640,   trend: '+1.9 pts' },
];

export const sentimentByTopic = [
  { topic: 'Obras públicas', positive: 74, neutral: 16, negative: 10 },
  { topic: 'Seguridad', positive: 58, neutral: 24, negative: 18 },
  { topic: 'Empleo', positive: 66, neutral: 22, negative: 12 },
  { topic: 'Educación', positive: 62, neutral: 25, negative: 13 },
  { topic: 'Salud', positive: 55, neutral: 27, negative: 18 },
  { topic: 'Transparencia', positive: 32, neutral: 30, negative: 38 },
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
  politicianId: 'antonio-arambula',
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
