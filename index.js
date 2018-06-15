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
  var outputString = "In your cart, you have "
  for(var i = 0; i < cart.length; i++){
    outputString += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if(i === cart.length - 1){
      outputString += "."
    }else{
      outputString += ", "
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
