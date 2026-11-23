function getMealsTemplate(i) {
    return `<article id="meal" class="meal-div">
                    <img id="meal-img-${i}" src="./assets/img/${myDishes[i].img}" alt="meal-img" class="meal-img">
                    <div id="meal-text" class="meal-text">
                        <div class="header-and-description">
                            <div id="meal-name-${i}" class="meal-name">
                                Meal name
                            </div>
                            <div id="meal-description-${i}" class="meal-description">
                                Meal description
                            </div>
                        </div>
                        <div class="price-and-add">
                            <div id="meal-price-${i}" class="meal-price">
                                Meal price
                            </div>
                            <button id="add-to-basket-${i}" class="add-to-basket" onclick="addToBasket(${i})">
                                Add to basket
                        </div>
                    </div>
                </article>`
}

function getBasketTemplate(i) {
    return `<div id="basket-item" class="basket-item">
                            <div class="dish-name">
                                <p>1 x Veggie mushroom black burger</p>
                            </div>

                            <div class="delete-and-price">
                                <div id="basket-delete-div" class="basket-delete-div">
                                    <a id="delete-button">
                                        <img src="./assets/icons/delete.png">
                                    </a>
                                    <a id="minus-button">-</a>
                                    <a id="quantity">1</a>
                                    <a id="plus-button">+</a>
                                </div>
                                <div id="price-div">
                                    <p id="price">€</p>
                                </div>
                            </div>
                        </div>
                     
    `
}

