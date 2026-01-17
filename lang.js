const translations = {
    en: {
        nav_home: "Home", nav_cv: "CV", nav_timeline: "Timeline", nav_contact: "Contact",
        profile_title: "PROFILE INFO", cv_header: "CURRICULUM VITAE", skills_title: "TECHNICAL SKILLS",
        lang_title: "LANGUAGES", schedule_title: "CLASS SCHEDULE",
        stat_eng: "Statistical Engineering Focus", fin_lead: "Finance Team Lead",
        cover_1: "Driven by my passion for AI and data analytics...",
        time_1: "2023 - 2027 (Expected)", time_2: "Oct 2025 - Present"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_cv: "Özgeçmiş", nav_timeline: "Zaman Çizelgesi", nav_contact: "İletişim",
        profile_title: "PROFİL BİLGİSİ", cv_header: "ÖZGEÇMİŞ", skills_title: "TEKNİK YETENEKLER",
        lang_title: "DİLLER", schedule_title: "HAFTALIK PROGRAM",
        stat_eng: "İstatistik Mühendisliği Odaklı", fin_lead: "Finans Ekip Lideri",
        cover_1: "Yapay zeka ve veri analitiğine olan tutkumla...",
        time_1: "2023 - 2027 (Beklenen)", time_2: "Ekim 2025 - Günümüz"
    }
};

let lang = 'en';
document.getElementById('lang-btn').addEventListener('click', () => {
    lang = lang === 'en' ? 'tr' : 'en';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});
