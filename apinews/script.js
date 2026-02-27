const newsGrid = document.getElementById('news-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// YOUR NEW API KEY
const apiKey = '2e7820c45a6a274e3970ec32c167de87';

// Function to fetch news with a specific query
async function fetchNews(query) {

    const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&apikey=${apiKey}`;

    try {
        newsGrid.innerHTML = '<h2 style="text-align:center; width:100%;">Loading...</h2>';
        
        const response = await fetch(url);
        const data = await response.json();

        newsGrid.innerHTML = ''; // Clear loading text

        if (data.articles && data.articles.length > 0) {
            data.articles.forEach(article => {
                createCard(article);
            });
        } else {
            newsGrid.innerHTML = '<h3 style="text-align:center;">No results found. Try a different keyword.</h3>';
        }

    } catch (error) {
        console.error("Error:", error);
        newsGrid.innerHTML = '<h3 style="text-align:center;">Error fetching news. Check console.</h3>';
    }
}

function createCard(article) {
    if (!article.image) return;

    const card = document.createElement('div');
    card.className = 'card';

    const date = new Date(article.publishedAt).toLocaleDateString();

    card.innerHTML = `
        <img src="${article.image}" alt="News Image" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${article.title}</h3>
            <p style="font-size: 0.8rem; color: #999; margin-bottom: 5px;">${date}</p>
            <p class="card-desc">${article.description}</p>
            <a href="${article.url}" target="_blank" class="card-btn">Read Full Story →</a>
        </div>
    `;

    newsGrid.appendChild(card);
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetchNews(query);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            fetchNews(query);
        }
    }
});

// Initial Load
fetchNews('India');
