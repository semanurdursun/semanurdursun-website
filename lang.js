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
    
    // Reload news if on timeline page
    if (typeof loadNews === 'function') {
        loadNews();
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const langButton = document.getElementById('langToggle');
    if (langButton) {
        langButton.textContent = 'EN';
    }
});
