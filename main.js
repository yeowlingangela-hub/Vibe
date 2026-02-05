const numberSpans = document.querySelectorAll('.number');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to set theme
function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Function to toggle theme
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Set a default theme if no preference is found (e.g., based on system preference)
    // For simplicity, we'll just use 'light' as default if nothing is saved
    setTheme('light');
  }
});


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
themeToggle.addEventListener('click', toggleTheme);


// Initial generation
generateTotoNumbers();
