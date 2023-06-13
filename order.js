var cartNum = document.querySelector(".cartNum");

window.addEventListener('load', function(){
    cart = localStorage.getItem('cartNum');
    if(cart){
        cartNum.innerHTML = parseInt(cart);
    }
    else{
        cartNum.innerHTML = "";
    }
});

var orderCon = document.querySelector(".order-con");
var totalAmount = 0;
var foodNameArr = JSON.parse(localStorage.getItem('foodName')) || [];
var foodPriceArr = JSON.parse(localStorage.getItem('foodPrice')) || [];
var foodMap = new Map();

function loadOrder() {
  var orderDet = `<div class="order-head">
    <h1>Name</h1>
    <h1>Price</h1>
    <h1>Quantity</h1>
    <h1>Action</h1>
  </div>`;

  foodMap.clear();
  totalAmount = 0;

  for (var i = 0; i < foodNameArr.length; i++) {
    var itemName = foodNameArr[i];
    var itemPrice = foodPriceArr[i];

    if (foodMap.has(itemName)) {
      foodMap.set(itemName, foodMap.get(itemName) + 1);
    } else {
      foodMap.set(itemName, 1);
    }
  }

  foodMap.forEach((quantity, itemName) => {
    var itemPrice = foodPriceArr[foodNameArr.indexOf(itemName)];
    var totalPrice = parseFloat(itemPrice.slice(3)) * quantity;
    totalAmount += totalPrice;

    orderDet += `<div class="order-det">
      <h2 class="food">${itemName}</h2>
      <h2 class="price">${itemPrice}</h2>
      <h2 class="quan">${quantity}</h2>
      <button class="subtract" onclick="subtractItem('${itemName}')">-</button>
      <button class="add" onclick="addItem('${itemName}')">+</button>
    </div>`;
  });

  orderDet += `<div class="order-total">
    <h1>TOTAL</h1>
    <h2 class="total">RS ${totalAmount}</h2>    
  </div>`;

  orderCon.innerHTML = orderDet;
}

function subtractItem(itemName) {
  var index = foodNameArr.indexOf(itemName);
  if (index !== -1) {
    if (foodMap.get(itemName) > 1) {
      foodMap.set(itemName, foodMap.get(itemName) - 1);
    } else {
      foodMap.delete(itemName);
    }

    foodNameArr.splice(index, 1);
    foodPriceArr.splice(index, 1);

    localStorage.setItem('foodName', JSON.stringify(foodNameArr));
    localStorage.setItem('foodPrice', JSON.stringify(foodPriceArr));

    loadOrder();
  }
}

function addItem(itemName) {
  foodNameArr.push(itemName);
  foodPriceArr.push(foodPriceArr[foodNameArr.indexOf(itemName)]);
  foodMap.set(itemName, foodMap.get(itemName) + 1);

  localStorage.setItem('foodName', JSON.stringify(foodNameArr));
  localStorage.setItem('foodPrice', JSON.stringify(foodPriceArr));

  loadOrder();
}


function removeAll() {
  localStorage.removeItem('foodName');
  localStorage.removeItem('foodPrice');
  localStorage.removeItem('cartNum');
  // You can add more keys to remove if needed

  // Clear the foodNameArr, foodPriceArr, and cartNum variables
  foodNameArr = [];
  foodPriceArr = [];
  cart = 0;

  // Update the UI or perform any other necessary actions
  cartNum.innerHTML = "";

  // Reload the order or perform any other necessary actions
  loadOrder();
}
  


window.addEventListener('load', function() {
  loadOrder();
});