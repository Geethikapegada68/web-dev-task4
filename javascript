// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for trending content
    const trendingData = [
        { title: 'Movie 1', imageUrl: 'movie1.jpg', detailsUrl: 'details.html?id=1' },
        { title: 'Movie 2', imageUrl: 'movie2.jpg', detailsUrl: 'details.html?id=2' },
        // Add more content items
    ];

    // Function to display trending content on homepage
    function displayTrending() {
        const trendingSection = document.getElementById('trending');
        const contentContainer = trendingSection.querySelector('.content');
        contentContainer.innerHTML = '';

        trendingData.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');

            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            // Link to content details page
            const detailsLink = document.createElement('a');
            detailsLink.href = item.detailsUrl;
            detailsLink.appendChild(img);
            detailsLink.appendChild(title);

            contentItem.appendChild(detailsLink);
            contentContainer.appendChild(contentItem);
        });
    }

    // Display trending content on homepage
    displayTrending();

    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = trendingData.filter(item =>
            item.title.toLowerCase().includes(searchTerm)
        );
        displaySearchResults(filteredData);
    });

    function displaySearchResults(results) {
        const trendingSection = document.getElementById('trending');
        const contentContainer = trendingSection.querySelector('.content');
        contentContainer.innerHTML = '';

        results.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');

            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            // Link to content details page
            const detailsLink = document.createElement('a');
            detailsLink.href = item.detailsUrl;
            detailsLink.appendChild(img);
            detailsLink.appendChild(title);

            contentItem.appendChild(detailsLink);
            contentContainer.appendChild(contentItem);
        });
    }
});
