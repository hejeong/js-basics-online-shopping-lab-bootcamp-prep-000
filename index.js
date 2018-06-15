var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(100 * Math.random() + 1)
 var newObj = {
    itemName: item, itemPrice: price
 }
 cart.push(newObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  var outputString = "In your cart, you have "
  for(var i = 0; i < cart.length; i++){
    if(cart.length === 1){
      outputString += `${cart[i].itemName} at $${cart[i].itemName}.`
    }
  }
  return outputString
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
