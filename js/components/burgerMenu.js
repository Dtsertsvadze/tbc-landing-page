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
            <div class="rights">
                <div class="terms">
                    <p>
                        <a href="#">კონფიდენციალურობა</a>
                    </p>
                    <p>
                        <a href="#">წესები და პირობები</a>
                    </p>
                </div>
                <div class="tbc-concept">
                    <svg data-v-174d8ed1="" width="20" height="18" viewBox="0 0 36 32" fill="rgb(85, 95, 98)" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M15.8154 18.4806C15.8263 18.5838 15.8325 18.7025 15.8325 18.8227C15.8325 19.8184 15.4065 20.7155 14.7261 21.3474L14.7246 21.349C11.2681 24.5334 7.20468 27.1305 2.73238 28.9447L2.4671 29.0402C2.09727 29.1913 1.66502 29.3099 1.21717 29.3747L1.18752 29.3778C1.1251 29.3916 1.05332 29.3993 0.979974 29.3993C0.438492 29.3993 0 28.9662 0 28.4314C0 28.4114 0 28.3898 0.00156047 28.3697V28.3728C0.0187256 28.154 0.0639792 27.949 0.13264 27.7578L0.127958 27.7748C1.32952 24.3946 5.39922 17.0533 7.15475 14.0277C9.33784 10.2375 15.0632 1.11901 15.9168 0.118682C15.973 0.0462399 16.0588 0 16.1571 0C16.2055 0 16.2523 0.0107893 16.2929 0.0323679L16.2913 0.0308266C16.4333 0.0986452 16.5503 0.186501 16.4068 0.692058C15.6577 3.39401 14.5717 9.27881 15.6952 17.3246C15.7529 17.7407 15.8169 18.1214 15.8169 18.4806H15.8154Z"></path><path data-v-174d8ed1="" d="M17.2182 22.3447C17.78 21.9501 18.4807 21.7143 19.2375 21.7143C19.6104 21.7143 19.9693 21.7713 20.3064 21.8776L20.2814 21.8715C25.2172 23.3851 29.5022 25.6493 33.2443 28.5639L33.16 28.5007C33.5126 28.7751 33.8216 29.0787 34.09 29.4163L34.0994 29.4271C34.257 29.5997 34.3537 29.8278 34.3537 30.0791C34.3537 30.4552 34.1368 30.7819 33.8201 30.9438L33.8138 30.9468C33.6437 31.0285 33.4455 31.0948 33.238 31.1318L33.224 31.1333C29.6661 31.7992 21.1771 31.9718 17.6567 31.998C13.2437 32.0289 2.39535 31.6913 1.08143 31.4771C0.939428 31.457 0.828635 31.343 0.817711 31.2027V31.2012C0.817711 31.0455 0.817711 30.9037 1.34515 30.7742C4.09157 30.0606 9.77948 28.0461 16.2851 23.0676C16.6175 22.787 16.9171 22.5466 17.2182 22.3431V22.3447Z"></path><path data-v-174d8ed1="" d="M19.9178 19.2296C18.9394 18.7734 18.22 17.9134 17.9719 16.873L17.9672 16.8498C17.3212 14.1987 16.9514 11.1562 16.9514 8.02726C16.9514 6.0821 17.0949 4.17085 17.3711 2.30275L17.3446 2.51546C17.4117 2.04381 17.5319 1.61686 17.7004 1.21612L17.6879 1.25002C17.819 0.853902 18.1904 0.571839 18.6273 0.571839C18.827 0.571839 19.0127 0.630409 19.1672 0.730596L19.1641 0.729055C19.3373 0.85082 19.4871 0.986457 19.6198 1.13751L19.6229 1.14059C21.9854 3.85333 26.3813 11.0344 28.1633 14.023C30.3932 17.7823 35.5443 27.2338 35.9766 28.473C35.9906 28.5069 36 28.547 36 28.5886C36 28.6919 35.9469 28.7828 35.8674 28.8383H35.8658C35.7347 28.9262 35.6021 28.9786 35.2338 28.6086C33.2146 26.6188 28.6174 22.7454 21.0055 19.6828C20.6044 19.5271 20.2471 19.3853 19.9194 19.2296H19.9178Z"></path></svg>
                    <p>© 2024 ყველა უფლება დაცულია</p>
                </div>
            </div>
        </div>
      </nav>
    `;
  
    const setupBurgerExpansion = () => {
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

    setupBurgerExpansion();
  };