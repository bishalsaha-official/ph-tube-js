// Load Categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
}


// Display Categories
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById('category-Container')
    categories.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = item.category;
        categoryContainer.appendChild(button);
    })
}

loadCategories()