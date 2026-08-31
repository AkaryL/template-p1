import type { MediaTier, AlertSeverity, RecommendationCategory, RecommendationUrgency } from './mockData';

export type Candidate = {
  name: string;
  role: string;
  verified: boolean;
  coalicion: string;
  eleccion: string;
  diasParaEleccion: number;
  photoInitials: string;
  photoUrl: string;
};

export type NewsItem = {
  title: string;
  source: string;
  tier: MediaTier;
  time: string;
  sentiment: 'POSITIVA' | 'NEGATIVA' | 'NEUTRAL';
};

export type NewsItemFull = NewsItem & { summary: string };

export type TopicItem = {
  name: string;
  mentions: number;
  sentiment: number;
  positive: boolean;
};

export type WordCloudItem = { text: string; value: number; color: string };

export type AlertItem = {
  id: string;
  what: string;
  who: string;
  risk: string;
  time: string;
  severity: AlertSeverity;
  recommendationId: string;
};

export type AlertItemFull = AlertItem & { zone: string };

export type Recommendation = {
  id: string;
  title: string;
  category: RecommendationCategory;
  urgency: RecommendationUrgency;
  summary: string;
  actions: string[];
  linkedAlertId?: string;
  timeframe: string;
};

export type Mention = {
  user: string;
  platform: string;
  text: string;
  sentiment: string;
  time: string;
  engagement: number;
};

export type AreaSentiment = {
  area: string;
  positive: number;
  neutral: number;
  negative: number;
  mentions: number;
  trend: string;
};

export type TopicSentiment = {
  topic: string;
  positive: number;
  neutral: number;
  negative: number;
};

export type Action = { title: string; time: string };

export type CandidateScope = {
  level: 'estatal' | 'municipal';
  area: string;
  breakdownLabel: string;
};

export type StateFocusMap = Record<string, number>;

export type Profile = {
  slug: string;
  candidate: Candidate;
  candidateScope: CandidateScope;
  stateFocus: StateFocusMap;
  topNews: NewsItem[];
  allNews: NewsItemFull[];
  topics: TopicItem[];
  wordCloud: WordCloudItem[];
  alerts: AlertItem[];
  allAlerts: readonly AlertItemFull[];
  recommendations: Recommendation[];
  suggestedActions: Action[];
  recentMentions: Mention[];
  sentimentByArea: AreaSentiment[];
  sentimentByTopic: TopicSentiment[];
};

