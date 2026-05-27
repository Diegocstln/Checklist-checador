const requirements = [
  ["eventos-jornada", "Registro de eventos por jornada", "CH", "Indispensable", "Entrada, salida/regreso de comida y salida con timestamp exacto por usuario."],
  ["eventos-campo", "Eventos adicionales en campo", "Operacion", "Indispensable", "Llegada y salida de sitio; inicio desde sitio, hotel o casa."],
  ["calculo-horas", "Calculo automatico de horas", "CH / Sistemas", "Indispensable", "Horas por dia, semana y mes; horas adicionales y extra separadas."],
  ["biometrico", "Metodo biometrico", "Operacion / Sistemas", "Indispensable", "Reconocimiento facial vectorial, contrasena corta y alerta a RH tras 2 intentos fallidos."],
  ["app-gps", "Registro via app movil GPS", "Sistemas", "Indispensable", "Validacion por coordenadas o geofence desde dispositivos empresariales."],
  ["perfiles-horario", "Perfiles de horario", "CH", "Indispensable", "Tiempo completo, pasante, campo/remoto, monitoreo, dual y perfil abierto."],
  ["historial-perfiles", "Historial de perfiles", "CH", "Indispensable", "Asignaciones con vigencia e historial inmutable."],
  ["perfiles-abiertos", "Perfiles abiertos", "Operacion", "Basico", "Viajes o trabajo nocturno; valida horas totales sin horario fijo."],
  ["excepciones-temporales", "Excepciones temporales", "Operacion", "Basico", "Bandera de excepcion activa sin modificar el perfil base."],
  ["retardos", "Clasificacion de retardos", "CH", "Indispensable", "Retardo menor minutos 1-6 y mayor desde minuto 11; configurable por perfil."],
  ["cierre-2359", "Cierre automatico 23:59", "Operacion", "Indispensable", "Cierra jornada sin salida, excepto nocturno o excepcion activa."],
  ["cierre-remotos", "Cierre automatico para remotos", "CH / Operacion", "Indispensable", "Cierre a las 18:00; no aplica horas extra ni adicionales."],
  ["estadistica-cierres", "Estadistica de cierres automaticos", "Operacion", "Indispensable", "Reporte de cuantos y cuales turnos fueron cerrados por el sistema."],
  ["monitoreo-nocturno", "Monitoreo nocturno", "Operacion", "Basico", "Turnos nocturnos sin cierre automatico y visibles fuera de horario habitual."],
  ["vacaciones", "Gestion de vacaciones", "CH / Operacion", "Indispensable", "Solicitud desde plataforma y aprobacion por RH o jefe directo."],
  ["permisos-goce", "Permisos con goce", "Operacion", "Indispensable", "Categorias educativo, gubernamental, personal y familiar; subtipos definidos."],
  ["permisos-sin-goce", "Permisos sin goce", "Operacion", "Indispensable", "Mismas categorias y subtipos; requiere aprobacion previa."],
  ["incapacidad", "Incapacidad medica", "CH / Operacion", "Indispensable", "Documento obligatorio, no cuenta como falta y requiere aprobacion RH."],
  ["flujo-autorizacion", "Flujo de autorizacion", "CH / Operacion", "Indispensable", "Aprobacion RH/jefe; escala a RH tras 48 horas habiles sin respuesta."],
  ["documentos", "Gestion de documentos", "Operacion", "Basico", "Adjuntar archivos PDF o imagen a incidencias y permisos."],
  ["reportes-filtrables", "Reportes filtrables", "CH", "Indispensable", "Filtros por empleado, area, sucursal, incidencia, periodo y esquema."],
  ["export-pdf-excel", "Exportacion Excel y PDF", "CH", "Indispensable", "Reportes exportables con nombre, area, horas, retardos e incidencias."],
  ["columnas", "Personalizacion de columnas", "CH", "Indispensable", "El administrador agrega o elimina columnas del reporte."],
  ["api", "Exportacion / Integracion API", "Sistemas", "Basico", "Minimo .xlsx y .csv; ideal API REST para nomina."],
  ["multisitio", "Soporte multi-sitio", "CH / Sistemas", "Indispensable", "Panel central para 3 sucursales; entrada en una sede y salida en otra."],
  ["geofences", "Geofences configurables", "Sistemas", "Ideal", "Perimetros GPS sobre sucursales y domicilios, radio 100m por defecto."],
  ["festivos", "Dias festivos configurables", "CH / Sistemas", "Indispensable", "Calendario oficial Mexico LFT personalizable por RH."],
  ["notificaciones", "Notificaciones automaticas a CH", "Sistemas", "Ideal", "Alerta configurable por omision de entrada tras 30 minutos."],
  ["superadmin", "Superadmin de Sistemas", "Sistemas", "Indispensable", "Cuenta it@norcul.com con acceso total a configuracion tecnica."],
  ["capacidad", "Capacidad de usuarios", "Sistemas", "Indispensable", "Minimo 150 colaboradores y escalable a futuro."],
  ["offline", "Registro Offline", "Sistemas", "Indispensable", "Marcaje sin internet con timestamp, GPS local y sincronizacion automatica."],
  ["implementacion", "Soporte implementacion", "Sistemas", "Indispensable", "Acompanamiento del proveedor; criterio obligatorio de descalificacion."]
].map(([id, name, area, priority, desc]) => ({ id, name, area, priority, desc }));

