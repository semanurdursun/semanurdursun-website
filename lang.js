function setTR() {

  
  if (nav("navHome")) nav("navHome").innerHTML = "Ana Sayfa";
  if (nav("navCV")) nav("navCV").innerHTML = "CV";
  if (nav("navTimeline")) nav("navTimeline").innerHTML = "Zaman Çizelgesi";
  if (nav("navContact")) nav("navContact").innerHTML = "İletişim";

  
  set("homeTitle", "Yönetim Bilişim Sistemleri Öğrencisi");
  set("homeDesc",
    "Web teknolojileri, SEO ve dijital sistemlerle ilgilenen ikinci sınıf YBS öğrencisi."
  );

  
  set("profileTitle", "Profil");
  set("profileText",
    "Yapay zekâ ve veri analitiğine olan ilgim doğrultusunda Yönetim Bilişim Sistemleri alanında eğitim alıyorum. Liderlik ve çözüm odaklı yaklaşımı benimseyerek yenilikçi ve sürdürülebilir sistemler geliştirmeyi hedefliyorum."
  );

  set("eduTitle", "Eğitim");
  set("eduText",
    "İstanbul Topkapı Üniversitesi<br>Yönetim Bilişim Sistemleri<br>2023 – 2027"
  );

  set("skillsTitle", "Teknik Yetenekler");

  
  set("pageTitle", "İletişim");


  set("thDay", "Gün");
  set("thCourse", "Ders");
  set("thTime", "Saat");

  set("mon", "Pazartesi");
  set("tue1", "Salı");
  set("tue2", "Salı");
  set("tue3", "Salı");
  set("wed", "Çarşamba");
  set("thu", "Perşembe");

  set("course1", "Yönetim ve Organizasyon");
  set("course2", "Veri Yapıları");
  set("course3", "Yönetim Bilişim Sistemleri");
  set("course4", "Pazarlama Yönetimi");
  set("course5", "İş Süreçleri Analizi");
  set("course6", "Web Tasarımı");
}

function setEN() {

  
  if (nav("navHome")) nav("navHome").innerHTML = "Home";
  if (nav("navCV")) nav("navCV").innerHTML = "CV";
  if (nav("navTimeline")) nav("navTimeline").innerHTML = "Timeline";
  if (nav("navContact")) nav("navContact").innerHTML = "Contact";

  
  set("homeTitle", "Management Information Systems Student");
  set("homeDesc",
    "Second-year MIS student interested in web technologies, SEO, and digital systems."
  );

  
  set("profileTitle", "Profile");
  set("profileText",
    "Driven by my passion for artificial intelligence and data analytics, I study Management Information Systems with a focus on innovative, solution-oriented, and sustainable systems."
  );

  set("eduTitle", "Education");
  set("eduText",
    "Istanbul Topkapi University<br>Management Information Systems<br>2023 – Expected 2027"
  );

  set("skillsTitle", "Technical Skills");

  
  set("pageTitle", "Contact");

  /* TIMELINE */
  set("thDay", "Day");
  set("thCourse", "Course");
  set("thTime", "Time");

  set("mon", "Monday");
  set("tue1", "Tuesday");
  set("tue2", "Tuesday");
  set("tue3", "Tuesday");
  set("wed", "Wednesday");
  set("thu", "Thursday");

  set("course1", "Management and Organization");
  set("course2", "Data Structures");
  set("course3", "Management Information Systems");
  set("course4", "Marketing Management");
  set("course5", "Business Process Analysis");
  set("course6", "Web Design");
}


function set(id, text) {
  if (document.getElementById(id)) {
    document.getElementById(id).innerHTML = text;
  }
}

function nav(id) {
  return document.getElementById(id);
}
