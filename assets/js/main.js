// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLinks = document.querySelectorAll('.nav__link'),
  skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header'),
  tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]'),
  modalViews = document.querySelectorAll('.services__modal'),
  modalButtons = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close'),
  sections = document.querySelectorAll('section[id]'),
  nav = document.getElementById('header')

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
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

// EXPERIENCE SECTION
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.remove('qualification__active')
    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

/*     SERVICES MODAL        */
const modal = modalClick => {
  modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => modal(i))
})

modalCloses.forEach(modalClose => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('active-modal')
    })
  })
})

/*     SERVICES MODAL        */
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*     TESTIMONIAL       */
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  breakpoints: {
    720: {
      slidesPerView: 2
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  mousewheel: true,
  keyboard: true
})

/*     SCROLL SECTIONS ACTIVE LINK        */

function scrollActive () {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    let sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

function scrollHeader () {
  const nav = document.getElementById('header')

  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

function scrollTop () {
  const scrollUp = document.getElementById('scroll-up')
  const scrollY = window.pageYOffset

  if (scrollY >= 500) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// window.addEventListener('scroll', scrollActive)
