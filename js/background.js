const images = [
    "bg_photo_1.jpg",
    "bg_photo_2.jpg",
    "bg_photo_3.jpeg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);