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

function getBasketTemplate(index) {
    return `<div id="basket-item" class="basket-item">
                            <div class="dish-name">
                                <p id="dish-name-${index}">1 x Veggie mushroom black burger</p>
                            </div>

                            <div class="delete-and-price">
                                <div id="basket-delete-div-${index}" class="basket-delete-div">
                                    <a id="delete-button">
                                        <img src="./assets/icons/delete.png">
                                    </a>
                                    <a id="minus-button">-</a>
                                    <a id="quantity-${index}">1</a>
                                    <a id="plus-button">+</a>
                                </div>
                                <div id="price-div">
                                    <p id="price-${index}">€</p>
                                </div>
                            </div>
                        </div>
                     
    `
}

