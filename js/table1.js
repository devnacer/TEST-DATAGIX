async function fetchDataAndDisplay() {
  try {
    // Utilisation du proxy PHP pour contourner le problème CORS
    const response = await fetch(
      "proxy.php?url=https://help.secretariat360.fr/data/1258xbpdnsbldbdxnbgdgbx.json"
    );

    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error("Erreur lors du chargement du fichier JSON");
    }

    // Convertir la réponse en JSON
    const data = await response.json();

    //  table1
    displayMissedCallsInfo_table1(data);
    updateActiveCallsCount_table1();

  } catch (error) {
    console.error("Erreur lors du chargement du fichier JSON sample :", error);
  } finally {
    // Redémarrer fetchDataAndDisplay après 5 secondes
    timeoutId = setTimeout(fetchDataAndDisplay, 5000);
  }
}

fetchDataAndDisplay();








///_____table1__functions________________
// Fonction pour afficher les appels non décrochés dans la table 1 avec les informations spécifiées
function displayMissedCallsInfo_table1(data) {
  const missedCallsTable = document.getElementById("callsBody_table1");
  missedCallsTable.innerHTML = "";

  data.list.forEach((call) => {
    // Vérifier si l'appel est en état "Talking" et si le Callee contient une étoile suivie de nombres puis d'une autre étoile
    if (call.Status === "Talking" && /\*\d+\*/.test(call.Callee)) {
      // Extraire uniquement le numéro de l'appelant entre parenthèses
      const callerNumber = call.Caller.match(/\((\d+)\)/)[1];

      // Extraire uniquement le  callee
      const CalleeMatch = call.Callee.match(/(?:[^\d*]+\s*)+/); // Correspond à chaque mot alphabétique et espace dans la chaîne
      const Callee = CalleeMatch ? CalleeMatch[0] : "";

      // Calculer la durée de l'appel
      const duration = calculateDuration(data.Now, call.EstablishedAt);

      // Construction de la ligne du tableau avec les informations spécifiées
      const row = `
                <tr>
                    <td>${call.Id}</td>
                    <td>${callerNumber}</td>
                    <td>${Callee}</td>
                    <td>${duration}</td> <!-- Affichage de la durée -->
                </tr>`;
      missedCallsTable.innerHTML += row;
    }
  });
}

function updateActiveCallsCount_table1() {
  const callsRows = document.querySelectorAll("#callsBody_table1 tr");
  const activeCallsCount = callsRows.length;
  document.getElementById("nbCalls_table1").textContent = activeCallsCount;
}

function calculateDuration(now, establishedAt) {
  const establishedTime = new Date(establishedAt);
  const nowTime = new Date(now);
  const durationInSeconds = (nowTime - establishedTime) / 1000;
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes} min ${seconds} sec`;
}
///______end_table1__functions________________




