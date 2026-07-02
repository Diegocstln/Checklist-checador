const requirements = [
  { id: "eventos-jornada", name: "Registro de eventos por jornada", area: "CH", priority: "Indispensable", desc: "Entrada, salida/regreso de comida y salida con timestamp exacto por usuario." },
  { id: "eventos-campo", name: "Eventos adicionales en campo", area: "Operacion", priority: "Indispensable", desc: "Llegada y salida de sitio; inicio desde sitio, hotel o casa." },
  { id: "calculo-horas", name: "Calculo automatico de horas", area: "CH / Sistemas", priority: "Indispensable", desc: "Horas por dia, semana y mes; horas adicionales y extra separadas." },
  { id: "biometrico", name: "Metodo biometrico", area: "Operacion / Sistemas", priority: "Indispensable", desc: "Reconocimiento facial vectorial, contrasena corta y alerta a RH tras 2 intentos fallidos." },
  { id: "app-gps", name: "Registro via app movil GPS", area: "Sistemas", priority: "Indispensable", desc: "Validacion por coordenadas o geofence desde dispositivos empresariales." },
  { id: "perfiles-horario", name: "Perfiles de horario", area: "CH", priority: "Indispensable", desc: "Tiempo completo, pasante, campo/remoto, monitoreo, dual y perfil abierto." },
  { id: "historial-perfiles", name: "Historial de perfiles", area: "CH", priority: "Indispensable", desc: "Asignaciones con vigencia e historial inmutable." },
  { id: "perfiles-abiertos", name: "Perfiles abiertos", area: "Operacion", priority: "Basico", desc: "Viajes o trabajo nocturno; valida horas totales sin horario fijo." },
  { id: "excepciones-temporales", name: "Excepciones temporales", area: "Operacion", priority: "Basico", desc: "Bandera de excepcion activa sin modificar el perfil base." },
  { id: "retardos", name: "Clasificacion de retardos", area: "CH", priority: "Indispensable", desc: "Retardo menor minutos 1-6 y mayor desde minuto 11; configurable por perfil." },
  { id: "cierre-2359", name: "Cierre automatico 23:59", area: "Operacion", priority: "Indispensable", desc: "Cierra jornada sin salida, excepto nocturno o excepcion activa." },
  { id: "cierre-remotos", name: "Cierre automatico para remotos", area: "CH / Operacion", priority: "Indispensable", desc: "Cierre a las 18:00; no aplica horas extra ni adicionales." },
  { id: "estadistica-cierres", name: "Estadistica de cierres automaticos", area: "Operacion", priority: "Indispensable", desc: "Reporte de cuantos y cuales turnos fueron cerrados por el sistema." },
  { id: "monitoreo-nocturno", name: "Monitoreo nocturno", area: "Operacion", priority: "Basico", desc: "Turnos nocturnos sin cierre automatico y visibles fuera de horario habitual." },
  { id: "vacaciones", name: "Gestion de vacaciones", area: "CH / Operacion", priority: "Indispensable", desc: "Solicitud desde plataforma y aprobacion por RH o jefe directo." },
  { id: "permisos-goce", name: "Permisos con goce", area: "Operacion", priority: "Indispensable", desc: "Categorias educativo, gubernamental, personal y familiar; subtipos definidos." },
  { id: "permisos-sin-goce", name: "Permisos sin goce", area: "Operacion", priority: "Indispensable", desc: "Mismas categorias y subtipos; requiere aprobacion previa." },
  { id: "incapacidad", name: "Incapacidad medica", area: "CH / Operacion", priority: "Indispensable", desc: "Documento obligatorio, no cuenta como falta y requiere aprobacion RH." },
  { id: "flujo-autorizacion", name: "Flujo de autorizacion", area: "CH / Operacion", priority: "Indispensable", desc: "Aprobacion RH/jefe; escala a RH tras 48 horas habiles sin respuesta." },
  { id: "documentos", name: "Gestion de documentos", area: "Operacion", priority: "Basico", desc: "Adjuntar archivos PDF o imagen a incidencias y permisos." },
  { id: "reportes-filtrables", name: "Reportes filtrables", area: "CH", priority: "Indispensable", desc: "Filtros por empleado, area, sucursal, incidencia, periodo y esquema." },
  { id: "export-pdf-excel", name: "Exportacion Excel y PDF", area: "CH", priority: "Indispensable", desc: "Reportes exportables con nombre, area, horas, retardos e incidencias." },
  { id: "columnas", name: "Personalizacion de columnas", area: "CH", priority: "Indispensable", desc: "El administrador agrega o elimina columnas del reporte." },
  { id: "api", name: "Exportacion / Integracion API", area: "Sistemas", priority: "Basico", desc: "Minimo .xlsx y .csv; ideal API REST para nomina." },
  { id: "multisitio", name: "Soporte multi-sitio", area: "CH / Sistemas", priority: "Indispensable", desc: "Panel central para 3 sucursales; entrada en una sede y salida en otra." },
  { id: "geofences", name: "Geofences configurables", area: "Sistemas", priority: "Ideal", desc: "Perimetros GPS sobre sucursales y domicilios, radio 100m por defecto." },
  { id: "festivos", name: "Dias festivos configurables", area: "CH / Sistemas", priority: "Indispensable", desc: "Calendario oficial Mexico LFT personalizable por RH." },
  { id: "notificaciones", name: "Notificaciones automaticas a CH", area: "Sistemas", priority: "Ideal", desc: "Alerta configurable por omision de entrada tras 30 minutos." },
  { id: "superadmin", name: "Superadmin de Sistemas", area: "Sistemas", priority: "Indispensable", desc: "Cuenta it@norcul.com con acceso total a configuracion tecnica." },
  { id: "capacidad", name: "Capacidad de usuarios", area: "Sistemas", priority: "Indispensable", desc: "Minimo 150 colaboradores y escalable a futuro." },
  { id: "offline", name: "Registro Offline", area: "Sistemas", priority: "Indispensable", desc: "Marcaje sin internet con timestamp, GPS local y sincronizacion automatica." },
  { id: "implementacion", name: "Soporte implementacion", area: "Sistemas", priority: "Indispensable", desc: "Acompanamiento del proveedor; criterio obligatorio de descalificacion." }
];

