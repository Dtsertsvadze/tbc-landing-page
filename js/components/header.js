function createHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
        <div class="container">
            <div class="header-container">
                <div class="logo">
                <svg data-v-562b0aec="" xmlns="http://www.w3.org/2000/svg" width="165" height="32" viewbox="0 0 165 32" fill="rgb(85, 95, 98)" id="Layer_1" data-name="Layer 1" version="1.1"><path data-v-562b0aec="" d="M81.72,12.35c-1.84,0-3.11,1.39-3.11,3.09s1.15,3.09,3.11,3.09,3.1-1.39,3.1-3.09-1.26-3.09-3.1-3.09ZM68.36,9.65c2.85,0,4.6,2.21,4.6,5.38h0c0,2.48-.88,4.38-2.47,5.91l-1.94-1.63c.9-1.01,1.71-2.58,1.71-4.27,0-1.81-.91-2.92-2.24-2.92s-2.27.86-2.27,2.67v2.57h-2.71v-2.57c0-1.81-.94-2.67-2.27-2.67s-2.24,1.11-2.24,2.92v.16c.05,1.64.83,3.14,1.71,4.12l-1.94,1.63c-1.59-1.53-2.47-3.42-2.47-5.9h0s0-.14,0-.14c.05-3.1,1.78-5.24,4.6-5.24,1.99,0,3.4.9,3.96,2.25.57-1.35,1.97-2.25,3.96-2.25ZM152.31,9.65c3.48,0,5.68,2.6,5.68,5.72,0,2.34-.77,4.13-2.16,5.57l-1.95-1.61c1.09-1.4,1.41-2.67,1.41-3.95,0-1.83-1.02-3.27-2.97-3.27s-2.97,1.44-2.97,3.27c0,1.28.31,2.55,1.41,3.95l-1.95,1.61c-1.39-1.44-2.16-3.23-2.16-5.57,0-3.11,2.2-5.72,5.68-5.72ZM124.49,5.33v.12c0,1.21,3.11,1.73,3.11,4.12,0,1.18-.93,2-2.04,2.25,1.9.61,3.08,2.11,3.08,4.27,0,2.87-2.15,4.97-5.7,4.97-2.57,0-4.77-1.44-5.34-3.91l2.44-1.01c.39,1.49,1.5,2.45,2.9,2.45,1.97,0,2.97-1.15,2.97-2.55,0-1.64-1.15-2.68-2.97-2.68h-1.67v-2.45h1.52c1.31,0,2.08-.49,2.08-1.33,0-1.54-3.11-1.58-3.11-4.06v-.18h2.73ZM86.32,5.41v2.45h-6.62c-.99,0-1.33.59-1.33,1.33v2.1c.78-1.19,2.48-1.55,3.64-1.55,3.5,0,5.52,2.52,5.52,5.7s-2.18,5.7-5.81,5.7-6.05-2.43-6.05-6.2v-5.67c0-2.13,1.44-3.86,3.88-3.86h6.78ZM136.74,14.33c-2.26.48-3.15,2.49-3.2,4.38.06,2.17,1.21,4.49,4.27,4.49s4.21-2.32,4.27-4.49c-.05-1.86-.9-3.82-3.07-4.35.07.39.21,1.28.21,1.99v1.19h-2.71v-1.19c0-.72.15-1.65.22-2.02ZM139.23,9.94v.57c0,.42-.05.92-.11,1.33,3.88.56,5.69,3.65,5.69,6.87,0,3.56-2.22,6.96-7,6.96s-7-3.4-7-6.96c0-3.25,1.85-6.37,5.81-6.88-.06-.41-.11-.89-.11-1.31v-.57h2.71ZM100.78,9.94v.12c0,1.49,1.15,1.84,1.15,3.41,0,1.49-.97,2.24-2.37,2.52,2.02.55,3.08,1.93,3.08,4.21,0,3.04-2.2,5.46-6,5.46s-5.98-2.55-5.98-5.68v-10.05h2.71v10.05c0,1.65,1.1,3.2,3.27,3.2s3.27-1.45,3.27-3.05c0-1.78-1.15-2.93-2.97-2.93h-.46v-2.45h1.04c1.04,0,1.67-.55,1.67-1.39,0-1.22-1.15-1.44-1.15-3.26v-.18h2.73ZM110.29,9.65c3.31,0,5.35,1.92,5.35,5.35v5.39c0,3.05-2.1,5.28-5.47,5.28-3.02,0-5.13-1.65-5.47-4.69l2.48-.69c.22,1.93,1.31,2.91,2.85,2.91,2.04,0,2.88-1.26,2.88-2.86v-5.31c0-1.66-.89-2.92-2.62-2.92s-2.64,1.26-2.64,2.92v.97h-2.71v-.99c0-3.42,2.03-5.35,5.35-5.35ZM52.59,9.94v2.38c0,1.67-.69,2.85-1.98,3.5,1.93.71,3.08,2.3,3.08,4.58,0,3.05-2.15,5.28-5.7,5.28-2.57,0-4.77-1.44-5.34-3.91l2.44-1.01c.39,1.49,1.5,2.45,2.9,2.45,1.97,0,2.97-1.26,2.97-2.86,0-1.78-1.15-2.99-2.97-2.99h-1.79v-2.45h1.18c1.69,0,2.48-.99,2.48-2.38v-2.57h2.73Z" class="cls-2"></path><path data-v-562b0aec="" d="M13.92,5.92c.11.06.26.23.29.26,1.47,1.7,4.2,6.2,5.31,8.09,1.39,2.36,4.58,8.29,4.85,9.07.03.08,0,.18-.07.23-.08.05-.17.09-.4-.15-1.24-1.25-4.11-3.68-8.84-5.6-.25-.1-.47-.19-.68-.28-.66-.33-1.03-.82-1.21-1.5-.53-2.01-.91-5.76-.39-9,.02-.11.08-.5.21-.8.21-.45.6-.5.92-.32ZM12.14,5.48c.09.04.16.1.07.41-.47,1.7-1.14,5.39-.45,10.44.04.26.07.5.09.73.04.74-.2,1.3-.69,1.79-1.48,1.46-4.54,3.66-7.61,4.83-.11.04-.47.18-.8.21-.5.05-.74-.26-.74-.63,0-.13.07-.34.08-.38.74-2.12,3.29-6.73,4.37-8.63,1.35-2.38,4.91-8.1,5.45-8.73.05-.07.15-.1.23-.06ZM14.62,19.18c2.01.55,5.45,2.09,8,4.16.09.07.39.32.58.58.29.41.14.77-.18.95-.11.06-.33.11-.37.12-2.21.42-7.48.53-9.67.54-2.74.02-9.49-.19-10.3-.34-.09-.01-.16-.08-.17-.17,0-.1,0-.19.32-.27,1.71-.45,5.25-1.71,9.28-4.84.21-.16.4-.31.58-.44.62-.41,1.23-.48,1.9-.3Z" class="cls-2"></path><rect data-v-562b0aec="" x="33.06" y=".84" width=".99" height="29.32" class="cls-1"></rect></svg>
                </div>
                  <nav class="main-nav">
                  <a href="#home" class="nav-link" data-content="home">პროდუცტები</a>
                  <a href="#about" class="nav-link" data-content="about">შეთავაზებები</a>
                  <a href="#contact" class="nav-link" data-content="contact">კონცეპტის სივრცე</a>
                </nav>
                <div class="header-actions" style="display:flex; gap: 10px;">
                    <div id="search-btn">  
                        <svg data-v-562b0aec="" width="24" height="24" viewbox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M21.7 20.3L15.5 14C16.5 12.7 17 11.2 17 9.5C17 5.4 13.6 2 9.5 2C5.4 2 2 5.4 2 9.5C2 13.6 5.4 17 9.5 17C11.2 17 12.8 16.4 14 15.5L20.2 21.7C20.4 21.9 20.7 22 20.9 22C21.1 22 21.4 21.9 21.6 21.7C22.1 21.3 22.1 20.7 21.7 20.3ZM4 9.5C4 6.5 6.5 4 9.5 4C12.5 4 15 6.5 15 9.5C15 12.5 12.5 15 9.5 15C6.5 15 4 12.5 4 9.5Z"></path></svg>
                    </div>
                    <div href="#account" class="header-actions link">
                        <div>
                            <svg data-v-562b0aec="" width="16" height="16" viewbox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>
                        </div>
                        <p>გამოიწერეთ ნაკრები</p>
                    </div>
                    <div class="language-selector">
                        <svg data-v-562b0aec="" width="16" height="16" fill="rgb(85, 95, 98)" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M14.6654 7.99992C14.6654 4.32659 11.672 1.33325 7.9987 1.33325C4.32536 1.33325 1.33203 4.32659 1.33203 7.99992C1.33203 11.6733 4.32536 14.6666 7.9987 14.6666C11.672 14.6666 14.6654 11.6733 14.6654 7.99992ZM13.2854 7.33325H11.3187C11.2587 5.83325 10.972 4.37325 10.4587 3.26659C11.9787 4.05992 13.072 5.55992 13.292 7.33325H13.2854ZM7.9987 13.3333C6.9787 13.3333 6.1387 11.2999 6.0187 8.66659H9.98536C9.86536 11.2999 9.02536 13.3333 8.00536 13.3333H7.9987ZM6.0187 7.33325C6.1387 4.69992 6.9787 2.66659 7.9987 2.66659C9.0187 2.66659 9.8587 4.69992 9.9787 7.33325H6.01203H6.0187ZM5.54536 3.26659C5.02536 4.37325 4.74536 5.82659 4.68536 7.33325H2.7187C2.9387 5.55992 4.03203 4.05992 5.55203 3.26659H5.54536ZM2.71203 8.66659H4.6787C4.7387 10.1666 5.02536 11.6266 5.5387 12.7333C4.0187 11.9399 2.92536 10.4399 2.70536 8.66659H2.71203ZM10.452 12.7333C10.972 11.6266 11.252 10.1733 11.312 8.66659H13.2787C13.0587 10.4399 11.9654 11.9399 10.4454 12.7333H10.452Z"></path></svg>
                        <span class="current-lang">ქარ</span>
                        <div class="lang-dropdown">
                            <a href="#" data-lang="en">Eng</a>
                            <a href="#" data-lang="ka">ქარ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-content" style="display: none;"></div>
    `;

  addHeaderEventListeners();
  setupNavContent();
}

function addHeaderEventListeners() {
  document.getElementById("search-btn").addEventListener("click", toggleSearch);
  document
    .querySelector(".language-selector")
    .addEventListener("click", changeLanguage);

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });
}

function toggleSearch() {
  console.log("Search toggled");
}

function changeLanguage(event) {
  event.preventDefault();
  if (event.target.tagName === "A") {
    const newLang = event.target.dataset.lang;
    const currentLangSpan = document.querySelector(".current-lang");
    const langDropdown = document.querySelector(".lang-dropdown");

    if (newLang === "en") {
      currentLangSpan.textContent = "Eng";
      langDropdown.innerHTML = '<a href="#" data-lang="ka">ქარ</a>';
    } else {
      currentLangSpan.textContent = "ქარ";
      langDropdown.innerHTML = '<a href="#" data-lang="en">Eng</a>';
    }

    console.log(`Language changed to ${newLang}`);

    langDropdown.querySelector("a").addEventListener("click", changeLanguage);
  }
}

document
  .querySelector(".language-selector")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      changeLanguage(event);
    }
  });

function handleNavLinkClick(e) {
  e.preventDefault();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");

  setTimeout(() => {
    this.classList.remove("active");
    this.offsetWidth; // Force a reflow
    this.classList.add("active");
  }, 0);

  // Show nav content
  const contentDiv = document.getElementById("nav-content");
  contentDiv.style.display = "block";
  contentDiv.innerHTML = generateContent(this.getAttribute("data-content"));
}

// Export the createHeader function to be used in main.js
window.createHeader = createHeader;
