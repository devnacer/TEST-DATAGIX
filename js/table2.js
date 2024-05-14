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

 
    // table2 yesss
     displayAgentCallsCount_table2(data);
     updateActiveCallsCount_table2();

   ;

  } catch (error) {
    console.error("Erreur lors du chargement du fichier JSON sample :", error);
  } finally {
    // Redémarrer fetchDataAndDisplay après 5 secondes
    timeoutId = setTimeout(fetchDataAndDisplay, 5000);
  }
}

fetchDataAndDisplay();





///__________table2__functions________________
function displayAgentCallsCount_table2(data) {
  // Get reference to the table body element
  const missedCallsTable = document.getElementById("agentCallsBody_table2");
  missedCallsTable.innerHTML = "";

  // Filter calls based on status and callee pattern
  const filteredCalls = data.list.filter((call) => {
    // Check if call is in "Talking" state and callee doesn't contain asterisk-digit-asterisk pattern
    return call.Status === "Talking" && ((!/\*\d+\*/.test(call.Callee)) || INPUT(call.Callee));
  });

  // Loop through filtered calls
  filteredCalls.forEach((call) => {
    const callerNumber = extractCallerNumber(call.Caller);
    const callee = extractCallee(call.Callee);
    const duration = calculateDuration(data.Now, call.EstablishedAt);

    // Construct table row using template literal
    const row = `
        <tr>
          <td>${call.Id}</td>
          <td>${callerNumber}</td>
          <td>${callee}</td>
          <td>${duration}</td>
        </tr>`;

    missedCallsTable.innerHTML += row;
  });
}

function INPUT(caller) {
  // Expression régulière pour rechercher le mot "Output" dans le champ Caller
  const regex = /INPUT/i; // Le "i" signifie que la recherche est insensible à la casse

  // Testez si la chaîne de caractères caller contient le mot "Output"
  return regex.test(caller);
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

function updateActiveCallsCount_table2() {
  const callsRows = document.querySelectorAll("#agentCallsBody_table2 tr");
  const activeCallsCount = callsRows.length;
  document.getElementById("nbCalls_table2").textContent = activeCallsCount;
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
///___end___table2__functions________________