const providers = [
  {
    id: "fiscoclic",
    name: "FiscoClic",
    note: "Muy alineado a Mexico: asistencia, geocercas, facial/tablet, incidencias, horas extra y soporte local. Los cierres exactos 18:00/23:59 se dejan como parcial por requerir demo/configuracion.",
    sources: [
      ["Control de asistencia", "https://www.fiscoclic.mx/nomina/control-de-asistencia.html"],
      ["Kiosco y offline", "https://www.fiscoclic.mx/nomina/reloj-checador.html"],
      ["Integraciones por validar", "https://www.fiscoclic.mx/ayuda/"]
    ]
  },
  {
    id: "worky",
    name: "Worky",
    note: "Fuerte para operacion mexicana: reloj checador, geolocalizacion, facial, incidencias, nomina, turnos y multiples ubicaciones. Offline y reglas de cierre exactas deben validarse.",
    sources: [
      ["Reloj checador", "https://www.worky.mx/software-reloj-checador"],
      ["Control de asistencia", "https://www.worky.mx/software-control-de-asistencias"],
      ["API mencionada en sitio", "https://www.worky.mx/"]
    ]
  },
  {
    id: "buk",
    name: "BUK",
    note: "Buen candidato para CH: asistencia, geolocalizacion, horas extra, incidencias y reportes. La biometria publicada no confirma facial vectorial en tablet con fallback exacto.",
    sources: [
      ["Control de asistencia", "https://www.buk.mx/productos/administracion/control-de-asistencia"],
      ["Asistencia docs", "https://buk.freshdesk.com/es-LA/support/solutions/folders/69000644265"],
      ["API Buk", "https://supportcenter.buk.mx/hc/es-419/articles/36403636211995-C%C3%B3mo-integrarse-a-Buk-a-trav%C3%A9s-de-una-API"]
    ]
  },
  {
    id: "bizneo",
    name: "Bizneo",
    note: "Plataforma robusta de control horario, ausencias, documentos y reportes. Buen soporte funcional; se debe validar calculo LFT Mexico y reglas operativas especiales.",
    sources: [
      ["Control horario", "https://www.bizneo.com/control-horario/"],
      ["Vacaciones y ausencias", "https://www.bizneo.com/software-vacaciones-ausencias/"],
      ["API / integraciones", "https://www.bizneo.com/es-mx/"]
    ]
  },
  {
    id: "factorial",
    name: "Factorial",
    note: "Cumple bien gestion de horario, geolocalizacion, ausencias, documentos, reportes y API. Offline y calculo LFT Mexico requieren validacion; facial/tablet no queda plenamente probado.",
    sources: [
      ["Control horario", "https://help.factorialhr.com/es_ES/control-horario/sobre-los-sistemas-de-control-horario"],
      ["API", "https://apidoc.factorialhr.com/"],
      ["Ausencias", "https://help.factorialhr.com/es_ES/ausencias/"]
    ]
  },
  {
    id: "sesame",
    name: "Sesame HR",
    note: "Buen control horario con app, web, tablet, facial/QR/PIN, geolocalizacion, ausencias y reportes. Debe validarse LFT Mexico, API y offline.",
    sources: [
      ["Control horario", "https://www.sesamehr.es/software-control-horario/"],
      ["Control horario Mexico", "https://www.sesamehr.mx/software-control-horario/"],
      ["API", "https://developers.sesametime.com/"]
    ]
  },
  {
    id: "jibble",
    name: "Jibble",
    note: "Muy fuerte en marcaje, facial, geofencing, offline, reportes y API. Queda corto para gestion documental/legal mexicana y calculo LFT nativo.",
    sources: [
      ["Geofencing", "https://www.jibble.io/geofencing-attendance-system"],
      ["Facial recognition", "https://www.jibble.io/facial-recognition-attendance-system"],
      ["API", "https://docs.api.jibble.io/"]
    ]
  },
  {
    id: "conecteam",
    name: "Connecteam",
    note: "Buen time clock con GPS, geocercas, reportes, auto clock-out y API. No se confirma biometria facial formal, LFT Mexico ni offline.",
    sources: [
      ["Time clock", "https://connecteam.com/online-time-clock/"],
      ["API time clock", "https://developer.connecteam.com/docs/time-clock-overview"],
      ["Time off", "https://connecteam.com/employee-time-off-management/"]
    ]
  },
  {
    id: "humand",
    name: "Humand",
    note: "Tiene asistencia, geolocalizacion/API y funciones de RRHH, pero no se observa profundidad suficiente para reglas LFT, cierres especiales y documentos/incapacidades.",
    sources: [
      ["Time tracking", "https://www.humand.co/features/time-tracking"],
      ["API", "https://api-prod.humand.co/public/api/v1/api-docs/"],
      ["Product", "https://www.humand.co/product"]
    ]
  },
  {
    id: "insightful",
    name: "Insightful",
    note: "Orientado a monitoreo de productividad en computadora, no a checador fisico/campo con biometria, incidencias y permisos administrativos.",
    sources: [
      ["Time tracking", "https://www.insightful.io/time-tracking"],
      ["Employee monitoring", "https://www.insightful.io/employee-monitoring"],
      ["API", "https://developers.insightful.io/"]
    ]
  },
  {
    id: "zkbio",
    name: "ZKBio Zlink",
    note: "Adecuado para ecosistema ZKTeco/hardware y asistencia tecnica. No cubre bien expediente documental, flujos RH, LFT Mexico ni API moderna para nomina.",
    sources: [
      ["ZKBio Zlink", "https://www.zkteco.com/en/ZKBio_Zlink"],
      ["ZKBio Time", "https://www.zkteco.com/en/ZKBio_Time"],
      ["Mobile attendance", "https://www.zkteco.com/"]
    ]
  },
  {
    id: "biotime",
    name: "BioTime Cloud",
    note: "Sistema de asistencia ZKTeco con dispositivos y app movil. Funciona para marcaje, pero no como gestor completo de CH con documentos, LFT y flujos complejos.",
    sources: [
      ["BioTime Cloud 2.0", "https://www.zkteco.in/Cloud-Attendance-Software/BioTime-Cloud-2.0"],
      ["BioTime 8", "https://www.zkteco.com/en/BioTime8"],
      ["ZKTeco", "https://www.zkteco.com/"]
    ]
  },
  {
    id: "timework",
    name: "TimeWork",
    note: "Solucion tradicional de asistencia con incidencias y reportes. Se queda corta para app moderna, API, offline, geofencing y flujos avanzados.",
    sources: [
      ["TimeWork", "https://www.relojchecador.com/timework/"],
      ["Control de asistencia", "https://www.relojchecador.com/"],
      ["Incidencias", "https://www.relojchecador.com/timework/"]
    ]
  },
  {
    id: "timeoffice",
    name: "Time Office",
    note: "En la investigacion publica aparece como alternativa tradicional/hardware. Falta evidencia verificable de app moderna, API, geocercas e incidencias avanzadas.",
    sources: [
      ["Referencia del PDF", "#"],
      ["Validar con proveedor", "#"],
      ["Sin ficha publica solida", "#"]
    ]
  },
  {
    id: "appchecar",
    name: "AppChecar",
    note: "Cubre asistencia movil con ubicacion, reportes y algunas incidencias. El facial parece foto/selfie, no facial vectorial; faltan reglas LFT, offline y flujos complejos.",
    sources: [
      ["AppChecar", "https://appchecar.com/"],
      ["Funciones", "https://appchecar.com/sistema-control-asistencia"],
      ["API/Integraciones", "https://appchecar.com/"]
    ]
  }
];

