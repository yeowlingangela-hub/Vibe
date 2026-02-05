const numberSpans = document.querySelectorAll('.number');
const generateBtn = document.getElementById('generate-btn');

function generateTotoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  
  numbers.sort((a, b) => a - b);

  numberSpans.forEach((span, index) => {
    span.textContent = numbers[index];
  });
}

generateBtn.addEventListener('click', generateTotoNumbers);

// Initial generation
generateTotoNumbers();
