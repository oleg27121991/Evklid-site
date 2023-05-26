document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search--active')
  })

  document.getElementById('close-btn').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search--active')
    e.preventDefault()
  })

})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('header__nav__list__item-link');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menulinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')

    })

})

const burger_menu = document.querySelector('.burger');
    document.addEventListener('click', (e) => {

  const click = e.composedPath().includes(burger_menu);

  if ( !click ) {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  }

})

const swiper = new Swiper('.swiper-container', {
    // Цикличность
    loop: true,

    // Пагинация
    pagination: {
        el: '.swiper-pagination',

        clickable: true,

    },
    a11y: {
        paginationBulletMessage: 'Название слайда {{index}}',
    }
});

document.querySelectorAll(`.tabs-btn`).forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll(`.tabs-btn`).forEach(function(btn) {
            btn.classList.remove('tabs-btn--active')});
            e.currentTarget.classList.add('tabs-btn--active');

document.querySelectorAll(`.our--work__content`).forEach(function(tabsBtn){
    tabsBtn.classList.remove(`our--work__content--active`)});

    document.querySelector(`[data-target="${path}"]`).classList.add('our--work__content--active');
   });
});



new Accordion('.accordion-container');
