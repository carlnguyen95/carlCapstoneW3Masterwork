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
 * Toggle expand faq_item button
 */
function toggleExpandButton()
{
  var expandElements = document.getElementsByClassName("navbar-toggler-icon");

  for (element of expandElements) {
    element.classList.toggle("d-none");
  }
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

/* Handle Showcases tabs when window size is below 768px */
var showcasesTabContent = document.querySelector("#nav-tabContent");
showcasesTabContent.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-md-tab")) return;

  var navTab = e.target.closest(".nav-md-tab");
  var tabId = navTab.dataset.bsTarget;
  var tab = document.querySelector(tabId);
  var allTabs = showcasesTabContent.getElementsByClassName("tab-pane");
  var allNavTabs = showcasesTabContent.getElementsByClassName("nav-md-tab");
  var activeNavTab = showcasesTabContent.querySelector(".nav-md-tab.active");

  // Close all tabs then open the active tab
  for (const navEl of allNavTabs) {
    navEl.classList.remove("active");
    navEl.querySelector("span").classList.add("expand-arrow-down");
    navEl.querySelector("span").classList.remove("expand-arrow-up");
  }
  for (const element of allTabs) {
    element.classList.remove("active", "show");
  }

  // If click on an ative tab, collapse it and do not open new one
  if (activeNavTab === navTab) return;

  navTab.classList.add("active");
  navTab.querySelector("span").classList.remove("expand-arrow-down");
  navTab.querySelector("span").classList.add("expand-arrow-up");
  tab.classList.add("active", "show");
})