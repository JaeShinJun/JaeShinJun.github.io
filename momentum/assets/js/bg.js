const body = document.querySelector("body");

const IMG_NUMBER = 4;

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function handleImgLoad() {
    
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `assets/images/${imgNumber+1}.jpg`;
    
    image.classList.add("bgImage");
    
    body.appendChild(image);


    // image.addEventListener("loadend", handleImgLoad);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();