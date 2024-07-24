function createBanner(imgSrc, title, description, buttonText) {
    return `
        <div class="banner">
            <img class="banner-img" src="${imgSrc}" alt="Banner Image">
            <div class="banner-content">
                <h1>${title}</h1>
                <p>${description}</p>
                <button>
                    <i class="fa-solid fa-arrow-right"></i>
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}