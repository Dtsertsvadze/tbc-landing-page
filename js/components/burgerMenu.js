const createBurgerMenu = () => {
    const burgerContent = document.querySelector(".burger-content");
  
    burgerContent.innerHTML = `
      <nav class="burger-nav">
        <div class="expandable-item">
          <div class="main-item">
            პროდუქტები 
            <span class="expand-icon"><i class="fa-solid fa-angle-down"></i></span>
          </div>
          <div class="sub-items">
            <a href="#">პროდუქტების მიმოხილვა</a>
            <a href="#">ნაკრები</a>
            <a href="#">პირადი ბანკირი</a>
          </div>
        </div>
        <div class="expandable-item">
          <div class="main-item">
            შეთავაზებები 
            <span class="expand-icon"><i class="fa-solid fa-angle-down"></i></span>
          </div>
          <div class="sub-items">
            <a href="#">მიმოხილვა</a>
            <a href="#">შეთავაზებები</a>
            <a href="#">ღონისძიებები</a>
          </div>
        </div>
        <div class="expandable-item">
          <div class="main-item">
            კონცეპტის სივრცე 
            <span class="expand-icon"><i class="fa-solid fa-angle-down"></i></span>
          </div>
          <div class="sub-items">
            <a href="#">მიმოხილვა</a>
            <a href="#">კაფე</a>
            <a href="#">ბიბლიოთეკა</a>
            <a href="#">კონცეპტ ფილიალები</a>
          </div>
        </div>
        <div class="footer-content">
            <div class="contact">
            <h1>დაგვიკავშირდით:</h1>
            <div>
                <i class="fa-solid fa-phone"></i>
                <span>+995 32 2 27 27 00</span>
            </div>
            <div>
                <i class="fa-solid fa-envelope"></i>
                <span>info@tbcconcept.ge</span>
            </div>
            <div>
                <i class="fa-sharp-duotone fa-solid fa-location-dot"></i>
                <span>ფილიალები</span>
            </div>
            </div>
            <div class="social-media">
                <h1>სოციალური ქსელები</h1>
                <div>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
      </nav>
    `;
  
    const mainItems = burgerContent.querySelectorAll('.main-item');
  
    mainItems.forEach(item => {
      item.addEventListener('click', function() {
        const subItems = this.nextElementSibling;
        const expandIcon = this.querySelector('.expand-icon');
  
        mainItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherSubItems = otherItem.nextElementSibling;
            const otherExpandIcon = otherItem.querySelector('.expand-icon');
            otherSubItems.classList.remove('expanded');
            otherExpandIcon.classList.remove('rotated');
          }
        });
  
        subItems.classList.toggle('expanded');
        expandIcon.classList.toggle('rotated');
      });
    });
  };