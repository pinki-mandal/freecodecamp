document.getElementById('convert-btn').addEventListener('click', function() {
    const numberInput = parseInt(document.getElementById('number').value);
    const outputElement = document.getElementById('output');
  
    if (isNaN(numberInput) || numberInput < 1) {
      if (numberInput < 0) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
      } else {
        outputElement.textContent = "Please enter a valid number";
      }
    } else if (numberInput >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else {
      outputElement.textContent = convertToRoman(numberInput);
    }
  });
  
  function convertToRoman(num) {
    const romanSymbols = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];
  
    let result = "";
  
    for (let i = 0; i < romanSymbols.length; i++) {
      while (num >= romanSymbols[i].value) {
        result += romanSymbols[i].symbol;
        num -= romanSymbols[i].value;
      }
    }
  
    return result;
  }
  