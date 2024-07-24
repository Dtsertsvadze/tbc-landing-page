function createHero() {
    const heroSection = document.getElementById("hero");

    const bannerHtml = createBanner(
        "assets/images/banner-img.webp",
        "თიბისი კონცეპტი",
        "პერსონალური საბანკო მომსახურება, მორგებული თქვენს საჭიროებებსა და ინტერესებზე",
        "გამოიწერეთ"
    );

    heroSection.innerHTML = `
        <div class="container">
            ${bannerHtml}
            <div class="hero-description">
                <p>გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.</p>
            </div>
        </div>
    `;

    const handleContainerClass = () => {
        const container = heroSection.querySelector('.container');
        if (window.innerWidth <= 767) {
            const content = container.innerHTML;
            heroSection.innerHTML = content;
        } else if (!heroSection.querySelector('.container')) {
            heroSection.innerHTML = `<div class="container">${heroSection.innerHTML}</div>`;
        }
    };

    handleContainerClass();

    window.addEventListener('resize', handleContainerClass);
}