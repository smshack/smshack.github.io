const vertical = document.querySelector('.vartical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  //   console.log(`x: ${event.clientX},y: ${event.clientY}`);
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x} , ${y}`);

  vertical.style.left = `${x}px`;
  horozontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px , ${y}px`;
});
