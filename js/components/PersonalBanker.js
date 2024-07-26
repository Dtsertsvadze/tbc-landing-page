function createPersonalBanker() {
    const personalBankerSection = document.getElementById("personal-banker");

    const container = document.createElement('div');
    container.className = 'container';

    const heroBannerHtml = createBanner(
        'assets/images/personal-banker.png',
        'პერსონალური ბანკირი',
        'თქვენი სანდო პარტნიორი ფინანსურ რჩევებსა და ოპერაციებში',
        'გაიგე მეტი'
    );

    
    container.innerHTML = heroBannerHtml;

    personalBankerSection.appendChild(container);

    const handleContainerClass = () => {
        if (window.innerWidth <= 767) {
            const content = container.innerHTML;
            personalBankerSection.innerHTML = content;
        } else if (!personalBankerSection.querySelector('.container')) {
            personalBankerSection.innerHTML = `<div class="container">${personalBankerSection.innerHTML}</div>`;
        }
    };

    handleContainerClass();

    window.addEventListener('resize', handleContainerClass);
}