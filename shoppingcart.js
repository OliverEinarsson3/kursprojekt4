function loadCart(){
  
  let cart = JSON.parse(localStorage.getItem('cart')) || []; //Hämta informationen
  
  
  const cartTable = document.getElementById('cart-table');
  cartTable.innerHTML = ''; 
  cart.forEach(item => {
    const row = document.createElement('tr'); //det som ska komma på display
    row.innerHTML = `
      <td>${item.land}</td> 
      <td>${item.pris}</td>
    `;
    cartTable.appendChild(row);
  });
}

function clearCart() { //för att tömma carten
  let cart = [];
  localStorage.removeItem('cart');
  console.log("Items cleared from cart.");

  const cartTable = document.getElementById('cart-table');
  while (cartTable.firstChild) {
    cartTable.removeChild(cartTable.firstChild);
  }
}