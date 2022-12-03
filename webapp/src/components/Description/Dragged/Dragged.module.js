export function changeMode() {
  const mode = localStorage.getItem("mode");
  if (mode === "day") {
    localStorage.setItem("mode", "night");
  } else {
    localStorage.setItem("mode", "day");
  }
}

export function loadMode() {
  const mode = localStorage.getItem("mode");
  if (mode == null) {
    localStorage.setItem("mode", "day");
  }
  if (mode === "night") {
    switchMode();
  }
}

export function switchMode() {
  document.querySelectorAll("#dragged, #night-mode")
      .forEach((el) => {
        el.classList.toggle("active")
      })
  document.querySelectorAll(".header, .header-block, .glass, body, th, td, input")
      .forEach((el) => {
        el.classList.toggle("night")
      })
}