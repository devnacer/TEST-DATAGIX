window.onload = function () {
  // Chargement du fichier JSON sample
  fetch("sample.json")
    .then((response) => response.json())
    .then((data) => {
      const activeCallsCount = displayCallsInfo(data, [149968, 149960, 149957]);
      // Mise à jour du nombre d'appels décrochés en cours dans le span avec l'ID 'nbCalls'
      document.getElementById("nbCalls").textContent = activeCallsCount;
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du fichier JSON sample :", error)
    );
};

function displayCallsInfo(data, ids) {
  const callsTable = document.getElementById("callsBody");
  callsTable.innerHTML = ""; // Effacer le contenu précédent du tableau

  let activeCallsCount = 0; // Initialisation du compteur d'appels décrochés

  ids.forEach((id) => {
    const call = data.list.find((call) => call.Id === id);
    if (call) {
      const duration = calculateDuration(data.Now, call.EstablishedAt);
      const row = `<tr><td>${call.Id}</td><td>${call.Caller}</td><td>${call.Callee}</td><td>${duration}</td></tr>`;
      callsTable.innerHTML += row;
      activeCallsCount++; // Incrémentation du compteur d'appels décrochés
    }
  });

  // console.log(activeCallsCount);

  return activeCallsCount; // Retourne le nombre d'appels décrochés
}

function calculateDuration(now, establishedAt) {
  const establishedTime = new Date(establishedAt);
  const nowTime = new Date(now);
  const durationInSeconds = (nowTime - establishedTime) / 1000;
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes} min ${seconds} sec`;
}
