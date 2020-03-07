
var form = document.querySelector("form")
form.addEventListener('submit', sub)

function sub() {
    event.preventDefault()
    var xhr = new XMLHttpRequest()
    var input = document.getElementById("inputdata").value
    console.log(input)
    if (input.length == 1) {
        xhr.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?f=' + input)
        xhr.send();

        var divData = document.getElementById("data")
        divData.setAttribute('class', 'container-fluid')
        divData.innerHTML = ""

        xhr.onload = function () {
            if (xhr.status == 200) {
                var obj = JSON.parse(xhr.response)
                console.log(obj)

                var row = document.createElement('div')
                row.setAttribute('class', 'row')
                divData.appendChild(row)

                for (var i = 0; i < obj.meals.length; i++) {

                    var col = document.createElement('div')
                    col.setAttribute('class', 'col-6')
                    row.appendChild(col)

                    var meal = document.createElement("div")
                    meal.setAttribute('class', 'card p-3 my-2 shadow-lg border-danger')
                    col.appendChild(meal)

                    var img = document.createElement("img")
                    var url = obj.meals[i].strMealThumb
                    console.log(url)
                    img.setAttribute("src", url)
                    img.setAttribute("class", "img-fluid")
                    console.log(obj.meals[i].strMealThumb)
                    meal.appendChild(img)

                    var cardBody = document.createElement("div")
                    cardBody.setAttribute('class', 'card-body')
                    meal.appendChild(cardBody)

                    var cardTitle = document.createElement("h5")
                    cardTitle.setAttribute('class', 'card-title text-center')
                    cardTitle.textContent = obj.meals[i].strMeal
                    var m = obj.meals[i].strMeal
                    cardBody.appendChild(cardTitle)

                    var col2 = document.createElement('div')
                    col2.setAttribute('class', 'col-6')
                    row.appendChild(col2)

                    var recipe = document.createElement("p")
                    recipe.innerHTML = "Click me to see Recipe"
                    var recipeDetails = obj.meals[i].strInstructions
                    cardBody.appendChild(recipe)

                    var mainBody = document.getElementById("showRecipe")
                    var recipeHead = document.createElement("h1")
                    var para = document.createElement("p")


                    // recipe.addEventListener('click', showRecipe)
                    // function showRecipe() {
                    //     recipeHead.textContent = ""
                    //     para.textContent = ""
                    //     // var obj = JSON.parse(xhr.response)
                    //     // for (var i = 0; i < obj.meals.length; i++) {

                            
                    //         var body = document.getElementById("box")
                    //         body.style.display = "none"

                            
                            
                    //         recipeHead.textContent = m
                    //         mainBody.appendChild(recipeHead)

                            
                    //         para.textContent = recipeDetails
                    //         mainBody.appendChild(para)
                    //     // }
                    // }
                }
            }
            else {
                console.log("Error Code is:" + xhr.status);
            }
        }
    }
}

    