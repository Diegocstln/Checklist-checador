(() => {
  function averageScore() {
    const scores = providers.map((provider) => getScore(provider.id).percent);
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  const baseRenderProviders = renderProviders;
  renderProviders = function renderProvidersPercentOnly() {
    baseRenderProviders();
    document.querySelectorAll(".provider-status").forEach((status) => {
      status.textContent = "";
    });
  };

  const baseRenderRequirements = renderRequirements;
  renderRequirements = function renderRequirementsPercentOnly() {
    baseRenderRequirements();
    const activeStatus = document.querySelector("#activeStatus");
    if (activeStatus) activeStatus.textContent = "Cumplimiento";
  };

  const baseRenderRanking = renderRanking;
  renderRanking = function renderRankingPercentOnly() {
    baseRenderRanking();
    document.querySelectorAll(".rank-row").forEach((row) => {
      const labels = row.querySelectorAll("span:not(.bar span)");
      labels.forEach((label) => label.remove());
    });
  };

  const baseRenderSummary = renderSummary;
  renderSummary = function renderSummaryPercentOnly() {
    baseRenderSummary();
    const thirdValue = document.querySelector("#disqualifiedCount");
    const thirdLabel = thirdValue?.nextElementSibling;
    if (thirdValue) thirdValue.textContent = `${averageScore()}%`;
    if (thirdLabel) thirdLabel.textContent = "Promedio general";
  };

  render();
})();
