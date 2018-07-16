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
}

function generateCartItem(item){
  var newItem = {
    item: item,
    price: Math.floor(Math.random()*100)
  }
  return newItem;
}