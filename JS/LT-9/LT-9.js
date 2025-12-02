let isDark = false;
const themeToggleBtn = document.getElementById('themeToggle');
function applyPortfolioTheme() {
  if (isDark) {
    document.body.style.backgroundColor = '#111';
    document.body.style.color = '#eee';
    themeToggleBtn.innerText = 'Switch to Light Mode';
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
    themeToggleBtn.innerText = 'Switch to Dark Mode';
  }
}
themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  applyPortfolioTheme();
});
applyPortfolioTheme();
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  document.getElementById('greeting').innerText = greeting + ', welcome to my portfolio!';
}
updateGreeting();
setInterval(updateGreeting, 60000);
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === target) {
        section.classList.add('active');
      }
    });
  });
});
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  document.getElementById('contactSuccess').innerText = '';
  const nameVal = document.getElementById('contactName').value.trim();
  if (nameVal === '') {
    document.getElementById('contactNameError').innerText = 'Please enter your name.';
    valid = false;
  } else {
    document.getElementById('contactNameError').innerText = '';
  }
  const emailVal = document.getElementById('contactEmail').value.trim();
  if (emailVal === '' || !emailVal.includes('@') || !emailVal.includes('.')) {
    document.getElementById('contactEmailError').innerText = 'Please enter a valid email.';
    valid = false;
  } else {
    document.getElementById('contactEmailError').innerText = '';
  }
  const messageVal = document.getElementById('contactMessage').value.trim();
  if (messageVal.length < 10) {
    document.getElementById('contactMessageError').innerText = 'Message must be at least 10 characters.';
    valid = false;
  } else {
    document.getElementById('contactMessageError').innerText = '';
  }
  if (valid) {
    document.getElementById('contactSuccess').innerText = 'Thank you! Your message has been sent.';
    contactForm.reset();
  }
});