// ═══════════════════════════════════════════════════════════════════
// ESTHELA DAMIÁN PERALTA — Gubernatura Guerrero 2027
// ═══════════════════════════════════════════════════════════════════
const esthela: Profile = {
  slug: 'esthela',
  candidate: {
    name: 'Esthela Damián Peralta',
    role: 'Candidata a la Gubernatura',
    verified: true,
    coalicion: 'Fuerza por Guerrero',
    eleccion: 'Gubernatura 2027',
    diasParaEleccion: 87,
    photoInitials: 'ED',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Foto_de_Perfil_Esthela_Dami%C3%A1n_%28cropped%29.jpg/250px-Foto_de_Perfil_Esthela_Dami%C3%A1n_%28cropped%29.jpg',
  },
  candidateScope: {
    level: 'estatal',
    area: 'Guerrero',
    breakdownLabel: 'municipios',
  },
  stateFocus: {
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
  },
  topNews: [
    { title: 'Televisa reporta plan de seguridad estatal de Esthela Damián', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA' },
    { title: 'Reforma cuestiona postura de Damián sobre transporte público', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEGATIVA' },
    { title: 'Empresarios de Guerrero respaldan propuestas económicas', source: 'El Sur de Guerrero', tier: 'regional', time: '08:40 AM', sentiment: 'NEUTRAL' },
  ],
  allNews: [
    { title: 'Noticieros Televisa reporta el plan integral de seguridad estatal de Damián', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. La candidata detalló propuestas específicas para reducir violencia en zonas críticas del estado.' },
    { title: 'TV Azteca abre noticiario con visita de Damián a la Montaña', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota de dos minutos con recorrido por comunidades indígenas y encuentros con líderes tradicionales.' },
    { title: 'Reforma cuestiona financiamiento de campaña y compra de spots', source: 'Reforma', tier: 'nacional-print', time: '07:50 AM', sentiment: 'NEGATIVA', summary: 'Investigación cuestiona el origen de recursos para spots publicitarios recientes en televisión abierta.' },
    { title: 'El Universal: Damián anuncia gabinete técnico paritario', source: 'El Universal', tier: 'nacional-print', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Presentó lista preliminar con 50% mujeres y perfiles académicos destacados para las principales carteras.' },
    { title: 'Milenio: Damián lidera en encuestas con 4 puntos sobre competencia', source: 'Milenio', tier: 'nacional-print', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de intención de voto de la casa encuestadora la coloca como favorita del proceso.' },
    { title: 'Cámara de Comercio de Guerrero respalda propuestas económicas', source: 'El Sur de Guerrero', tier: 'regional', time: '08:40 AM', sentiment: 'NEUTRAL', summary: 'Sector empresarial expresa interés en el plan de incentivos fiscales para PYMEs presentado en foro.' },
    { title: 'Sector transportista rechaza modernización tarifaria propuesta', source: 'Diario 21', tier: 'regional', time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Concesionarios de rutas urbanas rechazan propuestas de Damián en foro con empresarios.' },
    { title: 'Movimiento juvenil convoca a marcha por transparencia', source: 'Portal Ciudadano', tier: 'digital-medio', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Colectivos piden a todos los candidatos publicar declaraciones patrimoniales completas antes del proceso.' },
    { title: 'Influencer local viraliza video crítico sobre Damián', source: '@guerrero_hoy · X', tier: 'influencer', time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 340k seguidores acumula 25k reproducciones en cuatro horas.' },
  ],
  topics: [
    { name: 'Seguridad', mentions: 4230, sentiment: 71, positive: true },
    { name: 'Cercanía con la gente', mentions: 2810, sentiment: 66, positive: true },
    { name: 'Transporte público', mentions: 1920, sentiment: -63, positive: false },
    { name: 'Economía', mentions: 1540, sentiment: 47, positive: true },
    { name: 'Corrupción', mentions: 1210, sentiment: -38, positive: false },
  ],
  wordCloud: [
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
    { text: 'resultados', value: 30, color: '#f97316' },
    { text: 'compromiso', value: 28, color: '#eab308' },
    { text: 'juntos', value: 26, color: '#eab308' },
    { text: 'trabajo', value: 24, color: '#22c55e' },
    { text: 'empleo', value: 22, color: '#3b82f6' },
    { text: 'transparencia', value: 22, color: '#eab308' },
  ],
  alerts: [
    { id: 'alt-01', what: 'Crecimiento acelerado de conversación negativa sobre transporte público', who: 'Sector transportista de Guerrero + prensa regional', risk: 'Alto · impacto reputacional en 24h', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-transporte' },
    { id: 'alt-02', what: 'Video crítico comienza a tomar alcance en redes', who: 'Creador @guerrero_hoy (340k seguidores en X)', risk: 'Medio · viralización probable en 6h', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Competidor anunció evento masivo en tu bastión', who: 'Aspirante rival · zona de Chilpancingo', risk: 'Bajo · disputa de agenda mediática', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-competencia' },
  ],
  allAlerts: [
    { id: 'alt-01', what: 'Crecimiento acelerado de conversación negativa sobre transporte público (+38% en la última hora, 2,340 menciones)', who: 'Sector transportista de Guerrero + prensa regional (Diario 21, El Sur)', risk: 'Alto · impacto reputacional en 24h · puede escalar a nacional', zone: 'Guerrero', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-transporte' },
    { id: 'alt-02', what: 'Video crítico toma alcance en redes: 12,500 views en 40 minutos', who: 'Creador @guerrero_hoy (340k seguidores) + réplicas en TikTok', risk: 'Medio · viralización probable en 6h', zone: 'Digital', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Competidor anunció evento masivo (~5,000 asistentes) en tu bastión', who: 'Aspirante rival · Chilpancingo · mañana 6:00 PM', risk: 'Bajo · disputa de agenda mediática del día', zone: 'Chilpancingo', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-competencia' },
    { id: 'alt-04', what: 'Incremento sostenido de menciones negativas sobre financiamiento de campaña', who: 'Cuentas críticas coordinadas en X + reporte de Reforma', risk: 'Medio · afecta narrativa de transparencia', zone: 'Nacional', time: 'Hace 2 h', severity: 'yellow', recommendationId: 'rec-financiamiento' },
    { id: 'alt-05', what: 'El Universal publica investigación sobre trayectoria política (tono neutral)', who: 'El Universal · sección Nación', risk: 'Bajo · oportunidad de reforzar contexto biográfico', zone: 'Nacional', time: 'Hace 3 h', severity: 'blue', recommendationId: 'rec-prensa-nacional' },
    { id: 'alt-06', what: 'Campaña coordinada de desinformación con hashtag #FueraDamian (+120%)', who: '89 cuentas identificadas en X con patrón de bot · origen Guerrero/CDMX', risk: 'Alto · ataque orgánico simulado, requiere respuesta', zone: 'Digital', time: 'Hace 4 h', severity: 'orange', recommendationId: 'rec-desinformacion' },
  ],
  recommendations: [
    { id: 'rec-transporte', title: 'Neutralizar narrativa negativa sobre transporte público', category: 'crisis', urgency: 'alta', summary: 'La conversación negativa sobre transporte creció 38% en 1 hora. Sector transportista está movilizado y la prensa regional está amplificando. Ventana de acción: próximas 6 horas.', actions: ['Publicar posicionamiento oficial en X y Facebook antes de las 12:00 PM', 'Activar 3 voceros técnicos con perfiles de movilidad urbana para entrevistas radio', 'Coordinar reunión privada con líderes de concesionarios en próximas 48h', 'Preparar carrusel visual con las 5 acciones concretas del plan'], linkedAlertId: 'alt-01', timeframe: 'Próximas 6 horas' },
    { id: 'rec-video-critico', title: 'Contención de video crítico viralizado', category: 'crisis', urgency: 'alta', summary: 'Video de @guerrero_hoy (340k seguidores) acumula 12,500 views en 40 min. Réplicas comenzando en TikTok. Evitar respuesta directa que amplifique alcance.', actions: ['NO responder directamente al video (evitar Streisand effect)', 'Producir contenido propio en el mismo formato para saturar el algoritmo', 'Activar red de creadores aliados con contenido paralelo', 'Monitorear réplicas cada 30 minutos y reportar patrones'], linkedAlertId: 'alt-02', timeframe: 'Próximas 4 horas' },
    { id: 'rec-competencia', title: 'Contra-agenda por evento del rival en Chilpancingo', category: 'competencia', urgency: 'media', summary: 'Aspirante rival convoca ~5,000 asistentes mañana 6:00 PM en tu bastión. Necesitamos ocupar el ciclo mediático del día.', actions: ['Agendar recorrido territorial paralelo en 3 colonias del mismo municipio', 'Anunciar una propuesta concreta con embargo periodístico para las 5:00 PM', 'Convocar a medios locales con anticipación'], linkedAlertId: 'alt-03', timeframe: 'Mañana' },
    { id: 'rec-financiamiento', title: 'Blindar narrativa de transparencia financiera', category: 'narrativa', urgency: 'media', summary: 'Menciones negativas sobre origen de recursos crecen +18%. Reforma publicó pieza cuestionando spots. Necesitamos anticiparnos antes de que escale.', actions: ['Publicar de forma proactiva declaración 3 de 3 completa', 'Contactar a reporteros de fuentes electorales con contexto', 'Preparar timeline visual del cumplimiento de reportes ante autoridad electoral'], linkedAlertId: 'alt-04', timeframe: 'Próximas 48 horas' },
    { id: 'rec-prensa-nacional', title: 'Aprovechar cobertura neutral de El Universal', category: 'narrativa', urgency: 'baja', summary: 'El Universal publicó reportaje biográfico con tono neutral. Oportunidad para reforzar mensaje de trayectoria en la conversación pública.', actions: ['Compartir la nota en redes propias con quote seleccionada', 'Enviar agradecimiento privado a la reportera y ofrecer entrevista de seguimiento', 'Producir 3 piezas de contenido derivadas (video, carrusel, hilo)'], linkedAlertId: 'alt-05', timeframe: 'Esta semana' },
    { id: 'rec-desinformacion', title: 'Respuesta a ataque coordinado #FueraDamian', category: 'crisis', urgency: 'alta', summary: 'Se detectó red de 89 cuentas con patrón de bot. El hashtag creció +120%. No es orgánico y podemos denunciarlo con evidencia.', actions: ['Compilar evidencia técnica de las 89 cuentas (fecha creación, patrón horario)', 'Reportar a plataformas (X, Meta) el ataque coordinado', 'Publicar comunicado con datos abiertos denunciando la operación', 'Coordinar respuesta orgánica con base propia (sin hashtag oficial de respuesta)'], linkedAlertId: 'alt-06', timeframe: 'Próximas 24 horas' },
    { id: 'rec-agenda-mujeres', title: 'Consolidar agenda de gabinete paritario', category: 'contenido', urgency: 'media', summary: 'El anuncio de gabinete paritario tuvo cobertura positiva en El Universal. Momentum para amplificar y consolidar posición.', actions: ['Serie de 5 videos con perfiles preliminares de mujeres del gabinete', 'Alianzas con colectivos feministas para respaldo público', 'Entrevistas exclusivas con 2 revistas de opinión'], timeframe: 'Próximas 2 semanas' },
    { id: 'rec-operativa-territorio', title: 'Densificar presencia territorial en La Montaña', category: 'operacion', urgency: 'baja', summary: 'La Montaña muestra el sentimiento positivo más alto (+5.2 pts) pero también menor volumen de menciones. Oportunidad para consolidar.', actions: ['Programar 3 recorridos comunitarios en el próximo mes', 'Producir contenido en lenguas indígenas para amplificar en redes', 'Coordinar con líderes tradicionales identificados'], timeframe: 'Próximo mes' },
  ],
  suggestedActions: [
    { title: 'Publicar postura sobre transporte', time: 'Hoy · 12:00 PM' },
    { title: 'Activar voceros técnicos', time: 'Hoy · 02:00 PM' },
    { title: 'Contenido positivo en redes', time: 'Hoy · 04:00 PM' },
    { title: 'Monitoreo y ajuste de narrativa', time: 'Continuo' },
  ],
  recentMentions: [
    { user: '@carlosMX_', platform: 'x', text: 'Excelente propuesta de @EsthelaDamian sobre seguridad en Guerrero. Es lo que necesitamos.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
    { user: 'Jimena Flores', platform: 'facebook', text: 'No confío en las promesas de Damián sobre transporte. Ya lo prometió antes.', sentiment: 'negativo', time: 'Hace 8 min', engagement: 89 },
    { user: '@guerrero_hoy', platform: 'x', text: 'Damián presenta plan económico con propuestas concretas para PYMEs.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
    { user: '@analista_pol', platform: 'x', text: 'La estrategia de campaña de Esthela Damián muestra madurez política.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
    { user: 'Marcos Herrera', platform: 'facebook', text: 'Videos virales muestran incongruencias en el discurso de Damián.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 1230 },
    { user: '@laura_periodista', platform: 'instagram', text: 'Cobertura del evento de Damián en Acapulco: gran asistencia y buen recibimiento.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 892 },
    { user: '@datos_gro', platform: 'x', text: 'Encuesta muestra a Damián 4 puntos arriba en intención de voto.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
    { user: 'Roberto Vega', platform: 'facebook', text: 'Muchas propuestas, pocos resultados hasta ahora. Veremos si esta vez es diferente.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 78 },
  ],
  sentimentByArea: [
    { area: 'Chilpancingo',   positive: 62, neutral: 22, negative: 16, mentions: 8420,  trend: '+4.1 pts' },
    { area: 'Acapulco',       positive: 54, neutral: 24, negative: 22, mentions: 12580, trend: '+2.0 pts' },
    { area: 'Iguala',         positive: 58, neutral: 25, negative: 17, mentions: 3210,  trend: '+1.5 pts' },
    { area: 'Zihuatanejo',    positive: 61, neutral: 21, negative: 18, mentions: 2440,  trend: '+3.2 pts' },
    { area: 'Taxco',          positive: 48, neutral: 28, negative: 24, mentions: 1650,  trend: '-0.8 pts' },
    { area: 'Tlapa',          positive: 51, neutral: 27, negative: 22, mentions: 1240,  trend: '+1.1 pts' },
    { area: 'Costa Chica',    positive: 44, neutral: 31, negative: 25, mentions: 980,   trend: '-1.4 pts' },
    { area: 'La Montaña',     positive: 66, neutral: 20, negative: 14, mentions: 810,   trend: '+5.2 pts' },
  ],
  sentimentByTopic: [
    { topic: 'Seguridad', positive: 71, neutral: 15, negative: 14 },
    { topic: 'Economía', positive: 60, neutral: 23, negative: 17 },
    { topic: 'Educación', positive: 68, neutral: 20, negative: 12 },
    { topic: 'Transporte', positive: 22, neutral: 15, negative: 63 },
    { topic: 'Salud', positive: 55, neutral: 25, negative: 20 },
    { topic: 'Corrupción', positive: 32, neutral: 30, negative: 38 },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// JOSÉ EDUARDO TORRES — Alcaldía Guadalajara 2027
// ═══════════════════════════════════════════════════════════════════
const torres: Profile = {
  slug: 'torres',
  candidate: {
    name: 'José Eduardo Torres',
    role: 'Aspirante a la Alcaldía de Guadalajara',
    verified: true,
    coalicion: 'Equipo GDL',
    eleccion: 'Municipal 2027',
    diasParaEleccion: 124,
    photoInitials: 'JE',
    photoUrl: '/candidates/jose-eduardo-torres.jpg',
  },
  candidateScope: {
    level: 'municipal',
    area: 'Guadalajara',
    breakdownLabel: 'colonias',
  },
  stateFocus: {
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
  },
  topNews: [
    { title: 'Noticieros Televisa reporta plan de movilidad de Torres para Guadalajara', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA' },
    { title: 'Reforma cuestiona a Torres por postura sobre inseguridad en la ZMG', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEGATIVA' },
    { title: 'Cámara de Comercio de Jalisco recibe a Torres en foro empresarial', source: 'NTR Guadalajara', tier: 'regional', time: '08:40 AM', sentiment: 'NEUTRAL' },
  ],
  allNews: [
    { title: 'Noticieros Televisa reporta el plan integral de movilidad de Torres para Guadalajara', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. El aspirante detalló propuestas específicas para ciclovías, transporte público y rutas alimentadoras al Mi Macro.' },
    { title: 'TV Azteca abre noticiario con recorrido de Torres por Cerro del Cuatro', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota de dos minutos con recorrido en tres colonias y encuentros con líderes vecinales de la zona.' },
    { title: 'Reforma cuestiona financiamiento de campaña y compra de spots digitales', source: 'Reforma', tier: 'nacional-print', time: '07:50 AM', sentiment: 'NEGATIVA', summary: 'Investigación cuestiona el origen de recursos para pauta digital y spots publicitarios recientes.' },
    { title: 'El Universal: Torres anuncia gabinete técnico y paritario si gana la alcaldía', source: 'El Universal', tier: 'nacional-print', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Adelantó perfiles académicos y con experiencia municipal para las principales carteras.' },
    { title: 'Milenio: Torres lidera preferencia entre aspirantes de Guadalajara', source: 'Milenio', tier: 'nacional-print', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Encuesta interna lo coloca 3 puntos arriba con 34% de intención de voto en la ZMG.' },
    { title: 'Cámara de Comercio de Jalisco recibe a Torres en foro empresarial', source: 'NTR Guadalajara', tier: 'regional', time: '08:40 AM', sentiment: 'NEUTRAL', summary: 'Presentó su visión para atraer inversión al centro de la ciudad y detonar el corredor de Chapultepec.' },
    { title: 'Cuestionan a Torres por postura sobre inseguridad en la ZMG', source: 'El Informador', tier: 'regional', time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Colectivos ciudadanos rechazan que se minimicen los índices delictivos en Guadalajara y Zapopan.' },
    { title: 'Jóvenes convocan marcha por transparencia rumbo al 2027', source: 'UdeG Radio', tier: 'digital-medio', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Piden a todos los aspirantes publicar declaraciones 3 de 3 completas antes del proceso.' },
    { title: 'Influencer tapatío viraliza video crítico sobre Torres', source: '@gdl_noticias · X', tier: 'influencer', time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 340k seguidores acumula 25k reproducciones en cuatro horas.' },
  ],
  topics: [
    { name: 'Movilidad urbana', mentions: 4230, sentiment: 68, positive: true },
    { name: 'Seguridad ZMG', mentions: 3480, sentiment: -42, positive: false },
    { name: 'Cercanía con vecinos', mentions: 2810, sentiment: 66, positive: true },
    { name: 'Corrupción', mentions: 1920, sentiment: -55, positive: false },
    { name: 'Empleo y economía', mentions: 1540, sentiment: 47, positive: true },
  ],
  wordCloud: [
    { text: 'movilidad', value: 100, color: '#22c55e' },
    { text: 'seguridad', value: 88, color: '#ef4444' },
    { text: 'guadalajara', value: 78, color: '#a855f7' },
    { text: 'propuestas', value: 62, color: '#22c55e' },
    { text: 'transporte', value: 55, color: '#f97316' },
    { text: 'vecinos', value: 50, color: '#eab308' },
    { text: 'ciudadanos', value: 48, color: '#eab308' },
    { text: 'trabajo', value: 44, color: '#22c55e' },
    { text: 'centro', value: 40, color: '#3b82f6' },
    { text: 'colonias', value: 38, color: '#a855f7' },
    { text: 'obras', value: 34, color: '#22c55e' },
    { text: 'ciclovías', value: 30, color: '#3b82f6' },
    { text: 'empleo', value: 28, color: '#eab308' },
    { text: 'jóvenes', value: 26, color: '#22c55e' },
    { text: 'cambio', value: 24, color: '#3b82f6' },
    { text: 'oposición', value: 20, color: '#f97316' },
  ],
  alerts: [
    { id: 'alt-01', what: 'Crecimiento acelerado de conversación negativa sobre inseguridad en la ZMG', who: 'Colectivos ciudadanos de Guadalajara + prensa regional', risk: 'Alto · impacto reputacional en 24h', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-seguridad-zmg' },
    { id: 'alt-02', what: 'Video crítico sobre Torres toma alcance en TikTok', who: 'Creadores locales de Guadalajara · 12,500 views en 40 min', risk: 'Medio · viralización probable en 6h', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Aspirante rival anunció recorrido masivo en Zapopan', who: 'Competidor de la ZMG · mañana 6:00 PM en Zapopan', risk: 'Bajo · disputa de agenda mediática', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-competencia' },
  ],
  allAlerts: [
    { id: 'alt-01', what: 'Crecimiento acelerado de conversación negativa sobre inseguridad en la ZMG (+38% en la última hora, 2,340 menciones)', who: 'Colectivos ciudadanos de Guadalajara + prensa regional (El Informador, NTR)', risk: 'Alto · impacto reputacional en 24h · puede escalar a nacional', zone: 'Zona Metropolitana', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-seguridad-zmg' },
    { id: 'alt-02', what: 'Video crítico toma alcance en TikTok: 12,500 views en 40 minutos', who: 'Creadores locales de Guadalajara + réplicas en TikTok', risk: 'Medio · viralización probable en 6h', zone: 'Guadalajara', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Aspirante rival anunció recorrido masivo (~5,000 asistentes) en Zapopan', who: 'Competidor de la ZMG · Zapopan · mañana 6:00 PM', risk: 'Bajo · disputa de agenda mediática del día', zone: 'Zapopan', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-competencia' },
    { id: 'alt-04', what: 'Incremento sostenido de menciones negativas sobre financiamiento de campaña', who: 'Cuentas críticas coordinadas en X + reporte de Reforma', risk: 'Medio · afecta narrativa de transparencia ante IEPC-Jalisco', zone: 'Digital', time: 'Hace 2 h', severity: 'yellow', recommendationId: 'rec-financiamiento' },
    { id: 'alt-05', what: 'El Informador publica reportaje sobre trayectoria y equipo cercano (tono neutral)', who: 'El Informador · sección Jalisco', risk: 'Bajo · oportunidad de reforzar perfil biográfico', zone: 'Jalisco', time: 'Hace 3 h', severity: 'blue', recommendationId: 'rec-prensa-nacional' },
    { id: 'alt-06', what: 'Campaña coordinada de desinformación con hashtag #NoAlAspiranteTorres (+120%)', who: '89 cuentas identificadas en X con patrón de bot', risk: 'Alto · ataque orgánico simulado, requiere respuesta', zone: 'Digital', time: 'Hace 4 h', severity: 'orange', recommendationId: 'rec-desinformacion' },
  ],
  recommendations: [
    { id: 'rec-seguridad-zmg', title: 'Neutralizar narrativa negativa sobre inseguridad en la ZMG', category: 'crisis', urgency: 'alta', summary: 'La conversación negativa sobre seguridad en Guadalajara y Zapopan creció 38% en 1 hora. Colectivos ciudadanos amplifican en prensa regional. Ventana de acción: próximas 6 horas.', actions: ['Publicar posicionamiento oficial en X, Facebook e Instagram antes de las 12:00 PM', 'Activar 3 voceros técnicos con perfil en seguridad municipal para entrevistas radio', 'Coordinar reunión privada con colectivos ciudadanos en próximas 48h', 'Preparar carrusel visual con las 5 acciones concretas del plan para la ZMG'], linkedAlertId: 'alt-01', timeframe: 'Próximas 6 horas' },
    { id: 'rec-video-critico', title: 'Contención de video crítico viralizado en TikTok', category: 'crisis', urgency: 'alta', summary: 'Video crítico sobre Torres acumula 12,500 views en 40 min con creadores locales de Guadalajara. Réplicas comenzando en TikTok. Evitar respuesta directa que amplifique alcance.', actions: ['NO responder directamente al video (evitar Streisand effect)', 'Producir contenido propio en el mismo formato para saturar el algoritmo', 'Activar red de creadores tapatíos aliados con contenido paralelo', 'Monitorear réplicas cada 30 minutos y reportar patrones'], linkedAlertId: 'alt-02', timeframe: 'Próximas 4 horas' },
    { id: 'rec-competencia', title: 'Contra-agenda por recorrido del rival en Zapopan', category: 'competencia', urgency: 'media', summary: 'Aspirante rival convoca recorrido masivo mañana 6:00 PM en Zapopan. Necesitamos ocupar el ciclo mediático del día en la ZMG.', actions: ['Agendar recorrido territorial paralelo en 3 colonias de Guadalajara', 'Anunciar una propuesta concreta con embargo periodístico para las 5:00 PM', 'Convocar a medios locales (Milenio Jalisco, El Informador, NTR) con anticipación'], linkedAlertId: 'alt-03', timeframe: 'Mañana' },
    { id: 'rec-financiamiento', title: 'Blindar narrativa de transparencia financiera', category: 'narrativa', urgency: 'media', summary: 'Menciones negativas sobre origen de recursos crecen +18%. Reforma publicó pieza cuestionando spots. Necesitamos anticiparnos antes de que escale.', actions: ['Publicar de forma proactiva declaración 3 de 3 completa', 'Contactar a reporteros de fuentes electorales con contexto', 'Preparar timeline visual del cumplimiento de reportes ante el IEPC-Jalisco'], linkedAlertId: 'alt-04', timeframe: 'Próximas 48 horas' },
    { id: 'rec-prensa-nacional', title: 'Aprovechar cobertura neutral de El Informador', category: 'narrativa', urgency: 'baja', summary: 'El Informador publicó reportaje sobre trayectoria y equipo cercano con tono neutral. Oportunidad para reforzar mensaje de perfil en la conversación pública.', actions: ['Compartir la nota en redes propias con quote seleccionada', 'Enviar agradecimiento privado a la reportera y ofrecer entrevista de seguimiento', 'Producir 3 piezas de contenido derivadas (video, carrusel, hilo)'], linkedAlertId: 'alt-05', timeframe: 'Esta semana' },
    { id: 'rec-desinformacion', title: 'Respuesta a ataque coordinado #NoAlAspiranteTorres', category: 'crisis', urgency: 'alta', summary: 'Se detectó red de 89 cuentas con patrón de bot en X. El hashtag creció +120%. No es orgánico y podemos denunciarlo con evidencia.', actions: ['Compilar evidencia técnica de las 89 cuentas (fecha creación, patrón horario)', 'Reportar a plataformas (X, Meta) el ataque coordinado', 'Publicar comunicado con datos abiertos denunciando la operación', 'Coordinar respuesta orgánica con base propia (sin hashtag oficial de respuesta)'], linkedAlertId: 'alt-06', timeframe: 'Próximas 24 horas' },
    { id: 'rec-agenda-movilidad', title: 'Consolidar agenda de movilidad urbana', category: 'contenido', urgency: 'media', summary: 'El anuncio del plan integral de movilidad tuvo cobertura positiva en Televisa y Milenio Jalisco. Momentum para amplificar y consolidar posición como líder del tema.', actions: ['Serie de 5 videos explicando ciclovías, transporte público y rutas alimentadoras', 'Alianzas con colectivos de movilidad sustentable para respaldo público', 'Entrevistas exclusivas con 2 medios especializados en urbanismo'], timeframe: 'Próximas 2 semanas' },
    { id: 'rec-operativa-territorio', title: 'Densificar presencia territorial en la ZMG', category: 'operacion', urgency: 'baja', summary: 'La zona centro de Guadalajara muestra el sentimiento positivo más alto pero también menor volumen de menciones en colonias periféricas. Oportunidad para consolidar.', actions: ['Programar 3 recorridos comunitarios en el próximo mes (Cerro del Cuatro, Oblatos, Miravalle)', 'Producir contenido enfocado en vecinos de colonias populares', 'Coordinar con líderes vecinales identificados'], timeframe: 'Próximo mes' },
  ],
  suggestedActions: [
    { title: 'Publicar postura sobre seguridad ZMG', time: 'Hoy · 12:00 PM' },
    { title: 'Activar red de voceros en TikTok', time: 'Hoy · 02:00 PM' },
    { title: 'Contenido positivo de movilidad', time: 'Hoy · 04:00 PM' },
    { title: 'Monitoreo de menciones críticas', time: 'Continuo' },
  ],
  recentMentions: [
    { user: '@tapatio_gdl', platform: 'x', text: 'Buena propuesta de @joseeduardo_tq sobre movilidad urbana en GDL. Ojalá se concrete.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
    { user: 'Marisol Ríos', platform: 'facebook', text: 'No confío en las promesas de José Eduardo Torres sobre seguridad. Falta ver acciones.', sentiment: 'negativo', time: 'Hace 8 min', engagement: 89 },
    { user: '@gdl_noticias', platform: 'x', text: 'Torres se reúne con empresarios de la Cámara de Comercio en Guadalajara.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
    { user: '@analista_jalisco', platform: 'x', text: 'La estrategia digital de José Eduardo Torres está sumando seguidores rápido.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
    { user: 'Adrián Camarena', platform: 'facebook', text: 'Videos en TikTok muestran contradicciones en el discurso de Torres.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 1230 },
    { user: '@lorena_reportera', platform: 'instagram', text: 'Cobertura del recorrido de José Eduardo Torres en el Centro Histórico: buena convocatoria.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 892 },
    { user: '@encuestas_mx', platform: 'x', text: 'Encuesta local ubica a Torres 3 puntos arriba entre aspirantes a la alcaldía de GDL.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
    { user: 'Ricardo Ochoa', platform: 'facebook', text: 'Muchas propuestas, pocos resultados hasta ahora. A ver si esta vez sí.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 78 },
  ],
  sentimentByArea: [
    { area: 'Centro Histórico',   positive: 68, neutral: 20, negative: 12, mentions: 5420, trend: '+4.1 pts' },
    { area: 'Colonia Americana',  positive: 71, neutral: 19, negative: 10, mentions: 4180, trend: '+3.6 pts' },
    { area: 'Providencia',        positive: 65, neutral: 22, negative: 13, mentions: 3210, trend: '+2.1 pts' },
    { area: 'Chapultepec',        positive: 61, neutral: 24, negative: 15, mentions: 2440, trend: '+1.8 pts' },
    { area: 'Oblatos',            positive: 48, neutral: 28, negative: 24, mentions: 1650, trend: '-0.8 pts' },
    { area: 'Cerro del Cuatro',   positive: 54, neutral: 26, negative: 20, mentions: 1240, trend: '+1.1 pts' },
    { area: 'Miravalle',          positive: 44, neutral: 31, negative: 25, mentions: 980,  trend: '-1.4 pts' },
    { area: 'Huentitán',          positive: 57, neutral: 25, negative: 18, mentions: 810,  trend: '+2.2 pts' },
  ],
  sentimentByTopic: [
    { topic: 'Movilidad', positive: 68, neutral: 18, negative: 14 },
    { topic: 'Empleo', positive: 60, neutral: 23, negative: 17 },
    { topic: 'Educación', positive: 62, neutral: 22, negative: 16 },
    { topic: 'Seguridad', positive: 28, neutral: 30, negative: 42 },
    { topic: 'Corrupción', positive: 24, neutral: 21, negative: 55 },
    { topic: 'Servicios públicos', positive: 45, neutral: 30, negative: 25 },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// ANTONIO ARÁMBULA — Secretario General de Gobierno · Aguascalientes
// ═══════════════════════════════════════════════════════════════════
const arambula: Profile = {
  slug: 'arambula',
  candidate: {
    name: 'Antonio Arámbula',
    role: 'Secretario General de Gobierno · Aguascalientes',
    verified: true,
    coalicion: 'Coalición por Aguascalientes',
    eleccion: 'Gubernatura 2028',
    diasParaEleccion: 458,
    photoInitials: 'AA',
    photoUrl: '/candidates/antonio-arambula.jpg',
  },
  candidateScope: {
    level: 'estatal',
    area: 'Aguascalientes',
    breakdownLabel: 'municipios',
  },
  stateFocus: {
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
  },
  topNews: [
    { title: 'Noticieros Televisa cubre agenda de gobierno de Arámbula en Aguascalientes', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA' },
    { title: 'Reforma analiza posicionamiento político de Arámbula rumbo al 2028', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL' },
    { title: 'Empresarios de Aguascalientes respaldan agenda de obras públicas', source: 'Heraldo de Aguascalientes', tier: 'regional', time: '08:40 AM', sentiment: 'POSITIVA' },
  ],
  allNews: [
    { title: 'Noticieros Televisa cubre agenda de gobierno de Arámbula en Aguascalientes', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. El Secretario detalló avances de la agenda estatal y proyectos de obras públicas para 2026.' },
    { title: 'TV Azteca reporta inversión en infraestructura del gobierno de Aguascalientes', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota de dos minutos con recorrido por obras estratégicas y anuncio de nuevas licitaciones para el segundo semestre.' },
    { title: 'Reforma analiza posicionamiento político de Arámbula rumbo al 2028', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL', summary: 'Análisis de trayectoria y perfil político del Secretario General de Gobierno como aspirante natural a la gubernatura.' },
    { title: 'El Universal: Arámbula fortalece agenda de obras en Aguascalientes', source: 'El Universal', tier: 'nacional-print', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Reportaje sobre la ejecución del plan estatal de infraestructura y la coordinación con municipios.' },
    { title: 'Milenio: Arámbula figura entre los perfiles mejor evaluados del estado', source: 'Milenio', tier: 'nacional-print', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de percepción pública lo coloca con alta evaluación entre funcionarios de Aguascalientes.' },
    { title: 'Empresarios de Aguascalientes respaldan agenda de obras públicas', source: 'Heraldo de Aguascalientes', tier: 'regional', time: '08:40 AM', sentiment: 'POSITIVA', summary: 'Cámaras empresariales expresan respaldo al plan de infraestructura y al esquema de licitaciones abiertas.' },
    { title: 'Cuestionan proceso de licitación de obra en Jesús María', source: 'La Jornada Aguascalientes', tier: 'regional', time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Colectivos vecinales y prensa local piden mayor transparencia en la asignación de contratos recientes.' },
    { title: 'Jóvenes convocan a foro sobre transparencia rumbo al 2028', source: 'UAA Radio', tier: 'digital-medio', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Universitarios organizan foro para pedir a aspirantes publicar declaraciones patrimoniales y agenda de gobierno.' },
    { title: 'Influencer local viraliza video crítico sobre nombramientos en Secretaría', source: '@ags_critico · X', tier: 'influencer', time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 210k seguidores acumula 18k reproducciones en tres horas cuestionando decisiones recientes.' },
  ],
  topics: [
    { name: 'Obras públicas', mentions: 4230, sentiment: 74, positive: true },
    { name: 'Seguridad estatal', mentions: 3480, sentiment: 58, positive: true },
    { name: 'Cercanía con la gente', mentions: 2810, sentiment: 66, positive: true },
    { name: 'Empleo y economía', mentions: 1920, sentiment: 52, positive: true },
    { name: 'Transparencia', mentions: 1540, sentiment: -34, positive: false },
  ],
  wordCloud: [
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
  ],
  alerts: [
    { id: 'alt-01', what: 'Menciones críticas por licitación de obra pública en Jesús María', who: 'Colectivos vecinales + prensa local (LJA, Heraldo)', risk: 'Medio · afecta narrativa de transparencia', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-obra-jesus-maria' },
    { id: 'alt-02', what: 'Video sobre nombramiento en Secretaría toma alcance en X', who: 'Cuentas de oposición en Aguascalientes', risk: 'Medio · potencial viralización en 6h', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Nota positiva del Heraldo sobre agenda de obras públicas', who: 'Heraldo de Aguascalientes · sección Estado', risk: 'Bajo · oportunidad de amplificar mensaje', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-prensa-nacional' },
  ],
  allAlerts: [
    { id: 'alt-01', what: 'Menciones críticas por licitación de obra pública en Jesús María (+38% en la última hora, 1,240 menciones)', who: 'Colectivos vecinales de Jesús María + prensa local (LJA, Heraldo)', risk: 'Medio · afecta narrativa de transparencia', zone: 'Jesús María', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-obra-jesus-maria' },
    { id: 'alt-02', what: 'Video sobre nombramiento en Secretaría toma alcance: 4,500 views en 40 minutos', who: 'Cuentas de oposición en X (Aguascalientes) + réplicas en TikTok', risk: 'Medio · viralización probable en 6h', zone: 'Digital', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Nota positiva del Heraldo sobre agenda de obras públicas', who: 'Heraldo de Aguascalientes · sección Estado', risk: 'Bajo · oportunidad de amplificar mensaje', zone: 'Aguascalientes', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-prensa-nacional' },
    { id: 'alt-04', what: 'Menciones sobre proceso de nombramientos en Secretaría (+18%)', who: 'Cuentas críticas en X + reporte de LJA', risk: 'Medio · afecta narrativa de meritocracia', zone: 'Digital', time: 'Hace 2 h', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-05', what: 'Reforma publica análisis sobre posicionamiento rumbo al 2028 (tono neutral)', who: 'Reforma · sección Estados', risk: 'Bajo · oportunidad de reforzar perfil político', zone: 'Nacional', time: 'Hace 3 h', severity: 'blue', recommendationId: 'rec-agenda-2028' },
    { id: 'alt-06', what: 'Video en Instagram Reels alcanza 22k views con contenido positivo', who: '@soyantonioarambula · cuenta oficial', risk: 'Bajo · oportunidad de replicar formato exitoso', zone: 'Digital', time: 'Hace 4 h', severity: 'blue', recommendationId: 'rec-instagram' },
  ],
  recommendations: [
    { id: 'rec-obra-jesus-maria', title: 'Aclarar dudas sobre licitación de obra en Jesús María', category: 'crisis', urgency: 'alta', summary: 'Menciones críticas sobre proceso de licitación de obra pública crecen. Colectivos vecinales y prensa local amplifican. Ventana de acción: próximas 6 horas.', actions: ['Publicar bitácora de licitación con documentos y bases técnicas', 'Convocar rueda de prensa con la Secretaría de Obras Públicas', 'Ofrecer entrevistas a Heraldo de Aguascalientes y LJA', 'Preparar carrusel visual con el proceso paso a paso'], linkedAlertId: 'alt-01', timeframe: 'Próximas 6 horas' },
    { id: 'rec-video-critico', title: 'Contención de video crítico en X', category: 'crisis', urgency: 'media', summary: 'Video de oposición sobre nombramiento en Secretaría comienza a tomar alcance. Evitar respuesta directa que amplifique.', actions: ['NO responder directamente al video (evitar Streisand effect)', 'Producir contenido propio en el mismo formato para saturar el algoritmo', 'Activar red de aliados con contenido paralelo sobre el nombramiento', 'Monitorear réplicas cada 30 minutos y reportar patrones'], linkedAlertId: 'alt-02', timeframe: 'Próximas 4 horas' },
    { id: 'rec-prensa-nacional', title: 'Aprovechar cobertura positiva del Heraldo', category: 'narrativa', urgency: 'baja', summary: 'El Heraldo publicó nota positiva sobre agenda de obras públicas. Oportunidad para amplificar y reforzar posicionamiento.', actions: ['Compartir la nota en redes propias con quote seleccionada', 'Enviar agradecimiento privado a la redacción y ofrecer seguimiento', 'Producir 3 piezas de contenido derivadas (video, carrusel, hilo)'], linkedAlertId: 'alt-03', timeframe: 'Esta semana' },
    { id: 'rec-territorio-oriente', title: 'Densificar presencia en el oriente del estado', category: 'operacion', urgency: 'media', summary: 'Los municipios del oriente muestran menor volumen de menciones pero sentimiento positivo alto. Oportunidad para consolidar.', actions: ['Programar recorridos comunitarios en Rincón de Romos y Pabellón', 'Coordinar reuniones con líderes de organizaciones agrícolas', 'Producir contenido específico para audiencia rural'], timeframe: 'Próximas 2 semanas' },
    { id: 'rec-agenda-2028', title: 'Perfilar agenda rumbo al 2028', category: 'narrativa', urgency: 'media', summary: 'Reforma publicó análisis sobre posicionamiento político rumbo al 2028. Momento oportuno para articular narrativa de largo plazo.', actions: ['Preparar posicionamiento sobre 3 temas prioritarios estatales', 'Rueda de prensa mensual para consolidar presencia mediática', 'Alianzas con analistas y líderes de opinión clave'], timeframe: 'Próximo mes' },
    { id: 'rec-instagram', title: 'Fortalecer presencia en Instagram (@soyantonioarambula)', category: 'contenido', urgency: 'baja', summary: 'La cuenta verificada de Instagram muestra buen engagement con contenido de eventos y obras públicas. Oportunidad de sistematizar.', actions: ['Calendario semanal de publicaciones con temáticas fijas', 'Reels dedicados a "Soy Toño" con formato personal', 'Historias diarias con avances de obras'], timeframe: 'Continuo' },
  ],
  suggestedActions: [
    { title: 'Publicar avance de obra pública en Jesús María', time: 'Hoy · 12:00 PM' },
    { title: 'Coordinar entrevista con Heraldo de Aguascalientes', time: 'Hoy · 02:00 PM' },
    { title: 'Contenido en Instagram sobre agenda territorial', time: 'Hoy · 04:00 PM' },
    { title: 'Monitoreo de menciones en X y TikTok', time: 'Continuo' },
  ],
  recentMentions: [
    { user: '@ags_hoy', platform: 'x', text: 'Buena la gestión de @soyantonioarambula sobre las obras públicas en Aguascalientes. Se nota el avance.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
    { user: 'María Fernanda Ruiz', platform: 'facebook', text: 'Cuestionable el proceso de licitación de la obra en Jesús María. Falta transparencia.', sentiment: 'negativo', time: 'Hace 8 min', engagement: 189 },
    { user: '@heraldo_ags', platform: 'x', text: 'Arámbula presenta avances de agenda territorial en el oriente del estado.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
    { user: '@analista_ags', platform: 'x', text: 'El posicionamiento político de Toño Arámbula lo perfila como el candidato natural del 2028.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
    { user: 'Jorge Serna', platform: 'facebook', text: 'Video en X sobre nombramientos recientes en la Secretaría genera dudas.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 830 },
    { user: '@rocio_reportera', platform: 'instagram', text: 'Cobertura del evento de Arámbula con jóvenes en San Marcos: gran convocatoria.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 692 },
    { user: '@encuestas_norte', platform: 'x', text: 'Encuesta local ubica a Arámbula como el mejor evaluado del gabinete estatal.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
    { user: 'Ernesto Padilla', platform: 'facebook', text: 'Muchas obras anunciadas, pocas concluidas. Habrá que verificar los tiempos.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 98 },
  ],
  sentimentByArea: [
    { area: 'Aguascalientes',            positive: 72, neutral: 18, negative: 10, mentions: 12580, trend: '+4.1 pts' },
    { area: 'Jesús María',               positive: 54, neutral: 24, negative: 22, mentions: 4820,  trend: '-1.8 pts' },
    { area: 'Calvillo',                  positive: 65, neutral: 21, negative: 14, mentions: 2210,  trend: '+2.5 pts' },
    { area: 'Rincón de Romos',           positive: 68, neutral: 20, negative: 12, mentions: 1840,  trend: '+3.2 pts' },
    { area: 'Pabellón de Arteaga',       positive: 66, neutral: 22, negative: 12, mentions: 1650,  trend: '+2.8 pts' },
    { area: 'San Francisco de los Romo', positive: 61, neutral: 24, negative: 15, mentions: 1240,  trend: '+1.1 pts' },
    { area: 'Cosío',                     positive: 58, neutral: 25, negative: 17, mentions: 780,   trend: '+0.6 pts' },
    { area: 'Tepezalá',                  positive: 57, neutral: 26, negative: 17, mentions: 640,   trend: '+1.9 pts' },
  ],
  sentimentByTopic: [
    { topic: 'Obras públicas', positive: 74, neutral: 16, negative: 10 },
    { topic: 'Seguridad', positive: 58, neutral: 24, negative: 18 },
    { topic: 'Empleo', positive: 66, neutral: 22, negative: 12 },
    { topic: 'Educación', positive: 62, neutral: 25, negative: 13 },
    { topic: 'Salud', positive: 55, neutral: 27, negative: 18 },
    { topic: 'Transparencia', positive: 32, neutral: 30, negative: 38 },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// MERY POZOS — Diputada Federal D11 GDL · MORENA
// Aspirante a la Alcaldía de Guadalajara 2027
// ═══════════════════════════════════════════════════════════════════
const meryPozos: Profile = {
  slug: 'mery-pozos',
  candidate: {
    name: 'Mery Pozos',
    role: 'Diputada Federal · Aspirante a la Alcaldía de GDL',
    verified: true,
    coalicion: 'MORENA',
    eleccion: 'Municipal 2027',
    diasParaEleccion: 298,
    photoInitials: 'MP',
    photoUrl: '/candidates/mery-pozos.jpg',
  },
  candidateScope: {
    level: 'municipal',
    area: 'Guadalajara',
    breakdownLabel: 'colonias',
  },
  stateFocus: {
    'Jalisco': 0.72,
    'Nayarit': 0.35,
    'Colima': 0.42,
    'Aguascalientes': 0.15,
    'Michoacán': 0.28,
    'Guanajuato': -0.05,
    'Zacatecas': 0.22,
    'Ciudad de México': 0.55,
    'San Luis Potosí': 0.10,
    'Sinaloa': -0.12,
    'Guerrero': 0.30,
    'Nuevo León': -0.28,
    'Sonora': -0.18,
    'Chiapas': 0.45,
  },
  topNews: [
    { title: 'Noticieros Televisa cubre denuncia de Mery Pozos por subejercicio de 12 mil mdp', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA' },
    { title: 'Reforma: Pozos se perfila como candidata natural de MORENA en Guadalajara', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL' },
    { title: 'La Jornada Jalisco cubre llamado a la unidad de Pozos rumbo a 2027', source: 'La Jornada Jalisco', tier: 'regional', time: '08:40 AM', sentiment: 'POSITIVA' },
  ],
  allNews: [
    { title: 'Noticieros Televisa cubre denuncia de Mery Pozos por subejercicio de 12 mil mdp del gobierno de Jalisco', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. La diputada federal cuestionó al ejecutivo estatal por el manejo del presupuesto 2025 desde la Comisión de Presupuesto.' },
    { title: 'TV Azteca reporta agenda feminista y animalista de Pozos en Guadalajara', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota sobre foro sobre derechos de las mujeres y bienestar animal organizado por la diputada en el centro de GDL.' },
    { title: 'Reforma: Pozos se perfila como candidata natural de MORENA para Guadalajara', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL', summary: 'Análisis del posicionamiento político de la Presidenta de la Comisión de Presupuesto rumbo al proceso municipal 2027.' },
    { title: 'El Universal: Pozos critica opacidad del gobierno de Jalisco en gasto 2025', source: 'El Universal', tier: 'nacional-print', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Reportaje sobre la denuncia de 12,000 mdp sin ejercer en programas prioritarios y la exigencia de auditoría a la Auditoría Superior de la Federación.' },
    { title: 'Milenio: Pozos convoca a la unidad de MORENA rumbo a Guadalajara 2027', source: 'Milenio', tier: 'nacional-print', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'La diputada llama a cerrar filas con la cuarta transformación y evitar divisiones internas antes del proceso.' },
    { title: 'La Jornada Jalisco cubre llamado a la unidad de Pozos', source: 'La Jornada Jalisco', tier: 'regional', time: '08:40 AM', sentiment: 'POSITIVA', summary: 'Cobertura del evento en el que la diputada llamó a la militancia de MORENA a mantenerse unida rumbo al proceso municipal.' },
    { title: 'UdeG TV: subejercicio del presupuesto 2025 de Jalisco alcanza 12 mil mdp', source: 'UdeG TV', tier: 'regional', time: '09:15 AM', sentiment: 'POSITIVA', summary: 'Reportaje que profundiza en la denuncia de la diputada y en los programas afectados por el subejercicio identificado.' },
    { title: 'Portal Ciudadano: Pozos publica su declaración 3 de 3 completa', source: 'Portal Ciudadano', tier: 'digital-medio', time: '06:20 AM', sentiment: 'POSITIVA', summary: 'La diputada federal publicó de forma proactiva sus declaraciones patrimoniales, fiscales y de intereses completas.' },
    { title: 'Influencer local viraliza video crítico sobre agenda de Pozos', source: '@gdl_critico · X', tier: 'influencer', time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 180k seguidores cuestiona la trayectoria política reciente de la diputada.' },
  ],
  topics: [
    { name: 'Transparencia presupuestal', mentions: 4230, sentiment: 71, positive: true },
    { name: 'Agenda feminista', mentions: 3480, sentiment: 62, positive: true },
    { name: 'Unidad de MORENA', mentions: 2810, sentiment: 45, positive: true },
    { name: 'Confrontación con gobierno Jalisco', mentions: 1920, sentiment: -28, positive: false },
    { name: 'Bienestar animal', mentions: 1540, sentiment: 68, positive: true },
  ],
  wordCloud: [
    { text: 'presupuesto', value: 100, color: '#a855f7' },
    { text: 'transparencia', value: 88, color: '#22c55e' },
    { text: 'unidad', value: 78, color: '#22c55e' },
    { text: 'guadalajara', value: 68, color: '#a855f7' },
    { text: 'morena', value: 62, color: '#8b0000' },
    { text: 'subejercicio', value: 55, color: '#ef4444' },
    { text: 'mujeres', value: 50, color: '#ec4899' },
    { text: 'diputada', value: 48, color: '#3b82f6' },
    { text: 'jalisco', value: 44, color: '#eab308' },
    { text: 'ciudadanos', value: 40, color: '#eab308' },
    { text: 'auditoría', value: 34, color: '#f97316' },
    { text: 'feminista', value: 30, color: '#ec4899' },
    { text: 'animalista', value: 28, color: '#22c55e' },
    { text: 'izquierda', value: 26, color: '#a855f7' },
    { text: 'compromiso', value: 24, color: '#3b82f6' },
    { text: 'cambio', value: 22, color: '#eab308' },
  ],
  alerts: [
    { id: 'alt-01', what: 'Menciones críticas por confrontación política con gobierno de Jalisco', who: 'Cuentas afines a Movimiento Ciudadano + medios estatales', risk: 'Medio · polariza la conversación estatal', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-confrontacion' },
    { id: 'alt-02', what: 'Video crítico sobre trayectoria política toma alcance en X', who: 'Creador @gdl_critico (180k seguidores en X)', risk: 'Medio · potencial viralización en 6h', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Aspirante rival anunció recorrido masivo en el centro de GDL', who: 'Competidor de MC · mañana 6:00 PM en Chapultepec', risk: 'Bajo · disputa de agenda mediática', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-competencia' },
  ],
  allAlerts: [
    { id: 'alt-01', what: 'Menciones críticas por confrontación con gobierno de Jalisco (+42% en la última hora, 1,840 menciones)', who: 'Cuentas afines a Movimiento Ciudadano + prensa estatal (Grupo Milenio, MURAL)', risk: 'Medio · polariza la conversación estatal · escala a nacional', zone: 'Jalisco', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-confrontacion' },
    { id: 'alt-02', what: 'Video crítico sobre trayectoria política toma alcance: 8,500 views en 40 minutos', who: 'Creador @gdl_critico (180k seguidores) + réplicas en TikTok', risk: 'Medio · viralización probable en 6h', zone: 'Digital', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Aspirante rival anunció recorrido masivo (~3,500 asistentes) en Chapultepec', who: 'Competidor de Movimiento Ciudadano · mañana 6:00 PM', risk: 'Bajo · disputa de agenda mediática del día', zone: 'Guadalajara', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-competencia' },
    { id: 'alt-04', what: 'Cobertura positiva del Universal sobre denuncia de subejercicio', who: 'El Universal + Milenio · sección Nación y Estados', risk: 'Bajo · oportunidad de amplificar mensaje presupuestal', zone: 'Nacional', time: 'Hace 2 h', severity: 'blue', recommendationId: 'rec-prensa-nacional' },
    { id: 'alt-05', what: 'Militancia MORENA-Jalisco expresa dudas sobre proceso interno de selección', who: 'Cuadros medios de MORENA en Jalisco', risk: 'Medio · afecta narrativa de unidad', zone: 'Jalisco', time: 'Hace 3 h', severity: 'yellow', recommendationId: 'rec-unidad-morena' },
    { id: 'alt-06', what: 'Foro feminista de la diputada Pozos alcanza 15k reproducciones en Reels', who: '@merypozos · cuenta oficial', risk: 'Bajo · oportunidad de replicar formato exitoso', zone: 'Digital', time: 'Hace 4 h', severity: 'blue', recommendationId: 'rec-agenda-mujeres' },
  ],
  recommendations: [
    { id: 'rec-confrontacion', title: 'Modular narrativa de confrontación con gobierno de Jalisco', category: 'crisis', urgency: 'alta', summary: 'La confrontación con el ejecutivo estatal está polarizando la conversación. Mantener la denuncia con datos duros pero bajar el tono personal para no perder centro moderado.', actions: ['Publicar tabla con los 12,000 mdp desglosados por programa afectado', 'Sustituir mensajes de confrontación personal por argumentos técnicos', 'Coordinar con voceros técnicos del área presupuestal para entrevistas', 'Preparar respuesta anticipada al pronunciamiento del gobierno estatal'], linkedAlertId: 'alt-01', timeframe: 'Próximas 6 horas' },
    { id: 'rec-video-critico', title: 'Contención de video crítico sobre trayectoria', category: 'crisis', urgency: 'alta', summary: 'Video de @gdl_critico acumula 8,500 views en 40 min. Réplicas comenzando en TikTok. Evitar respuesta directa que amplifique alcance.', actions: ['NO responder directamente al video (evitar Streisand effect)', 'Producir contenido propio de trayectoria en el mismo formato', 'Activar red de creadores aliados con contenido paralelo', 'Monitorear réplicas cada 30 minutos y reportar patrones'], linkedAlertId: 'alt-02', timeframe: 'Próximas 4 horas' },
    { id: 'rec-competencia', title: 'Contra-agenda por recorrido del rival en Chapultepec', category: 'competencia', urgency: 'media', summary: 'Aspirante de MC convoca recorrido masivo mañana 6:00 PM en Chapultepec. Necesitamos ocupar el ciclo mediático del día en GDL.', actions: ['Agendar recorrido territorial paralelo en Cerro del Cuatro u Oblatos', 'Anunciar propuesta presupuestal concreta con embargo periodístico para las 5:00 PM', 'Convocar a medios locales (Milenio Jalisco, El Informador, La Jornada) con anticipación'], linkedAlertId: 'alt-03', timeframe: 'Mañana' },
    { id: 'rec-prensa-nacional', title: 'Amplificar cobertura de El Universal y Milenio', category: 'narrativa', urgency: 'baja', summary: 'El Universal y Milenio dieron eco a la denuncia de subejercicio. Oportunidad para reforzar posicionamiento presupuestal a nivel nacional.', actions: ['Compartir las notas en redes propias con quote seleccionada', 'Enviar agradecimiento privado y ofrecer entrevistas exclusivas', 'Producir hilo en X con datos duros del subejercicio'], linkedAlertId: 'alt-04', timeframe: 'Esta semana' },
    { id: 'rec-unidad-morena', title: 'Blindar narrativa de unidad interna de MORENA', category: 'narrativa', urgency: 'media', summary: 'Cuadros medios de MORENA-Jalisco expresan dudas sobre el proceso interno. Anticiparse antes de que escale a nivel nacional.', actions: ['Agendar reuniones privadas con cuadros clave del partido en la ZMG', 'Publicar mensaje de unidad con respaldo de figuras nacionales', 'Coordinar comunicado con dirigencia estatal'], linkedAlertId: 'alt-05', timeframe: 'Próximas 48 horas' },
    { id: 'rec-agenda-mujeres', title: 'Consolidar agenda feminista y de bienestar animal', category: 'contenido', urgency: 'baja', summary: 'El foro feminista alcanzó 15k reproducciones en Reels. Momentum para amplificar y consolidar el posicionamiento de agenda propia.', actions: ['Serie mensual de Reels con temas de derechos de mujeres', 'Alianzas con colectivos feministas para respaldo público', 'Contenido específico de bienestar animal en TikTok'], linkedAlertId: 'alt-06', timeframe: 'Próximo mes' },
  ],
  suggestedActions: [
    { title: 'Publicar tabla de subejercicio por programa', time: 'Hoy · 12:00 PM' },
    { title: 'Coordinar entrevista con Milenio nacional', time: 'Hoy · 02:00 PM' },
    { title: 'Reels sobre agenda feminista', time: 'Hoy · 04:00 PM' },
    { title: 'Monitoreo de menciones en X y TikTok', time: 'Continuo' },
  ],
  recentMentions: [
    { user: '@morenistagdl', platform: 'x', text: 'Excelente denuncia de @merypozos sobre el subejercicio. Se necesita más transparencia en Jalisco.', sentiment: 'positivo', time: 'Hace 3 min', engagement: 234 },
    { user: 'Ana Cristina Salcedo', platform: 'facebook', text: 'Mery Pozos representa una nueva forma de hacer política en Guadalajara.', sentiment: 'positivo', time: 'Hace 8 min', engagement: 189 },
    { user: '@analista_jalisco', platform: 'x', text: 'La confrontación con el gobierno estatal puede polarizar más de lo que ayuda a Pozos.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
    { user: '@feministasgdl', platform: 'x', text: 'Gracias @merypozos por su compromiso con la agenda feminista. Necesitamos más voces así.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
    { user: 'Roberto Preciado', platform: 'facebook', text: 'Mucha crítica pero pocas propuestas concretas para GDL. Habrá que ver.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 830 },
    { user: '@lorena_reportera', platform: 'instagram', text: 'Cobertura del foro de Pozos con colectivos animalistas: buena convocatoria.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 692 },
    { user: '@encuestas_mx', platform: 'x', text: 'Encuesta interna de MORENA ubica a Pozos como la mejor evaluada para GDL 2027.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
    { user: 'Enrique Villaseñor', platform: 'facebook', text: 'Ojalá que la denuncia del subejercicio no quede solo en discurso político.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 98 },
  ],
  sentimentByArea: [
    { area: 'Centro Histórico',   positive: 72, neutral: 18, negative: 10, mentions: 5820, trend: '+4.6 pts' },
    { area: 'Colonia Americana',  positive: 74, neutral: 18, negative: 8,  mentions: 4620, trend: '+3.9 pts' },
    { area: 'Providencia',        positive: 55, neutral: 25, negative: 20, mentions: 3410, trend: '-0.8 pts' },
    { area: 'Chapultepec',        positive: 68, neutral: 21, negative: 11, mentions: 2840, trend: '+2.5 pts' },
    { area: 'Oblatos',            positive: 64, neutral: 22, negative: 14, mentions: 1950, trend: '+3.1 pts' },
    { area: 'Cerro del Cuatro',   positive: 66, neutral: 20, negative: 14, mentions: 1580, trend: '+3.8 pts' },
    { area: 'Miravalle',          positive: 58, neutral: 26, negative: 16, mentions: 1210, trend: '+1.6 pts' },
    { area: 'Huentitán',          positive: 62, neutral: 23, negative: 15, mentions: 940,  trend: '+2.4 pts' },
  ],
  sentimentByTopic: [
    { topic: 'Transparencia', positive: 71, neutral: 15, negative: 14 },
    { topic: 'Agenda feminista', positive: 68, neutral: 22, negative: 10 },
    { topic: 'Presupuesto', positive: 62, neutral: 23, negative: 15 },
    { topic: 'Bienestar animal', positive: 74, neutral: 20, negative: 6 },
    { topic: 'Movilidad', positive: 48, neutral: 30, negative: 22 },
    { topic: 'Confrontación política', positive: 28, neutral: 30, negative: 42 },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// LAURA IMELDA PÉREZ SEGURA — Presidenta Municipal de San Pedro Tlaquepaque
// MORENA · Periodo 2024-2027
// ═══════════════════════════════════════════════════════════════════
const lauraPerez: Profile = {
  slug: 'laura-perez',
  candidate: {
    name: 'Laura Imelda Pérez Segura',
    role: 'Presidenta Municipal de San Pedro Tlaquepaque',
    verified: true,
    coalicion: 'MORENA',
    eleccion: 'Municipal 2027',
    diasParaEleccion: 682,
    photoInitials: 'LP',
    photoUrl: '/candidates/laura-perez.jpg',
  },
  candidateScope: {
    level: 'municipal',
    area: 'San Pedro Tlaquepaque',
    breakdownLabel: 'colonias',
  },
  stateFocus: {
    'Jalisco': 0.82,
    'Nayarit': 0.42,
    'Colima': 0.48,
    'Aguascalientes': 0.32,
    'Michoacán': 0.28,
    'Guanajuato': 0.15,
    'Zacatecas': 0.18,
    'Ciudad de México': 0.35,
    'San Luis Potosí': 0.05,
    'Sinaloa': -0.08,
    'Guerrero': 0.22,
    'Nuevo León': -0.18,
    'Sonora': -0.28,
    'Chiapas': 0.30,
  },
  topNews: [
    { title: 'Noticieros Televisa reporta inversión de 400 mdp en infraestructura hídrica de Tlaquepaque', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA' },
    { title: 'Reforma: Pérez Segura consolida narrativa de "ciudad de la esperanza"', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL' },
    { title: 'El Informador: Tlaquepaque impulsa obras para mejorar abasto de agua', source: 'El Informador', tier: 'regional', time: '08:40 AM', sentiment: 'POSITIVA' },
  ],
  allNews: [
    { title: 'Noticieros Televisa reporta inversión de 400 mdp en infraestructura hídrica de Tlaquepaque', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. La alcaldesa detalló obras para abasto de agua y contra inundaciones en 32 colonias del municipio.' },
    { title: 'TV Azteca cubre estrategia de seguridad de Pérez Segura en Tlaquepaque', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv', time: '07:20 AM', sentiment: 'POSITIVA', summary: 'Nota sobre el programa de seguridad municipal y coordinación con Fiscalía del Estado.' },
    { title: 'Reforma: Pérez Segura consolida narrativa de "ciudad de la esperanza"', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL', summary: 'Análisis de gestión municipal y del posicionamiento político tras ganar con récord de 121k+ votos.' },
    { title: 'El Universal: Tlaquepaque destaca por austeridad y transparencia', source: 'El Universal', tier: 'nacional-print', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Reportaje sobre el enfoque de austeridad y transparencia en el gobierno municipal de Pérez Segura.' },
    { title: 'Milenio: Pérez Segura entre las alcaldesas mejor evaluadas del país', source: 'Milenio', tier: 'nacional-print', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de percepción pública la coloca con alta evaluación entre gobiernos municipales de la ZMG.' },
    { title: 'El Informador: Tlaquepaque impulsa obras para mejorar abasto de agua', source: 'El Informador', tier: 'regional', time: '08:40 AM', sentiment: 'POSITIVA', summary: 'Cámaras empresariales y colectivos vecinales reconocen el plan hídrico y la coordinación con Comisión Federal de Electricidad.' },
    { title: 'La Jornada Jalisco: colectivos piden más avances en agua para colonias del sur', source: 'La Jornada Jalisco', tier: 'regional', time: '09:15 AM', sentiment: 'NEGATIVA', summary: 'Vecinos de colonias periféricas piden acelerar los tiempos de las obras hídricas anunciadas.' },
    { title: 'UdeG Radio: foro estudiantil sobre gobierno municipal de Tlaquepaque', source: 'UdeG Radio', tier: 'digital-medio', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Universitarios organizan foro para pedir a la alcaldesa transparencia en cabildo y contrataciones.' },
    { title: 'Influencer local viraliza video crítico sobre obras en Tlaquepaque', source: '@tlaquepaque_critico · X', tier: 'influencer', time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 95k seguidores cuestiona los tiempos de entrega de obras hídricas comprometidas.' },
  ],
  topics: [
    { name: 'Infraestructura hídrica', mentions: 4230, sentiment: 68, positive: true },
    { name: 'Seguridad municipal', mentions: 3480, sentiment: 58, positive: true },
    { name: 'Austeridad y transparencia', mentions: 2810, sentiment: 72, positive: true },
    { name: 'Bienestar y desarrollo social', mentions: 1920, sentiment: 65, positive: true },
    { name: 'Cabildo y contrataciones', mentions: 1540, sentiment: -32, positive: false },
  ],
  wordCloud: [
    { text: 'esperanza', value: 100, color: '#22c55e' },
    { text: 'tlaquepaque', value: 88, color: '#a855f7' },
    { text: 'agua', value: 78, color: '#3b82f6' },
    { text: 'obras', value: 68, color: '#22c55e' },
    { text: 'bienestar', value: 62, color: '#ec4899' },
    { text: 'seguridad', value: 55, color: '#22c55e' },
    { text: 'austeridad', value: 50, color: '#eab308' },
    { text: 'ciudadanos', value: 48, color: '#eab308' },
    { text: 'transparencia', value: 44, color: '#22c55e' },
    { text: 'morena', value: 40, color: '#8b0000' },
    { text: 'colonias', value: 34, color: '#3b82f6' },
    { text: 'gobierno', value: 30, color: '#a855f7' },
    { text: 'infraestructura', value: 28, color: '#22c55e' },
    { text: 'familias', value: 26, color: '#ec4899' },
    { text: 'agenda', value: 24, color: '#3b82f6' },
    { text: 'reforma', value: 20, color: '#eab308' },
  ],
  alerts: [
    { id: 'alt-01', what: 'Vecinos de colonias periféricas exigen aceleración de obras hídricas', who: 'Colectivos vecinales del sur de Tlaquepaque + LJA', risk: 'Medio · afecta narrativa de cumplimiento', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-obras-hidricas' },
    { id: 'alt-02', what: 'Video sobre tiempos de obras toma alcance en X', who: 'Creador @tlaquepaque_critico (95k seguidores)', risk: 'Medio · potencial viralización en 6h', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Nota positiva de El Informador sobre obras y coordinación con CFE', who: 'El Informador · sección Jalisco', risk: 'Bajo · oportunidad de amplificar mensaje', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-prensa-regional' },
  ],
  allAlerts: [
    { id: 'alt-01', what: 'Vecinos exigen aceleración de obras hídricas en el sur (+34% menciones, 980 en la última hora)', who: 'Colectivos vecinales del sur de Tlaquepaque + La Jornada Jalisco', risk: 'Medio · afecta narrativa de cumplimiento del plan hídrico', zone: 'Tlaquepaque Sur', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-obras-hidricas' },
    { id: 'alt-02', what: 'Video sobre tiempos de obras toma alcance: 6,800 views en 40 minutos', who: 'Creador @tlaquepaque_critico (95k seguidores) + réplicas en TikTok', risk: 'Medio · viralización probable en 6h', zone: 'Digital', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Nota positiva de El Informador sobre plan hídrico y coordinación con CFE', who: 'El Informador · sección Jalisco', risk: 'Bajo · oportunidad de amplificar mensaje', zone: 'Jalisco', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-prensa-regional' },
    { id: 'alt-04', what: 'Menciones críticas sobre proceso de contrataciones en cabildo (+22%)', who: 'Regidores de oposición + medios digitales locales', risk: 'Medio · afecta narrativa de transparencia', zone: 'Digital', time: 'Hace 2 h', severity: 'yellow', recommendationId: 'rec-cabildo' },
    { id: 'alt-05', what: 'Reforma publica reportaje sobre gestión de "ciudad de la esperanza" (tono neutral)', who: 'Reforma · sección Estados', risk: 'Bajo · oportunidad de posicionamiento nacional', zone: 'Nacional', time: 'Hace 3 h', severity: 'blue', recommendationId: 'rec-narrativa-nacional' },
    { id: 'alt-06', what: 'Publicación en Instagram sobre entrega de calentadores solares alcanza 18k views', who: '@lauraimelperezs · cuenta oficial', risk: 'Bajo · oportunidad de replicar formato exitoso', zone: 'Digital', time: 'Hace 4 h', severity: 'blue', recommendationId: 'rec-bienestar-social' },
  ],
  recommendations: [
    { id: 'rec-obras-hidricas', title: 'Acelerar comunicación sobre obras hídricas en el sur', category: 'crisis', urgency: 'alta', summary: 'Vecinos del sur de Tlaquepaque exigen aceleración de las obras hídricas anunciadas. La Jornada Jalisco amplifica. Ventana de acción: próximas 6 horas.', actions: ['Publicar cronograma detallado por colonia y semana', 'Rueda de prensa con la titular de Obras Públicas municipal', 'Recorrido con periodistas a las obras en ejecución', 'Preparar mapa interactivo con avances actualizados'], linkedAlertId: 'alt-01', timeframe: 'Próximas 6 horas' },
    { id: 'rec-video-critico', title: 'Contención de video crítico sobre tiempos de obras', category: 'crisis', urgency: 'media', summary: 'Video de @tlaquepaque_critico acumula 6,800 views en 40 min. Réplicas comenzando en TikTok. Evitar respuesta directa.', actions: ['NO responder directamente al video (evitar Streisand effect)', 'Producir contenido propio mostrando avances reales de obras', 'Activar red de creadores aliados con testimonios de vecinos beneficiados', 'Monitorear réplicas cada 30 minutos'], linkedAlertId: 'alt-02', timeframe: 'Próximas 4 horas' },
    { id: 'rec-prensa-regional', title: 'Amplificar cobertura positiva de El Informador', category: 'narrativa', urgency: 'baja', summary: 'El Informador destacó el plan hídrico y la coordinación con CFE. Oportunidad para amplificar y reforzar posicionamiento.', actions: ['Compartir la nota en redes propias con quote seleccionada', 'Enviar agradecimiento privado y ofrecer seguimiento', 'Producir 3 piezas de contenido derivadas (video, carrusel, hilo)'], linkedAlertId: 'alt-03', timeframe: 'Esta semana' },
    { id: 'rec-cabildo', title: 'Blindar narrativa de transparencia en cabildo', category: 'narrativa', urgency: 'media', summary: 'Regidores de oposición y medios digitales cuestionan procesos de contratación. Anticiparse con transparencia proactiva.', actions: ['Publicar todos los contratos del último trimestre en portal municipal', 'Sesión de cabildo con transmisión completa y sin cortes', 'Ofrecer entrevistas a medios digitales locales con contexto técnico'], linkedAlertId: 'alt-04', timeframe: 'Próximas 48 horas' },
    { id: 'rec-narrativa-nacional', title: 'Aprovechar cobertura de Reforma para narrativa nacional', category: 'narrativa', urgency: 'baja', summary: 'Reforma publicó reportaje neutral sobre la gestión. Momento oportuno para articular narrativa de "ciudad de la esperanza" a nivel nacional.', actions: ['Preparar posicionamiento sobre 3 temas prioritarios municipales', 'Rueda de prensa mensual para consolidar presencia mediática', 'Alianzas con analistas y líderes de opinión clave'], linkedAlertId: 'alt-05', timeframe: 'Próximo mes' },
    { id: 'rec-bienestar-social', title: 'Fortalecer contenido de programas sociales', category: 'contenido', urgency: 'baja', summary: 'Publicación sobre entrega de calentadores solares alcanzó 18k views en Reels. Oportunidad de sistematizar contenido de programas sociales.', actions: ['Calendario semanal de publicaciones con entregas de programas', 'Reels dedicados a testimonios de beneficiarios', 'Historias diarias con avances territoriales'], linkedAlertId: 'alt-06', timeframe: 'Continuo' },
  ],
  suggestedActions: [
    { title: 'Publicar cronograma de obras hídricas por colonia', time: 'Hoy · 12:00 PM' },
    { title: 'Rueda de prensa con Obras Públicas municipal', time: 'Hoy · 02:00 PM' },
    { title: 'Contenido en Instagram sobre bienestar social', time: 'Hoy · 04:00 PM' },
    { title: 'Monitoreo de menciones en X y TikTok', time: 'Continuo' },
  ],
  recentMentions: [
    { user: '@vecino_tlaque', platform: 'x', text: 'Bien las obras de @lauraimelperezs pero necesitamos que se aceleren en las colonias del sur.', sentiment: 'neutral', time: 'Hace 3 min', engagement: 234 },
    { user: 'María Fernanda Ruiz', platform: 'facebook', text: 'Excelente iniciativa de la alcaldesa con los calentadores solares. Se agradece.', sentiment: 'positivo', time: 'Hace 8 min', engagement: 189 },
    { user: '@informador_jal', platform: 'x', text: 'Pérez Segura presenta avances del plan de infraestructura hídrica.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
    { user: '@analista_ags', platform: 'x', text: 'La narrativa de "ciudad de la esperanza" de Pérez Segura está consolidándose.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
    { user: 'Jorge Serna', platform: 'facebook', text: 'Los tiempos de las obras no cuadran con lo prometido en campaña. A verificar.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 830 },
    { user: '@rocio_reportera', platform: 'instagram', text: 'Cobertura del evento de Pérez Segura con la selección femenil de fútbol de Tlaquepaque.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 692 },
    { user: '@encuestas_norte', platform: 'x', text: 'Encuesta ubica a Pérez Segura entre las mejores alcaldesas evaluadas de la ZMG.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
    { user: 'Ernesto Padilla', platform: 'facebook', text: 'Ojalá se cumplan las obras hídricas prometidas. Los vecinos las necesitamos ya.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 98 },
  ],
  sentimentByArea: [
    { area: 'Centro Tlaquepaque',      positive: 74, neutral: 18, negative: 8,  mentions: 8420, trend: '+4.8 pts' },
    { area: 'San Pedrito',             positive: 68, neutral: 22, negative: 10, mentions: 3210, trend: '+3.2 pts' },
    { area: 'Las Juntas',              positive: 62, neutral: 24, negative: 14, mentions: 2440, trend: '+2.1 pts' },
    { area: 'Toluquilla',              positive: 58, neutral: 26, negative: 16, mentions: 1950, trend: '+1.5 pts' },
    { area: 'Santa María Tequepexpan', positive: 52, neutral: 28, negative: 20, mentions: 1650, trend: '-0.8 pts' },
    { area: 'López Cotilla',           positive: 54, neutral: 26, negative: 20, mentions: 1240, trend: '+0.9 pts' },
    { area: 'Nueva Santa María',       positive: 44, neutral: 30, negative: 26, mentions: 980,  trend: '-1.4 pts' },
    { area: 'El Órgano',               positive: 57, neutral: 25, negative: 18, mentions: 810,  trend: '+1.8 pts' },
  ],
  sentimentByTopic: [
    { topic: 'Agua e infraestructura', positive: 68, neutral: 18, negative: 14 },
    { topic: 'Seguridad', positive: 58, neutral: 24, negative: 18 },
    { topic: 'Austeridad', positive: 72, neutral: 20, negative: 8 },
    { topic: 'Bienestar social', positive: 65, neutral: 25, negative: 10 },
    { topic: 'Transparencia', positive: 55, neutral: 25, negative: 20 },
    { topic: 'Obras retrasadas', positive: 22, neutral: 26, negative: 52 },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// RICARDO MONREAL ÁVILA — Coordinador del Grupo Parlamentario de Morena
// Cámara de Diputados · Presidente de JUCOPO
// ═══════════════════════════════════════════════════════════════════
const ricardoMonreal: Profile = {
  slug: 'ricardo-monreal',
  candidate: {
    name: 'Ricardo Monreal Ávila',
    role: 'Coordinador de MORENA · Cámara de Diputados',
    verified: true,
    coalicion: 'MORENA',
    eleccion: 'Periodo legislativo 2024-2027',
    diasParaEleccion: 620,
    photoInitials: 'RM',
    photoUrl: '/candidates/ricardo-monreal.jpg',
  },
  candidateScope: {
    level: 'estatal',
    area: 'Cámara de Diputados',
    breakdownLabel: 'estados',
  },
  stateFocus: {
    'Ciudad de México': 0.75,
    'Zacatecas': 0.68,
    'Estado de México': 0.55,
    'Puebla': 0.42,
    'Veracruz': 0.48,
    'Morelos': 0.38,
    'Hidalgo': 0.35,
    'Guerrero': 0.32,
    'Michoacán': 0.28,
    'Jalisco': -0.12,
    'Nuevo León': -0.28,
    'Guanajuato': -0.18,
    'Yucatán': -0.22,
    'Chihuahua': -0.35,
  },
  topNews: [
    { title: 'Noticieros Televisa: Monreal presenta agenda con 30 iniciativas prioritarias', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA' },
    { title: 'Reforma: Monreal impulsa regulación de inteligencia artificial en el nuevo periodo', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL' },
    { title: 'La Crónica de Hoy detalla las 30 prioridades de Morena en San Lázaro', source: 'La Crónica de Hoy', tier: 'nacional-print', time: '08:40 AM', sentiment: 'POSITIVA' },
  ],
  allNews: [
    { title: 'Noticieros Televisa: Monreal presenta agenda con 30 iniciativas prioritarias para el periodo', source: 'Noticieros Televisa', tier: 'nacional-tv', time: '10:02 AM', sentiment: 'POSITIVA', summary: 'Cobertura en horario estelar. El coordinador detalló cinco temas prioritarios, encabezados por la regulación de inteligencia artificial.' },
    { title: 'TV Azteca abre noticiario con propuesta de Monreal sobre reelección de legisladores', source: 'Hechos AM · TV Azteca', tier: 'nacional-tv', time: '07:20 AM', sentiment: 'NEUTRAL', summary: 'Nota de dos minutos sobre la iniciativa que propone que los legisladores que busquen reelección no dejen su curul para hacer campaña.' },
    { title: 'Reforma: Monreal impulsa regulación de inteligencia artificial como tema central', source: 'Reforma', tier: 'nacional-print', time: '09:15 AM', sentiment: 'NEUTRAL', summary: 'Análisis del posicionamiento del coordinador y la disputa por definir el marco regulatorio en México antes de que otros países marquen la pauta.' },
    { title: 'El Universal: Monreal llama a la unidad nacional y al respeto a la ley', source: 'El Universal', tier: 'nacional-print', time: '06:45 AM', sentiment: 'POSITIVA', summary: 'Reportaje sobre el discurso del coordinador en San Lázaro donde defendió el marco institucional y destacó avances de la agenda legislativa.' },
    { title: 'Milenio: Monreal entre los legisladores con mayor influencia del sexenio', source: 'Milenio', tier: 'nacional-print', time: '08:15 AM', sentiment: 'POSITIVA', summary: 'Última medición de percepción política lo coloca entre los operadores más relevantes de la relación Ejecutivo-Legislativo.' },
    { title: 'La Crónica de Hoy detalla las 30 prioridades legislativas de MORENA', source: 'La Crónica de Hoy', tier: 'nacional-print', time: '08:40 AM', sentiment: 'POSITIVA', summary: 'Cobertura que profundiza en el listado: IA, migración, derechos, pensiones, reforma electoral y presupuesto 2026 encabezan la agenda.' },
    { title: 'Infobae: Monreal detalla reformas en migración, derechos y pensiones', source: 'Infobae México', tier: 'regional', time: '09:15 AM', sentiment: 'POSITIVA', summary: 'Análisis del paquete de reformas anunciado por el coordinador para el periodo ordinario que inicia el 1 de septiembre.' },
    { title: 'Foro académico UNAM analiza propuesta de regulación de IA de Monreal', source: 'Portal UNAM', tier: 'digital-medio', time: '06:20 AM', sentiment: 'NEUTRAL', summary: 'Especialistas discuten alcances y limitaciones del anteproyecto anunciado por el coordinador y profesor de la máxima casa de estudios.' },
    { title: 'Influencer critica propuesta de Monreal sobre curul en campañas', source: '@politiblog · X', tier: 'influencer', time: '05:40 AM', sentiment: 'NEGATIVA', summary: 'Publicación de creador con 220k seguidores cuestiona la iniciativa como restricción al derecho político-electoral.' },
  ],
  topics: [
    { name: 'Regulación de IA', mentions: 5820, sentiment: 68, positive: true },
    { name: 'Agenda legislativa', mentions: 4230, sentiment: 62, positive: true },
    { name: 'Reforma migratoria', mentions: 3480, sentiment: 55, positive: true },
    { name: 'Reelección con curul', mentions: 2810, sentiment: -34, positive: false },
    { name: 'Unidad de MORENA', mentions: 1920, sentiment: 48, positive: true },
  ],
  wordCloud: [
    { text: 'agenda', value: 100, color: '#a855f7' },
    { text: 'legislativa', value: 88, color: '#3b82f6' },
    { text: 'iniciativas', value: 78, color: '#22c55e' },
    { text: 'inteligencia', value: 68, color: '#3b82f6' },
    { text: 'artificial', value: 62, color: '#3b82f6' },
    { text: 'unidad', value: 55, color: '#22c55e' },
    { text: 'diputados', value: 50, color: '#a855f7' },
    { text: 'reformas', value: 48, color: '#eab308' },
    { text: 'morena', value: 44, color: '#8b0000' },
    { text: 'nación', value: 40, color: '#22c55e' },
    { text: 'ley', value: 34, color: '#eab308' },
    { text: 'migración', value: 30, color: '#3b82f6' },
    { text: 'pensiones', value: 28, color: '#ec4899' },
    { text: 'presupuesto', value: 26, color: '#f97316' },
    { text: 'jucopo', value: 24, color: '#a855f7' },
    { text: 'oposición', value: 20, color: '#f97316' },
  ],
  alerts: [
    { id: 'alt-01', what: 'Menciones críticas por propuesta de reelección sin dejar curul', who: 'Oposición legislativa + medios digitales', risk: 'Medio · polariza la conversación política', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-reeleccion' },
    { id: 'alt-02', what: 'Video crítico sobre restricción electoral toma alcance en X', who: 'Creador @politiblog (220k seguidores)', risk: 'Medio · potencial viralización en 6h', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Bloque opositor anuncia contra-propuesta en San Lázaro', who: 'PAN, PRI y MC · coordinadores parlamentarios', risk: 'Bajo · disputa parlamentaria normal', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-oposicion' },
  ],
  allAlerts: [
    { id: 'alt-01', what: 'Menciones críticas por propuesta de reelección sin dejar curul (+35% en la última hora, 3,240 menciones)', who: 'Oposición legislativa + medios digitales especializados', risk: 'Medio · polariza la conversación política · escala a nivel académico', zone: 'Nacional', time: 'Hace 15 min', severity: 'orange', recommendationId: 'rec-reeleccion' },
    { id: 'alt-02', what: 'Video crítico sobre restricción electoral: 15,800 views en 40 minutos', who: 'Creador @politiblog (220k seguidores) + réplicas en TikTok', risk: 'Medio · viralización probable en 6h', zone: 'Digital', time: 'Hace 42 min', severity: 'yellow', recommendationId: 'rec-video-critico' },
    { id: 'alt-03', what: 'Bloque opositor anuncia contra-propuesta a la agenda de IA', who: 'PAN, PRI y MC · coordinadores parlamentarios · mañana 10:00 AM', risk: 'Bajo · disputa parlamentaria normal', zone: 'San Lázaro', time: 'Hace 1 h', severity: 'blue', recommendationId: 'rec-oposicion' },
    { id: 'alt-04', what: 'Cobertura positiva de Reforma sobre propuesta de regulación de IA', who: 'Reforma + Milenio · sección Nación', risk: 'Bajo · oportunidad de amplificar mensaje regulatorio', zone: 'Nacional', time: 'Hace 2 h', severity: 'blue', recommendationId: 'rec-prensa-nacional' },
    { id: 'alt-05', what: 'Cuadros medios de MORENA piden claridad sobre agenda de pensiones', who: 'Diputados y senadores del grupo parlamentario', risk: 'Medio · afecta narrativa de unidad interna', zone: 'MORENA', time: 'Hace 3 h', severity: 'yellow', recommendationId: 'rec-pensiones' },
    { id: 'alt-06', what: 'Foro académico UNAM sobre IA alcanza 22k views en YouTube', who: 'Portal UNAM + réplicas de especialistas', risk: 'Bajo · oportunidad de posicionamiento técnico', zone: 'Digital', time: 'Hace 4 h', severity: 'blue', recommendationId: 'rec-academia' },
  ],
  recommendations: [
    { id: 'rec-reeleccion', title: 'Modular narrativa sobre reelección sin dejar curul', category: 'crisis', urgency: 'alta', summary: 'La propuesta de que los legisladores no dejen su curul durante campañas de reelección está polarizando. Necesitamos contextualizar antes de que la oposición defina el marco.', actions: ['Publicar exposición de motivos completa con casos comparados internacionalmente', 'Rueda de prensa técnica con constitucionalistas aliados', 'Coordinar entrevistas con Milenio y El Universal para explicar el fondo', 'Preparar hilo en X con datos duros del ausentismo legislativo en campaña'], linkedAlertId: 'alt-01', timeframe: 'Próximas 6 horas' },
    { id: 'rec-video-critico', title: 'Contención de video crítico sobre restricción electoral', category: 'crisis', urgency: 'alta', summary: 'Video de @politiblog acumula 15,800 views en 40 min. Réplicas comenzando en TikTok. Evitar respuesta directa que amplifique alcance.', actions: ['NO responder directamente al video (evitar Streisand effect)', 'Producir contenido propio con el marco jurídico de la iniciativa', 'Activar red de constitucionalistas aliados con contenido paralelo', 'Monitorear réplicas cada 30 minutos y reportar patrones'], linkedAlertId: 'alt-02', timeframe: 'Próximas 4 horas' },
    { id: 'rec-oposicion', title: 'Anticipar respuesta a contra-propuesta opositora', category: 'competencia', urgency: 'media', summary: 'PAN, PRI y MC preparan contra-propuesta a la agenda de IA para mañana 10:00 AM. Necesitamos ocupar el ciclo mediático antes.', actions: ['Publicar versión ejecutiva de la propuesta de IA con embargo a las 8:00 AM', 'Convocar a reporteros de fuente parlamentaria con anticipación', 'Preparar respuesta anticipada punto por punto a los cuestionamientos esperados'], linkedAlertId: 'alt-03', timeframe: 'Mañana' },
    { id: 'rec-prensa-nacional', title: 'Amplificar cobertura de Reforma y Milenio sobre IA', category: 'narrativa', urgency: 'baja', summary: 'Reforma y Milenio dieron cobertura positiva a la propuesta de regulación de IA. Momento oportuno para consolidar posicionamiento técnico.', actions: ['Compartir las notas en redes propias con quote seleccionada', 'Enviar agradecimiento privado y ofrecer entrevistas de seguimiento', 'Producir 3 piezas de contenido derivadas (video, carrusel, hilo con datos)'], linkedAlertId: 'alt-04', timeframe: 'Esta semana' },
    { id: 'rec-pensiones', title: 'Blindar narrativa de unidad en torno a agenda de pensiones', category: 'narrativa', urgency: 'media', summary: 'Cuadros medios de MORENA piden claridad sobre la agenda de pensiones. Anticiparse antes de que escale a fricción pública.', actions: ['Agendar reunión privada del grupo parlamentario con exposición técnica', 'Publicar cronograma legislativo con hitos claros', 'Comunicado con respaldo de figuras nacionales del partido'], linkedAlertId: 'alt-05', timeframe: 'Próximas 48 horas' },
    { id: 'rec-academia', title: 'Fortalecer diálogo con academia sobre IA', category: 'contenido', urgency: 'baja', summary: 'El foro académico UNAM alcanzó 22k views en YouTube. Oportunidad de sistematizar el diálogo con especialistas para robustecer la propuesta.', actions: ['Serie de mesas técnicas mensuales con universidades', 'Publicar borrador abierto a comentarios de la comunidad académica', 'Alianzas con think tanks especializados en tecnología'], linkedAlertId: 'alt-06', timeframe: 'Próximo mes' },
  ],
  suggestedActions: [
    { title: 'Publicar exposición de motivos completa', time: 'Hoy · 12:00 PM' },
    { title: 'Rueda de prensa con constitucionalistas', time: 'Hoy · 02:00 PM' },
    { title: 'Coordinar mesa técnica con UNAM', time: 'Hoy · 04:00 PM' },
    { title: 'Monitoreo de menciones en X y TikTok', time: 'Continuo' },
  ],
  recentMentions: [
    { user: '@constitucionalistas', platform: 'x', text: 'Interesante la propuesta de @ricardomonreal sobre curul en campañas. Hay que analizarla a fondo.', sentiment: 'neutral', time: 'Hace 3 min', engagement: 234 },
    { user: 'Ana Cristina Salcedo', platform: 'facebook', text: 'Excelente el trabajo del coordinador Monreal impulsando la regulación de IA. México necesita esa discusión.', sentiment: 'positivo', time: 'Hace 8 min', engagement: 189 },
    { user: '@analista_pol', platform: 'x', text: 'Monreal marca la agenda legislativa del sexenio con 30 iniciativas. Habrá que ver cuáles pasan.', sentiment: 'neutral', time: 'Hace 12 min', engagement: 156 },
    { user: '@morenistadf', platform: 'x', text: 'Gracias @ricardomonreal por priorizar la agenda de derechos y pensiones. Con la 4T avanzamos.', sentiment: 'positivo', time: 'Hace 18 min', engagement: 421 },
    { user: 'Roberto Preciado', platform: 'facebook', text: 'La iniciativa sobre reelección sin dejar curul es cuestionable jurídicamente. Restringe derechos.', sentiment: 'negativo', time: 'Hace 24 min', engagement: 830 },
    { user: '@lorena_reportera', platform: 'instagram', text: 'Cobertura del foro académico UNAM sobre IA con Monreal: 500 asistentes.', sentiment: 'positivo', time: 'Hace 32 min', engagement: 692 },
    { user: '@encuestas_mx', platform: 'x', text: 'Encuesta ubica a Monreal como el operador político más relevante del sexenio.', sentiment: 'positivo', time: 'Hace 41 min', engagement: 567 },
    { user: 'Enrique Villaseñor', platform: 'facebook', text: 'Ojalá que la agenda de 30 iniciativas no se quede en anuncio. Hay que ver resultados.', sentiment: 'neutral', time: 'Hace 55 min', engagement: 98 },
  ],
  sentimentByArea: [
    { area: 'Ciudad de México',   positive: 72, neutral: 18, negative: 10, mentions: 12820, trend: '+3.8 pts' },
    { area: 'Zacatecas',          positive: 78, neutral: 14, negative: 8,  mentions: 4210,  trend: '+4.5 pts' },
    { area: 'Estado de México',   positive: 65, neutral: 22, negative: 13, mentions: 8420,  trend: '+2.6 pts' },
    { area: 'Veracruz',           positive: 62, neutral: 24, negative: 14, mentions: 3820,  trend: '+2.1 pts' },
    { area: 'Puebla',             positive: 58, neutral: 26, negative: 16, mentions: 2950,  trend: '+1.5 pts' },
    { area: 'Guerrero',           positive: 55, neutral: 27, negative: 18, mentions: 2210,  trend: '+1.2 pts' },
    { area: 'Jalisco',            positive: 42, neutral: 30, negative: 28, mentions: 3540,  trend: '-1.4 pts' },
    { area: 'Nuevo León',         positive: 38, neutral: 32, negative: 30, mentions: 2840,  trend: '-2.1 pts' },
  ],
  sentimentByTopic: [
    { topic: 'Regulación de IA', positive: 68, neutral: 22, negative: 10 },
    { topic: 'Reforma migratoria', positive: 62, neutral: 25, negative: 13 },
    { topic: 'Pensiones', positive: 58, neutral: 24, negative: 18 },
    { topic: 'Unidad de MORENA', positive: 55, neutral: 28, negative: 17 },
    { topic: 'Presupuesto 2026', positive: 52, neutral: 26, negative: 22 },
    { topic: 'Reelección sin curul', positive: 28, neutral: 30, negative: 42 },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════

export const profiles: Profile[] = [esthela, torres, arambula, meryPozos, lauraPerez, ricardoMonreal];

export const DEFAULT_SLUG = 'esthela';

export function getProfile(slug: string | undefined): Profile {
  return profiles.find((p) => p.slug === slug) ?? profiles[0];
}
