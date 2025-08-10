function showTest(id) {
  document.querySelectorAll(".iframe-container").forEach((div) => (div.style.display = "none"))
  document.getElementById(id).style.display = "block"
  document.getElementById("dropdownMenu").style.display = "none"
  window.scrollTo(0, 0)
}

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu")
  menu.style.display = menu.style.display === "block" ? "none" : "block"
}

document.addEventListener("click", (event) => {
  const toggle = document.getElementById("dropdownToggle")
  const menu = document.getElementById("dropdownMenu")
  if (!toggle.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = "none"
  }
})
