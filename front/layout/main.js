const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icon = document.querySelector('.navbar__icon');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});

const semantic_view = document.querySelector('.semantic_view');
const dis_view = document.querySelector('.dis_view');
const grid_view = document.querySelector('.grid_view');
const flex_view = document.querySelector('.flex_view');
const color_view = document.querySelector('.color_view');
const main1 = document.querySelector('.main1');
const main2 = document.querySelector('.main2');
const main3 = document.querySelector('.main3');
const main4 = document.querySelector('.main4');
const main5 = document.querySelector('.main5');

semantic_view.addEventListener('click', () => {
  main1.scrollIntoView({ behavior: 'smooth' });
});

dis_view.addEventListener('click', () => {
  main2.scrollIntoView({ behavior: 'smooth' });
});

grid_view.addEventListener('click', () => {
  main3.scrollIntoView({ behavior: 'smooth' });
});
flex_view.addEventListener('click', () => {
  main4.scrollIntoView({ behavior: 'smooth' });
});
color_view.addEventListener('click', () => {
  main5.scrollIntoView({ behavior: 'smooth' });
});
