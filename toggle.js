let button = document.getElementById("switch")
let theme = document.getElementsByTagName("body")[0]

button.addEventListener("click", function () {
  theme.classList.toggle("light")
})
