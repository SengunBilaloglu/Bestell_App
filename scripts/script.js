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
        mealPriceRef.innerHTML = myDishes[i].price + "€";
        let mealImgRef = document.getElementById(`meal-img-${i}`);
        mealImgRef.innerHTML = myDishes[i].img;

    }
}

