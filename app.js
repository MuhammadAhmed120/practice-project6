var Obj = {
    deals : {
        ComboDeal1: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 1",
            dealDesc: "Any 2 Pizza, 1 Burger, 500ml Softdrink.",
            dealPrice: "RS 1899",
        },
        ComboDeal2: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 2",
            dealDesc: "Any 2 Pizza, 500ml Softdrink.",
            dealPrice: "RS 1399",
        },
        ComboDeal3: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 3",
            dealDesc: "Any 2 Burgers, 250ml Softdrink.",
            dealPrice: "RS 999",
        },
        ComboDeal4: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 4",
            dealDesc: "Any 3 Burgers, 1 Pasta, 500ml Softdrink.",
            dealPrice: "RS 2499",
        },
        ComboDeal5: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 5",
            dealDesc: "Any 2 Burgers, 250ml Sofdrink",
            dealPrice: "RS 680",
        },
        ComboDeal6: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 6",
            dealDesc: "Any 2 Pizza, 1 Steak, 500ml Softdrink.",
            dealPrice: "RS 2799",
        },
        ComboDeal7: {
            dealImg: "Images/combodeal.jpg",
            dealName: "Combo Deal 7",
            dealDesc: "Any 2 Pizza, 1 Pasta, 500ml Softdrink.",
            dealPrice: "RS 2250",
        },
    },
    
    steak : {
        steak1: {
            dealImg: "Images/steak1.jpg",
            dealName: "Sirloin Steak",
            dealDesc: "",
            dealPrice: "RS 1599",
        },
        steak2: {
            dealImg: "Images/steak2.jpg",
            dealName: "Rump Steak",
            dealDesc: "",
            dealPrice: "RS 1299",
        },
        steak3: {
            dealImg: "Images/steak3.jpg",
            dealName: "Grilled Steak",
            dealDesc: "",
            dealPrice: "RS 1899",
        },
    },
    
    pizza : {
        pizza1: {
            dealImg: "Images/pizza1.jpg",
            dealName: "Creamy Pizza",
            dealDesc: "Sauces, cream, chicken.",
            dealPrice: "RS 599",
        },
        pizza2: {
            dealImg: "Images/pizza2.jpg",
            dealName: "Vegeterian Pizza",
            dealDesc: "Olives, sauces, topping of vegetables.",
            dealPrice: "RS 699",
        },
        pizza3: {
            dealImg: "Images/pizza3.jpg",
            dealName: "Chicken Pizza",
            dealDesc: "Olives, sauces, chicken, onion and garlic.",
            dealPrice: "RS 599",
        },
        pizza4: {
            dealImg: "Images/pizza4.jpg",
            dealName: "Fajita Pizza",
            dealDesc: "Spicy, cheesy, tomato, garlic, chicken.",
            dealPrice: "RS 699",
        },
        pizza5: {
            dealImg: "Images/pizza5.jpg",
            dealName: "Mushroom Pizza",
            dealDesc: "Mushrooms, chicken, boiled eggs, spicy.",
            dealPrice: "RS 599",
        },
        pizza6: {
            dealImg: "Images/pizza6.jpg",
            dealName: "BBQ Pizza",
            dealDesc: "BBQ flavored, cheesy.",
            dealPrice: "RS 799",
        },
        pizza7: {
            dealImg: "Images/pizza7.jpg",
            dealName: "Chicken Tikka Pizza",
            dealDesc: "Cheesy, tikka chicken, onions",
            dealPrice: "RS 799",
        },
    },
    
    pasta : {
        pasta1: {
            dealImg: "Images/pasta1.jpg",
            dealName: "Meatball Pasta",
            dealDesc: "Meatballs, sauce, vegetables, long pasta.",
            dealPrice: "RS 999",
        },
        pasta2: {
            dealImg: "Images/pasta2.jpg",
            dealName: "Mild Pasta",
            dealDesc: "Sauces, topping of chicken, small pasta.",
            dealPrice: "RS 899",
        },
        pasta3: {
            dealImg: "Images/pasta3.jpg",
            dealName: "Spicy Pasta",
            dealDesc: "Spicy, cheesy, chicken, spicy sauces, small pasta.",
            dealPrice: "RS 899",
        },
        pasta4: {
            dealImg: "Images/pasta4.jpg",
            dealName: "Creamy Pasta",
            dealDesc: "Cream, olives, sauce, small pasta",
            dealPrice: "RS 849",
        },
    },
    
    burger : {
        burger1: {
            dealImg: "Images/burger1.jpg",
            dealName: "Tripled Burger",
            dealDesc: "3 Chicken patties, cheese, vegetables.",
            dealPrice: "RS 499",
        },
        burger2: {
            dealImg: "Images/burger2.jpg",
            dealName: "Beef Burger",
            dealDesc: "Beef patty, vegetables.",
            dealPrice: "RS 299",
        },
        burger3: {
            dealImg: "Images/burger3.jpg",
            dealName: "Beefed Burger",
            dealDesc: "2 Beef patties, vegetables.",
            dealPrice: "RS 349",
        },
        burger4: {
            dealImg: "Images/burger4.jpg",
            dealName: "Cheesy Beef Burger",
            dealDesc: "2 Beef patties, cheese slices.",
            dealPrice: "RS 399",
        },
        burger5: {
            dealImg: "Images/burger5.jpg",
            dealName: "Zinger Burger",
            dealDesc: "Chicken patty, cheese, vegetables.",
            dealPrice: "RS 449",
        },
        burger6: {
            dealImg: "Images/burger6.jpg",
            dealName: "Grilled Beef Burger",
            dealDesc: "BBQ Beef patty, cheese, vegetables.",
            dealPrice: "RS 399",
        },
    },

}


