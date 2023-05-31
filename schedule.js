// Retrieve data from API
fetch('http://ergast.com/api/f1/2023.json') /*API*/
  .then(response => response.json())
  .then(data => {
    // Extract relevant information from JSON object
    const races = data.MRData.RaceTable.Races;
    // Create HTML table to display race schedule
    const table = document.createElement('table');
    // Add header row to table
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Race Name';
    headerRow.insertCell().textContent = 'Date';
    headerRow.insertCell().textContent = 'Location';
    // Add data rows to table
    races.forEach(race => {
      const row = table.insertRow();
      row.insertCell().textContent = race.raceName;
      row.insertCell().textContent = race.date;
      row.insertCell().textContent = `${race.Circuit.Location.country}, ${race.Circuit.Location.locality}`;
    });
    // Add table to webpage
    document.body.appendChild(table);
  });