var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var newItem = generateCartItem(item);
  getCart().push(newItem);
  return `s{newItem.itemName} has been added to your cart.`;
}
function viewCart() {
  var description = "In your cart, you have ";
  for (let i = 0; i < cart.length; i++){
    description = description + `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i === cart.length){
      description = description + ",";
    }
  }
  return `${description}.`;
}
//helper
function generateCartItem(item){
  var newItem = {
    itemName: item,
    itemPrice: getRandomInt(1, 100),
  };
  
  return newItem;
}
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}