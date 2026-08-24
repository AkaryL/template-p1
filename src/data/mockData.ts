export const candidate = {
  name: 'José Eduardo Torres',
  role: 'Aspirante a la Alcaldía de Guadalajara',
  verified: true,
  coalicion: 'Equipo GDL',
  eleccion: 'Municipal 2027',
  diasParaEleccion: 124,
  photoInitials: 'JE',
  photoUrl: '/candidates/jose-eduardo-torres.jpg',
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
    title: 'Noticieros Televisa reporta plan de movilidad de Torres para Guadalajara',
    source: 'Noticieros Televisa',
    tier: 'nacional-tv' as MediaTier,
    time: '10:02 AM',
    sentiment: 'POSITIVA' as const,
  },
  {
    title: 'Reforma cuestiona a Torres por postura sobre inseguridad en la ZMG',
    source: 'Reforma',
    tier: 'nacional-print' as MediaTier,
    time: '09:15 AM',
    sentiment: 'NEGATIVA' as const,
  },
  {
    title: 'Cámara de Comercio de Jalisco recibe a Torres en foro empresarial',
    source: 'NTR Guadalajara',
    tier: 'regional' as MediaTier,
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

export type AlertSeverity = 'orange' | 'yellow' | 'blue';

export const alerts = [
  {
    id: 'alt-01',
    what: 'Crecimiento acelerado de conversación negativa sobre inseguridad en la ZMG',
    who: 'Colectivos ciudadanos de Guadalajara + prensa regional',
    risk: 'Alto · impacto reputacional en 24h',
    time: 'Hace 15 min',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-seguridad-zmg',
  },
  {
    id: 'alt-02',
    what: 'Video crítico sobre Torres toma alcance en TikTok',
    who: 'Creadores locales de Guadalajara · 12,500 views en 40 min',
    risk: 'Medio · viralización probable en 6h',
    time: 'Hace 42 min',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-03',
    what: 'Aspirante rival anunció recorrido masivo en Zapopan',
    who: 'Competidor de la ZMG · mañana 6:00 PM en Zapopan',
    risk: 'Bajo · disputa de agenda mediática',
    time: 'Hace 1 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-competencia',
  },
];

export const suggestedActions = [
  { title: 'Publicar postura sobre transporte', time: 'Hoy · 12:00 PM' },
  { title: 'Activar voceros técnicos', time: 'Hoy · 02:00 PM' },
  { title: 'Contenido positivo en redes', time: 'Hoy · 04:00 PM' },
  { title: 'Monitoreo y ajuste de narrativa', time: 'Continuo' },
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
    id: 'rec-seguridad-zmg',
    title: 'Neutralizar narrativa negativa sobre inseguridad en la ZMG',
    category: 'crisis',
    urgency: 'alta',
    summary: 'La conversación negativa sobre seguridad en Guadalajara y Zapopan creció 38% en 1 hora. Colectivos ciudadanos amplifican en prensa regional. Ventana de acción: próximas 6 horas.',
    actions: [
      'Publicar posicionamiento oficial en X, Facebook e Instagram antes de las 12:00 PM',
      'Activar 3 voceros técnicos con perfil en seguridad municipal para entrevistas radio',
      'Coordinar reunión privada con colectivos ciudadanos en próximas 48h',
      'Preparar carrusel visual con las 5 acciones concretas del plan para la ZMG',
    ],
    linkedAlertId: 'alt-01',
    timeframe: 'Próximas 6 horas',
  },
  {
    id: 'rec-video-critico',
    title: 'Contención de video crítico viralizado en TikTok',
    category: 'crisis',
    urgency: 'alta',
    summary: 'Video crítico sobre Torres acumula 12,500 views en 40 min con creadores locales de Guadalajara. Réplicas comenzando en TikTok. Evitar respuesta directa que amplifique alcance.',
    actions: [
      'NO responder directamente al video (evitar Streisand effect)',
      'Producir contenido propio en el mismo formato para saturar el algoritmo',
      'Activar red de creadores tapatíos aliados con contenido paralelo',
      'Monitorear réplicas cada 30 minutos y reportar patrones',
    ],
    linkedAlertId: 'alt-02',
    timeframe: 'Próximas 4 horas',
  },
  {
    id: 'rec-competencia',
    title: 'Contra-agenda por recorrido del rival en Zapopan',
    category: 'competencia',
    urgency: 'media',
    summary: 'Aspirante rival convoca recorrido masivo mañana 6:00 PM en Zapopan. Necesitamos ocupar el ciclo mediático del día en la ZMG.',
    actions: [
      'Agendar recorrido territorial paralelo en 3 colonias de Guadalajara',
      'Anunciar una propuesta concreta con embargo periodístico para las 5:00 PM',
      'Convocar a medios locales (Milenio Jalisco, El Informador, NTR) con anticipación',
    ],
    linkedAlertId: 'alt-03',
    timeframe: 'Mañana',
  },
  {
    id: 'rec-financiamiento',
    title: 'Blindar narrativa de transparencia financiera',
    category: 'narrativa',
    urgency: 'media',
    summary: 'Menciones negativas sobre origen de recursos crecen +18%. Reforma publicó pieza cuestionando spots. Necesitamos anticiparnos antes de que escale.',
    actions: [
      'Publicar de forma proactiva declaración 3 de 3 completa',
      'Contactar a reporteros de fuentes electorales con contexto',
      'Preparar timeline visual del cumplimiento de reportes ante el IEPC-Jalisco',
    ],
    linkedAlertId: 'alt-04',
    timeframe: 'Próximas 48 horas',
  },
  {
    id: 'rec-prensa-nacional',
    title: 'Aprovechar cobertura neutral de El Informador',
    category: 'narrativa',
    urgency: 'baja',
    summary: 'El Informador publicó reportaje sobre trayectoria y equipo cercano con tono neutral. Oportunidad para reforzar mensaje de perfil en la conversación pública.',
    actions: [
      'Compartir la nota en redes propias con quote seleccionada',
      'Enviar agradecimiento privado a la reportera y ofrecer entrevista de seguimiento',
      'Producir 3 piezas de contenido derivadas (video, carrusel, hilo)',
    ],
    linkedAlertId: 'alt-05',
    timeframe: 'Esta semana',
  },
  {
    id: 'rec-desinformacion',
    title: 'Respuesta a ataque coordinado #NoAlAspiranteTorres',
    category: 'crisis',
    urgency: 'alta',
    summary: 'Se detectó red de 89 cuentas con patrón de bot en X. El hashtag creció +120%. No es orgánico y podemos denunciarlo con evidencia.',
    actions: [
      'Compilar evidencia técnica de las 89 cuentas (fecha creación, patrón horario)',
      'Reportar a plataformas (X, Meta) el ataque coordinado',
      'Publicar comunicado con datos abiertos denunciando la operación',
      'Coordinar respuesta orgánica con base propia (sin hashtag oficial de respuesta)',
    ],
    linkedAlertId: 'alt-06',
    timeframe: 'Próximas 24 horas',
  },
  {
    id: 'rec-agenda-movilidad',
    title: 'Consolidar agenda de movilidad urbana',
    category: 'contenido',
    urgency: 'media',
    summary: 'El anuncio del plan integral de movilidad tuvo cobertura positiva en Televisa y Milenio Jalisco. Momentum para amplificar y consolidar posición como líder del tema.',
    actions: [
      'Serie de 5 videos explicando ciclovías, transporte público y rutas alimentadoras',
      'Alianzas con colectivos de movilidad sustentable para respaldo público',
      'Entrevistas exclusivas con 2 medios especializados en urbanismo',
    ],
    timeframe: 'Próximas 2 semanas',
  },
  {
    id: 'rec-operativa-territorio',
    title: 'Densificar presencia territorial en la ZMG',
    category: 'operacion',
    urgency: 'baja',
    summary: 'La zona centro de Guadalajara muestra el sentimiento positivo más alto pero también menor volumen de menciones en colonias periféricas. Oportunidad para consolidar.',
    actions: [
      'Programar 3 recorridos comunitarios en el próximo mes (Cerro del Cuatro, Oblatos, Miravalle)',
      'Producir contenido enfocado en vecinos de colonias populares',
      'Coordinar con líderes vecinales identificados',
    ],
    timeframe: 'Próximo mes',
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
  { title: 'Noticieros Televisa reporta el plan integral de movilidad de Torres para Guadalajara', source: 'Noticieros Televisa', tier: 'nacional-tv' as MediaTier, time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. El aspirante detalló propuestas específicas para ciclovías, transporte público y rutas alimentadoras al Mi Macro.' },
  { title: 'TV Azteca abre noticiario con recorrido de Torres por Cerro del Cuatro', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv' as MediaTier, time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota de dos minutos con recorrido en tres colonias y encuentros con líderes vecinales de la zona.' },
  { title: 'Reforma cuestiona financiamiento de campaña y compra de spots digitales', source: 'Reforma', tier: 'nacional-print' as MediaTier, time: '07:50 AM', sentiment: 'NEGATIVA', summary: 'Investigación cuestiona el origen de recursos para pauta digital y spots publicitarios recientes.' },
  { title: 'El Universal: Torres anuncia gabinete técnico y paritario si gana la alcaldía', source: 'El Universal', tier: 'nacional-print' as MediaTier, time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Adelantó perfiles académicos y con experiencia municipal para las principales carteras.' },
  { title: 'Milenio: Torres lidera preferencia entre aspirantes de Guadalajara', source: 'Milenio', tier: 'nacional-print' as MediaTier, time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Encuesta interna lo coloca 3 puntos arriba con 34% de intención de voto en la ZMG.' },
  { title: 'Cámara de Comercio de Jalisco recibe a Torres en foro empresarial', source: 'NTR Guadalajara', tier: 'regional' as MediaTier, time: '08:40 AM', sentiment: 'NEUTRAL', summary: 'Presentó su visión para atraer inversión al centro de la ciudad y detonar el corredor de Chapultepec.' },
  { title: 'Cuestionan a Torres por postura sobre inseguridad en la ZMG', source: 'El Informador', tier: 'regional' as MediaTier, time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Colectivos ciudadanos rechazan que se minimicen los índices delictivos en Guadalajara y Zapopan.' },
  { title: 'Jóvenes convocan marcha por transparencia rumbo al 2027', source: 'UdeG Radio', tier: 'digital-medio' as MediaTier, time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Piden a todos los aspirantes publicar declaraciones 3 de 3 completas antes del proceso.' },
  { title: 'Influencer tapatío viraliza video crítico sobre Torres', source: '@gdl_noticias · X', tier: 'influencer' as MediaTier, time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 340k seguidores acumula 25k reproducciones en cuatro horas.' },
];

export const allAlerts = [
  {
    id: 'alt-01',
    what: 'Crecimiento acelerado de conversación negativa sobre inseguridad en la ZMG (+38% en la última hora, 2,340 menciones)',
    who: 'Colectivos ciudadanos de Guadalajara + prensa regional (El Informador, NTR)',
    risk: 'Alto · impacto reputacional en 24h · puede escalar a nacional',
    zone: 'Zona Metropolitana',
    time: 'Hace 15 min',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-seguridad-zmg',
  },
  {
    id: 'alt-02',
    what: 'Video crítico toma alcance en TikTok: 12,500 views en 40 minutos',
    who: 'Creadores locales de Guadalajara + réplicas en TikTok',
    risk: 'Medio · viralización probable en 6h',
    zone: 'Guadalajara',
    time: 'Hace 42 min',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-03',
    what: 'Aspirante rival anunció recorrido masivo (~5,000 asistentes) en Zapopan',
    who: 'Competidor de la ZMG · Zapopan · mañana 6:00 PM',
    risk: 'Bajo · disputa de agenda mediática del día',
    zone: 'Zapopan',
    time: 'Hace 1 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-competencia',
  },
  {
    id: 'alt-04',
    what: 'Incremento sostenido de menciones negativas sobre financiamiento de campaña',
    who: 'Cuentas críticas coordinadas en X + reporte de Reforma',
    risk: 'Medio · afecta narrativa de transparencia ante IEPC-Jalisco',
    zone: 'Digital',
    time: 'Hace 2 h',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-financiamiento',
  },
  {
    id: 'alt-05',
    what: 'El Informador publica reportaje sobre trayectoria y equipo cercano (tono neutral)',
    who: 'El Informador · sección Jalisco',
    risk: 'Bajo · oportunidad de reforzar perfil biográfico',
    zone: 'Jalisco',
    time: 'Hace 3 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-prensa-nacional',
  },
  {
    id: 'alt-06',
    what: 'Campaña coordinada de desinformación con hashtag #NoAlAspiranteTorres (+120%)',
    who: '89 cuentas identificadas en X con patrón de bot',
    risk: 'Alto · ataque orgánico simulado, requiere respuesta',
    zone: 'Digital',
    time: 'Hace 4 h',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-desinformacion',
  },
] as const;

// Foco geográfico del candidato: municipios/estados donde compite
// - Candidato estatal (gubernatura) → breakdown por municipios del estado
// - Candidato municipal (alcaldía) → breakdown por colonias/distritos
export const candidateScope = {
  level: 'municipal' as 'estatal' | 'municipal',
  area: 'Guadalajara',
  breakdownLabel: 'colonias',
};

export const sentimentByArea = [
  { area: 'Centro Histórico',   positive: 68, neutral: 20, negative: 12, mentions: 5420, trend: '+4.1 pts' },
  { area: 'Colonia Americana',  positive: 71, neutral: 19, negative: 10, mentions: 4180, trend: '+3.6 pts' },
  { area: 'Providencia',        positive: 65, neutral: 22, negative: 13, mentions: 3210, trend: '+2.1 pts' },
  { area: 'Chapultepec',        positive: 61, neutral: 24, negative: 15, mentions: 2440, trend: '+1.8 pts' },
  { area: 'Oblatos',            positive: 48, neutral: 28, negative: 24, mentions: 1650, trend: '-0.8 pts' },
  { area: 'Cerro del Cuatro',   positive: 54, neutral: 26, negative: 20, mentions: 1240, trend: '+1.1 pts' },
  { area: 'Miravalle',          positive: 44, neutral: 31, negative: 25, mentions: 980,  trend: '-1.4 pts' },
  { area: 'Huentitán',          positive: 57, neutral: 25, negative: 18, mentions: 810,  trend: '+2.2 pts' },
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