const providers = [
  ["fiscoclic", "FiscoClic", "Muy alineado a Mexico: asistencia, geocercas, facial/tablet, incidencias, horas extra y soporte local. Los cierres exactos 18:00/23:59 se dejan como parcial por requerir demo/configuracion.", [["Control de asistencia", "https://www.fiscoclic.mx/nomina/control-de-asistencia.html"], ["Kiosco y offline", "https://www.fiscoclic.mx/nomina/reloj-checador.html"], ["API", "https://apidocs.fiscoclic.mx/"]]],
  ["worky", "Worky", "Fuerte para operacion mexicana: reloj checador, geolocalizacion, facial, incidencias, nomina, turnos y multiples ubicaciones. Offline y reglas de cierre exactas deben validarse.", [["Reloj checador", "https://www.worky.mx/software-reloj-checador"], ["Control de asistencia", "https://www.worky.mx/software-control-de-asistencias"], ["API", "https://developers.worky.mx/"]]],
  ["buk", "BUK", "Buen candidato para CH: asistencia, geolocalizacion, horas extra, incidencias y reportes. La biometria publicada no confirma facial vectorial en tablet con fallback exacto.", [["Control de asistencia", "https://www.buk.mx/productos/administracion/control-de-asistencia"], ["Asistencia docs", "https://buk.freshdesk.com/es-LA/support/solutions/folders/69000644265"], ["API", "https://buk.readme.io/"]]],
  ["bizneo", "Bizneo", "Plataforma robusta de control horario, ausencias, documentos y reportes. Buen soporte funcional; se debe validar calculo LFT Mexico y reglas operativas especiales.", [["Control horario", "https://www.bizneo.com/control-horario/"], ["Vacaciones y ausencias", "https://www.bizneo.com/software-vacaciones-ausencias/"], ["API", "https://www.bizneo.com/developers/"]]],
  ["factorial", "Factorial", "Cumple bien gestion de horario, geolocalizacion, ausencias, documentos, reportes y API. Offline y calculo LFT Mexico requieren validacion; facial/tablet no queda plenamente probado.", [["Control horario", "https://help.factorialhr.com/es_ES/control-horario/sobre-los-sistemas-de-control-horario"], ["API", "https://apidoc.factorialhr.com/"], ["Ausencias", "https://help.factorialhr.com/es_ES/ausencias/"]]],
  ["sesame", "Sesame HR", "Buen control horario con app, web, tablet, facial/QR/PIN, geolocalizacion, ausencias y reportes. Debe validarse LFT Mexico, API y offline.", [["Control horario", "https://www.sesamehr.es/software-control-horario/"], ["Control horario Mexico", "https://www.sesamehr.mx/software-control-horario/"], ["API", "https://developers.sesametime.com/"]]],
  ["jibble", "Jibble", "Muy fuerte en marcaje, facial, geofencing, offline, reportes y API. Queda corto para gestion documental/legal mexicana y calculo LFT nativo.", [["Geofencing", "https://www.jibble.io/geofencing-attendance-system"], ["Facial recognition", "https://www.jibble.io/facial-recognition-attendance-system"], ["API", "https://www.jibble.io/api"]]],
  ["conecteam", "Connecteam", "Buen time clock con GPS, geocercas, reportes, auto clock-out y API. No se confirma biometria facial formal, LFT Mexico ni offline.", [["Time clock", "https://connecteam.com/online-time-clock/"], ["API time clock", "https://developer.connecteam.com/docs/time-clock-overview"], ["Time off", "https://connecteam.com/employee-time-off-management/"]]],
  ["humand", "Humand", "Tiene asistencia, geolocalizacion/API y funciones de RRHH, pero no se observa profundidad suficiente para reglas LFT, cierres especiales y documentos/incapacidades.", [["Time tracking", "https://www.humand.co/features/time-tracking"], ["API", "https://api-docs.humand.co/"], ["Product", "https://www.humand.co/product"]]],
  ["insightful", "Insightful", "Orientado a monitoreo de productividad en computadora, no a checador fisico/campo con biometria, incidencias y permisos administrativos.", [["Time tracking", "https://www.insightful.io/time-tracking"], ["Employee monitoring", "https://www.insightful.io/employee-monitoring"], ["API", "https://developers.insightful.io/"]]],
  ["zkbio", "ZKBio Zlink", "Adecuado para ecosistema ZKTeco/hardware y asistencia tecnica. No cubre bien expediente documental, flujos RH, LFT Mexico ni API moderna para nomina.", [["ZKBio Zlink", "https://www.zkteco.com/en/ZKBio_Zlink"], ["ZKBio Time", "https://www.zkteco.com/en/ZKBio_Time"], ["Mobile attendance", "https://www.zkteco.com/"]]],
  ["biotime", "BioTime Cloud", "Sistema de asistencia ZKTeco con dispositivos y app movil. Funciona para marcaje, pero no como gestor completo de CH con documentos, LFT y flujos complejos.", [["BioTime Cloud 2.0", "https://www.zkteco.in/Cloud-Attendance-Software/BioTime-Cloud-2.0"], ["BioTime 8", "https://www.zkteco.com/en/BioTime8"], ["ZKTeco", "https://www.zkteco.com/"]]],
  ["timework", "TimeWork", "Solucion tradicional de asistencia con incidencias y reportes. Se queda corta para app moderna, API, offline, geofencing y flujos avanzados.", [["TimeWork", "https://www.relojchecador.com/timework/"], ["Control de asistencia", "https://www.relojchecador.com/"], ["Incidencias", "https://www.relojchecador.com/timework/"]]],
  ["timeoffice", "Time Office", "En la investigacion publica aparece como alternativa tradicional/hardware. Falta evidencia verificable de app moderna, API, geocercas e incidencias avanzadas.", [["Referencia del PDF", "#"], ["Validar con proveedor", "#"], ["Sin ficha publica solida", "#"]]],
  ["appchecar", "AppChecar", "Cubre asistencia movil con ubicacion, reportes y algunas incidencias. El facial parece foto/selfie, no facial vectorial; faltan reglas LFT, offline y flujos complejos.", [["AppChecar", "https://appchecar.com/"], ["Funciones", "https://appchecar.com/sistema-control-asistencia"], ["API/Integraciones", "https://appchecar.com/"]]]
].map(([id, name, note, sources]) => ({ id, name, note, sources }));