const C = "C";
const P = "P";
const V = "V";
const N = "N";

const statusLabels = {
  C: "Cumple",
  P: "Parcial",
  V: "Por validar",
  N: "No cumple"
};

const statusClasses = {
  C: "ok",
  P: "partial",
  V: "validate",
  N: "bad"
};

const statusNotes = {
  C: "Hay evidencia publica suficiente para marcarlo como cumple.",
  P: "Hay evidencia parcial, pero falta una regla exacta del PDF o configuracion especifica.",
  V: "No encontre evidencia publica suficiente; debe preguntarse en demo o propuesta.",
  N: "La evidencia publica no muestra esta capacidad o contradice el requisito."
};

const requirementReasons = {
  "eventos-jornada": {
    C: "publica marcajes de entrada/salida con hora por empleado.",
    P: "maneja asistencia, pero no confirma todos los eventos de comida o trazabilidad por evento.",
    V: "los eventos exactos de jornada y comida.",
    N: "registro completo de entrada, comida y salida con timestamp."
  },
  "eventos-campo": {
    C: "soporta marcajes moviles o de campo con ubicacion.",
    P: "tiene app/GPS, pero no confirma llegada y salida de sitio como eventos separados.",
    V: "llegada y salida de sitio como eventos propios.",
    N: "eventos operativos para personal en campo."
  },
  "calculo-horas": {
    C: "calcula horas trabajadas y horas extra con reglas configurables.",
    P: "calcula asistencia u horas extra, pero no confirma la separacion NORCUL entre adicionales y extra LFT.",
    V: "calculo separado de horas adicionales y horas extra por dia/semana.",
    N: "calculo automatico de horas con la regla solicitada."
  },
  "biometrico": {
    C: "ofrece reconocimiento facial o biometria para asistencia.",
    P: "menciona facial/biometria, pero no confirma vector facial encriptado ni fallback tras 2 intentos.",
    V: "almacenamiento vectorial encriptado y alerta por fallo facial.",
    N: "biometria facial conforme al requerimiento."
  },
  "app-gps": {
    C: "permite marcaje desde app movil con GPS/geolocalizacion.",
    P: "usa ubicacion movil, pero no confirma restriccion a dispositivos empresariales registrados.",
    V: "uso exclusivo desde equipos empresariales registrados.",
    N: "marcaje movil con GPS."
  },
  "perfiles-horario": {
    C: "permite configurar horarios, turnos o perfiles de jornada.",
    P: "maneja turnos, pero no confirma todos los perfiles NORCUL.",
    V: "perfiles completo, pasante, campo/remoto, monitoreo, dual y abierto.",
    N: "perfiles de horario configurables."
  },
  "historial-perfiles": {
    C: "mantiene historiales o asignaciones vigentes por empleado.",
    P: "hay gestion de horarios, pero no confirma historial inmutable.",
    V: "historial inmutable de cambios de perfil.",
    N: "historial de perfiles por empleado."
  },
  "perfiles-abiertos": {
    C: "admite jornadas flexibles sin horario fijo.",
    P: "tiene turnos flexibles, pero no confirma perfil abierto sin cierre 23:59.",
    V: "perfil abierto para viajes/nocturno sin horario fijo.",
    N: "perfil abierto para viajes o nocturno."
  },
  "excepciones-temporales": {
    C: "permite excepciones temporales o ajustes sin cambiar el perfil base.",
    P: "permite ajustes, pero no confirma bandera formal de excepcion activa.",
    V: "bandera de excepcion temporal sin alterar el perfil base.",
    N: "excepciones temporales de perfil."
  },
  retardos: {
    C: "incluye calculo o reglas de retardos configurables.",
    P: "maneja retardos, pero no confirma la regla exacta 1-6 y desde minuto 11.",
    V: "clasificacion menor/mayor con esos rangos exactos.",
    N: "clasificacion automatica de retardos."
  },
  "cierre-2359": {
    C: "permite cierre automatico de turnos sin salida.",
    P: "tiene cierre automatico, pero no confirma excepcion nocturno/excepcion activa.",
    V: "cierre 23:59 con excepciones nocturnas y temporales.",
    N: "cierre automatico de jornada a las 23:59."
  },
  "cierre-remotos": {
    C: "permite reglas de cierre por perfil remoto.",
    P: "tiene reglas de jornada, pero no confirma cierre remoto a las 18:00 sin horas extra/adicionales.",
    V: "cierre remoto 18:00 y bloqueo de horas extra/adicionales.",
    N: "cierre automatico especifico para remotos."
  },
  "estadistica-cierres": {
    C: "reporta turnos incompletos o cerrados automaticamente.",
    P: "reporta incidencias/asistencia, pero no confirma estadistica dedicada de cierres del sistema.",
    V: "reporte de cuales turnos cerro automaticamente.",
    N: "estadisticas de cierres automaticos."
  },
  "monitoreo-nocturno": {
    C: "permite gestionar turnos nocturnos activos.",
    P: "maneja turnos, pero no confirma visualizacion de activos fuera de horario ni sin cierre automatico.",
    V: "turnos nocturnos activos sin cierre automatico.",
    N: "monitoreo nocturno operativo."
  },
  vacaciones: {
    C: "incluye solicitud y aprobacion de vacaciones.",
    P: "maneja ausencias, pero no confirma el flujo RH/jefe solicitado.",
    V: "flujo exacto de vacaciones aprobado por RH o jefe.",
    N: "gestion de vacaciones desde plataforma."
  },
  "permisos-goce": {
    C: "permite permisos/ausencias con aprobacion.",
    P: "tiene permisos, pero no confirma categorias y subtipos exactos con goce.",
    V: "categorias educativo, gubernamental, personal y familiar con subtipos.",
    N: "permisos con goce configurables."
  },
  "permisos-sin-goce": {
    C: "permite permisos sin goce o ausencias no pagadas.",
    P: "maneja ausencias, pero no confirma aprobacion previa y mismas categorias.",
    V: "permiso sin goce con categorias y aprobacion previa.",
    N: "permisos sin goce."
  },
  incapacidad: {
    C: "permite registrar incapacidades con documento y aprobacion.",
    P: "maneja ausencias/documentos, pero no confirma incapacidad medica obligatoria con RH.",
    V: "incapacidad medica con adjunto obligatorio y aprobacion RH.",
    N: "gestion de incapacidad medica."
  },
  "flujo-autorizacion": {
    C: "incluye aprobaciones de solicitudes por responsables.",
    P: "tiene aprobaciones, pero no confirma escalamiento automatico a RH tras 48 horas habiles.",
    V: "escalamiento automatico a RH despues de 48 horas habiles.",
    N: "flujo de autorizacion requerido."
  },
  documentos: {
    C: "permite adjuntar archivos a incidencias, permisos o expedientes.",
    P: "maneja documentos en alguna parte del sistema, pero no confirma adjuntos por incidencia/permiso.",
    V: "adjuntos PDF o imagen directamente en incidencias y permisos.",
    N: "gestion documental para incidencias."
  },
  "reportes-filtrables": {
    C: "ofrece reportes de asistencia con filtros.",
    P: "tiene reportes, pero no confirma todos los filtros del PDF.",
    V: "filtros por empleado, area, sucursal, incidencia, periodo y esquema.",
    N: "reportes filtrables de asistencia."
  },
  "export-pdf-excel": {
    C: "permite exportar reportes a Excel/PDF o formatos equivalentes.",
    P: "exporta datos, pero no confirma PDF y Excel con las columnas minimas.",
    V: "exportacion exacta a PDF y Excel.",
    N: "exportacion de reportes."
  },
  columnas: {
    C: "permite configurar o personalizar reportes.",
    P: "tiene reportes, pero no confirma columnas personalizables por administrador.",
    V: "personalizacion de columnas por administrador.",
    N: "columnas personalizables."
  },
  api: {
    C: "publica API o integraciones para extraccion de datos.",
    P: "ofrece exportaciones o integraciones limitadas, pero no API REST completa.",
    V: "API REST util para nomina.",
    N: "API o integracion moderna."
  },
  multisitio: {
    C: "soporta varias ubicaciones/sucursales en administracion central.",
    P: "maneja ubicaciones, pero no confirma entrada en una sede y salida en otra.",
    V: "entrada en una sucursal y salida en otra con ambas identificadas.",
    N: "operacion multi-sitio."
  },
  geofences: {
    C: "incluye geocercas o radios GPS configurables.",
    P: "usa ubicacion GPS, pero no confirma geofence de domicilio 100m configurable.",
    V: "geofence de sucursales y domicilio remoto con radio configurable.",
    N: "geofences configurables."
  },
  festivos: {
    C: "permite calendario de festivos o reglas laborales configurables.",
    P: "maneja calendarios, pero no confirma festivos Mexico LFT editables por RH.",
    V: "calendario LFT Mexico editable por RH.",
    N: "dias festivos configurables."
  },
  notificaciones: {
    C: "incluye alertas automaticas por asistencia.",
    P: "tiene notificaciones, pero no confirma alerta 30 minutos solo dias laborales.",
    V: "alerta a CH despues de 30 minutos segun perfil laboral.",
    N: "notificaciones automaticas a CH."
  },
  superadmin: {
    C: "permite perfiles de administrador con acceso total.",
    P: "tiene administradores, pero no confirma una cuenta superadmin tecnica sin restriccion de area.",
    V: "superadmin it@norcul.com con acceso tecnico total.",
    N: "superadministrador tecnico."
  },
  capacidad: {
    C: "la plataforma es SaaS/empresarial y supera 150 usuarios.",
    P: "parece soportarlo, pero no publica capacidad o escalabilidad claramente.",
    V: "capacidad minima de 150 usuarios simultaneos.",
    N: "capacidad requerida de usuarios."
  },
  offline: {
    C: "publica marcaje sin conexion con sincronizacion posterior.",
    P: "menciona app movil, pero no confirma offline con GPS/timestamp y revision por latencia.",
    V: "offline con timestamp, GPS local, sync y pendiente_revision si tarda mas de 2h.",
    N: "registro offline."
  },
  implementacion: {
    C: "ofrece acompanamiento o soporte de implementacion.",
    P: "tiene soporte comercial, pero no confirma acompanamiento obligatorio de implementacion.",
    V: "servicio formal de implementacion acompanada.",
    N: "acompanamiento de implementacion."
  }
};

