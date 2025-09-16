/* קובץ JavaScript - פונקציונליות האתר */

/* בחירת אלמנטים מהדף */
const hamburger = document.querySelector(".hamburger");        /* כפתור המבורגר */
const navMenu = document.querySelector(".nav-menu");          /* תפריט ניווט */

/* הוספת מאזין לחיצה לכפתור המבורגר */
hamburger.addEventListener("click", mobileMenu);

/* פונקציה לפתיחה/סגירה של תפריט מובייל */
function mobileMenu() {
  hamburger.classList.toggle("active");    /* הוספה/הסרה של מחלקה פעילה */
  navMenu.classList.toggle("active");      /* הצגה/הסתרה של התפריט */
}

/* בחירת כל קישורי הניווט */
const navLink = document.querySelectorAll(".nav-link");

/* הוספת מאזין לכל קישור - סגירת תפריט בלחיצה */
navLink.forEach((n) => n.addEventListener("click", closeMenu));

/* פונקציה לסגירת תפריט מובייל */
function closeMenu() {
  hamburger.classList.remove("active");    /* הסרת מצב פעיל מהמבורגר */
  navMenu.classList.remove("active");      /* הסתרת התפריט */
}

/* בחירת כפתור החלפת מצב כהה/בהיר */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

/* פונקציה להחלפת מצב צבע */
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");    /* מצב כהה */
  } else {
    document.documentElement.setAttribute("data-theme", "light");   /* מצב בהיר */
  }
}

/* הוספת מאזין לשינוי מצב */
toggleSwitch.addEventListener("change", switchTheme, false);

/* שמירת העדפת צבע למבקרים חוזרים */

/* פונקציה משופרת להחלפת מצב עם שמירה */
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");    /* שמירה במחשב המקומי */
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");   /* שמירה במחשב המקומי */
  }
}

/* טעינת העדפת משתמש בעת פתיחת האתר */

/* בדיקה אם יש העדפה שמורה */
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

/* החלת ההעדפה השמורה */
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  /* סימון הכפתור אם המצב כהה */
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

/* הוספת השנה הנוכחית לתחתית האתר */

/* בחירת אלמנט התאריך */
let myDate = document.querySelector("#datee");

/* קבלת השנה הנוכחית */
const yes = new Date().getFullYear();

/* הוספת השנה לדף */
myDate.innerHTML = yes; 