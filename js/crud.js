displayMeals();

function displayMeals() {

    let meals = JSON.parse(localStorage.getItem("meals")) || [];
    let output = "";

    if (meals.length === 0) {
        document.getElementById("savedMeals").innerHTML =
        "<h3>No saved recommendations yet.</h3>";
        return;
    }

    for (let i = 0; i < meals.length; i++) {

        output += `
            <div class="meal-card">
                <h3>${meals[i].name}</h3>
                <p>Category: ${meals[i].category}</p>

                <input type="text"
                    id="note${i}"
                    placeholder="Add note"
                    value="${meals[i].note}">
                
                <button onclick="updateMeal(${i})">
                    Update
                </button>

                <br><br>

                <button onclick="deleteMeal(${i})">
                    Delete
                </button>
            </div>
        `;
    }

    document.getElementById("savedMeals").innerHTML = output;
}

function updateMeal(index) {

    let meals = JSON.parse(localStorage.getItem("meals")) || [];

    let newNote = document.getElementById("note" + index).value;

    meals[index].note = newNote;

    localStorage.setItem("meals", JSON.stringify(meals));

    alert("Note updated successfully!");

    displayMeals();
}

function deleteMeal(index) {

    let meals = JSON.parse(localStorage.getItem("meals")) || [];

    meals.splice(index, 1);

    localStorage.setItem("meals", JSON.stringify(meals));

    alert("Deleted successfully!");

    displayMeals();
}