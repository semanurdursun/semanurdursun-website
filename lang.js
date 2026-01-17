const dictionary = {
    en: {
        home: "HOME", cv: "CV", contact: "CONTACT",
        welcome: "WELCOME TO MY PORTFOLIO",
        profile_title: "PROFILE INFO",
        news_title: "NEWS PUBLICATION",
        schedule_title: "WEEKLY CLASS SCHEDULE",
        time_1: "2023 - 2027",
        time_2: "Oct 2025 - Present"
    },
    tr: {
        home: "ANA SAYFA", cv: "ÖZGEÇMİŞ", contact: "İLETİŞİM",
        welcome: "PORTFOLYOMA HOŞ GELDİNİZ",
        profile_title: "PROFİL BİLGİSİ",
        news_title: "HABER YAYINLARI",
        schedule_title: "HAFTALIK DERS PROGRAMI",
        time_1: "2023 - 2027",
        time_2: "Ekim 2025 - Günümüz"
    }
};

let currentLang = 'en';
document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (dictionary[currentLang][key]) {
            el.innerHTML = `<b>${dictionary[currentLang][key]}</b>`;
        }
    });
});
