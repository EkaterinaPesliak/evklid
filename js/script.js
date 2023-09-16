//Burger

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', '${headerHeight}px');


burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
  })
})


// Search

const searchOpen = document.querySelector('.header__search-btn');
const search = document.querySelector('.header__search-form');
const searchClose = document.querySelector('.header__search-close');


searchOpen.addEventListener('click', function () {
  search.classList.add('header__search-show')
})

searchClose.addEventListener('click', function () {
  search.classList.remove('header__search-show')
})

//Swiper

const slider = document.querySelector('.swiper')

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду'
  }
})

//Tabs

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.stages__btn').forEach (function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path;
          document.querySelectorAll('.stages__content').forEach(function(tabContent) {
              tabContent.classList.remove('stages__content--active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('stages__content--active')
      })
  })
  })

//Accordion

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.review__faq-li');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.review__faq-btn');
      const content = self.querySelector('.review__faq-content');

      self.classList.toggle('open');

      //если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    })
  })
})

