// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLinks = document.querySelectorAll('.nav__link')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// CLOSE MENU ON NAVLINK SELECT
const closeMenu = () => navMenu.classList.remove('show-menu')
navLinks.forEach(link => link.addEventListener('click', closeMenu))
