/* Scroll to top button */
export function scrollToTop() {
  history.pushState({}, '', '#'); // changes the url to base url, with '#' appended (cannot pass a blank string...)
  window.scrollTo(0, 0); // forces scroll to top 
}

/* dark mode, reference https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
/*there has to be a way to optimize this; pull out the loop thing into its own method? */ 
export function darkMode() {
  document.body.classList.toggle("dark"); 

  document.getElementById("stt")?.classList.toggle("dark");

  document.getElementById("darkmode")?.classList.toggle("dark");

  document.getElementById("content")?.classList.toggle("dark");

  document.getElementById("header")?.classList.toggle("dark");

  document.getElementById("footer")?.classList.toggle("dark");

  let h1 = document.getElementsByTagName("h1");
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("dark");
  }

  let h2 = document.getElementsByTagName("h2");
  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.toggle("dark");
  }

  let h3 = document.getElementsByTagName("h3"); 
  for (let i = 0; i < h3.length; i++) {
    h3[i].classList.toggle("dark");
  }

  let a = document.getElementsByTagName("a"); 
  for (let i = 0; i < a.length; i++) {
    a[i].classList.toggle("dark");
  }

  let skk = document.getElementsByClassName("skk"); 
  for (let i = 0; i < skk.length; i++) {
    skk[i].classList.toggle("dark");
  }

  let prns = document.getElementsByClassName("prns"); 
  for (let i = 0; i < prns.length; i++) {
    prns[i].classList.toggle("dark");
  }

  let mark = document.getElementsByClassName("mark"); 
  for (let i = 0; i < mark.length; i++) {
    mark[i].classList.toggle("dark");
  }


  let highlight = document.getElementsByClassName("highlight"); 
  for (let i = 0; i < highlight.length; i++) {
    highlight[i].classList.toggle("dark");
  }
  }

/* email address obfuscator */
export function obfuscateEmail() {
  let rra_liame = ['a', 'l', 'm', 'f', 'r', '0', '0', 'at', 'g', 'm', 'a', 'i', 'l', 'dot', 'c', 'o', 'm'];
  // this format protects from web scrapers 

  let rts_liame = '';
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

  return rts_liame;
  
  /* this injects the element to the dom; separate out from this method 
  const newDiv = document.createElement("a");

  // and give it some content
  const newContent = document.createTextNode(rts_liame);

  // add the text node to the newly created div (huh??? what is the text node exactly?)
  newDiv.appendChild(newContent);


  const currentDiv = document.getElementById("liame"); //test
  document.documentElement.insertBefore(newDiv, currentDiv);*/
}
  
/*
function egg() {

}*/