const addBtn = document.getElementById('addBtn');
const tableBody = document.querySelector('#studentsTable tbody');
const errorMsg = document.getElementById('errorMsg');
addBtn.addEventListener('click', () => {
  const name = document.getElementById('studentName').value.trim();
  const roll = document.getElementById('studentRoll').value.trim();
  const dept = document.getElementById('studentDept').value.trim();
  if (!name || !roll || !dept) {
    errorMsg.innerText = 'All fields are required.';
    return;
  }
  errorMsg.innerText = '';
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${name}</td><td>${roll}</td><td>${dept}</td><td><button class="deleteBtn">Delete</button></td>`;
  tr.querySelector('.deleteBtn').addEventListener('click', () => {
    tr.remove();
  });
  tableBody.appendChild(tr);
  document.getElementById('studentName').value = '';
  document.getElementById('studentRoll').value = '';
  document.getElementById('studentDept').value = '';
});
