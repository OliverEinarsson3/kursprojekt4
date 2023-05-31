async function loadData() {


    return new Promise((resolve) => {   /*Tar data från JSON filen*/ 
        fetch("./biljetter.json", { mode: "no-cors" }).then((respone) => (
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
  
  
    for (let item of data) { /*Displayar all information. Jag gjorde detta för att samla all information på ett smidigt ställe.*/
  
        output += `  
            <div id="alla">
                <div id="biljettruta" style="border: 3px solid black;  border-radius:29px; margin-right: 5%; margin-top: 10%; ">
                <img src="${item.bild}" alt="Lmao">
                <span>${item.land}</span>
                <h5>${item.datum}</h5>
                <h5>Pris:${item.pris}</h5>
                <button id="addToCart" onclick="addToCart('${item.land}', '${item.pris}')">Add to cart</button>
                </div>
            </div>
            `;
  
  
            
  
    }
    document.querySelector('.products').innerHTML = output;
    document.querySelector('.products1').innerHTML = output;

};