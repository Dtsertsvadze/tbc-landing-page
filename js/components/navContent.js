function setupNavContent() {
  const contentDiv = document.getElementById("nav-content");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  document.addEventListener("click", handleOutsideClick);
  setupResizeListener();
}

function handleNavLinkClick(e) {
  e.preventDefault();
  const contentDiv = document.getElementById("nav-content");
  const isCurrentlyActive = this.classList.contains('active');

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(l => l.classList.remove('active'));

  if (isCurrentlyActive) {
    closeContent(contentDiv);
  } else {
    this.classList.add('active');
    openContent(contentDiv);
    contentDiv.innerHTML = generateContent(this.getAttribute('data-content'));
  }
}

function handleOutsideClick(e) {
  const contentDiv = document.getElementById("nav-content");
  const navLinks = document.querySelectorAll('.nav-link');
  if (!e.target.closest('.nav-link') && !e.target.closest('#nav-content')) {
    closeContent(contentDiv);
    navLinks.forEach((l) => l.classList.remove("active"));
  }
}

function setupResizeListener() {
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth <= 1000) {
        const contentDiv = document.getElementById("nav-content");
        const navLinks = document.querySelectorAll(".nav-link");
        closeContent(contentDiv);
        navLinks.forEach((l) => l.classList.remove("active"));
      }
    }, 250);
  });
}

function openContent(contentDiv) {
  contentDiv.classList.add('active');
  contentDiv.style.display = 'block';
  setTimeout(() => {
    contentDiv.style.opacity = '1';
  }, 10); 
}

function closeContent(contentDiv) {
  contentDiv.classList.remove('active');
  contentDiv.style.opacity = '0';
  setTimeout(() => {
    contentDiv.style.display = 'none';
  }, 200);
}

function generateContent(contentType) {
  const contentData = {
    home: {
      links: ["პროდუქტების მიმოხილვა", "ნაკრები", "პირადი ბანკირი"],
    },
    about: {
      links: ["მიმოხილვა", "შეთავაზებები", "ღონისძიებები"],
    },
    contact: {
      links: ["კაფე", "ბიბლიოთეკა", "კონცეპტ ფილიალები"],
    },
  };

  const data = contentData[contentType];

  return `
    <div class="container nav-content-container">
      <div class="nav-content-image">
        <img data-v-562b0aec="" src="https://static.tbcconcept.ge/desktop/media/uz0y3tkf.idxFixed aspect ratio block [Utility].png" loading="lazy" width="190" height="136" class="header_dropdown-link-block-img">
        <a href="#" class="main-link">
          <svg data-v-562b0aec="" width="20" height="21" viewbox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M15.8342 4.04761H7.50091C7.04258 4.04761 6.66758 4.42261 6.66758 4.88094C6.66758 5.33927 7.04258 5.71427 7.50091 5.71427H13.8259L3.57578 15.9643C3.25078 16.2893 3.25078 16.8143 3.57578 17.1393C3.74245 17.3059 3.95078 17.3809 4.16744 17.3809C4.38411 17.3809 4.59244 17.2976 4.75911 17.1393L15.0009 6.88927V13.2143C15.0009 13.6726 15.3759 14.0476 15.8342 14.0476C16.2925 14.0476 16.6675 13.6726 16.6675 13.2143V4.88094C16.6675 4.42261 16.2925 4.04761 15.8342 4.04761Z"></path></svg>  
          <p>ციფრული ბანკი</p>
        </a>
      </div>
      <div class="nav-content-links">
        ${data.links.map((link) => `<a href="#" class="content-link">${link}</a>`).join("")}
      </div>
    </div>
  `;
}

window.setupNavContent = setupNavContent;