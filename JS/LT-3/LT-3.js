const toggleButton = document.getElementById('themeToggle');
let darkMode = false;
function applyTheme() {
  if (darkMode) {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#f5f5f5';
    toggleButton.innerText = 'Switch to Light Mode';
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
    toggleButton.innerText = 'Switch to Dark Mode';
  }
}
toggleButton.addEventListener('click', () => {
  darkMode = !darkMode;
  applyTheme();
});
applyTheme();
