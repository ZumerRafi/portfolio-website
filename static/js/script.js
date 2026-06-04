// =========================
// MOBILE HAMBURGER MENU
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

        // Close menu after clicking a link

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            });

        });

    }

});


// =========================
// AUTO HIDE SUCCESS TOAST
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const toast = document.getElementById("toast");

    if (toast) {

        setTimeout(() => {

            toast.style.opacity = "0";

            setTimeout(() => {

                toast.style.display = "none";

            }, 500);

        }, 4000);

    }

});


// =========================
// SMOOTH REVEAL ANIMATION
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".section, .skill-card, .project-card, .certificate-card"
    ).forEach((el) => {

        el.classList.add("hidden");

        observer.observe(el);

    });

});


// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#38bdf8";
scrollBtn.style.color = "#000";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});