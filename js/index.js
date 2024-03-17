function toggleTheme() {
  var darkThemeElements = document.getElementsByClassName("dark-theme-toggle");

  for (var element of darkThemeElements) {
    element.classList.toggle("bg-dark");
  }

  document.getElementById("theme-toggle").classList.toggle("text-white");
}
