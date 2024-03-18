var root = document.querySelector(":root");

function toggleThemeDark() {
  var toggleThemeElement = document.getElementById("theme-toggle");
  root.style.setProperty("--light-bg-color", "#191C1D");
  root.style.setProperty("--bg-color", "#131617");
  root.style.setProperty("--title-color", "#EEE");
  root.style.setProperty("--text-color", "#B7B7B7");
  toggleThemeElement.innerText = "clear_day";
  toggleThemeElement.onclick = toggleThemeLight;
  toggleThemeElement.classList.toggle("text-white");
  console.log("Changed to dark mode");
}

function toggleThemeLight() {
  var toggleThemeElement = document.getElementById("theme-toggle");
  root.style.setProperty("--light-bg-color", "#F7F9FC");
  root.style.setProperty("--bg-color", "#FFF");
  root.style.setProperty("--title-color", "#2C3038");
  root.style.setProperty("--text-color", "#5A5A5A");
  toggleThemeElement.innerText = "dark_mode";
  toggleThemeElement.onclick = toggleThemeDark;
  toggleThemeElement.classList.toggle("text-white");
  console.log("Changed to light mode");
}
