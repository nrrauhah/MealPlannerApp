function suggestMeal() {

    let category = document.getElementById("categorySelect").value;
    let maxCalories = parseInt(document.getElementById("maxCalories").value);

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
    .then(response => response.json())
    .then(data => {

        if (!data.meals) {
            document.getElementById("mealResult").innerHTML =
            "<h3>No meals found for this category.</h3>";
            return;
        }

        // Pick random meal from category list
        let randomIndex = Math.floor(Math.random() * data.meals.length);
        let mealId = data.meals[randomIndex].idMeal;

        // Get full meal details
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId)
        .then(response => response.json())
        .then(data2 => {

            let meal = data2.meals[0];

            let count = 0;

            for (let i = 1; i <= 20; i++) {
                let ingredient = meal["strIngredient" + i];
                if (ingredient != null && ingredient != "") {
                    count++;
                }
            }

            let calories = count * 100;

             if (isNaN(maxCalories)) {
                displayMeal(meal);
            } else if (calories <= maxCalories) {
                displayMeal(meal);
            } else {
                document.getElementById("mealResult").innerHTML =
                "<h3>No meal found under selected calorie limit. Try again.</h3>";
            }
        });

    });
}