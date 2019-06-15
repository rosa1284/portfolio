/*lyttes efter at siden er loaded og så vil siden vises*/
window.addEventListener("load", sidenVises);



//Når siden vises lyttes efter om Burgermenuen får et klik. Når der er et klik, går den videre til funktionen.
function sidenVises() {
    console.log("sidenVises");

    document.querySelector(".menu_toggle").addEventListener("click", toggleMenu);
}

//Når der er klikket får nav'en class'en "active" på. Når nav'en er "active" er den true og skifter (toggler) textcontent "stiber" ud med et "X". Når den er ude er der et X på. Hvis den ikke er active (hvis der bliver trykket igen) Skifter (toggler) den til stiber igen.

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#primary_menu").classList.toggle("open");

    let erAktiv = document.querySelector("#primary_menu").classList.contains("open");

    if (erAktiv == true) {
        document.querySelector(".menu_toggle").classList.add("icon_close_active");

    } else {
        document.querySelector(".menu_toggle").classList.remove("icon_close_active");
    }
}
