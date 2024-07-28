const burgerContent = document.querySelector(".burger-content");

const createBurgerIcon = () => {
  const burgerIcon = document.querySelector(".burger-icon");
  burgerIcon.innerHTML = `
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
    `;

  burgerIcon.addEventListener("click", toggleBurgerMenu);
}

const toggleBurgerMenu = () => {
  const burgerIcon = document.querySelector(".burger-icon");
  burgerIcon.classList.toggle("active");
  if (burgerIcon.classList.contains("active")) {
    burgerContent.style.opacity = "1";
    burgerContent.style.visibility = "visible";
  } else {
    burgerContent.style.opacity = "0";
    burgerContent.style.visibility = "hidden";
  }
}
