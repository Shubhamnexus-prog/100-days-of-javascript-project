let isOn = false;

const light = document.querySelector(".light");
const card = document.getElementById("loginCard");
const sound = document.getElementById("clickSound");

function toggleLamp() {
    isOn = !isOn;

    sound.currentTime = 0;
    sound.play();

    if (isOn) {
        light.style.opacity = "1";

        gsap.to("body", {
            backgroundColor: "#1c1f24",
            duration: 0.6
        });

        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        });

    } else {
        light.style.opacity = "0";

        gsap.to("body", {
            backgroundColor: "#121417",
            duration: 0.6
        });

        gsap.to(card, {
            opacity: 0,
            y: 50,
            duration: 0.5
        });
    }
}