   function minifyCode() {
      const input = document.getElementById('minifyInput').value;
      const minified = input.replace(/\s+/g, ' ').trim();
      const output = document.getElementById('minifyOutput');
      output.textContent = minified;
      output.classList.remove('hidden');
    }