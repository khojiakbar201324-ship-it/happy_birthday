
function celebrate() {
    document.getElementById("surprise").innerHTML =
        "🎉 ZIYODA, TUG‘ILGAN KUNING BILAN! 💖";

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");

        confetti.innerHTML = ["🎊", "✨", "💖", "🎉"][
            Math.floor(Math.random() * 4)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "10";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        let duration = Math.random() * 3 + 2;

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            { transform: `translateY(110vh) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: "linear"
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

