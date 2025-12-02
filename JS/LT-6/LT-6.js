function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const hh = hours < 10 ? '0' + hours : hours;
  const mm = minutes < 10 ? '0' + minutes : minutes;
  const ss = seconds < 10 ? '0' + seconds : seconds;
  const timeString = `${hh}:${mm}:${ss} ${ampm}`;
  document.getElementById('clock').innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();
