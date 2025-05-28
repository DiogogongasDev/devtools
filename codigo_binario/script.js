
    function encodeBinary() {
      const text = document.getElementById('binaryInput').value;
      const binary = text.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
      const output = document.getElementById('binaryOutput');
      output.textContent = binary;
      output.classList.remove('hidden');
    }

    function decodeBinary() {
      const binary = document.getElementById('binaryDecodeInput').value.trim();
      const decoded = binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
      const output = document.getElementById('binaryDecodeOutput');
      output.textContent = decoded;
      output.classList.remove('hidden');
    }