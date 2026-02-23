function searchMeal() {
    let name = document.getElementById("searchInput").value;

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + name)
    .then(response => response.json())
    .then(data => {

        if (data.meals == null) {
            document.getElementById("mealResult").innerHTML =
            "<h3>no Meal found.</h3>";
        } else {
            displayMeal(data.meals[0]);
        }

    });
}