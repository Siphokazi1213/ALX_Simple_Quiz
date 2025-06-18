document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields and result display
  const number1Input = document.getElementById("number1");
  const number2Input = document.getElementById("number2");
  const calculationResultSpan = document.getElementById("calculation-result");
  const errorFeedbackDiv = document.getElementById("error-feedback");

  // Function to display an error message
  function showErrorMessage(message) {
    errorFeedbackDiv.textContent = message;
    errorFeedbackDiv.style.display = "block";
  }

  // Function to hide the error message
  function hideErrorMessage() {
    errorFeedbackDiv.textContent = "";
    errorFeedbackDiv.style.display = "none";
  }

  // Function to get and validate input numbers
  function getNumbers() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
      showErrorMessage("Please enter valid numbers in both fields.");
      return null; // Return null to indicate invalid input
    }
    hideErrorMessage();
    return { num1, num2 };
  }

  // Implement Arithmetic Functions:

  /**
   * Performs addition on two numbers.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} The sum of num1 and num2.
   */
  function add(num1, num2) {
    return num1 + num2;
  }

  /**
   * Performs subtraction on two numbers.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} The difference between num1 and num2.
   */
  function subtract(num1, num2) {
    return num1 - num2;
  }

  /**
   * Performs multiplication on two numbers.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} The product of num1 and num2.
   */
  function multiply(num1, num2) {
    return num1 * num2;
  }

  /**
   * Performs division on two numbers. Handles division by zero.
   * @param {number} num1 - The dividend.
   * @param {number} num2 - The divisor.
   * @returns {number|string} The quotient, or "Error: Division by zero" if num2 is 0.
   */
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }

  // Attach Event Listeners:

  // Add button event listener
  document.getElementById("add").addEventListener("click", function () {
    const numbers = getNumbers();
    if (numbers) {
      const result = add(numbers.num1, numbers.num2);
      calculationResultSpan.textContent = result;
    }
  });

  // Subtract button event listener
  document.getElementById("subtract").addEventListener("click", function () {
    const numbers = getNumbers();
    if (numbers) {
      const result = subtract(numbers.num1, numbers.num2);
      calculationResultSpan.textContent = result;
    }
  });

  // Multiply button event listener
  document.getElementById("multiply").addEventListener("click", function () {
    const numbers = getNumbers();
    if (numbers) {
      const result = multiply(numbers.num1, numbers.num2);
      calculationResultSpan.textContent = result;
    }
  });

  // Divide button event listener
  document.getElementById("divide").addEventListener("click", function () {
    const numbers = getNumbers();
    if (numbers) {
      const result = divide(numbers.num1, numbers.num2);
      calculationResultSpan.textContent = result;
      // If division by zero error, ensure it's displayed as feedback
      if (typeof result === "string" && result.startsWith("Error")) {
        showErrorMessage(result);
        calculationResultSpan.textContent = "NaN"; // Indicate non-numeric result for calculation span
      }
    }
  });

  // Initialize result display
  calculationResultSpan.textContent = "0";
});
