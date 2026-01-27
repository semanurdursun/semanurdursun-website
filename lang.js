// Language System with Local Storage
const languageSystem = {
    currentLang: localStorage.getItem('selectedLanguage') || 'tr',
    
    init() {
        this.setLanguage(this.currentLang);
        this.createLanguageButtons();
        this.updateButtonStates();
    },
    
    createLanguageButtons() {
        const navMenu = document.querySelector('.nav-menu');
        if (!navMenu) return;
        
        // Remove old language toggle if exists
        const oldToggle = document.getElementById('langToggle');
        if (oldToggle) {
            oldToggle.parentElement.remove();
        }
        
        // Create TR button
        const trButton = document.createElement('li');
        trButton.innerHTML = '<button class="lang-btn" data-lang="tr">TR</button>';
        navMenu.appendChild(trButton);
        
        // Create EN button
        const enButton = document.createElement('li');
        enButton.innerHTML = '<button class="lang-btn" data-lang="en">EN</button>';
        navMenu.appendChild(enButton);
        
        // Add click events
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        
        // Update all elements with data-tr and data-en attributes
        document.querySelectorAll('[data-tr][data-en]').forEach(element => {
            if (lang === 'tr') {
                element.textContent = element.getAttribute('data-tr');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });
        
        this.updateButtonStates();
        
        // Reload news if on news page
        if (typeof loadNews === 'function') {
            loadNews();
        }
    },
    
    updateButtonStates() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    languageSystem.init();
});

// Legacy function for backwards compatibility
function toggleLanguage() {
    const newLang = languageSystem.currentLang === 'tr' ? 'en' : 'tr';
    languageSystem.setLanguage(newLang);
}
