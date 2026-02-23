function saveMeal(name, category) {

    let meals = JSON.parse(localStorage.getItem("meals")) || [];

    let newMeal = {
        name: name,
        category: category,
        note: ""
    };

    meals.push(newMeal);

    localStorage.setItem("meals", JSON.stringify(meals));

    alert("Meal saved successfully!");
}