
async function loadData() {


    return new Promise((resolve) => {
        fetch("./förare.json", { mode: "no-cors" }).then((respone) => ( //Hämta data från JSON
            respone.json()
        )).then((jsonFromFile) => {
            resolve(jsonFromFile);
        }).catch((error) => {
            console.log(error);
            resolve([]);
        });
    })
  
  
  }
  
  async function displayProducts(id) {


    let output = "";
    var data = await loadData();
  
  
    for (let item of data) { //det som ska displayas
        if(item.id == id){
    
            output += `
                <div id="förareInfo">
                    <img src="${item.image}" alt="Lol">
                    <span>${item.nummer}</span>
                    <h5>${item.namn}</h5>
                    <h5>Mästerskap: ${item.mästerskap}</h5>
                    <h5>vinster: ${item.vinster}</h5>
                    <img src="${item.lag}" alt="Lol">
                    <h6>Tidig karriär: ${item.tidigKarriär}</h6>
                    <h6>F1 karriär: ${item.F1Karriär}</h6>
                    
                    
                    </div>     
                    </div>    
                </div>
    
    
                `;
    
        }
        document.querySelector('.products').innerHTML = output;
    }

};

