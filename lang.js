function setTR() {

  if (document.getElementById("navHome")) document.getElementById("navHome").innerHTML = "Ana Sayfa";
  if (document.getElementById("navCV")) document.getElementById("navCV").innerHTML = "CV";
  if (document.getElementById("navTimeline")) document.getElementById("navTimeline").innerHTML = "Zaman Çizelgesi";
  if (document.getElementById("navContact")) document.getElementById("navContact").innerHTML = "İletişim";

 
  if (document.getElementById("homeTitle"))
    document.getElementById("homeTitle").innerHTML = "Yönetim Bilişim Sistemleri Öğrencisi";

  if (document.getElementById("homeDesc"))
    document.getElementById("homeDesc").innerHTML =
      "Web teknolojileri, SEO ve dijital sistemlerle ilgilenen ikinci sınıf YBS öğrencisi.";


  if (document.getElementById("profileTitle"))
    document.getElementById("profileTitle").innerHTML = "Profil";

  if (document.getElementById("profileText"))
    document.getElementById("profileText").innerHTML =
      "Web tasarımı, SEO ve dijital projelere odaklanan ikinci sınıf YBS öğrencisi.";

  if (document.getElementById("eduTitle"))
    document.getElementById("eduTitle").innerHTML = "Eğitim";

  if (document.getElementById("eduText"))
    document.getElementById("eduText").innerHTML =
      "İstanbul Topkapı Üniversitesi<br>Yönetim Bilişim Sistemleri";

  if (document.getElementById("skillsTitle"))
    document.getElementById("skillsTitle").innerHTML = "Yetenekler";

  if (document.getElementById("pageTitle"))
    document.getElementById("pageTitle").innerHTML = "İletişim";
}

function setEN() {

  location.reload();
}
