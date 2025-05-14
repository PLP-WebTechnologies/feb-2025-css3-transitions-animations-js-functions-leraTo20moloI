// Retrieve and apply stored preference on load
window.onload = function () {
    const savedColor =
    localStorage.getItem("preferredColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};

//Button animation and store preference
document.getElementById("colorButton").addEventListener("click", function(){
    const newColor = "#a0d2eb";// light blue
    document.body.style.backgroundColor = newColor;

    // Add animation
    this.classList.add("animate-bounce");

    //Remove animation class after animation ends
    this.addEventListener("animationed", () => {
        this.classList.remove("animate-bounce");
    }, {once:true});
});