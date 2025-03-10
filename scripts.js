/* Scroll to top button */
function scrollToTop() {
  window.scrollTo(0, 0);
}

/* dark mode, reference https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
function darkMode() {
  document.body.classList.toggle("dark-body"); /* toggles the dark class onto body */

  document.getElementById("scroll-to-top").classList.toggle("dark-button"); /* toggles the dark class onto stt button */

  document.getElementById("content").classList.toggle("dark"); /* toggles the dark class onto dark mode button */
}

