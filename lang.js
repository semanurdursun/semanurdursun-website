const texts = {
    en: { home: "HOME", cv: "CV", profile_title: "PROFILE INFO", news_title: "NEWS", schedule_title: "CLASS SCHEDULE" },
    tr: { home: "ANASAYFA", cv: "ÖZGEÇMİŞ", profile_title: "PROFİL BİLGİSİ", news_title: "HABERLER", schedule_title: "DERS PROGRAMI" }
};

let lang = 'en';
document.getElementById('lang-btn').addEventListener('click', () => {
    lang = lang === 'en' ? 'tr' : 'en';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(texts[lang][key]) el.innerHTML = `<b>${texts[lang][key]}</b>`;
    });
});
