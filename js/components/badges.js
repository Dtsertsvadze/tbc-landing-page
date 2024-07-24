const createBadges = () => {
    const badges = document.getElementById('badges');

    badges.innerHTML = `
        <div class="container">
            <div class="badge">
                <h1>94 750</h1>
                <p>მომხმარებელი</p>
            </div>
            <div class="badge">
                <h1>150+</h1>
                <p>ღონისძიება</p>
            </div>
            <div class="badge">
                <h1>130+</h1>
                <p>შეთავაზება</p>
            </div>
        </div>
    `;
};