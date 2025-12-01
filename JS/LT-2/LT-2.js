const images = [
  'https://picsum.photos/id/1018/800/400',
  'https://picsum.photos/id/1015/800/400',
  'https://picsum.photos/id/1019/800/400',
  'https://picsum.photos/id/1021/800/400'
];
let index = 0;
const imgElement = document.getElementById('sliderImage');
function showImage(i) {
  index = (i + images.length) % images.length;
  imgElement.src = images[index];
}
function nextImage() {
  showImage(index + 1);
  resetInterval();
}
function prevImage() {
  showImage(index - 1);
  resetInterval();
}
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);
let interval = setInterval(() => showImage(index + 1), 3000);
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => showImage(index + 1), 3000);
}
showImage(index);
