const image = document.querySelector(".circle__four");

image.addEventListener("mousemove", event => {
  const { top, bottom, left, right } = event.target.getBoundingClientRect();

  const middleX = (right - left) / 2;
  const middleY = (bottom - top) / 2;

  const clientX = event.clientX;
  const clientY = event.clientY;

  const offsetX = (clientX - middleX) / middleX;
  const offsetY = (middleY - clientY) / middleY;

  event.target.style.transform = `perspective(900px) rotateY(${offsetX *
    5 - 10}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
});
