/* Scroll to top button */
function scrollToTop() {
  window.scrollTo(0, 0);
}

/* dark mode, reference https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
function darkMode() {
  document.body.classList.toggle("dark"); 

  document.getElementById("scroll-to-top").classList.toggle("dark");

  document.getElementById("content").classList.toggle("dark");

  document.getElementById("header").classList.toggle("dark");

  document.getElementById("footer").classList.toggle("dark");
  
  var h3 = document.getElementsByTagName("h3"); 
  for (var i = 0; i < h3.length; i++) {
    h3[i].classList.toggle("dark");
  }

  var a = document.getElementsByTagName("a"); 
  for (var i = 0; i < a.length; i++) {
    a[i].classList.toggle("dark");
  }

  var skk = document.getElementsByClassName("skk"); 
  for (var i = 0; i < skk.length; i++) {
    skk[i].classList.toggle("dark");
  }

  var prns = document.getElementsByClassName("prns"); 
  for (var i = 0; i < prns.length; i++) {
    prns[i].classList.toggle("dark");
  }

  document.getElementsByClassName("highlight-container:before").classList.toggle("dark"); // error, need to single out each element / cannot use pseudos. maybe can use a custom tag? or utilize the global vars? 
}