for(var key in Obj.steakObj){
    var dealsObjKey = Obj.dealsObj[key];
}

var dealHead = document.querySelector(".deal-head");
var dealCard = document.querySelector(".spice-deal");

var steakHead = document.querySelector(".steak-head");
var steakCard = document.querySelector(".steak");

var pizzaHead = document.querySelector(".pizza-head");
var pizzaCard = document.querySelector(".pizza");

var pastaHead = document.querySelector(".pasta-head");
var pastaCard = document.querySelector(".pasta");

var burgerHead = document.querySelector(".burger-head");
var burgerCard = document.querySelector(".burger");

var searchBar = document.querySelector(".search-bar");


function printOnDom(){
    for(var key in Obj.deals){
        var dealsObjKey = Obj.deals[key];
        
        var dealHeadCon = `
            <h1 class="heading">Spicy Deals</h1>
        `;
        var dealCon = `
            <div class="card">
                <div class="item-img">
                    <img src="${dealsObjKey.dealImg}" alt="" class="image">
                </div>
                <div class="details">
                    <h2 class="det-name">${dealsObjKey.dealName}</h2>
                    <p class="det-con">${dealsObjKey.dealDesc}</p>
                    <div class="button">
                        <h3 class="det-price">${dealsObjKey.dealPrice}</h3>
                        <button onclick="addToCart(this)" class="det-but">+</button>
                    </div>
                </div>
            </div>`

        dealHead.innerHTML = dealHeadCon;
        dealCard.innerHTML += dealCon;
    }

    for(var key in Obj.steak){
        var steakObjKey = Obj.steak[key];

        var steakHeadCon = `
            <h1 class="heading">Steak</h1>
        `;
        var steakCon = `
            <div class="card">
                <div class="item-img">
                    <img src="${steakObjKey.dealImg}" alt="" class="image">
                </div>
                <div class="details">
                    <h2 class="det-name">${steakObjKey.dealName}</h2>
                    <p class="det-con">${steakObjKey.dealDesc}</p>
                    <div class="button">
                        <h3 class="det-price">${steakObjKey.dealPrice}</h3>
                        <button onclick="addToCart(this)" class="det-but">+</button>
                    </div>
                </div>
            </div>`

        steakHead.innerHTML = steakHeadCon;
        steakCard.innerHTML += steakCon;
    }

    for(var key in Obj.pizza){
        var pizzaObjKey = Obj.pizza[key];

        var pizzaHeadCon = `
            <h1 class="heading">Pizza</h1>
        `;
        var pizzaCon = `
        <div class="card">
            <div class="item-img">
                <img src="${pizzaObjKey.dealImg}" alt="" class="image">
            </div>
            <div class="details">
                <h2 class="det-name">${pizzaObjKey.dealName}</h2>
                <p class="det-con">${pizzaObjKey.dealDesc}</p>
                <div class="button">
                    <h3 class="det-price">${pizzaObjKey.dealPrice}</h3>
                    <button onclick="addToCart(this)" class="det-but">+</button>
                </div>
            </div>
        </div>`

        pizzaHead.innerHTML = pizzaHeadCon;
        pizzaCard.innerHTML += pizzaCon
    }

    for(var key in Obj.pasta){
        var pastaObjKey = Obj.pasta[key];

        var pastaHeadCon = `
            <h1 class="heading">Pasta</h1>
        `;
        var pastaCon = `
        <div class="card">
            <div class="item-img">
                <img src="${pastaObjKey.dealImg}" alt="" class="image">
            </div>
            <div class="details">
                <h2 class="det-name">${pastaObjKey.dealName}</h2>
                <p class="det-con">${pastaObjKey.dealDesc}</p>
                <div class="button">
                    <h3 class="det-price">${pastaObjKey.dealPrice}</h3>
                    <button onclick="addToCart(this)" class="det-but">+</button>
                </div>
            </div>
        </div>`

        pastaHead.innerHTML = pastaHeadCon;
        pastaCard.innerHTML += pastaCon;
    }

    for(var key in Obj.burger){
        var burgerObjKey = Obj.burger[key];

        var burgerHeadCon = `
            <h1 class="heading">Burger</h1>
        `;
        var burgerCon = `
        <div class="card">
            <div class="item-img">
                <img src="${burgerObjKey.dealImg}" alt="" class="image">
            </div>
            <div class="details">
                <h2 class="det-name">${burgerObjKey.dealName}</h2>
                <p class="det-con">${burgerObjKey.dealDesc}</p>
                <div class="button">
                    <h3 class="det-price">${burgerObjKey.dealPrice}</h3>
                    <button onclick="addToCart(this)" class="det-but">+</button>
                </div>
            </div>
        </div>`

        burgerHead.innerHTML = burgerHeadCon;
        burgerCard.innerHTML += burgerCon;
    }

}

