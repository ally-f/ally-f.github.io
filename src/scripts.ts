/* Scroll to top button */
export function scrollToTop() {
  history.pushState({}, '', '#'); // changes the url to base url, with '#' appended (cannot pass a blank string...)
  window.scrollTo(0, 0); // forces scroll to top 
}

/* dark mode, reference https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
export function darkMode() {
  document.body.classList.toggle("dark"); 

  document.getElementById("stt")?.classList.toggle("dark");

  document.getElementById("darkmode")?.classList.toggle("dark");

  document.getElementById("content")?.classList.toggle("dark");

  document.getElementById("header")?.classList.toggle("dark");

  document.getElementById("footer")?.classList.toggle("dark");
  
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

  var prns = document.getElementsByClassName("mark"); 
  for (var i = 0; i < prns.length; i++) {
    prns[i].classList.toggle("dark");
  }

  /* since you cannot change the values of pseudos directly, we can change the variable itself */

  
  var root = document.documentElement;
  var rootStyles = getComputedStyle(root);

  var highlightColor = rootStyles.getPropertyValue('--highlight-color'); /* this is used to determine what the current color scheme is for ONE var...*/
  
  if (highlightColor == '--highlight-color-dark') { // if dark mode - may need to get the VALUE of this var somehow, idk if this returns the actual variable or its value 
    root.style.setProperty('--highlight-color', '--highlight-color-light');
  }
  else {
    root.style.setProperty('--highlight-color', '--highlight-color-dark');
  }
}


/* email address obfuscator */
export function obfuscateEmail() {
  var rra_liame = ['a', 'l', 'm', 'f', 'r', '0', '0', 'at', 'g', 'm', 'a', 'i', 'l', 'dot', 'c', 'o', 'm'];
  // this format protects from web scrapers 

  var rts_liame = '';
  for (var i=0; i<rra_liame.length; i++) {
    if (rra_liame[i] == "at") {
      rts_liame = rts_liame + '@';
    }
    else if (rra_liame[i] == "dot") {
      rts_liame = rts_liame + '.';
    }
    else {
      rts_liame = rts_liame + rra_liame[i];
    }
  }
  /*could create a new element, then insert that before or inside (- inside preferable, but how?) link element./*

  /*could you also just return the plain text and embed it into the href directly...? */

  
  const newDiv = document.createElement("a");

  // and give it some content
  const newContent = document.createTextNode(rts_liame);

  // add the text node to the newly created div (huh??? what is the text node exactly?)
  newDiv.appendChild(newContent);


  const currentDiv = document.getElementById("liame"); //test
  document.documentElement.insertBefore(newDiv, currentDiv);
}

function egg() {

}