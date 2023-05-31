fetch('http://ergast.com/api/f1/2023/constructorStandings.json') /*Använder sig av API och printar ut real-time resultat*/
  .then(response => response.json())
  .then(data => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headerRow = document.createElement('tr');
    const positionHeader = document.createElement('th');
    positionHeader.textContent = 'Position';
    headerRow.appendChild(positionHeader);
    const constructorHeader = document.createElement('th');
    constructorHeader.textContent = 'Constructor';
    headerRow.appendChild(constructorHeader);
    const pointsHeader = document.createElement('th');
    pointsHeader.textContent = 'Points';
    headerRow.appendChild(pointsHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table rows
    for (const constructor of data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings) {
      const row = document.createElement('tr');
      const positionCell = document.createElement('td');
      positionCell.textContent = constructor.position;
      row.appendChild(positionCell);
      const constructorCell = document.createElement('td');
      constructorCell.textContent = constructor.Constructor.name;
      row.appendChild(constructorCell);
      const pointsCell = document.createElement('td');
      pointsCell.textContent = constructor.points;
      row.appendChild(pointsCell);
      tbody.appendChild(row);
    }
    table.appendChild(tbody);

    document.body.appendChild(table);
  })
  .catch(error => {
    console.error(error);
  });