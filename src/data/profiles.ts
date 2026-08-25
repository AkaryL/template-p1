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
// EXPORTS
// ═══════════════════════════════════════════════════════════════════

export const profiles: Profile[] = [esthela, torres, arambula];

export const DEFAULT_SLUG = 'esthela';

export function getProfile(slug: string | undefined): Profile {
  return profiles.find((p) => p.slug === slug) ?? profiles[0];
}
