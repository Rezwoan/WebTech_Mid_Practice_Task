const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('successMessage').innerText = '';
  let valid = true;
  const name = document.getElementById('fullName').value.trim();
  if (name === '') {
    document.getElementById('nameError').innerText = 'Please enter your full name.';
    valid = false;
  } else {
    document.getElementById('nameError').innerText = '';
  }
  const email = document.getElementById('email').value.trim();
  if (email === '' || !email.includes('@') || !email.includes('.')) {
    document.getElementById('emailError').innerText = 'Please enter a valid email (must contain "@" and ".").';
    valid = false;
  } else {
    document.getElementById('emailError').innerText = '';
  }
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
    valid = false;
  } else {
    document.getElementById('passwordError').innerText = '';
  }
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (confirmPassword !== password || confirmPassword === '') {
    document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
    valid = false;
  } else {
    document.getElementById('confirmPasswordError').innerText = '';
  }
  const phone = document.getElementById('phone').value.trim();
  if (phone === '' || !/^[0-9]+$/.test(phone)) {
    document.getElementById('phoneError').innerText = 'Phone number must contain digits only.';
    valid = false;
  } else {
    document.getElementById('phoneError').innerText = '';
  }
  if (valid) {
    document.getElementById('successMessage').innerText = 'Registration Successful!';
    form.reset();
  }
});
