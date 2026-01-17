const translations = {
    en: {
        nav_home: "Home", nav_cv: "CV", nav_timeline: "Timeline", nav_contact: "Contact",
        profile_title: "PROFILE INFO",
        skills_title: "TECHNICAL SKILLS",
        lang_title: "LANGUAGES",
        schedule_title: "WEEKLY SCHEDULE",
        cover_1: "Driven by my passion for AI and data analytics...",
        time_1: "2023 - 2027 (Expected)",
        time_2: "Oct 2025 - Present",
        time_3: "2021 - Present"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_cv: "Özgeçmiş", nav_timeline: "Zaman Çizelgesi", nav_contact: "İletişim",
        profile_title: "PROFİL BİLGİSİ",
        skills_title: "TEKNİK YETENEKLER",
        lang_title: "DİLLER",
        schedule_title: "HAFTALIK PROGRAM",
        cover_1: "Yapay zeka ve veri analitiğine olan tutkumla...",
        time_1: "2023 - 2027 (Beklenen)",
        time_2: "Ekim 2025 - Günümüz",
        time_3: "2021 - Günümüz"
    }
};

let currentLang = 'en';
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});
