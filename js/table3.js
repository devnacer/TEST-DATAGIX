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

    // //  table3  output
    displayCallsInfo_table3(data);
    updateActiveCallsCount_table3();



  } catch (error) {
    console.error("Erreur lors du chargement du fichier JSON sample :", error);
  } finally {
    // Redémarrer fetchDataAndDisplay après 5 secondes
    timeoutId = setTimeout(fetchDataAndDisplay, 5000);
  }
}

fetchDataAndDisplay();



///___table3__functions________________
function displayCallsInfo_table3(data) {
  const callsTable = document.getElementById("callsBody_table3");
  callsTable.innerHTML = "";

  const filteredCalls = data.list.filter((call) => {
    return call.Status === "Talking" && Output(call.Callee);
  });

  filteredCalls.forEach((call) => {
    const callerNumber = extractCallerNumber(call.Caller);
    const callee = extractCallee(call.Callee);
    const duration = calculateDuration(data.Now, call.EstablishedAt);

    const row = `
        <tr>
          <td>${call.Id}</td>
          <td>${callerNumber}</td>
          <td>${callee}</td>
          <td>${duration}</td>
        </tr>`;

    callsTable.innerHTML += row;
  });
}

function Output(callee) {
  // Expression régulière pour rechercher le mot "Output" dans le champ Caller
  const regex = /Output/i; // Le "i" signifie que la recherche est insensible à la casse

  // Testez si la chaîne de caractères caller contient le mot "Output"
  return regex.test(callee);
}


function updateActiveCallsCount_table3() {
  const callsRows = document.querySelectorAll("#callsBody_table3 tr");
  const activeCallsCount = callsRows.length;
  document.getElementById("nbCalls_table3").textContent = activeCallsCount;
}


// Function to extract caller number from caller string
function extractCallerNumber(callerString) {
  return callerString.match(/\((\d+)\)/)[1];
}

// Function to extract callee (words and spaces) from callee string
function extractCallee(calleeString) {
  const calleeMatch = calleeString.match(/(?:[^\d*]+\s*)+/);
  return calleeMatch ? calleeMatch[0] : "";
}


function calculateDuration(now, establishedAt) {
  const establishedTime = new Date(establishedAt);
  const nowTime = new Date(now);
  const durationInSeconds = (nowTime - establishedTime) / 1000;
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes} min ${seconds} sec`;
}
///__end_table3__functions________________