window.addEventListener("load", printOnDom);

var Card = document.querySelector('.Card');

searchBar.addEventListener('input', search)
function search(){
    var matchFound = false;
    dealHead.innerHTML = "";
    dealCard.innerHTML = ""; 

    steakHead.innerHTML = "";
    steakCard.innerHTML = "";

    pizzaHead.innerHTML = "";
    pizzaCard.innerHTML = ""; 

    pastaHead.innerHTML = "";
    pastaCard.innerHTML = ""; 

    burgerHead.innerHTML = "";
    burgerCard.innerHTML = ""; 
    
    var userSearch = searchBar.value.toLowerCase()

    if (userSearch === "") {
        printOnDom(); // Restore the initial data when the search input is empty
        return;
    }

    for (var key in Obj) {
        for (var key2 in Obj[key]){
            userValue = Obj[key][key2];
            userFoodName = Obj[key][key2].dealName.toLowerCase()
            if(userFoodName.includes(userSearch)){
                matchFound = true;
                var CardCon = `
                <div class="deals">
                    <div class="card-con">
                        <div class="card">
                            <div class="item-img">
                                <img src="${userValue.dealImg}" alt="" class="image">
                            </div>
                            <div class="details">
                                <h2 class="det-name">${userValue.dealName}</h2>
                                <p class="det-con">${userValue.dealDesc}</p>
                                <div class="button">
                                    <h3 class="det-price">${userValue.dealPrice}</h3>
                                    <button onclick="addToCart(this)" class="det-but">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `

                dealCard.innerHTML += CardCon;
            }
        }
    }

    if (!matchFound) {
        var noMatchCard = `
        <div style="margin-top:150px" class="deal-head">
        <h2>Not Available.</h2>
        </div>
        `;
        dealCard.innerHTML = noMatchCard;
    }
}

var cartNum = document.querySelector(".cartNum");
var cart = 0;
var totalAmount = 0;
var chooseFoodName, chooseFoodPrice;
var foodNameArr = JSON.parse(localStorage.getItem('foodName')) || [];
var foodPriceArr = JSON.parse(localStorage.getItem('foodPrice')) || [];

function addToCart(food){
    cart++

    // SETTING CART NUMBER IN LS
    localStorage.setItem('cartNum', cart.toString());
    cartNum.innerHTML = cart;

    // CHOOSEFOOD = FOOD DETAILS 
    var chooseFood = food.parentNode.parentNode.parentNode.childNodes[3];
    chooseFoodName = chooseFood.childNodes[1].innerHTML;
    chooseFoodPrice = chooseFood.childNodes[5].childNodes[1].innerHTML;
    foodNameArr.push(chooseFoodName);
    foodPriceArr.push(chooseFoodPrice);

    localStorage.setItem('foodName', JSON.stringify(foodNameArr));
    localStorage.setItem('foodPrice', JSON.stringify(foodPriceArr));

    // TOTAL PRICE
    var total = chooseFood.childNodes[5].childNodes[1].innerHTML;
    var totalCash = parseFloat(total.slice(3));
    totalAmount += totalCash;
    console.log(totalAmount)
}

// LOADING CART NUMBER FROM LS
window.addEventListener('load', function(){
    cart = localStorage.getItem('cartNum');
    if(cart){
        cartNum.innerHTML = parseInt(cart);
    }
    else{
        cartNum.innerHTML = "";
    }
});