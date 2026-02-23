function displayMeal(meal) {

    let ingredients = "";
    let count = 0;

    for (let i = 1; i <= 20; i++) {

        let ingredient = meal["strIngredient" + i];
        let measure = meal["strMeasure" + i];

        if (ingredient != null && ingredient != "") {
            ingredients += "<li>" + ingredient + " - " + measure + "</li>";
            count++;
        }

    }

 
    let calories = count * 100;

    let result = `
        <div class="meal-card">
            <h2>${meal.strMeal}</h2>
            <p><b>Category:</b> ${meal.strCategory}</p>
            <p><b>Area:</b> ${meal.strArea}</p>
            <img src="${meal.strMealThumb}">
            <h3>Ingredients</h3>
            <ul>${ingredients}</ul>
            <h3>Instructions</h3>
            <p>${meal.strInstructions}</p>
            <p><b>Estimated Calories:</b> ${calories} kcal</p>
            <button onclick="saveMeal('${meal.strMeal}', '${meal.strCategory}')">
                Save Recommendation
            </button>
        </div>
    `;

    document.getElementById("mealResult").innerHTML = result;
}

