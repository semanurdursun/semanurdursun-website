const translations = {
  tr: {
    navHome: "Ana Sayfa",
    navCV: "CV",
    navTimeline: "Zaman Çizelgesi",
    navContact: "İletişim",

    homeTitle: "Yönetim Bilişim Sistemleri Öğrencisi",
    homeDesc: "Web teknolojileri, SEO ve dijital sistemlerle ilgilenen ikinci sınıf YBS öğrencisi.",

    timelineTitle: "Akademik Zaman Çizelgesi",
    scheduleTitle: "Haftalık Ders Programı",

    contactTitle: "İletişim Formu",
    submitBtn: "Gönder"
  },

  en: {
    navHome: "Home",
    navCV: "CV",
    navTimeline: "Timeline",
    navContact: "Contact",

    homeTitle: "Management Information Systems Student",
    homeDesc: "Second-year MIS student interested in web technologies, SEO, and digital systems.",

    timelineTitle: "Academic Timeline",
    scheduleTitle: "Weekly Course Schedule",

    contactTitle: "Contact Form",
    submitBtn: "Submit"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});
