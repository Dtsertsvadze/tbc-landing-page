const createDigitalBank = () => {
  const digitalBank = document.getElementById("digital-bank");
  const screenWidth = window.innerWidth;

  const googlePlayIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 12.16C20.5 12.41 20.69 12.79 20.69 13.19C20.69 13.59 20.5 13.97 20.17 14.22L17.3 15.91L14.54 13.15L17.3 10.39L20.16 12.16ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#000000"/>
    </svg>
  `;

  const appStoreIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28C16.07 21.23 15 21.08 13.97 20.63C12.88 20.17 11.88 20.15 10.73 20.63C9.29 21.22 8.52 21.04 7.67 20.28C2.79 15.25 3.51 7.59 9.05 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.7 7.27C17.21 7.39 18.35 7.99 19.1 9.07C15.98 10.94 16.72 15.05 19.58 16.2C19.01 17.7 18.27 19.19 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.01 13.69 3.16 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z" fill="#000000"/>
    </svg>
  `;

  const downloadIcon = `
    <i class="fa fa-download" aria-hidden="true"></i>
  `;

  const imageWrapper = `
    <div class="image-wrapper">
      <img src="assets/images/digitalBanking.png" alt="Digital Banking" class="digital-bank-image">
    </div>
  `;

  const contentWrapper = `
    <h2 class="digital-bank-header">ციფრული ბანკი</h2>
    <p class="digital-bank-description">შეასრულეთ საბანკო ოპერაციები დისტანციურად, ციფრული ბანკის დახმარებით.</p>
    <div class="button-wrapper">
      ${
        screenWidth >= 1030
          ? `<button class="app-button">
             ${googlePlayIcon}
             <span>Google Play</span>
           </button>
           <button class="app-button">
             ${appStoreIcon}
             <span>App Store</span>
           </button>`
          : `<button class="app-button-mobile">
             ${downloadIcon}
             <span>Download</span>
           </button>`
      }
    </div>
  `;

  const content = `
  <div class="digital-bank-container">
    ${
      screenWidth > 767
        ? `<div class="content-wrapper">${contentWrapper}</div>${imageWrapper}`
        : `<h2 class="digital-bank-header">ციფრული ბანკი</h2>
         ${imageWrapper}
         <p class="digital-bank-description">შეასრულეთ საბანკო ოპერაციები დისტანციურად, ციფრული ბანკის დახმარებით.</p>
         <div class="button-wrapper">
           <button class="app-button-mobile">
             ${downloadIcon}
             <span>Download</span>
           </button>
         </div>`
    }
  </div>
`;

  digitalBank.innerHTML = content;
};

window.addEventListener("load", createDigitalBank);
window.addEventListener("resize", createDigitalBank);
