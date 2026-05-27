(() => {
  const sourceFixes = {
    fiscoclic: [["Control de asistencia", "https://www.fiscoclic.mx/nomina/control-de-asistencia.html"], ["Kiosco y offline", "https://www.fiscoclic.mx/nomina/reloj-checador.html"], ["Integraciones por validar", "https://www.fiscoclic.mx/ayuda/"]],
    worky: [["Reloj checador", "https://www.worky.mx/software-reloj-checador"], ["Control de asistencia", "https://www.worky.mx/software-control-de-asistencias"], ["API mencionada en sitio", "https://www.worky.mx/"]],
    buk: [["Control de asistencia", "https://www.buk.mx/productos/administracion/control-de-asistencia"], ["Asistencia docs", "https://buk.freshdesk.com/es-LA/support/solutions/folders/69000644265"], ["API Buk", "https://supportcenter.buk.mx/hc/es-419/articles/36403636211995-C%C3%B3mo-integrarse-a-Buk-a-trav%C3%A9s-de-una-API"]],
    bizneo: [["Control horario", "https://www.bizneo.com/control-horario/"], ["Vacaciones y ausencias", "https://www.bizneo.com/software-vacaciones-ausencias/"], ["API / integraciones", "https://www.bizneo.com/es-mx/"]],
    jibble: [["Geofencing", "https://www.jibble.io/geofencing-attendance-system"], ["Facial recognition", "https://www.jibble.io/facial-recognition-attendance-system"], ["API", "https://docs.api.jibble.io/"]],
    humand: [["Time tracking", "https://www.humand.co/features/time-tracking"], ["API", "https://api-prod.humand.co/public/api/v1/api-docs/"], ["Product", "https://www.humand.co/product"]]
  };

  providers.forEach((provider) => {
    if (sourceFixes[provider.id]) provider.sources = sourceFixes[provider.id];
  });

  renderSources();
})();