function reasonFor(provider, req, status) {
  const reason = requirementReasons[req.id]?.[status] || statusNotes[status];
  if (status === C) return `Cumple porque ${reason}`;
  if (status === P) return `Parcial: ${reason}`;
  if (status === V) return `Por validar: no hay evidencia publica clara de ${reason}`;
  return `No cumple: no se encontro evidencia publica suficiente de ${reason}`;
}

function byStatus(c = [], p = [], v = [], n = []) {
  const result = Object.fromEntries(requirements.map((req) => [req.id, N]));
  c.forEach((id) => (result[id] = C));
  p.forEach((id) => (result[id] = P));
  v.forEach((id) => (result[id] = V));
  n.forEach((id) => (result[id] = N));
  return result;
}

const evaluationDefaults = {
  fiscoclic: byStatus(
    ["eventos-jornada", "eventos-campo", "calculo-horas", "app-gps", "perfiles-horario", "retardos", "estadistica-cierres", "vacaciones", "permisos-goce", "permisos-sin-goce", "incapacidad", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "api", "multisitio", "geofences", "festivos", "capacidad", "offline", "implementacion"],
    ["biometrico", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "monitoreo-nocturno", "notificaciones", "superadmin"]
  ),
  worky: byStatus(
    ["eventos-jornada", "eventos-campo", "calculo-horas", "app-gps", "perfiles-horario", "retardos", "estadistica-cierres", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "reportes-filtrables", "export-pdf-excel", "columnas", "multisitio", "geofences", "festivos", "capacidad", "implementacion"],
    ["biometrico", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "monitoreo-nocturno", "incapacidad", "documentos", "api", "notificaciones", "superadmin"],
    ["offline"]
  ),
  buk: byStatus(
    ["eventos-jornada", "calculo-horas", "app-gps", "perfiles-horario", "historial-perfiles", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "incapacidad", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "multisitio", "festivos", "capacidad", "implementacion"],
    ["eventos-campo", "biometrico", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "api", "geofences", "notificaciones", "superadmin"],
    ["offline"]
  ),
  bizneo: byStatus(
    ["eventos-jornada", "eventos-campo", "biometrico", "app-gps", "perfiles-horario", "vacaciones", "permisos-goce", "permisos-sin-goce", "incapacidad", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "multisitio", "geofences", "capacidad", "offline"],
    ["calculo-horas", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "retardos", "estadistica-cierres", "monitoreo-nocturno", "api", "festivos", "notificaciones", "superadmin", "implementacion"],
    ["cierre-2359", "cierre-remotos"]
  ),
  factorial: byStatus(
    ["eventos-jornada", "app-gps", "perfiles-horario", "historial-perfiles", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "api", "multisitio", "geofences", "notificaciones", "capacidad"],
    ["eventos-campo", "calculo-horas", "biometrico", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "incapacidad", "festivos", "superadmin", "implementacion"],
    [],
    ["offline"]
  ),
  sesame: byStatus(
    ["eventos-jornada", "biometrico", "app-gps", "perfiles-horario", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "reportes-filtrables", "export-pdf-excel", "multisitio", "geofences", "capacidad"],
    ["eventos-campo", "calculo-horas", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "retardos", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "incapacidad", "documentos", "columnas", "api", "festivos", "notificaciones", "superadmin", "implementacion"],
    ["offline"]
  ),
  jibble: byStatus(
    ["eventos-jornada", "biometrico", "app-gps", "perfiles-horario", "reportes-filtrables", "export-pdf-excel", "api", "geofences", "notificaciones", "capacidad", "offline"],
    ["eventos-campo", "calculo-horas", "retardos", "cierre-2359", "estadistica-cierres", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "superadmin", "implementacion"],
    ["historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-remotos", "monitoreo-nocturno", "festivos"],
    ["incapacidad", "documentos"]
  ),
  conecteam: byStatus(
    ["eventos-jornada", "app-gps", "cierre-2359", "estadistica-cierres", "vacaciones", "flujo-autorizacion", "reportes-filtrables", "export-pdf-excel", "api", "multisitio", "geofences", "notificaciones", "capacidad"],
    ["eventos-campo", "calculo-horas", "biometrico", "perfiles-horario", "historial-perfiles", "retardos", "cierre-remotos", "monitoreo-nocturno", "permisos-goce", "permisos-sin-goce", "documentos", "columnas", "superadmin", "implementacion"],
    ["perfiles-abiertos", "excepciones-temporales", "festivos"],
    ["incapacidad", "offline"]
  ),
  humand: byStatus(
    ["eventos-jornada", "biometrico", "app-gps", "api", "capacidad"],
    ["eventos-campo", "perfiles-horario", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "multisitio", "geofences", "notificaciones", "superadmin", "implementacion"],
    ["historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "retardos", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "columnas", "festivos", "offline"],
    ["calculo-horas", "incapacidad"]
  ),
  insightful: byStatus(
    ["eventos-jornada", "reportes-filtrables", "api", "notificaciones", "capacidad"],
    ["perfiles-horario", "vacaciones", "flujo-autorizacion", "export-pdf-excel", "columnas", "superadmin", "implementacion"],
    ["calculo-horas", "historial-perfiles", "festivos"],
    ["eventos-campo", "biometrico", "app-gps", "perfiles-abiertos", "excepciones-temporales", "retardos", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "permisos-goce", "permisos-sin-goce", "incapacidad", "documentos", "multisitio", "geofences", "offline"]
  ),
  zkbio: byStatus(
    ["eventos-jornada", "biometrico", "perfiles-horario", "retardos", "reportes-filtrables", "export-pdf-excel", "capacidad"],
    ["app-gps", "historial-perfiles", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "superadmin", "implementacion"],
    ["eventos-campo", "calculo-horas", "cierre-2359", "cierre-remotos", "estadistica-cierres", "festivos", "offline"],
    ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno", "incapacidad", "documentos", "api", "geofences", "notificaciones"]
  ),
  biotime: byStatus(
    ["eventos-jornada", "biometrico", "perfiles-horario", "retardos", "vacaciones", "reportes-filtrables", "export-pdf-excel", "capacidad"],
    ["eventos-campo", "app-gps", "historial-perfiles", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "geofences", "superadmin", "implementacion"],
    ["calculo-horas", "cierre-2359", "cierre-remotos", "estadistica-cierres", "festivos", "offline"],
    ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno", "incapacidad", "documentos", "api", "notificaciones"]
  ),
  timework: byStatus(
    ["eventos-jornada", "calculo-horas", "perfiles-horario", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "reportes-filtrables", "export-pdf-excel", "columnas", "festivos", "capacidad"],
    ["eventos-campo", "biometrico", "app-gps", "historial-perfiles", "incapacidad", "flujo-autorizacion", "documentos", "multisitio", "superadmin", "implementacion"],
    ["cierre-2359", "cierre-remotos", "estadistica-cierres"],
    ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno", "api", "geofences", "notificaciones", "offline"]
  ),
  timeoffice: byStatus(
    ["eventos-jornada"],
    ["biometrico", "perfiles-horario", "reportes-filtrables", "export-pdf-excel", "capacidad"],
    ["calculo-horas", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "implementacion"],
    ["eventos-campo", "app-gps", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "incapacidad", "documentos", "api", "geofences", "festivos", "notificaciones", "superadmin", "offline"]
  ),
  appchecar: byStatus(
    ["eventos-jornada", "eventos-campo", "app-gps", "reportes-filtrables", "export-pdf-excel", "api", "geofences", "capacidad"],
    ["calculo-horas", "biometrico", "perfiles-horario", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "documentos", "columnas", "multisitio", "festivos", "notificaciones", "superadmin", "implementacion"],
    ["historial-perfiles", "cierre-2359", "cierre-remotos", "estadistica-cierres", "incapacidad", "offline"],
    ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno"]
  )
};

const costRows = [
  {
    provider: "FiscoClic",
    base: "75 colaboradores",
    monthlyNoTax: 3528,
    monthlyTax: 4092.48,
    annualTax: 36832.32,
    annualText: "$36,832.32",
    implementationStatus: "Incluida",
    implementation: "Implementacion incluida segun cotizacion revisada.",
    training: "Por confirmar alcance exacto.",
    dataLoad: "Por confirmar.",
    notes: "Validar Mobile Tracking, WhatsApp Cloud API, biometria, tablet y carga inicial."
  },
  {
    provider: "BUK",
    base: "85 colaboradores",
    monthlyNoTax: 8573,
    monthlyTax: 9944.68,
    annualTax: 119336.16,
    annualText: "$119,336.16",
    implementationStatus: "Incluida",
    implementation: "Implementacion agil incluida; atencion a clientes incluida.",
    training: "Incluida dentro del proceso.",
    dataLoad: "Por confirmar si incluye historicos.",
    notes: "Opcion mas fuerte funcionalmente; validar COMPAQ y alcance del piloto."
  },
  {
    provider: "Worky",
    base: "80 colaboradores + 2 admins",
    monthlyNoTax: 6598,
    monthlyTax: 7653.68,
    annualTax: 79595,
    annualText: "$79,595 aprox.",
    implementationStatus: "Incluida",
    implementation: "Implementacion menor a 45 dias si se entrega informacion.",
    training: "Capacitacion basica/remota incluida; extras pueden costar.",
    dataLoad: "Por confirmar.",
    notes: "Fuerte para campo; validar COMPAQ, horas extra de soporte y carga historica."
  },
  {
    provider: "Factorial",
    base: "85 colaboradores",
    monthlyNoTax: 8602,
    monthlyTax: 9978.32,
    annualTax: null,
    annualText: "Por confirmar",
    implementationStatus: "Costo adicional",
    implementation: "Ejecutivo de implementacion $6,895 + IVA.",
    training: "Horas extra por confirmar.",
    dataLoad: "Por confirmar.",
    notes: "No cerrar decision hasta recibir cotizacion formal."
  },
  {
    provider: "Bizneo",
    base: "80 usuarios",
    monthlyNoTax: 3200,
    monthlyTax: 3712,
    annualTax: 53824,
    annualText: "$53,824 primer ano con onboarding",
    implementationStatus: "Costo adicional",
    implementation: "Onboarding / implantacion de producto $8,000 + IVA.",
    training: "Validar si esta incluida en onboarding.",
    dataLoad: "Validar alcance.",
    notes: "Precio competitivo, pero el onboarding debe considerarse en el costo real."
  },
  {
    provider: "Sesame HR",
    base: "85 colaboradores",
    monthlyNoTax: 8925,
    monthlyTax: 10353,
    annualTax: 94656,
    annualText: "$94,656.00",
    implementationStatus: "Incluida",
    implementation: "Implementacion incluida.",
    training: "Capacitacion inicial incluida.",
    dataLoad: "Por confirmar alcance.",
    notes: "Incluye soporte y Account Manager; validar COMPAQ y reglas de asistencia."
  }
];

const pendingRows = [
  { provider: "BUK", topic: "COMPAQ", question: "Confirmar integracion directa, API o layout exportable para nomina.", priority: "Alta", owner: "IT / Proveedor", due: "4 julio", status: "Pendiente" },
  { provider: "BUK", topic: "Piloto", question: "Confirmar si la prueba tiene costo, duracion y alcance de implementacion.", priority: "Alta", owner: "IT / CH", due: "4 julio", status: "Pendiente" },
  { provider: "BUK", topic: "Carga inicial", question: "Confirmar si incluye carga de usuarios, horarios, centros, supervisores e historicos.", priority: "Media", owner: "Proveedor", due: "7 julio", status: "Por validar en demo" },
  { provider: "FiscoClic", topic: "Cierre automatico", question: "Validar cierre 23:59 y cierre remoto 18:00 con reglas reales de NORCUL.", priority: "Alta", owner: "Proveedor", due: "4 julio", status: "Pendiente" },
  { provider: "FiscoClic", topic: "Costos adicionales", question: "Confirmar costo de Mobile Tracking, WhatsApp Cloud API, biometria y tablet.", priority: "Alta", owner: "Proveedor", due: "4 julio", status: "Pendiente" },
  { provider: "FiscoClic", topic: "COMPAQ", question: "Solicitar ejemplo de reporte o layout compatible para nomina.", priority: "Alta", owner: "IT / Proveedor", due: "4 julio", status: "Pendiente" },
  { provider: "Worky", topic: "COMPAQ", question: "Confirmar layout de exportacion para incidencias, horas extra y asistencia.", priority: "Alta", owner: "IT / Proveedor", due: "4 julio", status: "Pendiente" },
  { provider: "Worky", topic: "Capacitacion", question: "Confirmar cuantas horas incluye la propuesta y costo de horas adicionales.", priority: "Media", owner: "Proveedor", due: "7 julio", status: "Por validar en demo" },
  { provider: "Worky", topic: "Implementacion", question: "Confirmar si el piloto puede quedar listo antes del 15 de julio.", priority: "Alta", owner: "Proveedor / IT", due: "4 julio", status: "Pendiente" },
  { provider: "Sesame HR", topic: "COMPAQ", question: "Validar exportacion compatible y columnas necesarias para nomina.", priority: "Alta", owner: "IT / Proveedor", due: "7 julio", status: "Pendiente" },
  { provider: "Bizneo", topic: "Onboarding", question: "Confirmar si el onboarding de $8,000 + IVA incluye carga, capacitacion y configuracion.", priority: "Alta", owner: "Proveedor", due: "7 julio", status: "Pendiente" },
  { provider: "Factorial", topic: "Cotizacion formal", question: "Solicitar costo anual final, modulos incluidos e implementacion total.", priority: "Alta", owner: "Proveedor", due: "7 julio", status: "Pendiente" },
  { provider: "General", topic: "Administrador", question: "Confirmar que el usuario administrador principal pueda ser it@norcul.com.", priority: "Alta", owner: "IT / Proveedor", due: "4 julio", status: "Pendiente" },
  { provider: "General", topic: "Rollout", question: "Confirmar tiempo estimado para pasar del piloto a toda la empresa.", priority: "Media", owner: "Proveedor / CH", due: "7 julio", status: "Pendiente" }
];

const pilotRows = [
  { area: "Registro diario", question: "El usuario pudo registrar entrada y salida sin ayuda?", owner: "Usuarios piloto", evidence: "Prueba diaria en app/tablet", scale: "1 a 5" },
  { area: "Campo", question: "La ubicacion y geocerca funcionaron correctamente en campo?", owner: "Operacion", evidence: "Marcajes de campo con coordenadas", scale: "1 a 5" },
  { area: "Incidencias", question: "CH pudo revisar permisos, faltas, retardos y horas extra con claridad?", owner: "CH", evidence: "Reporte de incidencias", scale: "1 a 5" },
  { area: "Aprobaciones", question: "El flujo de autorizacion fue claro para supervisor y CH?", owner: "CH / Supervisores", evidence: "Solicitud aprobada y rechazada", scale: "1 a 5" },
  { area: "Reportes", question: "El reporte permite tomar decisiones sin retrabajo?", owner: "CH", evidence: "Excel/PDF exportado", scale: "1 a 5" },
  { area: "Nomina", question: "La informacion sale en formato util para COMPAQ?", owner: "IT / CH", evidence: "Archivo de prueba para nomina", scale: "1 a 5" },
  { area: "Soporte", question: "El proveedor respondio rapido y resolvio dudas?", owner: "IT / CH", evidence: "Tiempo de respuesta y solucion", scale: "1 a 5" },
  { area: "Experiencia general", question: "CH recomendaria implementar esta herramienta?", owner: "CH", evidence: "Conclusion del piloto", scale: "Si / No / Condicionado" }
];

const state = {
  activeProviderId: providers[0].id,
  search: "",
  area: "all",
  priority: "all",
  status: "all",
  sort: "asc",
  costSearch: "",
  costImplementation: "all",
  costSort: "monthlyAsc",
  pendingSearch: "",
  pendingProvider: "all",
  pendingPriority: "all",
  pendingStatus: "all",
  pilotSearch: "",
  pilotOwner: "all",
  evaluations: loadEvaluations()
};

function loadEvaluations() {
  const saved = localStorage.getItem("checador-evaluations-v2");
  if (saved) return JSON.parse(saved);
  return structuredClone(evaluationDefaults);
}

function saveEvaluations() {
  localStorage.setItem("checador-evaluations-v2", JSON.stringify(state.evaluations));
}

function weight(priority) {
  if (priority === "Indispensable") return 5;
  if (priority === "Basico") return 2;
  return 1;
}

function getScore(providerId) {
  const total = requirements.reduce((sum, req) => sum + weight(req.priority), 0);
  const earned = requirements.reduce((sum, req) => {
    const status = state.evaluations[providerId][req.id];
    const ratio = status === C ? 1 : status === P ? 0.5 : status === V ? 0.2 : 0;
    return sum + weight(req.priority) * ratio;
  }, 0);
  const missingCritical = requirements.filter((req) => req.priority === "Indispensable" && state.evaluations[providerId][req.id] !== C);
  return {
    percent: Math.round((earned / total) * 100),
    missingCritical: missingCritical.length,
    status: missingCritical.length ? "Descalificado" : "Cumple indispensables"
  };
}

function filteredRequirements() {
  const text = state.search.trim().toLowerCase();
  return requirements.filter((req) => {
    const matchesText = !text || `${req.name} ${req.desc} ${req.area}`.toLowerCase().includes(text);
    const matchesArea = state.area === "all" || req.area.includes(state.area);
    const matchesPriority = state.priority === "all" || req.priority === state.priority;
    const matchesStatus = state.status === "all" || state.evaluations[state.activeProviderId][req.id] === state.status;
    return matchesText && matchesArea && matchesPriority && matchesStatus;
  });
}

function orderedProviders() {
  const text = state.search.trim().toLowerCase();
  let list = providers.filter((provider) => !text || provider.name.toLowerCase().includes(text) || filteredRequirements().length);
  if (state.sort === "name") return list.sort((a, b) => a.name.localeCompare(b.name));
  return list.sort((a, b) => {
    const diff = getScore(a.id).percent - getScore(b.id).percent;
    return state.sort === "asc" ? diff : -diff;
  });
}

function renderFilters() {
  const areas = [...new Set(requirements.flatMap((req) => req.area.split(" / ")))].sort();
  const areaFilter = document.querySelector("#areaFilter");
  areas.forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    areaFilter.append(option);
  });

  const pendingProviderFilter = document.querySelector("#pendingProviderFilter");
  [...new Set(pendingRows.map((row) => row.provider))].sort().forEach((provider) => {
    const option = document.createElement("option");
    option.value = provider;
    option.textContent = provider;
    pendingProviderFilter.append(option);
  });

  const pilotOwnerFilter = document.querySelector("#pilotOwnerFilter");
  [...new Set(pilotRows.map((row) => row.owner))].sort().forEach((owner) => {
    const option = document.createElement("option");
    option.value = owner;
    option.textContent = owner;
    pilotOwnerFilter.append(option);
  });
}