const C = "C";
const P = "P";
const V = "V";
const N = "N";
const statusLabels = { C: "Cumple", P: "Parcial", V: "Por validar", N: "No cumple" };
const statusClasses = { C: "ok", P: "partial", V: "validate", N: "bad" };
const statusNotes = {
  C: "Hay evidencia publica suficiente para marcarlo como cumple.",
  P: "Hay evidencia parcial, pero falta una regla exacta del PDF o configuracion especifica.",
  V: "No encontre evidencia publica suficiente; debe preguntarse en demo o propuesta.",
  N: "La evidencia publica no muestra esta capacidad o contradice el requisito."
};

function byStatus(c = [], p = [], v = [], n = []) {
  const result = Object.fromEntries(requirements.map((req) => [req.id, N]));
  c.forEach((id) => (result[id] = C));
  p.forEach((id) => (result[id] = P));
  v.forEach((id) => (result[id] = V));
  n.forEach((id) => (result[id] = N));
  return result;
}

const evaluationDefaults = {
  fiscoclic: byStatus(["eventos-jornada", "eventos-campo", "calculo-horas", "app-gps", "perfiles-horario", "retardos", "estadistica-cierres", "vacaciones", "permisos-goce", "permisos-sin-goce", "incapacidad", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "api", "multisitio", "geofences", "festivos", "capacidad", "offline", "implementacion"], ["biometrico", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "monitoreo-nocturno", "notificaciones", "superadmin"]),
  worky: byStatus(["eventos-jornada", "eventos-campo", "calculo-horas", "app-gps", "perfiles-horario", "retardos", "estadistica-cierres", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "reportes-filtrables", "export-pdf-excel", "columnas", "multisitio", "geofences", "festivos", "capacidad", "implementacion"], ["biometrico", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "monitoreo-nocturno", "incapacidad", "documentos", "api", "notificaciones", "superadmin"], ["offline"]),
  buk: byStatus(["eventos-jornada", "calculo-horas", "app-gps", "perfiles-horario", "historial-perfiles", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "incapacidad", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "multisitio", "festivos", "capacidad", "implementacion"], ["eventos-campo", "biometrico", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "api", "geofences", "notificaciones", "superadmin"], ["offline"]),
  bizneo: byStatus(["eventos-jornada", "eventos-campo", "biometrico", "app-gps", "perfiles-horario", "vacaciones", "permisos-goce", "permisos-sin-goce", "incapacidad", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "multisitio", "geofences", "capacidad", "offline"], ["calculo-horas", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "retardos", "estadistica-cierres", "monitoreo-nocturno", "api", "festivos", "notificaciones", "superadmin", "implementacion"], ["cierre-2359", "cierre-remotos"]),
  factorial: byStatus(["eventos-jornada", "app-gps", "perfiles-horario", "historial-perfiles", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "columnas", "api", "multisitio", "geofences", "notificaciones", "capacidad"], ["eventos-campo", "calculo-horas", "biometrico", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "incapacidad", "festivos", "superadmin", "implementacion"], [], ["offline"]),
  sesame: byStatus(["eventos-jornada", "biometrico", "app-gps", "perfiles-horario", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "reportes-filtrables", "export-pdf-excel", "multisitio", "geofences", "capacidad"], ["eventos-campo", "calculo-horas", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "retardos", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "incapacidad", "documentos", "columnas", "api", "festivos", "notificaciones", "superadmin", "implementacion"], ["offline"]),
  jibble: byStatus(["eventos-jornada", "biometrico", "app-gps", "perfiles-horario", "reportes-filtrables", "export-pdf-excel", "api", "geofences", "notificaciones", "capacidad", "offline"], ["eventos-campo", "calculo-horas", "retardos", "cierre-2359", "estadistica-cierres", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "superadmin", "implementacion"], ["historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-remotos", "monitoreo-nocturno", "festivos"], ["incapacidad", "documentos"]),
  conecteam: byStatus(["eventos-jornada", "app-gps", "cierre-2359", "estadistica-cierres", "vacaciones", "flujo-autorizacion", "reportes-filtrables", "export-pdf-excel", "api", "multisitio", "geofences", "notificaciones", "capacidad"], ["eventos-campo", "calculo-horas", "biometrico", "perfiles-horario", "historial-perfiles", "retardos", "cierre-remotos", "monitoreo-nocturno", "permisos-goce", "permisos-sin-goce", "documentos", "columnas", "superadmin", "implementacion"], ["perfiles-abiertos", "excepciones-temporales", "festivos"], ["incapacidad", "offline"]),
  humand: byStatus(["eventos-jornada", "biometrico", "app-gps", "api", "capacidad"], ["eventos-campo", "perfiles-horario", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "documentos", "reportes-filtrables", "export-pdf-excel", "multisitio", "geofences", "notificaciones", "superadmin", "implementacion"], ["historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "retardos", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "columnas", "festivos", "offline"], ["calculo-horas", "incapacidad"]),
  insightful: byStatus(["eventos-jornada", "reportes-filtrables", "api", "notificaciones", "capacidad"], ["perfiles-horario", "vacaciones", "flujo-autorizacion", "export-pdf-excel", "columnas", "superadmin", "implementacion"], ["calculo-horas", "historial-perfiles", "festivos"], ["eventos-campo", "biometrico", "app-gps", "perfiles-abiertos", "excepciones-temporales", "retardos", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "permisos-goce", "permisos-sin-goce", "incapacidad", "documentos", "multisitio", "geofences", "offline"]),
  zkbio: byStatus(["eventos-jornada", "biometrico", "perfiles-horario", "retardos", "reportes-filtrables", "export-pdf-excel", "capacidad"], ["app-gps", "historial-perfiles", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "superadmin", "implementacion"], ["eventos-campo", "calculo-horas", "cierre-2359", "cierre-remotos", "estadistica-cierres", "festivos", "offline"], ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno", "incapacidad", "documentos", "api", "geofences", "notificaciones"]),
  biotime: byStatus(["eventos-jornada", "biometrico", "perfiles-horario", "retardos", "vacaciones", "reportes-filtrables", "export-pdf-excel", "capacidad"], ["eventos-campo", "app-gps", "historial-perfiles", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "geofences", "superadmin", "implementacion"], ["calculo-horas", "cierre-2359", "cierre-remotos", "estadistica-cierres", "festivos", "offline"], ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno", "incapacidad", "documentos", "api", "notificaciones"]),
  timework: byStatus(["eventos-jornada", "calculo-horas", "perfiles-horario", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "reportes-filtrables", "export-pdf-excel", "columnas", "festivos", "capacidad"], ["eventos-campo", "biometrico", "app-gps", "historial-perfiles", "incapacidad", "flujo-autorizacion", "documentos", "multisitio", "superadmin", "implementacion"], ["cierre-2359", "cierre-remotos", "estadistica-cierres"], ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno", "api", "geofences", "notificaciones", "offline"]),
  timeoffice: byStatus(["eventos-jornada"], ["biometrico", "perfiles-horario", "reportes-filtrables", "export-pdf-excel", "capacidad"], ["calculo-horas", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "columnas", "multisitio", "implementacion"], ["eventos-campo", "app-gps", "historial-perfiles", "perfiles-abiertos", "excepciones-temporales", "cierre-2359", "cierre-remotos", "estadistica-cierres", "monitoreo-nocturno", "incapacidad", "documentos", "api", "geofences", "festivos", "notificaciones", "superadmin", "offline"]),
  appchecar: byStatus(["eventos-jornada", "eventos-campo", "app-gps", "reportes-filtrables", "export-pdf-excel", "api", "geofences", "capacidad"], ["calculo-horas", "biometrico", "perfiles-horario", "retardos", "vacaciones", "permisos-goce", "permisos-sin-goce", "flujo-autorizacion", "documentos", "columnas", "multisitio", "festivos", "notificaciones", "superadmin", "implementacion"], ["historial-perfiles", "cierre-2359", "cierre-remotos", "estadistica-cierres", "incapacidad", "offline"], ["perfiles-abiertos", "excepciones-temporales", "monitoreo-nocturno"])
};

const state = {
  activeProviderId: providers[0].id,
  search: "",
  area: "all",
  priority: "all",
  sort: "asc",
  evaluations: loadEvaluations()
};

function loadEvaluations() {
  const saved = localStorage.getItem("checador-evaluations-v2");
  if (saved) return JSON.parse(saved);
  return JSON.parse(JSON.stringify(evaluationDefaults));
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
    return matchesText && matchesArea && matchesPriority;
  });
}

function orderedProviders() {
  const text = state.search.trim().toLowerCase();
  const list = providers.filter((provider) => !text || provider.name.toLowerCase().includes(text) || filteredRequirements().length);
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
    node.querySelector(".req-note").textContent = `${statusNotes[state.evaluations[active.id][req.id]]} ${active.note}`;
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
    row.innerHTML = `<strong>${index + 1}. ${provider.name}</strong><div class="bar" aria-label="Cumplimiento ${score.percent}%"><span style="width:${score.percent}%"></span></div><strong>${score.percent}%</strong><span class="${statusClass}">${score.status}</span>`;
    ranking.append(row);
  });
}

function renderMatrix() {
  const table = document.querySelector("#matrixTable");
  const reqs = filteredRequirements();
  const header = `<thead><tr><th>Requerimiento</th>${providers.map((provider) => `<th>${provider.name}</th>`).join("")}</tr></thead>`;
  const body = reqs.map((req) => {
    const cells = providers.map((provider) => {
      const status = state.evaluations[provider.id][req.id];
      return `<td><span title="${statusNotes[status]}" class="matrix-status cell-${statusClasses[status]}">${statusLabels[status]}</span></td>`;
    }).join("");
    return `<tr><td><strong>${req.name}</strong><br><small>${req.area} | ${req.priority}</small></td>${cells}</tr>`;
  }).join("");
  table.innerHTML = `${header}<tbody>${body}</tbody>`;
}

function renderSources() {
  const list = document.querySelector("#sourceList");
  list.innerHTML = providers.map((provider) => {
    const links = provider.sources.map(([label, url]) => (url === "#" ? `<span>${label}</span>` : `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)).join("");
    return `<article class="source-card"><h3>${provider.name}</h3><p>${provider.note}</p>${links}</article>`;
  }).join("");
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

document.querySelector("#sortMode").addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  localStorage.removeItem("checador-evaluations-v2");
  state.evaluations = loadEvaluations();
  render();
});

renderFilters();
renderSources();
render();
