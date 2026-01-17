function setTR() {
    document.getElementById("navHome").innerHTML = "Ana Sayfa";
    document.getElementById("navCV").innerHTML = "CV";
    document.getElementById("navTimeline").innerHTML = "Zaman Çizelgesi";
    document.getElementById("navContact").innerHTML = "İletişim";

    if (document.getElementById("pageTitle")) {
        document.getElementById("pageTitle").innerHTML = "Hoş Geldiniz";
    }
}

function setEN() {
    document.getElementById("navHome").innerHTML = "Home";
    document.getElementById("navCV").innerHTML = "CV";
    document.getElementById("navTimeline").innerHTML = "Timeline";
    document.getElementById("navContact").innerHTML = "Contact";

    if (document.getElementById("pageTitle")) {
        document.getElementById("pageTitle").innerHTML = "Welcome";
    }
}

