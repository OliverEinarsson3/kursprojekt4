fetch('http://ergast.com/api/f1/2023/driverStandings.json') //ChatGPT javascript för API
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
    const driverHeader = document.createElement('th');
    driverHeader.textContent = 'Driver';
    headerRow.appendChild(driverHeader);
    const constructorHeader = document.createElement('th');
    constructorHeader.textContent = 'Constructor';
    headerRow.appendChild(constructorHeader);
    const pointsHeader = document.createElement('th');
    pointsHeader.textContent = 'Points';
    headerRow.appendChild(pointsHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table rows
    for (const driver of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
      const row = document.createElement('tr');
      const positionCell = document.createElement('td');
      positionCell.textContent = driver.position;
      row.appendChild(positionCell);
      const driverCell = document.createElement('td');
      driverCell.textContent = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
      row.appendChild(driverCell);
      const constructorCell = document.createElement('td');
      constructorCell.textContent = driver.Constructors[0].name;
      row.appendChild(constructorCell);
      const pointsCell = document.createElement('td');
      pointsCell.textContent = driver.points;
      row.appendChild(pointsCell);
      tbody.appendChild(row);
    }
    table.appendChild(tbody);

    document.body.appendChild(table);
  });

  
