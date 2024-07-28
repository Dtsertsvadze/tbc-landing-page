const createProducts = () => {
  const products = document.getElementById("products");

  const productsData = [
    {
      mainImage: "assets/images/digital.png",
      title: "ციფრული",
      description:
        "თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია...",
    },
    {
      mainImage: "assets/images/360.png",
      title: "360",
      description:
        "თიბისი კონცეპტის 360 ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად...",
    },
    {
      mainImage: "assets/images/premium.png",
      title: "პრემიუმი",
      description:
        "თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - პრემიუმ ნაკრები, სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად...",
    },
  ];

  const content = `
      <div class="products-container">
        <div class="products-header">
          <h2>პროდუქტები</h2>
        </div>
        <div class="products-slider">
          <div class="products-wrapper">
            ${productsData
              .map(
                (product) => `
              <a href="#" class="product-item">
                <div class="product-image">
                  <img src="${product.mainImage}" alt="${product.title}">
                </div>
                <div class="product-content">
                  <h3>${product.title}</h3>
                  <p class="product-description">${product.description}</p>
                </div>
              </a>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;

  products.innerHTML = content;

  const initSlider = () => {
    const productsSlider = document.querySelector(".products-slider");
    const productsWrapper = document.querySelector(".products-wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;
    let startTime;
    let clickThreshold = 300;

    const handleDragStart = (e) => {
      isDown = true;
      isDragging = false;
      productsSlider.classList.add("active");
      startX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
      scrollLeft = productsSlider.scrollLeft;
      startTime = new Date().getTime();
      e.preventDefault();
    };

    const handleDragEnd = (e) => {
      isDown = false;
      productsSlider.classList.remove("active");
      const endTime = new Date().getTime();
      const timeDiff = endTime - startTime;

      if (timeDiff < clickThreshold && !isDragging) {
        const clickedElement = e.target.closest(".product-item");
        if (clickedElement) {
          clickedElement.click();
        }
      }
    };

    const handleDragMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
      const walk = x - startX;
      if (Math.abs(walk) > 5) {
        isDragging = true;
        productsSlider.scrollLeft = scrollLeft - walk;
      }
    };

    productsSlider.addEventListener("mousedown", handleDragStart);
    productsSlider.addEventListener("touchstart", handleDragStart, {
      passive: false,
    });

    productsSlider.addEventListener("mousemove", handleDragMove);
    productsSlider.addEventListener("touchmove", handleDragMove, {
      passive: false,
    });

    productsSlider.addEventListener("mouseup", handleDragEnd);
    productsSlider.addEventListener("touchend", handleDragEnd);
    productsSlider.addEventListener("mouseleave", () => {
      isDown = false;
      productsSlider.classList.remove("active");
    });

    productsWrapper.querySelectorAll(".product-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (isDragging) {
          e.preventDefault();
        }
      });
    });

    productsWrapper.querySelectorAll("img, h3, p").forEach((el) => {
      el.addEventListener("dragstart", (e) => e.preventDefault());
    });
  };

  initSlider();
};

window.addEventListener("load", createProducts);
window.addEventListener("resize", createProducts);
