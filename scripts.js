/* Scroll to top button */
function scrollToTop() {
  history.pushState({}, null, '#'); // changes the url to base url, with '#' appended (cannot pass a blank string...)
  window.scrollTo(0, 0); // forces scroll to top 
}

/* dark mode, reference https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
function darkMode() {
  document.body.classList.toggle("dark"); 

  document.getElementById("stt").classList.toggle("dark");

  document.getElementById("darkmode").classList.toggle("dark");

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

  var prns = document.getElementsByClassName("mark"); 
  for (var i = 0; i < prns.length; i++) {
    prns[i].classList.toggle("dark");
  }

  /* since you cannot change the values of pseudos directly, we can change the variable itself */

  
  var root = document.documentElement;
  var rootStyles = getComputedStyle(root);

  var rootStyles = rootStyles.getPropertyValue('--highlight-color'); /* this is used to determine what the current color scheme is for ONE var...*/
  /*
  if (rootStyles == 'black') { // if dark mode
    root.style.setProperty('--dark', 'white');
  }
  else {
    root.style.setProperty('--dark', 'black');
  }
    */
    

  //if ((--highlight-color) == (--highlight-color-light)) {
  //this does not work bc they are css vars. how to retrieve them? from the document? root?? see above...

    //set the var to the dark one
    root.style.setProperty('--highlight-color', '--highlight-color-dark');

  //}
 // else {
    //set the var to the lite one
  //  document.documentElement.style.setProperty//('--highlight-color', '--highlight-color-light');
  //}
}


/* email address obfuscator */
function obfuscateEmail() {
  var rra_liame = ['a', 'l', 'm', 'f', 'r', '0', '0', 'at', 'g', 'm', 'a', 'i', 'l', 'dot', 'c', 'o', 'm'];

  var rts_liame = '';
  for (var i=0; i<rra_liame.length; i++) {
    if (rra_liame[i] == "at") {
      rts_liame = rts_liame + '@;';
    }
    else if (rra_liame[i] == "dot") {
      rts_liame = rts_liame + '.';
    }
    else {
      rts_liame = rts_liame + rra_liame[i];
    }
  }
    // why does this just append "@" a bunch of times? 

    /*put this inside the p somehow...*/

    //rts_liame.join('');

    const newDiv = document.createElement("span");

    // and give it some content
    const newContent = document.createTextNode(rts_liame);
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);


    const currentDiv = document.getElementById("header"); //test
    document.documentElement.insertBefore(newDiv, currentDiv);
  
  
  console.log(rts_liame)
  return rts_liame;
}

/*have to instantiate the document first...? or can it be called directly from html file?*/
document.documentElement.onload = obfuscateEmail;


function addElement() {
  // create a new div element
  

  // add the newly created element and its content into the DOM
}


function egg() {

}