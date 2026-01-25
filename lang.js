// Language switching functionality
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    updateLanguage();
    
    // Update display
    const langDisplay = document.getElementById('lang-display');
    if (langDisplay) {
        langDisplay.textContent = currentLang.toUpperCase();
    }
    
    // Save preference
    localStorage.setItem('preferredLanguage', currentLang);
}

function updateLanguage() {
    // Update all elements with data-en and data-tr attributes
    document.querySelectorAll('[data-en][data-tr]').forEach(element => {
        const text = currentLang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-tr');
        
        // Check if it's an input placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Reload news if on index page
    if (typeof loadNews === 'function') {
        loadNews();
    }
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
        
        const langDisplay = document.getElementById('lang-display');
        if (langDisplay) {
            langDisplay.textContent = currentLang.toUpperCase();
        }
    }
});

// News loading function
function loadNews() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            if (!newsContainer) return;
            
            newsContainer.innerHTML = '';
            
            data.news.forEach(item => {
                const newsCard = document.createElement('div');
                newsCard.className = 'news-card';
                newsCard.innerHTML = `
                    <h4>${currentLang === 'en' ? item.title_en : item.title_tr}</h4>
                    <p class="news-date">${item.date}</p>
                    <p>${currentLang === 'en' ? item.description_en : item.description_tr}</p>
                    <a href="${item.link}" target="_blank" class="news-link">${currentLang === 'en' ? 'Read more →' : 'Devamını oku →'}</a>
                `;
                newsContainer.appendChild(newsCard);
            });
        })
        .catch(error => {
            console.error('Error loading news:', error);
            const newsContainer = document.getElementById('news-container');
            if (newsContainer) {
                newsContainer.innerHTML = `<p>${currentLang === 'en' ? 'Unable to load news.' : 'Haberler yüklenemedi.'}</p>`;
            }
        });
}


    
