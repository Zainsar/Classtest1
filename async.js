(async function () {
    let rootElement = document.getElementById("grid")
    //    console.log(rootElement)
    await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)


            data.products.forEach(value => {
                // console.log(value.title) 
                rootElement.innerHTML += `
<div class="col-lg-4">
<div class="card" style="width: 18rem;">
<img src="${value.images[0]}" class="card-img-top" alt="..." height="200px">
<div class="card-body">
    <h2 class="card-title">${value.title + value.brand}</h2>
    <h5 class="card-text">${value.description}</h5>
    <a href="#" class="btn btn-primary">${value.price}</a>
    </div>
    </div>
    </div>
    `
            });
        })
})()