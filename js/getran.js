function getRandom() {

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        displayMeal(data.meals[0]);
    });

}