function renderProviders() {
  const list = document.querySelector("#providerList");
  const template = document.querySelector("#providerTemplate");
  list.innerHTML = "";

  orderedProviders().forEach((provider) => {
    const score = getScore(provider.id);
    const node = template.content.firstElementChild.cloneNode(true);
    node.classList.toggle("active", provider.id === state.activeProviderId);
    node.querySelector(".provider-title").textContent = provider.name;
    node.querySelector(".provider-score").textContent = `${score.percent}%`;
    node.querySelector(".provider-status").textContent = `${score.status} (${score.missingCritical} indispensables sin cumplimiento total)`;
    node.addEventListener("click", () => {
      state.activeProviderId = provider.id;
      render();
    });
    list.append(node);
  });
}

function renderRequirements() {
  const list = document.querySelector("#requirementList");
  const template = document.querySelector("#requirementTemplate");
  const active = providers.find((provider) => provider.id === state.activeProviderId);
  const score = getScore(active.id);

  document.querySelector("#activeProviderName").textContent = active.name;
  document.querySelector("#activeScore").textContent = `${score.percent}%`;
  document.querySelector("#activeStatus").textContent = score.status;
  document.querySelector("#activeProviderMeta").textContent = active.note;

  list.innerHTML = "";
  const reqs = filteredRequirements();
  if (!reqs.length) {
    list.innerHTML = '<p class="empty-state">No hay requerimientos con esos filtros.</p>';
    return;
  }

  reqs.forEach((req) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const select = node.querySelector(".status-select");
    Object.entries(statusLabels).forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      select.append(option);
    });
    select.value = state.evaluations[active.id][req.id];
    select.className = `status-select cell-${statusClasses[select.value]}`;
    select.addEventListener("change", () => {
      state.evaluations[active.id][req.id] = select.value;
      saveEvaluations();
      render();
    });
    node.querySelector(".req-name").textContent = req.name;
    node.querySelector(".req-meta").textContent = `${req.area} | ${req.priority}`;
    node.querySelector(".req-desc").textContent = req.desc;
    node.querySelector(".req-note").textContent = reasonFor(active, req, state.evaluations[active.id][req.id]);
    list.append(node);
  });
}

