const button = document.getElementById("circleButton");

let state = "center"; // trzy możliwe stany: 'center', 'left', 'right'

button.addEventListener("click", () => {
  if (state === "center") {
    button.classList.add("moved-right");
    state = "right";
  } else if (state === "right") {
    button.classList.remove("moved-right");
    button.classList.add("moved-left");
    state = "left";
  } else if (state === "left") {
    button.classList.remove("moved-left");
    state = "center";
  }
});
