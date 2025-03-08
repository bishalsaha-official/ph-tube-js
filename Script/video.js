// Load Categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
}


// Display Categories
const displayCategories = (data) =>{
    console.log(data)
}

loadCategories()