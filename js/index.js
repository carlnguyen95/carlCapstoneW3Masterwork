var root = document.querySelector(":root");

/**
 * Toggle theme to dark
 */
function toggleThemeDark() {
  var toggleThemeElement = document.getElementById("theme-toggle");
  root.style.setProperty("--light-bg-color", "#191C1D");
  root.style.setProperty("--bg-color", "#131617");
  root.style.setProperty("--title-color", "#EEE");
  root.style.setProperty("--text-color", "#B7B7B7");
  root.style.setProperty("--border-color", "#333");
  toggleThemeElement.innerText = "clear_day";
  toggleThemeElement.onclick = toggleThemeLight;
  toggleThemeElement.classList.toggle("text-white");
  console.log("Changed to dark mode");
}

/**
 * Toggle theme to light
 */
function toggleThemeLight() {
  var toggleThemeElement = document.getElementById("theme-toggle");
  root.style.setProperty("--light-bg-color", "#F7F9FC");
  root.style.setProperty("--bg-color", "#FFF");
  root.style.setProperty("--title-color", "#2C3038");
  root.style.setProperty("--text-color", "#5A5A5A");
  root.style.setProperty("--border-color", "#EEE");
  toggleThemeElement.innerText = "dark_mode";
  toggleThemeElement.onclick = toggleThemeDark;
  toggleThemeElement.classList.toggle("text-white");
  console.log("Changed to light mode");
}

/* Handle toggle faq_item detail */
const faqContent = document.querySelector(".faq__content__details");
faqContent.addEventListener("click", (e) => {
  if (!e.target.closest(".faq__item--click")) return;

  console.log("Clicked");

  var faq_item = e.target.closest(".faq__item--click").parentElement;
  var faq = faq_item.querySelector("p");
  var faqIcon = faq_item.querySelector(".faq__item--title span");
  console.log(faq_item);

  faq.classList.toggle("faq__item--toggle-hidden");

  if (faq.classList.contains("faq__item--toggle-hidden")) {
    faqIcon.innerText = "expand_more";
  }
  else {
    faqIcon.innerText = "expand_less";
  }
})

/**
 * Toggle expand faq_item button
 */
function toggleExpandButton()
{
  var expandElements = document.getElementsByClassName("navbar-toggler-icon");

  for (element of expandElements) {
    element.classList.toggle("d-none");
  }
}
