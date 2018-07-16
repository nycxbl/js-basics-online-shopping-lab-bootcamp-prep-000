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
  return `${newItem.itemName} has been added to your cart.`;
}
function viewCart() {
  if (!cart.length){
    return 'Your shopping cart is empty.';
  }
  var description = "In your cart, you have ";
  for (let i = 0; i < cart.length; i++){
    description = `${description} ${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i >= 0 && i < cart.length-2) {
      description = `${description}, `;
    }
    if (i === cart.length-2) {
      description = `${description}, and `;
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