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

    //table 1
    // displayCallsInfo_table1(data);
    // updateActiveCallsCount_table1();

    // table2 yesss
     displayAgentCallsCount_table2(data);
     updateActiveCallsCount_table2();

    // //  table3  output
    displayCallsInfo_table3(data);
    updateActiveCallsCount_table3();


        //  table4  yess  étoile
        displayMissedCallsInfo_table4(data);
        updateActiveCallsCount_table4();

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
    return call.Status === "Routing";
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
///________end__table1__functions________________











///__________table2__functions________________
function displayAgentCallsCount_table2(data) {
  // Get reference to the table body element
  const missedCallsTable = document.getElementById("agentCallsBody_table2");
  missedCallsTable.innerHTML = "";

  // Filter calls based on status and callee pattern
  const filteredCalls = data.list.filter((call) => {
    // Check if call is in "Talking" state and callee doesn't contain asterisk-digit-asterisk pattern
    return call.Status === "Talking" && !/\*\d+\*/.test(call.Callee) && INPUT(call.Callee);
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
  const regex = /Output/i; // Le "i" signifie que la recherche est insensible à la casse

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

function Output(caller) {
  // Expression régulière pour rechercher le mot "Output" dans le champ Caller
  const regex = /Output/i; // Le "i" signifie que la recherche est insensible à la casse

  // Testez si la chaîne de caractères caller contient le mot "Output"
  return regex.test(caller);
}


function updateActiveCallsCount_table3() {
  const callsRows = document.querySelectorAll("#callsBody_table3 tr");
  const activeCallsCount = callsRows.length;
  document.getElementById("nbCalls_table3").textContent = activeCallsCount;
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

///___table4__functions________________
// function displayOutgoingCallsInfo_table4(data, ids) {
//   const callsTable = document.getElementById("callsBody_table4");
//   callsTable.innerHTML = ""; // Effacer le contenu précédent du tableau

//   ids.forEach((id) => {
//     const call = data.list.find((call) => call.Id === id);
//     if (call) {
//       const duration = calculateDuration(data.Now, call.EstablishedAt);

//       // Extraire uniquement le numéro de l'appelant (caller)
//       const callerNumberMatch = call.Callee.match(/\((\d+)\)/);
//       const callerNumber = callerNumberMatch ? callerNumberMatch[1] : "";

//       // Extraire uniquement le nom du destinataire (caller)
//       const calleeNameMatch = call.Caller.match(/(?:[^\d*]+\s*)+/);
//       const calleeName = calleeNameMatch ? calleeNameMatch[0] : "";

//       const row = `<tr><td>${call.Id}</td><td>${calleeName}</td><td>${callerNumber}</td><td>${duration}</td></tr>`;
//       callsTable.innerHTML += row;
//     }
//   });
// }

// function updateOutgoingCallsCount_table4() {
//   const callsRows = document.querySelectorAll("#callsBody_table4 tr");
//   const outgoingCallsCount = callsRows.length;
//   document.getElementById("nbCalls_table4").textContent = outgoingCallsCount;
// }
///__end_table4__functions________________






///_____table4__functions________________
// Fonction pour afficher les appels non décrochés dans la table 4 avec les informations spécifiées
function displayMissedCallsInfo_table4(data) {
  const missedCallsTable = document.getElementById("callsBody_table4");
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

function updateActiveCallsCount_table4() {
  const callsRows = document.querySelectorAll("#callsBody_table4 tr");
  const activeCallsCount = callsRows.length;
  document.getElementById("nbCalls_table4").textContent = activeCallsCount;
}

function calculateDuration(now, establishedAt) {
  const establishedTime = new Date(establishedAt);
  const nowTime = new Date(now);
  const durationInSeconds = (nowTime - establishedTime) / 1000;
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes} min ${seconds} sec`;
}
///______end_table4__functions________________
