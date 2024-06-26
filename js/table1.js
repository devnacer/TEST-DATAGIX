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

    //table 1  Routing
    displayCallsInfo_table1(data);
    updateActiveCallsCount_table1();


  } catch (error) {
    console.error("Erreur lors du chargement du fichier JSON sample :", error);
  } finally {
    // Redémarrer fetchDataAndDisplay après 5 secondes
    timeoutId = setTimeout(fetchDataAndDisplay, 5000);
  }
}

fetchDataAndDisplay();

///__________table1__functions________________
function displayCallsInfo_table1(data) {
  const callsTable = document.getElementById("callsBody_table1");
  callsTable.innerHTML = "";

  const filteredCalls = data.list.filter((call) => {
    return call.Status === "Routing" || call.Status === "Initiating";
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

// Function to extract caller number from caller string
function extractCallerNumber(callerString) {
  return callerString.match(/\((\d+)\)/)[1];
}

// Function to extract callee (words and spaces) from callee string
function extractCallee(calleeString) {
  const calleeMatch = calleeString.match(/(?:[^\d*]+\s*)+/);
  return calleeMatch ? calleeMatch[0] : "";
}

function updateActiveCallsCount_table1() {
  const callsRows = document.querySelectorAll("#callsBody_table1 tr");
  const activeCallsCount = callsRows.length;
  document.getElementById("nbCalls_table1").textContent = activeCallsCount;
  console.log(activeCallsCount);
}

function calculateDuration(now, establishedAt) {
  const establishedTime = new Date(establishedAt);
  const nowTime = new Date(now);
  const durationInSeconds = (nowTime - establishedTime) / 1000;
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes} min ${seconds} sec`;
}
///________end__table1__functions________________






