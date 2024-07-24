const createHero = () => {
    const heroSection = document.getElementById("hero");

    heroSection.innerHTML = `
        <div class="container">
            <div class="banner">
                <img class="banner-img" src="assets/images/banner-img.webp" alt="Hero Banner">
                <div class="banner-content">
                    <h1>თიბისი კონცეპტი</h1>
                    <p>პერსონალური საბანკო მომსახურება, მორგებული თქვენს საჭიროებებსა და ინტერესებზე</p>
                    <button>
                        <i class="fa-solid fa-arrow-right"></i>
                        გამოიწერეთ
                    </button>
                </div>
            </div>
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
};

