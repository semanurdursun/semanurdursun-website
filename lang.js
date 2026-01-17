const dictionary = {
    en: {
        home: "HOME",
        cv: "CV",
        contact: "CONTACT",
        profile_title: "PROFILE INFO",
        cover_p1: "Driven by my passion for artificial intelligence and data analytics, I chose to pursue a degree in Management Information Systems.",
        cover_p2: "As an Aspire Leaders Program graduate, I embrace a forward-thinking and solution-oriented leadership approach.",
        cover_p3: "I aim to leverage my technical expertise and leadership skills to create innovative, sustainable system changes and make a meaningful impact by launching my own venture in the field.",
        news_title: "NEWS PUBLICATION",
        news_1: "Flight Hour Project Update",
        news_1_text: "Finance Team Lead. Managing budget processes."
    },
    tr: {
        home: "ANA SAYFA",
        cv: "ÖZGEÇMİŞ",
        contact: "İLETİŞİM",
        profile_title: "PROFİL BİLGİSİ",
        cover_p1: "Yapay zeka ve veri analitiğine olan tutkumla Yönetim Bilişim Sistemleri alanında eğitim almayı seçtim.",
        cover_p2: "Aspire Liderler Programı mezunu olarak, ileri görüşlü ve çözüm odaklı bir liderlik yaklaşımını benimsiyorum.",
        cover_p3: "Teknik uzmanlığımı ve liderlik yeteneklerimi yenilikçi, sürdürülebilir sistem değişiklikleri yaratmak ve bu alanda kendi girişimimi başlatarak anlamlı bir etki oluşturmak için kullanmayı hedefliyorum.",
        news_title: "HABER YAYINLARI",
        news_1: "Uçuş Saati Projesi Güncellemesi",
        news_1_text: "Finans Ekip Lideri. Bütçe süreçlerini yönetiyor."
    }
};

let currentLang = 'en';
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (dictionary[currentLang][key]) {
            el.innerHTML = `<b>${dictionary[currentLang][key]}</b>`;
        }
    });
});
