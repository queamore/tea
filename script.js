// ===============================
// LIORA TEA - script.js
// ===============================

// Navigation aktiv markieren
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            current = section.getAttribute("id");
        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


document.querySelectorAll(".card,.review,.price-box,form").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// Formular

const form = document.querySelector("form");

form.addEventListener("submit",()=>{

alert("💗 Vielen Dank! Deine Bestellung wurde gesendet.");

});


// Button Animation

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
