
async function loadData() {


    return new Promise((resolve) => {
        fetch("./teams.json", { mode: "no-cors" }).then((respone) => ( //hämtar data från JSON
            respone.json()
        )).then((jsonFromFile) => {
            resolve(jsonFromFile);
        }).catch((error) => {
            console.log(error);
            resolve([]);
        });
    })
  
  
  }
  
  async function displayProducts() {



    let output = "";
   
    var data = await loadData();
  
  
    for (let item of data) { //displayar det som ska visas i rutorna
  
        output += `
            <a href="${item.href}"><div id="lagRuta" style="border: 2px solid black; padding: 10px; border-radius:29px; margin-right: 5%;">
                <img src="${item.image}" alt="Lol">
                <span>${item.namn}</span>
                <h5>Mästerskap: ${item.championships}</h5>
                <h5>vinster: ${item.vinster}</h5>
                <h6>klicka för mer info</h6>
                
                </div>     
                </div>    
            </div>
  
  
            `;
  
    }
    document.querySelector('.products').innerHTML = output;
    document.querySelector('.products1').innerHTML = output;

};