function renderRanking() {
  const ranking = document.querySelector("#ranking");
  ranking.innerHTML = "";
  orderedProviders().forEach((provider, index) => {
    const score = getScore(provider.id);
    const row = document.createElement("article");
    row.className = "rank-row";
    const statusClass = score.missingCritical ? "status-bad" : score.percent >= 85 ? "status-ok" : "status-partial";
    row.innerHTML = `
      <strong>${index + 1}. ${provider.name}</strong>
      <div class="bar" aria-label="Cumplimiento ${score.percent}%"><span style="width:${score.percent}%"></span></div>
      <strong>${score.percent}%</strong>
      <span class="${statusClass}">${score.status}</span>
    `;
    ranking.append(row);
  });
}

function renderMatrix() {
  const table = document.querySelector("#matrixTable");
  const reqs = filteredRequirements();
  const header = `
    <thead>
      <tr>
        <th>Requerimiento</th>
        ${providers.map((provider) => `<th>${provider.name}</th>`).join("")}
      </tr>
    </thead>
  `;
  const body = reqs
    .map((req) => {
      const cells = providers
        .map((provider) => {
          const status = state.evaluations[provider.id][req.id];
          return `<td><span title="${reasonFor(provider, req, status)}" class="matrix-status cell-${statusClasses[status]}">${statusLabels[status]}</span></td>`;
        })
        .join("");
      return `<tr><td><strong>${req.name}</strong><br><small>${req.area} | ${req.priority}</small></td>${cells}</tr>`;
    })
    .join("");
  table.innerHTML = `${header}<tbody>${body}</tbody>`;
}

