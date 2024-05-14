///___table3__functions________________
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
  
 
  