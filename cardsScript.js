    const searchInput = document.querySelector('.search-input');
    const suggestionsContainer = document.querySelector('.suggestions');
    const cardsContainer = document.getElementById('cards-container');

    // Search cards based on input
    function searchCards(input) {
        const cards = cardsContainer.getElementsByClassName('card');
        const inputValue = input.toLowerCase();

        Array.from(cards).forEach(card => {
            const cardHeader = card.querySelector('.card-header').textContent.toLowerCase();
            const cardContent = card.querySelector('.left-side-heading').textContent.toLowerCase();

            if (cardHeader.includes(inputValue) || cardContent.includes(inputValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }