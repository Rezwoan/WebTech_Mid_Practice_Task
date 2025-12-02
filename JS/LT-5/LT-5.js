const analyzeBtn = document.getElementById('analyzeBtn');
analyzeBtn.addEventListener('click', function() {
  const textInput = document.getElementById('textInput');
  const text = textInput.value;
  const errorDiv = document.getElementById('error');
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  errorDiv.innerText = '';
  if (text.trim() === '') {
    errorDiv.innerText = 'Please enter some text to analyze.';
    return;
  }
  const charCount = text.length;
  const trimmed = text.trim();
  const wordCount = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
  const reversed = text.split('').reverse().join('');
  resultsDiv.innerHTML =
    `<p><strong>Total Characters:</strong> ${charCount}</p>` +
    `<p><strong>Total Words:</strong> ${wordCount}</p>` +
    `<p><strong>Reversed Text:</strong> ${reversed}</p>`;
});
