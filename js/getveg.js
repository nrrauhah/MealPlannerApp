function getVegetarian() {

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then(response => response.json())
    .then(data => {

        if (!data.meals) {
            document.getElementById("mealResult").innerHTML =
            "<h3>No vegetarian meals found.</h3>";
            return;
        }

        // Pick random vegetarian meal from list
        let randomIndex = Math.floor(Math.random() * data.meals.length);
        let mealId = data.meals[randomIndex].idMeal;

        // Fetch full meal details
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId)
        .then(response => response.json())
        .then(data2 => {
            displayMeal(data2.meals[0]);
        });

    });
}