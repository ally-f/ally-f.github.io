// whether dark mode is enabled; default off 
var dark = false;
export default dark;

const elementsToDarkToggle = [
  ["id", "menu"], 
  ["id", "react-router-wrapper"], 
  ["id", "stt"], 
  ["id", "darkmode"],
  ["id", "content"], 
  ["id", "header"], 
  ["id", "footer"], 

  ["class", "skk"],
  ["class", "prns"],
  ["class", "mark"],
  ["class", "highlight"],
  ["class", "version"],

  ["tag", "h1"],
  ["tag", "h2"],
  ["tag", "h3"],
  ["tag", "a"],
  ["tag", "body"]
];

/* dark mode, reference https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
/* make this reusable by passing elementstodarktoggle as a parameter; can then use on other pages that need different elements toggled */ 
export function toggleDarkMode() {
  // nodes
  //document.body.classList.toggle("dark"); 

  for (let i = 0; i < elementsToDarkToggle.length; i++) {
    // ids
   if (elementsToDarkToggle[i][0] == "id") {
      document.getElementById(elementsToDarkToggle[i][1])?.classList.toggle("dark");
    }
    // classes
    else if (elementsToDarkToggle[i][0] == "class") {
      let elements = document.getElementsByClassName(elementsToDarkToggle[i][1]);
      for (let j = 0; j < elements.length; j++) {
        elements[j].classList.toggle("dark");
      }
    }
    // tags
    else if (elementsToDarkToggle[i][0] == "tag") {
      let elements = document.getElementsByTagName(elementsToDarkToggle[i][1]);
      for (let j = 0; j < elements.length; j++) {
        elements[j].classList.toggle("dark");
      }
    }
    else {
      console.error("Invalid selector type in elementsToDarkToggle");
    }
  }

  // toggle dark tracker
  if (dark == false) {
    dark = true;
  }
  else {
    dark = false;
  }
}

export function forceDark() {
  if (dark) {
    toggleDarkMode();
    dark = false;
  }
}

/* email address obfuscator (WIP) */
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
}

/* opens the router navigation menu */
export function expandMenu() {
  let menu = document.getElementById("react-router-wrapper");
  if (menu && menu.classList.contains("expanded")) {
    menu.classList.remove("expanded");
  }
  else if (menu) {
    menu.classList.add("expanded");
  }
}

/* scroll to top button */
export function scrollToTop() {
  history.pushState({}, '', '#'); // changes the url to base url, with '#' appended (cannot pass a blank string...)
  window.scrollTo(0, 0); // forces scroll to top 
}
