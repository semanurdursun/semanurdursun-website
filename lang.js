// Language switcher functionality
let currentLang = 'tr'; // Default language is Turkish

function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    document.documentElement.lang = currentLang;
    
    // Update button text
    const langButton = document.getElementById('langToggle');
    langButton.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    
    // Update all elements with data-tr and data-en attributes
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(element => {
        if (currentLang === 'tr') {
            element.textContent = element.getAttribute('data-tr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
    
    // Update navigation menu items
    updateNavigationMenu();
    
    // Reload news if on timeline page
    if (typeof loadNews === 'function') {
        loadNews();
    }
}

function updateNavigationMenu() {
    const navItems = document.querySelectorAll('.nav-menu a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        
        if (href === 'index.html') {
            item.textContent = currentLang === 'tr' ? 'Ana Sayfa' : 'Home';
        } else if (href === 'cv.html') {
            item.textContent = currentLang === 'tr' ? 'Özgeçmiş' : 'CV';
        } else if (href === 'timeline.html') {
            item.textContent = currentLang === 'tr' ? 'Zaman Çizelgesi' : 'Timeline';
        } else if (href === 'contact.html') {
            item.textContent = currentLang === 'tr' ? 'İletişim' : 'Contact';
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const langButton = document.getElementById('langToggle');
    if (langButton) {
        langButton.textContent = 'EN';
    }
    
    // Set initial navigation menu text
    updateNavigationMenu();
});
