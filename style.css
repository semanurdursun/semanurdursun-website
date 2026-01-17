let currentLang = 'en';

const translations = {
    en: {
        nav_home: "HOME", nav_timeline_cv: "TIMELINE/CV", nav_contact: "CONTACT",
        profile_title: "PROFILE INFO", news_title: "NEWS",
        cv_header: "CURRICULUM VITAE", skills_title: "CERTIFICATIONS",
        projects_title: "PROJECTS", schedule_title: "TIMELINE & SCHEDULE",
        fin_lead: "Finance Team Lead"
    },
    tr: {
        nav_home: "ANA SAYFA", nav_timeline_cv: "ZAMAN ÇİZELGESİ/CV", nav_contact: "İLETİŞİM",
        profile_title: "PROFİL BİLGİSİ", news_title: "HABERLER",
        cv_header: "ÖZGEÇMİŞ", skills_title: "SERTİFİKALAR",
        projects_title: "PROJELER", schedule_title: "ZAMAN ÇİZELGESİ VE PROGRAM",
        fin_lead: "Finans Ekip Lideri"
    }
};

// Function to fetch news from the separate JSON file
async function loadNews() {
    try {
        const response = await fetch('news.json');
        const newsData = await response.json();
        const feed = document.getElementById('news-feed');
        if (!feed) return;

        feed.innerHTML = '';
        newsData[currentLang].forEach(item => {
            const article = document.createElement('article');
            article.className = 'news-item';
            article.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            feed.appendChild(article);
        });
    } catch (error) {
        console.error("News load failed: ", error);
    }
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    loadNews(); // Reload news in the correct language
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => loadNews());
