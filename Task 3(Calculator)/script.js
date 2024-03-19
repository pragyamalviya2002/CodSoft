let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function calculate() {
  let result = eval(displayValue);
  document.getElementById('display').innerText = result;
  displayValue = result.toString();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue;
  }