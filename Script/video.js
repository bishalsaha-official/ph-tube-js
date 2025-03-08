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
            <figure class="h-60">
                <img class="w-full h-full object-cover" src=${video.thumbnail} />
            </figure>
            <div class="flex gap-2 px-0 py-3">
                <div>
                    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
                </div>
                <div>
                    <h2 class="font-bold text-xl">${video.title}</h2>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${video.authors[0].profile_name}</p>
                        <img class="w-5" src='https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png' />
                    </div>
                </div>
            </div>
        `
        videoContainer.appendChild(card);
    })
}

loadVideos();