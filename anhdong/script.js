const image = document.querySelector(".image-container img");

// Di chuyển ảnh liên tục
let angle = 0;
setInterval(() => {
  angle += 1;
  image.style.transform = `rotate(${angle}deg) scale(1.1)`;
}, 20);
