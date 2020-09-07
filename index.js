window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const color = [
        "rgb(234, 238, 14)",
        "rgb(43, 174, 226)",
        "rgb(177, 34, 34)",
        "rgb(80, 226, 43)",
        "rgb(226, 43, 211)",
        "rgb(43, 70, 226)"
    ]
    console.log(sounds);

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    }
});