const createPackages = () => {
  const packagesContainer = document.getElementById("packages");

  const content = `
      <div class="packages-container">
          <h2 class="packages-header">შეარჩიე ნაკრები</h2>
          <div class="packages-grid">
              <div class="package-item">
                  <img src="assets/images/digital.png" alt="ციფრული" class="package-image">
                  <div class="package-content">
                      <p>ციფრული</p>
                      <button>
                          <i class="fa-solid fa-arrow-right"></i>
                          <a href="#" class="read-more">იხილე მეტი</a>
                      </button>
                  </div>
              </div>
              <div class="package-item full-height">
                  <img src="assets/images/360.png" alt="Basic Package" class="package-image">
                  <div class="package-content">
                      <h3>360</h3>
                      <button>
                          <i class="fa-solid fa-arrow-right"></i>
                          <a href="#" class="read-more">იხილე მეტი</a>
                      </button>
                  </div>
              </div>
              <div class="package-item">
                  <img src="assets/images/premium.png" alt="Premium Package" class="package-image">
                  <div class="package-content">
                      <h3>პრემიუმი</h3>
                      <button>
                          <i class="fa-solid fa-arrow-right"></i>
                          <a href="#" class="read-more">იხილე მეტი</a>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      `;

  packagesContainer.innerHTML = content;

  if (window.innerWidth <= 767) {
    const packagesGrid = document.querySelector(".packages-grid");
    let isDown = false;
    let startX;
    let scrollLeft;

    packagesGrid.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - packagesGrid.offsetLeft;
      scrollLeft = packagesGrid.scrollLeft;
    });

    packagesGrid.addEventListener("mouseleave", () => {
      isDown = false;
    });

    packagesGrid.addEventListener("mouseup", () => {
      isDown = false;
    });

    packagesGrid.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - packagesGrid.offsetLeft;
      const walk = (x - startX) * 2;
      packagesGrid.scrollLeft = scrollLeft - walk;
    });
  }
};

window.addEventListener("load", createPackages);
window.addEventListener("resize", createPackages);
