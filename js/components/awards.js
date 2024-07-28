const createAwards = (awards) => {
  const awardsContainer = document.getElementById("awards");

  const awardsData = [
    {
      img: "assets/images/awards/global.png",
      alt: "Global Finance",
      description: "საუკეთესო პერსონალური მომსახურება საქართველოში 2024",
      name: "Global Finance",
    },
    {
      img: "assets/images/awards/euromoney.png",
      alt: "Global Finance",
      description: "საუკეთესო პერსონალური მომსახურება საქართველოში 2023",
      name: "Euromoney",
    },
    {
      img: "assets/images/awards/global.png",
      alt: "Global Finance",
      description: "საუკეთესო პერსონალური მომსახურება საქართველოში 2022",
      name: "Global Finance",
    },
    {
      img: "assets/images/awards/the-banker.png",
      alt: "Global Finance",
      description: "საუკეთესო პერსონალური მომსახურება საქართველოში 2021",
      name: "The Banker & PWM",
    },
  ];

  const content = `
      <div class="awards-container">
        <div class="awards-header">
          <h2>ჯილდოები</h2>
        </div>
        <div class="awards-slider">
          <div class="awards-wrapper">
            ${awardsData
              .map(
                (award) => `
              <div class="award-item">
                <div class="award-image">
                  <img src="${award.img}" alt="${award.alt}">
                </div>
                <div class="award-content">
                  <div class="award-description">${award.description}</div>
                  <div class="award-name">${award.name}</div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="awards-slider-controls">
          <div class="awards-slider-progress">
            <div class="awards-progress-bar"></div>
          </div>
          <div class="awards-slider-arrows">
            <button class="awards-arrow left"><i class="fas fa-chevron-left"></i></button>
            <button class="awards-arrow right"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    `;

  awardsContainer.innerHTML = content;

  const sliderWrapper = document.querySelector(".awards-wrapper");
  const leftArrow = document.querySelector(".awards-arrow.left");
  const rightArrow = document.querySelector(".awards-arrow.right");
  const progressBar = document.querySelector(".awards-progress-bar");

  let currentPosition = 0;

  const updateSliderPosition = () => {
    const sliderWidth = sliderWrapper.scrollWidth;
    const containerWidth = document.querySelector(".awards-slider").offsetWidth;
    const maxPosition = -(sliderWidth - containerWidth);

    const itemWidth = getItemWidth();
    const endThreshold = itemWidth * 0.2;

    if (Math.abs(currentPosition - maxPosition) < endThreshold) {
      currentPosition = maxPosition;
    } else {
      currentPosition = Math.round(currentPosition / itemWidth) * itemWidth;
    }

    currentPosition = Math.max(Math.min(currentPosition, 0), maxPosition);

    sliderWrapper.style.transform = `translateX(${currentPosition}px)`;

    const progressWidth = (containerWidth / sliderWidth) * 100;
    const scrolledPercentage =
      Math.abs(currentPosition) / (sliderWidth - containerWidth);
    const progressPosition = scrolledPercentage * (100 - progressWidth);

    progressBar.style.width = `${progressWidth}%`;
    progressBar.style.left = `${progressPosition}%`;
    leftArrow.disabled = currentPosition >= 0;
    rightArrow.disabled = currentPosition <= maxPosition;
  };

  const getItemWidth = () => {
    const item = document.querySelector(".award-item");
    const style = window.getComputedStyle(item);
    return item.offsetWidth + parseInt(style.marginRight);
  };

  leftArrow.addEventListener("click", () => {
    const itemWidth = getItemWidth();
    currentPosition = Math.min(currentPosition + itemWidth, 0);
    updateSliderPosition();
  });

  rightArrow.addEventListener("click", () => {
    const itemWidth = getItemWidth();
    const containerWidth = document.querySelector(".awards-slider").offsetWidth;
    const maxPosition = -(sliderWrapper.scrollWidth - containerWidth);
    currentPosition = Math.max(currentPosition - itemWidth, maxPosition);
    updateSliderPosition();
  });

  let isDragging = false;
  let startPosition;
  let startX;

  function handleDragStart(e) {
    isDragging = true;
    startPosition = currentPosition;
    startX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    sliderWrapper.style.cursor = "grabbing";
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    const containerWidth = document.querySelector(".awards-slider").offsetWidth;
    const maxPosition = -(sliderWrapper.scrollWidth - containerWidth);
    currentPosition = Math.max(Math.min(startPosition + diff, 0), maxPosition);
    updateSliderPosition();
  }

  function handleDragEnd() {
    isDragging = false;
    const itemWidth = getItemWidth();
    currentPosition = Math.round(currentPosition / itemWidth) * itemWidth;
    updateSliderPosition();
    sliderWrapper.style.cursor = "grab";
  }

  sliderWrapper.addEventListener("mousedown", handleDragStart);
  sliderWrapper.addEventListener("touchstart", handleDragStart);

  document.addEventListener("mousemove", handleDragMove);
  document.addEventListener("touchmove", handleDragMove);

  document.addEventListener("mouseup", handleDragEnd);
  document.addEventListener("touchend", handleDragEnd);

  sliderWrapper.addEventListener("dragstart", (e) => e.preventDefault());

  const resetSlider = () => {
    currentPosition = 0;
    updateSliderPosition();
  };

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resetSlider();
    }, 250);
  });

  resetSlider();
};
