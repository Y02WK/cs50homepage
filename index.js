let heroImage = document.querySelector("#hero-image");
let button = document.querySelector("#hero-btn");

function swapColor() {
  if (heroImage.getAttribute("src") === "./images/M1V6Black.png") {
    heroImage.setAttribute("src", "./images/M1V6Silver.png");
    button.textContent = "Black";
  } else {
    heroImage.setAttribute("src", "./images/M1V6Black.png");
    button.textContent = "Silver";
  }
}

button.addEventListener("click", swapColor);
