var root = document.querySelector(":root");

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

function toggleFaqItemDetail(faq_id)
{
  var faq = document.querySelector(`#faq_item_${faq_id} p`);
  var faqIcon = document.querySelector(`#faq_item_${faq_id} .faq__item__title span`);

  faq.classList.toggle("faq__toggle__hidden");

  if (faq.classList.contains("faq__toggle__hidden")) {
    faqIcon.innerText = "expand_more";
  }
  else {
    faqIcon.innerText = "expand_less";
  }
}
