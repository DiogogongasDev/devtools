 const morseMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
      'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
      'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
      'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
      'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---',
      '3': '...--', '4': '....-', '5': '.....', '6': '-....',
      '7': '--...', '8': '---..', '9': '----.', '0': '-----',
      ' ': '/'
    };

    const reverseMorseMap = Object.fromEntries(Object.entries(morseMap).map(([k, v]) => [v, k]));

    function encodeMorse() {
      const text = document.getElementById('morseInput').value.toUpperCase();
      const encoded = text.split('').map(c => morseMap[c] || '').join(' ');
      const output = document.getElementById('morseOutput');
      output.textContent = encoded.trim();
      output.classList.remove('hidden');
    }

    function decodeMorse() {
      const morse = document.getElementById('morseDecodeInput').value.trim();
      const decoded = morse.split(' ').map(code => reverseMorseMap[code] || '').join('');
      const output = document.getElementById('morseDecodeOutput');
      output.textContent = decoded;
      output.classList.remove('hidden');
    }