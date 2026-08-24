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
    title: 'Televisa reporta plan de seguridad estatal de Esthela Damián',
    source: 'Noticieros Televisa',
    tier: 'nacional-tv' as MediaTier,
    time: '10:02 AM',
    sentiment: 'POSITIVA' as const,
  },
  {
    title: 'Reforma cuestiona postura de Damián sobre transporte público',
    source: 'Reforma',
    tier: 'nacional-print' as MediaTier,
    time: '09:15 AM',
    sentiment: 'NEGATIVA' as const,
  },
  {
    title: 'Empresarios de Guerrero respaldan propuestas económicas',
    source: 'El Sur de Guerrero',
    tier: 'regional' as MediaTier,
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

export type AlertSeverity = 'orange' | 'yellow' | 'blue';

export const alerts = [
  {
    id: 'alt-01',
    what: 'Crecimiento acelerado de conversación negativa sobre transporte público',
    who: 'Sector transportista de Guerrero + prensa regional',
    risk: 'Alto · impacto reputacional en 24h',
    time: 'Hace 15 min',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-transporte',
  },
  {
    id: 'alt-02',
    what: 'Video crítico comienza a tomar alcance en redes',
    who: 'Creador @guerrero_hoy (340k seguidores en X)',
    risk: 'Medio · viralización probable en 6h',
    time: 'Hace 42 min',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-03',
    what: 'Competidor anunció evento masivo en tu bastión',
    who: 'Aspirante rival · zona de Chilpancingo',
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
    id: 'rec-transporte',
    title: 'Neutralizar narrativa negativa sobre transporte público',
    category: 'crisis',
    urgency: 'alta',
    summary: 'La conversación negativa sobre transporte creció 38% en 1 hora. Sector transportista está movilizado y la prensa regional está amplificando. Ventana de acción: próximas 6 horas.',
    actions: [
      'Publicar posicionamiento oficial en X y Facebook antes de las 12:00 PM',
      'Activar 3 voceros técnicos con perfiles de movilidad urbana para entrevistas radio',
      'Coordinar reunión privada con líderes de concesionarios en próximas 48h',
      'Preparar carrusel visual con las 5 acciones concretas del plan',
    ],
    linkedAlertId: 'alt-01',
    timeframe: 'Próximas 6 horas',
  },
  {
    id: 'rec-video-critico',
    title: 'Contención de video crítico viralizado',
    category: 'crisis',
    urgency: 'alta',
    summary: 'Video de @guerrero_hoy (340k seguidores) acumula 12,500 views en 40 min. Réplicas comenzando en TikTok. Evitar respuesta directa que amplifique alcance.',
    actions: [
      'NO responder directamente al video (evitar Streisand effect)',
      'Producir contenido propio en el mismo formato para saturar el algoritmo',
      'Activar red de creadores aliados con contenido paralelo',
      'Monitorear réplicas cada 30 minutos y reportar patrones',
    ],
    linkedAlertId: 'alt-02',
    timeframe: 'Próximas 4 horas',
  },
  {
    id: 'rec-competencia',
    title: 'Contra-agenda por evento del rival en Chilpancingo',
    category: 'competencia',
    urgency: 'media',
    summary: 'Aspirante rival convoca ~5,000 asistentes mañana 6:00 PM en tu bastión. Necesitamos ocupar el ciclo mediático del día.',
    actions: [
      'Agendar recorrido territorial paralelo en 3 colonias del mismo municipio',
      'Anunciar una propuesta concreta con embargo periodístico para las 5:00 PM',
      'Convocar a medios locales con anticipación',
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
      'Preparar timeline visual del cumplimiento de reportes ante autoridad electoral',
    ],
    linkedAlertId: 'alt-04',
    timeframe: 'Próximas 48 horas',
  },
  {
    id: 'rec-prensa-nacional',
    title: 'Aprovechar cobertura neutral de El Universal',
    category: 'narrativa',
    urgency: 'baja',
    summary: 'El Universal publicó reportaje biográfico con tono neutral. Oportunidad para reforzar mensaje de trayectoria en la conversación pública.',
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
    title: 'Respuesta a ataque coordinado #FueraDamian',
    category: 'crisis',
    urgency: 'alta',
    summary: 'Se detectó red de 89 cuentas con patrón de bot. El hashtag creció +120%. No es orgánico y podemos denunciarlo con evidencia.',
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
    id: 'rec-agenda-mujeres',
    title: 'Consolidar agenda de gabinete paritario',
    category: 'contenido',
    urgency: 'media',
    summary: 'El anuncio de gabinete paritario tuvo cobertura positiva en El Universal. Momentum para amplificar y consolidar posición.',
    actions: [
      'Serie de 5 videos con perfiles preliminares de mujeres del gabinete',
      'Alianzas con colectivos feministas para respaldo público',
      'Entrevistas exclusivas con 2 revistas de opinión',
    ],
    timeframe: 'Próximas 2 semanas',
  },
  {
    id: 'rec-operativa-territorio',
    title: 'Densificar presencia territorial en La Montaña',
    category: 'operacion',
    urgency: 'baja',
    summary: 'La Montaña muestra el sentimiento positivo más alto (+5.2 pts) pero también menor volumen de menciones. Oportunidad para consolidar.',
    actions: [
      'Programar 3 recorridos comunitarios en el próximo mes',
      'Producir contenido en lenguas indígenas para amplificar en redes',
      'Coordinar con líderes tradicionales identificados',
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
  { title: 'Noticieros Televisa reporta el plan integral de seguridad estatal de Damián', source: 'Noticieros Televisa', tier: 'nacional-tv' as MediaTier, time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. La candidata detalló propuestas específicas para reducir violencia en zonas críticas del estado.' },
  { title: 'TV Azteca abre noticiario con visita de Damián a la Montaña', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv' as MediaTier, time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota de dos minutos con recorrido por comunidades indígenas y encuentros con líderes tradicionales.' },
  { title: 'Reforma cuestiona financiamiento de campaña y compra de spots', source: 'Reforma', tier: 'nacional-print' as MediaTier, time: '07:50 AM', sentiment: 'NEGATIVA', summary: 'Investigación cuestiona el origen de recursos para spots publicitarios recientes en televisión abierta.' },
  { title: 'El Universal: Damián anuncia gabinete técnico paritario', source: 'El Universal', tier: 'nacional-print' as MediaTier, time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Presentó lista preliminar con 50% mujeres y perfiles académicos destacados para las principales carteras.' },
  { title: 'Milenio: Damián lidera en encuestas con 4 puntos sobre competencia', source: 'Milenio', tier: 'nacional-print' as MediaTier, time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de intención de voto de la casa encuestadora la coloca como favorita del proceso.' },
  { title: 'Cámara de Comercio de Guerrero respalda propuestas económicas', source: 'El Sur de Guerrero', tier: 'regional' as MediaTier, time: '08:40 AM', sentiment: 'NEUTRAL', summary: 'Sector empresarial expresa interés en el plan de incentivos fiscales para PYMEs presentado en foro.' },
  { title: 'Sector transportista rechaza modernización tarifaria propuesta', source: 'Diario 21', tier: 'regional' as MediaTier, time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Concesionarios de rutas urbanas rechazan propuestas de Damián en foro con empresarios.' },
  { title: 'Movimiento juvenil convoca a marcha por transparencia', source: 'Portal Ciudadano', tier: 'digital-medio' as MediaTier, time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Colectivos piden a todos los candidatos publicar declaraciones patrimoniales completas antes del proceso.' },
  { title: 'Influencer local viraliza video crítico sobre Damián', source: '@guerrero_hoy · X', tier: 'influencer' as MediaTier, time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 340k seguidores acumula 25k reproducciones en cuatro horas.' },
];

export const allAlerts = [
  {
    id: 'alt-01',
    what: 'Crecimiento acelerado de conversación negativa sobre transporte público (+38% en la última hora, 2,340 menciones)',
    who: 'Sector transportista de Guerrero + prensa regional (Diario 21, El Sur)',
    risk: 'Alto · impacto reputacional en 24h · puede escalar a nacional',
    zone: 'Guerrero',
    time: 'Hace 15 min',
    severity: 'orange' as AlertSeverity,
    recommendationId: 'rec-transporte',
  },
  {
    id: 'alt-02',
    what: 'Video crítico toma alcance en redes: 12,500 views en 40 minutos',
    who: 'Creador @guerrero_hoy (340k seguidores) + réplicas en TikTok',
    risk: 'Medio · viralización probable en 6h',
    zone: 'Digital',
    time: 'Hace 42 min',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-video-critico',
  },
  {
    id: 'alt-03',
    what: 'Competidor anunció evento masivo (~5,000 asistentes) en tu bastión',
    who: 'Aspirante rival · Chilpancingo · mañana 6:00 PM',
    risk: 'Bajo · disputa de agenda mediática del día',
    zone: 'Chilpancingo',
    time: 'Hace 1 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-competencia',
  },
  {
    id: 'alt-04',
    what: 'Incremento sostenido de menciones negativas sobre financiamiento de campaña',
    who: 'Cuentas críticas coordinadas en X + reporte de Reforma',
    risk: 'Medio · afecta narrativa de transparencia',
    zone: 'Nacional',
    time: 'Hace 2 h',
    severity: 'yellow' as AlertSeverity,
    recommendationId: 'rec-financiamiento',
  },
  {
    id: 'alt-05',
    what: 'El Universal publica investigación sobre trayectoria política (tono neutral)',
    who: 'El Universal · sección Nación',
    risk: 'Bajo · oportunidad de reforzar contexto biográfico',
    zone: 'Nacional',
    time: 'Hace 3 h',
    severity: 'blue' as AlertSeverity,
    recommendationId: 'rec-prensa-nacional',
  },
  {
    id: 'alt-06',
    what: 'Campaña coordinada de desinformación con hashtag #FueraDamian (+120%)',
    who: '89 cuentas identificadas en X con patrón de bot · origen Guerrero/CDMX',
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
  level: 'estatal' as 'estatal' | 'municipal',
  area: 'Guerrero',
  breakdownLabel: 'municipios',
};

export const sentimentByArea = [
  { area: 'Chilpancingo',   positive: 62, neutral: 22, negative: 16, mentions: 8420, trend: '+4.1 pts' },
  { area: 'Acapulco',       positive: 54, neutral: 24, negative: 22, mentions: 12580, trend: '+2.0 pts' },
  { area: 'Iguala',         positive: 58, neutral: 25, negative: 17, mentions: 3210, trend: '+1.5 pts' },
  { area: 'Zihuatanejo',    positive: 61, neutral: 21, negative: 18, mentions: 2440, trend: '+3.2 pts' },
  { area: 'Taxco',          positive: 48, neutral: 28, negative: 24, mentions: 1650, trend: '-0.8 pts' },
  { area: 'Tlapa',          positive: 51, neutral: 27, negative: 22, mentions: 1240, trend: '+1.1 pts' },
  { area: 'Costa Chica',    positive: 44, neutral: 31, negative: 25, mentions: 980,  trend: '-1.4 pts' },
  { area: 'La Montaña',     positive: 66, neutral: 20, negative: 14, mentions: 810,  trend: '+5.2 pts' },
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
