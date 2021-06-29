// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLinks = document.querySelectorAll('.nav__link'),
  skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header')

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

// ACCORDION SKILLS
function toggleSkills () {
  let itemClass = this.parentNode.className
  // console.log('CLICKING MENu')
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skill__content skills_close'
  }
  if (itemClass === 'skill__content skill_close') {
    this.parentNode.className = 'skill__content skills_open'
  }
}

skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))
