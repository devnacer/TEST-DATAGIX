window.onload = function () {
  // Chargement du fichier JSON sample
  fetch("sample.json")
    .then((response) => response.json())
    .then((data) => {
      //  table1
      displayMissedCallsInfo_table1(data);
      updateActiveCallsCount_table1();

      //  table2
      // displayAgentCallsCount_table2(data);

      // //  table3
      // displayCallsInfo_table3(data, [149968, 149960, 149957]);
      // updateActiveCallsCount_table3();
      
      // //  table4
      // displayOutgoingCallsInfo_table4(data, [149955]);
      // updateOutgoingCallsCount_table4();
      
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du fichier JSON sample :", error)
    );
};

///_____table1__functions________________
// function displayMissedCallsInfo_table1(data) {
//   const missedCallsTable = document.getElementById("callsBody_table1");

//   data.list.forEach((call) => {
//     if (call.Status === "Talking") {
//       const row = `
//                 <tr>
//                     <th scope="row">${call.Id}</th>
//                     <td>${call.Callee}</td>
//                     <td>${call.Caller}</td>
//                 </tr>`;
//       missedCallsTable.innerHTML += row;
//     }
//   });
// }
// Fonction pour afficher les appels non décrochés dans la table 1 avec les informations spécifiées
function displayMissedCallsInfo_table1(data) {
  const missedCallsTable = document.getElementById("callsBody_table1");

  data.list.forEach((call) => {
    // Vérifier si l'appel est en état "Talking" et si le Callee contient une étoile suivie de nombres puis d'une autre étoile
    if (call.Status === "Talking" && /\*\d+\*/.test(call.Callee)) { 
      // Extraire uniquement le numéro de l'appelant entre parenthèses
      const callerNumber = call.Caller.match(/\((\d+)\)/)[1];

        // Extraire uniquement le nom du cabinet du callee
        const CalleeMatch = call.Callee.match(/(?:[^\d*]+\s*)+/); // Correspond à chaque mot alphabétique et espace dans la chaîne
        const Callee = CalleeMatch ? CalleeMatch[0] : "";
      console.log(Callee);

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


///__________table2__functions________________
// function displayAgentCallsCount_table2(data) {
//   const agentCallsCount = {}; // Utiliser un objet pour stocker le nombre d'appels pour chaque agent

//   // Compter le nombre d'appels pour chaque agent
//   data.list.forEach((call) => {
//     const agent = call.Caller; // Supposant que l'agent est le numéro de l'appelant
//     if (call.Status === "Talking") {
//       if (agentCallsCount[agent]) {
//         agentCallsCount[agent]++;
//       } else {
//         agentCallsCount[agent] = 1;
//       }
//     }
//   });

//   // Afficher le nombre total d'appels en cours par les agents
//   const agentCallsTable = document.getElementById("agentCallsBody_table2");
//   for (const agent in agentCallsCount) {
//     if (agentCallsCount.hasOwnProperty(agent)) {
//       const row = `
//               <tr>
//                   <td>${agent}</td>
//                   <td>${agentCallsCount[agent]}</td>
//               </tr>`;
//       agentCallsTable.innerHTML += row;
//     }
//   }
// }
///______end_table2__functions________________


///______table3__functions________________
// function displayCallsInfo_table3(data, ids) {
//   const callsTable = document.getElementById("callsBody_table3");
//   callsTable.innerHTML = ""; // Effacer le contenu précédent du tableau

//   ids.forEach((id) => {
//     const call = data.list.find((call) => call.Id === id);
//     if (call) {
//       const duration = calculateDuration(data.Now, call.EstablishedAt);
//       const row = `<tr><td>${call.Id}</td><td>${call.Caller}</td><td>${call.Callee}</td><td>${duration}</td></tr>`;
//       callsTable.innerHTML += row;
//     }
//   });
// }

// function updateActiveCallsCount_table3() {
//   const callsRows = document.querySelectorAll("#callsBody_table3 tr");
//   const activeCallsCount = callsRows.length;
//   document.getElementById("nbCalls_table3").textContent = activeCallsCount;
//   // console.log(activeCallsCount);
// }

// function calculateDuration(now, establishedAt) {
//   const establishedTime = new Date(establishedAt);
//   const nowTime = new Date(now);
//   const durationInSeconds = (nowTime - establishedTime) / 1000;
//   const minutes = Math.floor(durationInSeconds / 60);
//   const seconds = Math.floor(durationInSeconds % 60);
//   return `${minutes} min ${seconds} sec`;
// }
///__end_table3__functions________________


///__end_table4__functions________________
// function displayOutgoingCallsInfo_table4(data, ids) {
//   const callsTable = document.getElementById("callsBody_table4");
//   callsTable.innerHTML = ""; // Effacer le contenu précédent du tableau

//   ids.forEach((id) => {
//     const call = data.list.find((call) => call.Id === id);
//     if (call) {
//       const duration = calculateDuration(data.Now, call.EstablishedAt);
//       const row = `<tr><td>${call.Id}</td><td>${call.Callee}</td><td>${call.Caller}</td><td>${duration}</td></tr>`;
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