// Load Categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
}

// Remove active class function
const removeActiveClass = () => {
    const buttons = document.getElementsByClassName('category-btn');
    for(let btn of buttons){
        btn.classList.remove('active')
    }
}

// Categories Videos by id
const loadCategoriesVideo = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(response => response.json())
        .then(data => {
            // remove active btn
            removeActiveClass()
            // active
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add('active')
            displayVideos(data.category)
        })
}

// Load video details
const loadDetails = async (vedioId) => {
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${vedioId}`;
    const res = await fetch(uri);
    const data = await res.json()
    displayDetails(data.video)
}

const displayDetails = (video) => {
    const detailsModalContent = document.getElementById('modal-content')
    detailsModalContent.innerHTML = `
    <img src='${video.thumbnail}' />
    <p>${video.description}</p>
    `

    // way 1
    // document.getElementById('modalbtn').click()

    // way 2
    document.getElementById('customModal').showModal();
}

// Display Categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-Container')
    categories.forEach((item) => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" class="btn category-btn" onClick="loadCategoriesVideo(${item.category_id})">
            ${item.category}
        </button>
        `
        categoryContainer.appendChild(buttonContainer)
    })
}

loadCategories()

function getTimeString(time){
    const hour = parseInt(time / 3600);
    let remainSecond = time % 3600;
    const minitue = parseInt(remainSecond / 60);
    remainSecond = remainSecond % 60;
    return `${hour} : ${minitue} : ${remainSecond} ago`
}

// Load Videos
const loadVideos = (searchTxt = '') => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchTxt}`)
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

// Display Videos
const displayVideos = (videos) => {
    // console.log(videos)
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    if(videos.length == 0){
        videoContainer.innerHTML = 'No Content Available'
        return
    }
    
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <figure class="h-60 relative">
                <img class="w-full h-full object-cover" src=${video.thumbnail} />
                ${video.others.posted_date.length == 0   ? '' : `<span class="absolute bg-black text-white p-3 right-2 bottom-2 rounded">${getTimeString(video.others.posted_date)}</span>`}
                
            </figure>
            <div class="flex gap-2 px-0 py-3">
                <div>
                    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}} />
                </div>
                <div>
                    <h2 class="font-bold text-xl">${video.title}</h2>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified == true ? `<img class="w-5" src='https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png' />` : ''}
                    </div>
                </div>
                <button onClick="loadDetails('${video.video_id
                }')" class="btn btn-primary"> Details </button>
            </div>
        `
        videoContainer.appendChild(card);
    })
}

document.getElementById('search-input').addEventListener('keyup', (e) => {
    loadVideos(e.target.value);
})

loadVideos();