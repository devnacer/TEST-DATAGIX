window.onload = function () {
  // Chargement du fichier JSON dynamique
  fetch("sample.json")
    .then((response) => response.json())
    .then((data) => {
      const outgoingCallsCount = displayOutgoingCallsInfo(data, 149955);
      // Mise à jour du nombre d'appels sortants en cours dans le span avec l'ID 'nbCalls'
      document.getElementById("nbCalls").textContent = outgoingCallsCount;
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du fichier JSON sample :", error)
    );
};

function displayOutgoingCallsInfo(data, id) {
  const call = data.list.find((call) => call.Id === id);
  if (call) {
    const duration = calculateDuration(data.Now, call.EstablishedAt);
    const outgoingCallInfo = `
          <tr>
              <th scope="row">${call.Id}</th>
              <td>${call.Callee}</td>
              <td>${call.Caller}</td>
              <td>${duration}</td>
          </tr>`;
    document.getElementById("callsBody").innerHTML = outgoingCallInfo;
    return 1; // Un appel sortant est affiché, donc on retourne 1
  }
  return 0; // Aucun appel sortant n'est trouvé
}

function calculateDuration(now, establishedAt) {
  const establishedTime = new Date(establishedAt);
  const nowTime = new Date(now);
  const durationInSeconds = (nowTime - establishedTime) / 1000;
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes} min ${seconds} sec`;
}