function money(value) {
  if (value === null || value === undefined) return "Por confirmar";
  return value.toLocaleString("es-MX", { style: "currency", currency: "MXN" });
}

function tagClass(value) {
  if (value === "Alta" || value === "Costo adicional") return "tag-high";
  if (value === "Media" || value === "Por validar en demo" || value === "Por confirmar") return "tag-medium";
  if (value === "Incluida" || value === "Confirmado") return "tag-ok";
  return "tag-neutral";
}

function renderCostTable() {
  const table = document.querySelector("#costTable");
  const text = state.costSearch.trim().toLowerCase();
  let rows = costRows.filter((row) => {
    const haystack = `${row.provider} ${row.base} ${row.implementationStatus} ${row.implementation} ${row.training} ${row.dataLoad} ${row.notes}`.toLowerCase();
    const matchesText = !text || haystack.includes(text);
    const matchesImplementation = state.costImplementation === "all" || row.implementationStatus === state.costImplementation;
    return matchesText && matchesImplementation;
  });

  rows = rows.sort((a, b) => {
    if (state.costSort === "provider") return a.provider.localeCompare(b.provider);
    const aValue = a.monthlyTax ?? Number.MAX_SAFE_INTEGER;
    const bValue = b.monthlyTax ?? Number.MAX_SAFE_INTEGER;
    return state.costSort === "monthlyDesc" ? bValue - aValue : aValue - bValue;
  });

  table.innerHTML = `
    <thead>
      <tr>
        <th>Proveedor</th>
        <th>Base cotizada</th>
        <th>Mensual sin IVA</th>
        <th>Mensual con IVA</th>
        <th>Anual con IVA</th>
        <th>Implementacion</th>
        <th>Capacitacion</th>
        <th>Carga inicial</th>
        <th>Observaciones</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) => `
            <tr>
              <td><strong>${row.provider}</strong></td>
              <td>${row.base}</td>
              <td class="number-cell">${money(row.monthlyNoTax)}</td>
              <td class="number-cell">${money(row.monthlyTax)}</td>
              <td class="number-cell">${row.annualText}</td>
              <td><span class="tag ${tagClass(row.implementationStatus)}">${row.implementationStatus}</span><br><small>${row.implementation}</small></td>
              <td>${row.training}</td>
              <td>${row.dataLoad}</td>
              <td>${row.notes}</td>
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;
}

