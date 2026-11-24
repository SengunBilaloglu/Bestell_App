function init() {
    render();
}

function render() {
    let burgersRef = document.getElementById("burger-meals");
    burgersRef.innerHTML = "";
    let pizzasRef = document.getElementById("pizza-meals");
    pizzasRef.innerHTML = "";
    let saladsRef = document.getElementById("salad-meals");
    saladsRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].categoryID == 1) {
            burgersRef.innerHTML += getMealsTemplate(i);
        }
        else if (myDishes[i].categoryID == 2) {
            pizzasRef.innerHTML += getMealsTemplate(i);
        }
        else if (myDishes[i].categoryID == 3) {
            saladsRef.innerHTML += getMealsTemplate(i);
        }

        let mealNameRef = document.getElementById(`meal-name-${i}`);
        mealNameRef.innerHTML = myDishes[i].name;
        let mealDescriptionRef = document.getElementById(`meal-description-${i}`);
        mealDescriptionRef.innerHTML = myDishes[i].description;
        let mealPriceRef = document.getElementById(`meal-price-${i}`);
        mealPriceRef.innerHTML = myDishes[i].price.toString().replace(".", ",") + "€";
        let mealImgRef = document.getElementById(`meal-img-${i}`);
        mealImgRef.innerHTML = myDishes[i].img;

    }
}

function renderBasketItems(index) {
    let basketRef = document.getElementById("basket-items");
    // basketRef.innerHTML = "";

    basketRef.innerHTML += getBasketTemplate(index);
}

function renderChangeAmount(indexNum) {

}

function addToBasket(index) {
    let id = myDishes[index].productId;
    let indexNum = getProductIndex(id);

    if (indexNum == -1) {
        myOrders.push(
            {
                productId: myDishes[index].productId,
                name: myDishes[index].name,
                price: myDishes[index].price,
                amount: 1
            }
        )
        indexNum = myOrders.length - 1;
        renderBasketItems(indexNum);
        let amountId = document.getElementById(`dish-amount-${indexNum}`);
        amountId.innerHTML = myOrders[indexNum].amount;
        let dishNameId = document.getElementById(`dish-name-${indexNum}`);
        dishNameId.innerHTML = myOrders[indexNum].name;
        let quantityId = document.getElementById(`quantity-${indexNum}`);
        quantityId.innerHTML = myOrders[indexNum].amount;
        let priceId = document.getElementById(`price-${indexNum}`);
        priceId.innerHTML = myOrders[indexNum].price;
            
    } else {
        myOrders[indexNum].amount++;
        let amountId = document.getElementById(`dish-amount-${indexNum}`);
        amountId.innerHTML = myOrders[indexNum].amount;
        let quantityId = document.getElementById(`quantity-${indexNum}`);
        quantityId.innerHTML = myOrders[indexNum].amount;        
    }

    document.getElementById("subtotal").innerHTML = calculateSubtotal();
    document.getElementById("total").innerHTML = calculateTotalPrice(calculateSubtotal());
    document.getElementById("buy-now-price").innerHTML = calculateTotalPrice(calculateSubtotal());
    console.log(calculateSubtotal());
    console.log(calculateTotalPrice(calculateSubtotal()));

}

function getProductIndex(dishId) {
    let index = myOrders.findIndex(order => order.productId === dishId);
    return index;
}

function calculateSubtotal() {
    let subTotal = 0;

    if (myOrders.length == 0) {
        subTotal = 0;
    } else {
        for (let i = 0; i < myOrders.length; i++) {
            subTotal += myOrders[i].price * myOrders[i].amount;
        }
    }
    return subTotal;
}

function calculateTotalPrice(subTotal) {
    let deliveryFee = 4.99;
    let totalPrice = subTotal + deliveryFee;
    return totalPrice;
}

function decreaseOrder(orderIndex) {
    myOrders[orderIndex].amount--;
    let amountId = document.getElementById(`dish-amount-${orderIndex}`);
    amountId.innerHTML = myOrders[indexNum].amount;
}
function increaseOrder(orderIndex) {
    myOrders[orderIndex].amount++;
    let amountId = document.getElementById(`dish-amount-${orderIndex}`);
    amountId.innerHTML = myOrders[indexNum].amount;
}