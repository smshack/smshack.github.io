const vertical = document.querySelector('.vartical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  document.addEventListener('mousemove', (event) => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    //   console.log(`x: ${event.clientX},y: ${event.clientY}`);
    const x = event.clientX;
    const y = event.clientY;
    // console.log(`${x} , ${y}`);

    vertical.style.transform = `translateX(${x}px)`;
    horozontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px,${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px,${y}px)`;

    tag.innerHTML = `${x}px , ${y}px`;

    // vertical.style.left = `${x}px`;
    // horozontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
  });
});
