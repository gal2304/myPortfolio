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

/* improved function to switch the theme with saving */
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");   
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");  
  }
}

/* add a listener to the theme switch button */
toggleSwitch.addEventListener("change", switchTheme, false);

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
let myDate = document.querySelector("#datee");
const yes = new Date().getFullYear();
myDate.innerHTML = yes; 

// הוספתי קוד לטיפול בלחיצות על פרויקטים במובייל
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 768) {
    const projectCards = document.querySelectorAll('.project .card');
    
    projectCards.forEach(card => {
      // הוספתי טיפול בלחיצה
      card.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.classList.add('touched');
      });
      
      card.addEventListener('touchend', function(e) {
        e.preventDefault();
        setTimeout(() => {
          this.classList.remove('touched');
        }, 150);
      });
      
      // הוספתי גם טיפול בלחיצה רגילה למקרה של מכשירים אחרים
      card.addEventListener('click', function(e) {
        this.classList.add('touched');
        setTimeout(() => {
          this.classList.remove('touched');
        }, 150);
      });
    });
    
    // הוספתי קוד לטיפול בלחיצות על אותיות מונפשות במובייל
    const animatedTextSpans = document.querySelectorAll('.animated-text span');
    
    animatedTextSpans.forEach(span => {
      // הוספתי טיפול בלחיצה על האותיות
      span.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.style.color = '#3b82f6';
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.15s ease';
      });
      
      span.addEventListener('touchend', function(e) {
        e.preventDefault();
        setTimeout(() => {
          this.style.color = '';
          this.style.transform = '';
          this.style.transition = '';
        }, 150);
      });
      
      // הוספתי גם טיפול בלחיצה רגילה למקרה של מכשירים אחרים
      span.addEventListener('click', function(e) {
        this.style.color = '#3b82f6';
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.15s ease';
        
        setTimeout(() => {
          this.style.color = '';
          this.style.transform = '';
          this.style.transition = '';
        }, 150);
      });
    });
  }
}); 