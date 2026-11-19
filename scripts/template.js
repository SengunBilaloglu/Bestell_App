function getMealsTemplate(i) {
    return    `<article id="meal" class="meal-div">
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
                            <button id="add-to-basket-${i}" class="add-to-basket">
                                Add to basket
                        </div>
                    </div>
                </article>`
}

