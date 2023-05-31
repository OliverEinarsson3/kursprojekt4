// ladda in alla varor
async function loadData() {


    return new Promise((resolve) => { /*tar informationen med allt om förarna*/
        fetch("./förare.json", { mode: "no-cors" }).then((respone) => (
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
    // vänta på loadData har returnerat datan
    var data = await loadData();
  
  
    for (let item of data) { /*Printar ut all data med hjälp av ID*/
  
        output += `
            <a href="${item.href}"><div id="förarRuta" style="border: 2px solid black; padding: 10px; border-radius:29px; margin-right: 5%;">
                <img src="${item.image}" alt="Lol">
                <span>${item.nummer}</span>
                <h5>${item.namn}</h5>
                <h5>Mästerskap: ${item.mästerskap}</h5>
                <h5>vinster: ${item.vinster}</h5>
                <img src="${item.lag}" alt="Lol">
                <h6>klicka för mer info</h6>
                
                </div>     
                </div>    
            </div>
  
  
            `;
  
    }
    document.querySelector('.products').innerHTML = output;
    document.querySelector('.products1').innerHTML = output;

};

//<a href="${item.href}"><img src="${item.image}" alt="Lol"></a>