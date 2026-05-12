console.log("Portfolio Loaded");


/* PARTICLES OPTIMIZED */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 40
        },

        size: {
            value: 2
        },

        move: {
            speed: 1
        },

        line_linked: {
            enable: true,
            opacity: 0.2
        }

    },

    retina_detect: true

});


/* FORCE BUTTON VISIBILITY */

window.onload = () => {

    document.querySelectorAll(".btn").forEach(btn => {

        btn.style.opacity = "1";
        btn.style.visibility = "visible";

    });

};


/* GSAP LIGHTWEIGHT ANIMATIONS */

gsap.from(".title", {

    y: -50,
    opacity: 0,
    duration: 1

});

gsap.from(".hero h3", {

    opacity: 0,
    duration: 1,
    delay: 0.5

});

gsap.from(".hero p", {

    opacity: 0,
    duration: 1,
    delay: 1

});

gsap.from(".btn", {

    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.2,
    stagger: 0.2

});


/* CLOSE TOAST */

function closeToast() {

    const toast = document.getElementById("toast");

    if (toast) {

        toast.style.display = "none";

    }

}


/* AUTO HIDE TOAST ONLY IF EXISTS */

window.addEventListener("load", () => {

    const toast = document.getElementById("toast");

    if (toast) {

        setTimeout(() => {

            toast.style.display = "none";

        }, 4000);

    }

});