function renderPendingTable() {
  const table = document.querySelector("#pendingTable");
  const text = state.pendingSearch.trim().toLowerCase();
  const rows = pendingRows.filter((row) => {
    const haystack = `${row.provider} ${row.topic} ${row.question} ${row.owner} ${row.status}`.toLowerCase();
    const matchesText = !text || haystack.includes(text);
    const matchesProvider = state.pendingProvider === "all" || row.provider === state.pendingProvider;
    const matchesPriority = state.pendingPriority === "all" || row.priority === state.pendingPriority;
    const matchesStatus = state.pendingStatus === "all" || row.status === state.pendingStatus;
    return matchesText && matchesProvider && matchesPriority && matchesStatus;
  });

  table.innerHTML = `
    <thead>
      <tr>
        <th>Proveedor</th>
        <th>Tema</th>
        <th>Pregunta a confirmar</th>
        <th>Prioridad</th>
        <th>Responsable</th>
        <th>Fecha limite</th>
        <th>Estatus</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) => `
            <tr>
              <td><strong>${row.provider}</strong></td>
              <td>${row.topic}</td>
              <td>${row.question}</td>
              <td><span class="tag ${tagClass(row.priority)}">${row.priority}</span></td>
              <td>${row.owner}</td>
              <td>${row.due}</td>
              <td><span class="tag ${tagClass(row.status)}">${row.status}</span></td>
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;
}

function renderPilotTable() {
  const table = document.querySelector("#pilotTable");
  const text = state.pilotSearch.trim().toLowerCase();
  const rows = pilotRows.filter((row) => {
    const haystack = `${row.area} ${row.question} ${row.owner} ${row.evidence} ${row.scale}`.toLowerCase();
    const matchesText = !text || haystack.includes(text);
    const matchesOwner = state.pilotOwner === "all" || row.owner === state.pilotOwner;
    return matchesText && matchesOwner;
  });

  table.innerHTML = `
    <thead>
      <tr>
        <th>Aspecto</th>
        <th>Pregunta objetiva</th>
        <th>Responsable</th>
        <th>Evidencia esperada</th>
        <th>Escala</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) => `
            <tr>
              <td><strong>${row.area}</strong></td>
              <td>${row.question}</td>
              <td>${row.owner}</td>
              <td>${row.evidence}</td>
              <td>${row.scale}</td>
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;
}

function renderSources() {
  const list = document.querySelector("#sourceList");
  list.innerHTML = providers
    .map((provider) => {
      const links = provider.sources
        .map(([label, url]) => (url === "#" ? `<span>${label}</span>` : `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`))
        .join("");
      return `<article class="source-card"><h3>${provider.name}</h3><p>${provider.note}</p>${links}</article>`;
    })
    .join("");
}

function renderSummary() {
  const scores = providers.map((provider) => ({ provider, ...getScore(provider.id) }));
  const best = [...scores].sort((a, b) => b.percent - a.percent)[0];
  document.querySelector("#providerCount").textContent = providers.length;
  document.querySelector("#indispensableCount").textContent = requirements.filter((req) => req.priority === "Indispensable").length;
  document.querySelector("#bestProvider").textContent = `${best.provider.name} (${best.percent}%)`;
  document.querySelector("#disqualifiedCount").textContent = scores.filter((score) => score.missingCritical > 0).length;
}

function render() {
  renderProviders();
  renderRequirements();
  renderRanking();
  renderCostTable();
  renderPendingTable();
  renderPilotTable();
  renderMatrix();
  renderSummary();
}

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

document.querySelector("#areaFilter").addEventListener("change", (event) => {
  state.area = event.target.value;
  render();
});

document.querySelector("#priorityFilter").addEventListener("change", (event) => {
  state.priority = event.target.value;
  render();
});

document.querySelector("#statusFilter").addEventListener("change", (event) => {
  state.status = event.target.value;
  render();
});

document.querySelector("#sortMode").addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

document.querySelector("#costSearch").addEventListener("input", (event) => {
  state.costSearch = event.target.value;
  renderCostTable();
});

document.querySelector("#costImplementationFilter").addEventListener("change", (event) => {
  state.costImplementation = event.target.value;
  renderCostTable();
});

document.querySelector("#costSort").addEventListener("change", (event) => {
  state.costSort = event.target.value;
  renderCostTable();
});

document.querySelector("#pendingSearch").addEventListener("input", (event) => {
  state.pendingSearch = event.target.value;
  renderPendingTable();
});

document.querySelector("#pendingProviderFilter").addEventListener("change", (event) => {
  state.pendingProvider = event.target.value;
  renderPendingTable();
});

document.querySelector("#pendingPriorityFilter").addEventListener("change", (event) => {
  state.pendingPriority = event.target.value;
  renderPendingTable();
});

document.querySelector("#pendingStatusFilter").addEventListener("change", (event) => {
  state.pendingStatus = event.target.value;
  renderPendingTable();
});

document.querySelector("#pilotSearch").addEventListener("input", (event) => {
  state.pilotSearch = event.target.value;
  renderPilotTable();
});

document.querySelector("#pilotOwnerFilter").addEventListener("change", (event) => {
  state.pilotOwner = event.target.value;
  renderPilotTable();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  localStorage.removeItem("checador-evaluations-v2");
  state.evaluations = loadEvaluations();
  render();
});

renderFilters();
renderSources();
render();
