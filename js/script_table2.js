window.onload = function () {
  // Chargement du fichier JSON dynamique
  fetch("sample.json")
    .then((response) => response.json())
    .then((data) => {
      displayAgentCallsCount(data);
    })
    .catch((error) =>
      console.error(
        "Erreur lors du chargement du fichier JSON dynamique :",
        error
      )
    );
};

function displayAgentCallsCount(data) {
  const agentCallsCount = {}; // Utiliser un objet pour stocker le nombre d'appels pour chaque agent

  // Compter le nombre d'appels pour chaque agent
  data.list.forEach((call) => {
    const agent = call.Caller; // Supposant que l'agent est le numéro de l'appelant
    if (call.Status === "Talking") {
      if (agentCallsCount[agent]) {
        agentCallsCount[agent]++;
      } else {
        agentCallsCount[agent] = 1;
      }
    }
  });

  // Afficher le nombre total d'appels en cours par les agents
  const agentCallsTable = document.getElementById("agentCallsBody");
  for (const agent in agentCallsCount) {
    if (agentCallsCount.hasOwnProperty(agent)) {
      const row = `
              <tr>
                  <td>${agent}</td>
                  <td>${agentCallsCount[agent]}</td>
              </tr>`;
      agentCallsTable.innerHTML += row;
    }
  }
}
