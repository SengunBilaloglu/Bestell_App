function getMealsTemplate(index) {
    return `<article id="meal" class="meal-div">
                    <img id="meal-img-${index}" src="./assets/img/${myDishes[index].img}" alt="meal-img" class="meal-img">
                    <div id="meal-text" class="meal-text">
                        <div class="header-and-description">
                            <div id="meal-name-${index}" class="meal-name">
                                Meal name
                            </div>
                            <div id="meal-description-${index}" class="meal-description">
                                Meal description
                            </div>
                        </div>
                        <div class="price-and-add">
                            <div id="meal-price-${index}" class="meal-price">
                                Meal price
                            </div>
                            <button id="add-to-basket-${index}" class="add-to-basket" onclick="addToBasket(${index})">
                                Add to basket
                        </div>
                    </div>
                </article>`
}

function getBasketTemplate(orderIndex) {
    return `<div id="basket-item-${orderIndex}" class="basket-item">
                            <div class="dish-name">
                                <p id="dish-amount-${orderIndex}"></p>x<p id="dish-name-${orderIndex}"> </p>
                                 <a id="delete-button2-${orderIndex}" class="delete-button" onclick="deleteOrder(${orderIndex})">
                                        <img src="./assets/icons/delete.png">
                                    </a>
                            </div>
                            <div class="delete-and-price">
                                <div id="basket-delete-div-${orderIndex}" class="basket-delete-div">
                                    <a id="delete-button-${orderIndex}" class="delete-button" onclick="deleteOrder(${orderIndex})">
                                        <img src="./assets/icons/delete.png">
                                    </a>
                                    <a id="minus-button-${orderIndex}" class="minus-button" onclick="decreaseItemsAmount(${orderIndex})"> - </a>
                                    <p id="quantity-${orderIndex}">1</p>
                                    <a id="plus-button-${orderIndex}" class="plus-button" onclick="increaseItemsAmount(${orderIndex})"> + </a>
                                </div>
                                <div id="price-div">
                                    <p id="price-${orderIndex}">€</p>
                                </div>
                            </div>
                        </div>
                     
    `
}

