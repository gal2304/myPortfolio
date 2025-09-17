/* select elements from the page */
const hamburger = document.querySelector(".hamburger");        
const navMenu = document.querySelector(".nav-menu");          

/* add a listener to the hamburger button */
hamburger.addEventListener("click", mobileMenu);

/* function to open/close the mobile menu */
function mobileMenu() {
  hamburger.classList.toggle("active");    
  navMenu.classList.toggle("active");     
}

/* select all navbar links */
const navLink = document.querySelectorAll(".nav-link");

/* add a listener to all navbar links - close the mobile menu on click */
navLink.forEach((n) => n.addEventListener("click", closeMenu));

/* function to close the mobile menu */
function closeMenu() {
  hamburger.classList.remove("active");    
  navMenu.classList.remove("active");    
}

/* select the theme switch button */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

/* function to switch the theme */
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");   
  } else {
    document.documentElement.setAttribute("data-theme", "light");  
  }
}

/* add a listener to the theme switch button */
toggleSwitch.addEventListener("change", switchTheme, false);

/* save the theme preference for returning visitors */

/* improved function to switch the theme with saving */
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");   
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");  
  }
}



/* check if there is a saved theme */
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

/* apply the saved theme */
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

/* add the current year to the footer */
/* select the date element */
let myDate = document.querySelector("#datee");
const yes = new Date().getFullYear();
myDate.innerHTML = yes; 