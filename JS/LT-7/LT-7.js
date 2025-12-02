const paragraph = document.getElementById('sampleText');
let currentFontSize = 16;
const colors = ['#FFEB3B', '#FFC107', '#8BC34A', '#03A9F4', '#E91E63', '#9C27B0'];
document.getElementById('bgBtn').addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  paragraph.style.backgroundColor = randomColor;
});
document.getElementById('fontBtn').addEventListener('click', () => {
  currentFontSize += 2;
  paragraph.style.fontSize = currentFontSize + 'px';
});
document.getElementById('centerBtn').addEventListener('click', () => {
  paragraph.style.textAlign = 'center';
});
document.getElementById('resetBtn').addEventListener('click', () => {
  paragraph.style.backgroundColor = '';
  paragraph.style.fontSize = '';
  paragraph.style.textAlign = '';
  currentFontSize = 16;
});
