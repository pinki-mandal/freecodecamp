document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
  
    if (!userInput.trim()) {
      alert("Please input a value");
    } else {
      const formattedInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, '');
      const reversedInput = formattedInput.split('').reverse().join('');
  
      if (formattedInput === reversedInput) {
        resultElement.textContent = userInput + " is a palindrome";
      } else {
        resultElement.textContent = userInput + " is not a palindrome";
      }
    }
  });
  