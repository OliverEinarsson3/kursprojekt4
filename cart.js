function addToCart(land, pris) { //funktion tagen från webshop som plockar information

  let cart = JSON.parse(localStorage.getItem('cart')) || [];


  cart.push({
    land: land,
    pris: pris
  });


  localStorage.setItem('cart', JSON.stringify(cart));


  console.log(`Added ${land} to cart with price ${pris}.`);
}