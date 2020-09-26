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

semantic_view.addEventListener('click', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

dis_view.addEventListener('click', () => {
  window.scrollTo({ top: 834.3, left: 0, behavior: 'smooth' });
});

grid_view.addEventListener('click', () => {
  window.scrollTo({ top: 834.3 + 927, left: 0, behavior: 'smooth' });
});
flex_view.addEventListener('click', () => {
  window.scrollTo({ top: 834.3 + 927 * 2, left: 0, behavior: 'smooth' });
});
color_view.addEventListener('click', () => {
  window.scrollTo({ top: 834.3 * 2 + 927 * 2, left: 0, behavior: 'smooth' });
});
