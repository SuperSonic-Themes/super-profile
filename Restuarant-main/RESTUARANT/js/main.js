
// HOME SWIPER
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true ,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  // =================DEALS TAB==============

  const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener(('click'), () => {
      const target = document.querySelector(tab.dataset.target);
      tabContent.forEach((tabContent) => {
        tabContent.classList.remove('active-tab');
      });
      target.classList.add('active-tab');

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
      });
      tab.classList.add('active-tab');
    });
  });
