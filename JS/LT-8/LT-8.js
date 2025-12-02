const userTypeSelect = document.getElementById('userType');
const rollGroup = document.getElementById('rollGroup');
const deptGroup = document.getElementById('deptGroup');
userTypeSelect.addEventListener('change', function() {
  const value = this.value;
  if (value === 'student') {
    rollGroup.style.display = 'block';
    deptGroup.style.display = 'none';
  } else if (value === 'teacher') {
    rollGroup.style.display = 'none';
    deptGroup.style.display = 'block';
  } else {
    rollGroup.style.display = 'none';
    deptGroup.style.display = 'none';
  }
});
