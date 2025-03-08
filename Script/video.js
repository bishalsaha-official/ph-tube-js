// Load Categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
}

// Display Categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-Container')
    categories.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = item.category;
        categoryContainer.appendChild(button);
    })
}

loadCategories()

// Load Videos
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

// Display Videos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <figure>
                <img src="${video.thumbnail}" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        videoContainer.appendChild(card);
    })
}

loadVideos();