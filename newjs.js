(
    async function () {
        await fetch("recepies.json").then(response => response.json()).then(data => {
            console.log(data)
            let searchField = document.getElementById("searchbar")
            let btn = document.getElementById("Submit")
            let rows = document.getElementById("row1")

            function display(result) {
                rows.innerHTML = ""
                result.forEach(value => {
                    rows.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card">
    <div class="card-body" style="background-color:black; color:white;">
    <h5 class="card-title">${value.title}</h5>
    <hr>
    <p class="card-text">${value.description}</p>
    </div>
    </div>
</div>
                `
                });
            }

            function search() {
                let query = searchField.value;
                let result = data.filter(function (recipe) {
                    return (
                        recipe.title.toLowerCase().includes(query) ||
                        recipe.ingredients.join("").toLowerCase().includes(query)
                    )
                })
                display(result)
            }

            btn.addEventListener("click", search)

        })
    }
)()