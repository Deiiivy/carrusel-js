const images = [
    "assets/bugati.jpg",
    "assets/ferrari.jpg",
    "assets/lambo.webp",
];

const carouselImages = document.querySelector(".carousel-images");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage(index){
    carouselImages.style.backgroundImage = `url('${images[index]}')`
}

function nextImage(){
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0
    }
    showImage(currentIndex)
}

function backImage(){
    currentIndex --;
    if(currentIndex < 0) {
        currentIndex = images.length -1
    }
    showImage(currentIndex)
}

nextBtn.addEventListener('click', nextImage)
prevBtn.addEventListener('click', backImage)