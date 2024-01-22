document.addEventListener('DOMContentLoaded', function () {
    const birthListBtn = document.getElementById('birth-list-btn');
    const weddingListBtn = document.getElementById('wedding-list-btn');
    const birthListPopup = document.getElementById('birth-list-popup');
    const weddingListPopup = document.getElementById('wedding-list-popup');
    const closeButtons = document.querySelectorAll('.close-btn');

    function openPopup(popup) {
        popup.classList.add('visible');
        document.body.classList.add('blurred'); // Add blurred class to body
    }

    function closePopup(popup) {
        popup.classList.remove('visible');
        document.body.classList.remove('blurred'); // Remove blurred class from body
    }

    birthListBtn.addEventListener('click', () => openPopup(birthListPopup));
    weddingListBtn.addEventListener('click', () => openPopup(weddingListPopup));

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            closePopup(this.parentElement);
        });
    });
});

