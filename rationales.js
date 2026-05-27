(() => {
  const reasons = {
    "eventos-jornada": ["publica marcajes de entrada/salida con hora por empleado.", "maneja asistencia, pero no confirma todos los eventos de comida o trazabilidad por evento.", "los eventos exactos de jornada y comida.", "registro completo de entrada, comida y salida con timestamp."],
    "eventos-campo": ["soporta marcajes moviles o de campo con ubicacion.", "tiene app/GPS, pero no confirma llegada y salida de sitio como eventos separados.", "llegada y salida de sitio como eventos propios.", "eventos operativos para personal en campo."],
    "calculo-horas": ["calcula horas trabajadas y horas extra con reglas configurables.", "calcula asistencia u horas extra, pero no confirma la separacion NORCUL entre adicionales y extra LFT.", "calculo separado de horas adicionales y horas extra por dia/semana.", "calculo automatico de horas con la regla solicitada."],
    biometrico: ["ofrece reconocimiento facial o biometria para asistencia.", "menciona facial/biometria, pero no confirma vector facial encriptado ni fallback tras 2 intentos.", "almacenamiento vectorial encriptado y alerta por fallo facial.", "biometria facial conforme al requerimiento."],
    "app-gps": ["permite marcaje desde app movil con GPS/geolocalizacion.", "usa ubicacion movil, pero no confirma restriccion a dispositivos empresariales registrados.", "uso exclusivo desde equipos empresariales registrados.", "marcaje movil con GPS."],
    "perfiles-horario": ["permite configurar horarios, turnos o perfiles de jornada.", "maneja turnos, pero no confirma todos los perfiles NORCUL.", "perfiles completo, pasante, campo/remoto, monitoreo, dual y abierto.", "perfiles de horario configurables."],
    "historial-perfiles": ["mantiene historiales o asignaciones vigentes por empleado.", "hay gestion de horarios, pero no confirma historial inmutable.", "historial inmutable de cambios de perfil.", "historial de perfiles por empleado."],
    "perfiles-abiertos": ["admite jornadas flexibles sin horario fijo.", "tiene turnos flexibles, pero no confirma perfil abierto sin cierre 23:59.", "perfil abierto para viajes/nocturno sin horario fijo.", "perfil abierto para viajes o nocturno."],
    "excepciones-temporales": ["permite excepciones temporales o ajustes sin cambiar el perfil base.", "permite ajustes, pero no confirma bandera formal de excepcion activa.", "bandera de excepcion temporal sin alterar el perfil base.", "excepciones temporales de perfil."],
    retardos: ["incluye calculo o reglas de retardos configurables.", "maneja retardos, pero no confirma la regla exacta 1-6 y desde minuto 11.", "clasificacion menor/mayor con esos rangos exactos.", "clasificacion automatica de retardos."],
    "cierre-2359": ["permite cierre automatico de turnos sin salida.", "tiene cierre automatico, pero no confirma excepcion nocturno/excepcion activa.", "cierre 23:59 con excepciones nocturnas y temporales.", "cierre automatico de jornada a las 23:59."],
    "cierre-remotos": ["permite reglas de cierre por perfil remoto.", "tiene reglas de jornada, pero no confirma cierre remoto a las 18:00 sin horas extra/adicionales.", "cierre remoto 18:00 y bloqueo de horas extra/adicionales.", "cierre automatico especifico para remotos."],
    "estadistica-cierres": ["reporta turnos incompletos o cerrados automaticamente.", "reporta incidencias/asistencia, pero no confirma estadistica dedicada de cierres del sistema.", "reporte de cuales turnos cerro automaticamente.", "estadisticas de cierres automaticos."],
    "monitoreo-nocturno": ["permite gestionar turnos nocturnos activos.", "maneja turnos, pero no confirma visualizacion de activos fuera de horario ni sin cierre automatico.", "turnos nocturnos activos sin cierre automatico.", "monitoreo nocturno operativo."],
    vacaciones: ["incluye solicitud y aprobacion de vacaciones.", "maneja ausencias, pero no confirma el flujo RH/jefe solicitado.", "flujo exacto de vacaciones aprobado por RH o jefe.", "gestion de vacaciones desde plataforma."],
    "permisos-goce": ["permite permisos/ausencias con aprobacion.", "tiene permisos, pero no confirma categorias y subtipos exactos con goce.", "categorias educativo, gubernamental, personal y familiar con subtipos.", "permisos con goce configurables."],
    "permisos-sin-goce": ["permite permisos sin goce o ausencias no pagadas.", "maneja ausencias, pero no confirma aprobacion previa y mismas categorias.", "permiso sin goce con categorias y aprobacion previa.", "permisos sin goce."],
    incapacidad: ["permite registrar incapacidades con documento y aprobacion.", "maneja ausencias/documentos, pero no confirma incapacidad medica obligatoria con RH.", "incapacidad medica con adjunto obligatorio y aprobacion RH.", "gestion de incapacidad medica."],
    "flujo-autorizacion": ["incluye aprobaciones de solicitudes por responsables.", "tiene aprobaciones, pero no confirma escalamiento automatico a RH tras 48 horas habiles.", "escalamiento automatico a RH despues de 48 horas habiles.", "flujo de autorizacion requerido."],
    documentos: ["permite adjuntar archivos a incidencias, permisos o expedientes.", "maneja documentos en alguna parte del sistema, pero no confirma adjuntos por incidencia/permiso.", "adjuntos PDF o imagen directamente en incidencias y permisos.", "gestion documental para incidencias."],
    "reportes-filtrables": ["ofrece reportes de asistencia con filtros.", "tiene reportes, pero no confirma todos los filtros del PDF.", "filtros por empleado, area, sucursal, incidencia, periodo y esquema.", "reportes filtrables de asistencia."],
    "export-pdf-excel": ["permite exportar reportes a Excel/PDF o formatos equivalentes.", "exporta datos, pero no confirma PDF y Excel con las columnas minimas.", "exportacion exacta a PDF y Excel.", "exportacion de reportes."],
    columnas: ["permite configurar o personalizar reportes.", "tiene reportes, pero no confirma columnas personalizables por administrador.", "personalizacion de columnas por administrador.", "columnas personalizables."],
    api: ["publica API o integraciones para extraccion de datos.", "ofrece exportaciones o integraciones limitadas, pero no API REST completa.", "API REST util para nomina.", "API o integracion moderna."],
    multisitio: ["soporta varias ubicaciones/sucursales en administracion central.", "maneja ubicaciones, pero no confirma entrada en una sede y salida en otra.", "entrada en una sucursal y salida en otra con ambas identificadas.", "operacion multi-sitio."],
    geofences: ["incluye geocercas o radios GPS configurables.", "usa ubicacion GPS, pero no confirma geofence de domicilio 100m configurable.", "geofence de sucursales y domicilio remoto con radio configurable.", "geofences configurables."],
    festivos: ["permite calendario de festivos o reglas laborales configurables.", "maneja calendarios, pero no confirma festivos Mexico LFT editables por RH.", "calendario LFT Mexico editable por RH.", "dias festivos configurables."],
    notificaciones: ["incluye alertas automaticas por asistencia.", "tiene notificaciones, pero no confirma alerta 30 minutos solo dias laborales.", "alerta a CH despues de 30 minutos segun perfil laboral.", "notificaciones automaticas a CH."],
    superadmin: ["permite perfiles de administrador con acceso total.", "tiene administradores, pero no confirma una cuenta superadmin tecnica sin restriccion de area.", "superadmin it@norcul.com con acceso tecnico total.", "superadministrador tecnico."],
    capacidad: ["la plataforma es SaaS/empresarial y supera 150 usuarios.", "parece soportarlo, pero no publica capacidad o escalabilidad claramente.", "capacidad minima de 150 usuarios simultaneos.", "capacidad requerida de usuarios."],
    offline: ["publica marcaje sin conexion con sincronizacion posterior.", "menciona app movil, pero no confirma offline con GPS/timestamp y revision por latencia.", "offline con timestamp, GPS local, sync y pendiente_revision si tarda mas de 2h.", "registro offline."],
    implementacion: ["ofrece acompanamiento o soporte de implementacion.", "tiene soporte comercial, pero no confirma acompanamiento obligatorio de implementacion.", "servicio formal de implementacion acompanada.", "acompanamiento de implementacion."]
  };

  const indexByStatus = { C: 0, P: 1, V: 2, N: 3 };

  function explain(req, status) {
    const reason = reasons[req.id]?.[indexByStatus[status]] || statusNotes[status];
    if (status === "C") return `Cumple porque ${reason}`;
    if (status === "P") return `Parcial: ${reason}`;
    if (status === "V") return `Por validar: no hay evidencia publica clara de ${reason}`;
    return `No cumple: no se encontro evidencia publica suficiente de ${reason}`;
  }

  const baseRenderRequirements = renderRequirements;
  renderRequirements = function renderRequirementsWithReasons() {
    baseRenderRequirements();
    const active = providers.find((provider) => provider.id === state.activeProviderId);
    filteredRequirements().forEach((req, index) => {
      const note = document.querySelectorAll(".req-note")[index];
      if (note) note.textContent = explain(req, state.evaluations[active.id][req.id]);
    });
  };

  const baseRenderMatrix = renderMatrix;
  renderMatrix = function renderMatrixWithReasons() {
    baseRenderMatrix();
    const reqs = filteredRequirements();
    document.querySelectorAll("#matrixTable tbody tr").forEach((row, rowIndex) => {
      row.querySelectorAll(".matrix-status").forEach((cell, cellIndex) => {
        const provider = providers[cellIndex];
        const req = reqs[rowIndex];
        if (provider && req) cell.title = explain(req, state.evaluations[provider.id][req.id]);
      });
    });
  };

  render();
})();
