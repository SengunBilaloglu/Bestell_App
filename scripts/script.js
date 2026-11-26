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

function renderBasketItems() {
    let basketRef = document.getElementById("basket-items");
    basketRef.innerHTML = "";

    for (let i = 0; i < myOrders.length; i++) {
        basketRef.innerHTML += getBasketTemplate(i);
    }
    for (let i = 0; i < myOrders.length; i++) {
        let amountId = document.getElementById(`dish-amount-${i}`);
        amountId.innerHTML = myOrders[i].amount;

        let dishNameId = document.getElementById(`dish-name-${i}`);
        dishNameId.innerHTML = myOrders[i].name;

        let quantityId = document.getElementById(`quantity-${i}`);
        quantityId.innerHTML = myOrders[i].amount;

        let priceId = document.getElementById(`price-${i}`);
        priceId.innerHTML = (myOrders[i].price * myOrders[i].amount).toFixed(2).toString().replace(".", ",") + "€";

        if (myOrders[i].amount == 1) {
            document.getElementById(`minus-button-${i}`).style.display = "none";
            document.getElementById(`delete-button-${i}`).style.display = "flex";
            document.getElementById(`delete-button2-${i}`).style.display = "none";
        } else {
            document.getElementById(`minus-button-${i}`).style.display = "flex";
            document.getElementById(`delete-button-${i}`).style.display = "none";
            document.getElementById(`delete-button2-${i}`).style.display = "flex";
        }
    }
}

function increaseItemsAmount(indexNum) {
    myOrders[indexNum].amount++;
    let amountId = document.getElementById(`dish-amount-${indexNum}`);
    amountId.innerHTML = myOrders[indexNum].amount;
    let quantityId = document.getElementById(`quantity-${indexNum}`);
    quantityId.innerHTML = myOrders[indexNum].amount;
    let priceId = document.getElementById(`price-${indexNum}`);
    priceId.innerHTML = (myOrders[indexNum].price * myOrders[indexNum].amount).toFixed(2).toString().replace(".", ",") + "€";

    // document.getElementById("minus-button").style.display = "flex";
    // document.getElementById("delete-button").style.display = "none";
    if (myOrders[indexNum].amount == 1) {
        document.getElementById(`minus-button-${indexNum}`).style.display = "none";
        document.getElementById(`delete-button-${indexNum}`).style.display = "flex";
        document.getElementById(`delete-button2-${indexNum}`).style.display = "none";
    } else {
        document.getElementById(`minus-button-${indexNum}`).style.display = "flex";
        document.getElementById(`delete-button-${indexNum}`).style.display = "none";
        document.getElementById(`delete-button2-${indexNum}`).style.display = "flex";
    }
    document.getElementById("subtotal").innerHTML = calculateSubtotal().toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("total").innerHTML = calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("buy-now-price").innerHTML = "Buy now ( "+calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€ )";

}

function decreaseItemsAmount(indexNum) {
    myOrders[indexNum].amount--;
    let amountId = document.getElementById(`dish-amount-${indexNum}`);
    amountId.innerHTML = myOrders[indexNum].amount;
    let quantityId = document.getElementById(`quantity-${indexNum}`);
    quantityId.innerHTML = myOrders[indexNum].amount;
    let priceId = document.getElementById(`price-${indexNum}`);
    priceId.innerHTML = (myOrders[indexNum].price * myOrders[indexNum].amount).toFixed(2).toString().replace(".", ",") + "€";

    if (myOrders[indexNum].amount == 1) {
        document.getElementById(`minus-button-${indexNum}`).style.display = "none";
        document.getElementById(`delete-button-${indexNum}`).style.display = "flex";
        document.getElementById(`delete-button2-${indexNum}`).style.display = "none";
    } else {
        document.getElementById(`minus-button-${indexNum}`).style.display = "flex";
        document.getElementById(`delete-button-${indexNum}`).style.display = "none";
        document.getElementById(`delete-button2-${indexNum}`).style.display = "flex";
    }
    document.getElementById("subtotal").innerHTML = calculateSubtotal().toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("total").innerHTML = calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("buy-now-price").innerHTML = "Buy now ( "+calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€ )";
}


function addItems(indexNum) {
    indexNum = myOrders.length - 1;
    let basketRef = document.getElementById("basket-items");
    basketRef.innerHTML += getBasketTemplate(indexNum);
    // renderBasketItems(indexNum);
    let amountId = document.getElementById(`dish-amount-${indexNum}`);
    amountId.innerHTML = myOrders[indexNum].amount;
    let dishNameId = document.getElementById(`dish-name-${indexNum}`);
    dishNameId.innerHTML = myOrders[indexNum].name;
    let quantityId = document.getElementById(`quantity-${indexNum}`);
    quantityId.innerHTML = myOrders[indexNum].amount;
    let priceId = document.getElementById(`price-${indexNum}`);
    priceId.innerHTML = myOrders[indexNum].price.toString().replace(".", ",") + "€";

    if (myOrders[indexNum].amount == 1) {
        document.getElementById(`minus-button-${indexNum}`).style.display = "none";
        document.getElementById(`delete-button-${indexNum}`).style.display = "flex";
        document.getElementById(`delete-button2-${indexNum}`).style.display = "none";
    } else {
        document.getElementById(`minus-button-${indexNum}`).style.display = "flex";
        document.getElementById(`delete-button-${indexNum}`).style.display = "none";
        document.getElementById(`delete-button2-${indexNum}`).style.display = "flex";
    }
}

function addToBasket(index) {
    let id = myDishes[index].productId;
    let indexNum = getProductIndex(id);
    document.getElementById("basket-full").style.display = "flex";
    document.getElementById("basket-empty").style.display = "none";

    if (indexNum == -1) {
        myOrders.push(
            {
                productId: myDishes[index].productId,
                name: myDishes[index].name,
                price: myDishes[index].price,
                amount: 1
            }
        )
        addItems(indexNum);

    } else {
        increaseItemsAmount(indexNum);
    }

    document.getElementById("subtotal").innerHTML = calculateSubtotal().toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("total").innerHTML = calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("buy-now-price").innerHTML = "Buy now ( "+calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€ )";
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

function deleteOrder(orderIndex) {
    myOrders.splice(orderIndex, 1);
    renderBasketItems();
    if (myOrders.length > 0) {

    document.getElementById("subtotal").innerHTML = calculateSubtotal().toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("total").innerHTML = calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("buy-now-price").innerHTML = "Buy now ( "+calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€ )";
    }
    else {
        document.getElementById("basket-full").style.display = "none";
        document.getElementById("basket-empty").style.display = "flex";
    }

    document.getElementById("subtotal").innerHTML = calculateSubtotal().toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("total").innerHTML = calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€";
    document.getElementById("buy-now-price").innerHTML = "Buy now ( "+calculateTotalPrice(calculateSubtotal()).toFixed(2).toString().replace(".", ",") + "€ )";
}