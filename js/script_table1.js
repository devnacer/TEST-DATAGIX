window.onload = function () {
  // Chargement du fichier JSON dynamique
  fetch("sample.json")
    .then((response) => response.json())
    .then((data) => {
      const numberOfCalls = displayMissedCallsInfo(data);
      // Affichage du nombre d'appels dans le span avec l'ID 'nbCalls'
      document.getElementById("nbCalls").textContent = numberOfCalls;
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du fichier JSON sample :", error)
    );
};

function displayMissedCallsInfo(data) {
  const missedCallsTable = document.getElementById("callsBody");
  let numberOfCalls = 0; // Initialisation du compteur

  data.list.forEach((call) => {
    if (call.Status === "Talking") {
      numberOfCalls++; // Incrémentation du compteur
      const row = `
                <tr>
                    <th scope="row">${call.Id}</th>
                    <td>${call.Callee}</td>
                    <td>${call.Caller}</td>
                </tr>`;
      missedCallsTable.innerHTML += row;
    }
  });

  // console.log(numberOfCalls);

  return numberOfCalls; // Retourne le nombre d'appels
}
