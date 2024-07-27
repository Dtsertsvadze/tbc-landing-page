const createOffers = () => {
  const offersContainer = document.getElementById("offers");

  const offersData = [
    {
      mainImage: "assets/images/colosseum.png",
      badgeImage: "assets/images/badges/colosseum.png",
      title: "Colesseum Marina Hotel - 15% იანი ფასდაკლება",
      description: ["დასვენება", "ვიზა", "ჯაზ ფესტივალის შეთავაზებები"],
    },
    {
      mainImage: "assets/images/iveria.jpg",
      badgeImage: "assets/images/badges/iveria-badge.jpeg",
      title: "IVERIA BEACH - დაიბრუნდეთ 30%",
      description: ["ჯაზ ფესტივალის შეთავაზებები"],
    },
    {
      mainImage: "assets/images/tegeta-batumi.png",
      badgeImage: "assets/images/badges/tegeta-badge2.png",
      title: "თეგეტა მოტორსი - ბათუმი",
      description: ["თეგეტა მოტორსი", "ავტო", "ჯაზ ფესტივალის შეთავაზებები"],
    },
    {
      mainImage: "assets/images/tegeta-discount.png",
      badgeImage: "assets/images/badges/tegeta-badge2.png",
      title: "თეგეტა მოტორსი - 50% ფასდაკლება",
      description: ["ავტო", "თეგეტა მოტორსი"],
    },
    {
      mainImage: "assets/images/meridien.png",
      badgeImage: "assets/images/badges/meridien-badge.png",
      title: "La Meridien Batumi - 10%-იანი ფასდაკლება",
      description: ["დასვენება", "ვიზა", "ჯაზ ფესტივალის შეთავაზებები"],
    },
  ];

  const content = `
    <div class="offers-container">
      <div class="offers-header">
        <h2>შეთავაზებები</h2>
        <a href="#" class="all-offers">
           <i class="fas fa-arrow-right"></i> ყველა შეთავაზება
        </a>
      </div>
      <div class="offers-slider">
        <div class="offers-wrapper">
          ${offersData
            .map(
              (offer) => `
            <div class="offer-item">
              <div class="offer-image">
                <img src="${offer.mainImage}" alt="${offer.title}">
                <div class="offer-badge-wrapper">
                  <img src="${
                    offer.badgeImage
                  }" alt="Badge" class="offer-badge">
                </div>
              </div>
              <div class="offer-content">
                <div class="offer-description">
                  ${offer.description.map((desc) => `<p>${desc}</p>`).join("")}
                </div>
                <div class="offer-title">${offer.title}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="slider-controls">
        <div class="slider-progress">
          <div class="progress-bar"></div>
        </div>
        <div class="slider-arrows">
          <button class="arrow left"><i class="fas fa-chevron-left"></i></button>
          <button class="arrow right"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  `;

  offersContainer.innerHTML = content;

  const sliderWrapper = document.querySelector(".offers-wrapper");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  const progressBar = document.querySelector(".progress-bar");

  let currentPosition = 0;

  const updateSliderPosition = () => {
    const sliderWidth = sliderWrapper.scrollWidth;
    const containerWidth = document.querySelector(".offers-slider").offsetWidth;
    const maxPosition = -(sliderWidth - containerWidth);

    const itemWidth = getItemWidth();
    currentPosition = Math.round(currentPosition / itemWidth) * itemWidth;

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
    const item = document.querySelector(".offer-item");
    const style = window.getComputedStyle(item);
    return (
      item.offsetWidth +
      parseInt(style.marginRight) +
      parseInt(style.marginLeft)
    );
  };

  leftArrow.addEventListener("click", () => {
    const itemWidth = getItemWidth();
    currentPosition = Math.min(currentPosition + itemWidth, 0);
    updateSliderPosition();
  });

  rightArrow.addEventListener("click", () => {
    const itemWidth = getItemWidth();
    const containerWidth = document.querySelector(".offers-slider").offsetWidth;
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
    const containerWidth = document.querySelector(".offers-slider").offsetWidth;
    const maxPosition = -(sliderWrapper.scrollWidth - containerWidth);
    currentPosition = Math.max(Math.min(startPosition + diff, 0), maxPosition);
    updateSliderPosition();
  }

  function handleDragEnd() {
    isDragging = false;
    const itemWidth = getItemWidth();
    currentPosition = Math.round(currentPosition / itemWidth) * itemWidth;
    updateSliderPosition();
    sliderWrapper.style.cursor = "auto";
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
