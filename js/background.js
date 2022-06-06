const images = ["london.JPG", "park.jpeg", "sea.png"];
const choosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;
document.body.appendChild(bgImage);