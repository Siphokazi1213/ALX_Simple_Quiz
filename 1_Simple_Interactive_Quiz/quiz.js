// Define a function named checkAnswer to encapsulate the quiz logic
function checkAnswer() {
  // 1. Identify the Correct Answer:
  // Declare a variable and assign it the string value "4" as the correct answer.
  const correctAnswer = "4";

  // 2. Retrieve the User’s Answer:
  // Use document.querySelector to select the currently checked radio button
  // by its 'name' attribute, which is 'quiz'.
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if an option was actually selected. If not, inform the user.
  if (!selectedOption) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = "Please select an answer!";
    feedbackElement.style.color = "#dc3545"; // Red for warning
    feedbackElement.classList.add("incorrect"); // Add incorrect class for styling
    feedbackElement.classList.remove("correct"); // Ensure correct class is removed
    return; // Exit the function if no option is selected
  }

  // Access the 'value' property of the selected radio button to get the user’s answer.
  const userAnswer = selectedOption.value;

  // 3. Compare the User’s Answer with the Correct Answer:
  // Get the feedback paragraph element
  const feedbackElement = document.getElementById("feedback");

  // Implement an if statement to compare userAnswer with correctAnswer.
  if (userAnswer === correctAnswer) {
    // If the values match, set the textContent of the feedback element to "Correct! Well done."
    feedbackElement.textContent = "Correct! Well done.";
    // Set the text color to a success green
    feedbackElement.style.color = "#28a745";
    // Add a class for specific styling (optional, but good practice for CSS)
    feedbackElement.classList.add("correct");
    feedbackElement.classList.remove("incorrect"); // Ensure incorrect class is removed
  } else {
    // If the values do not match, set the textContent to "That's incorrect. Try again!".
    feedbackElement.textContent = "That's incorrect. Try again!";
    // Set the text color to an error red
    feedbackElement.style.color = "#dc3545";
    // Add a class for specific styling (optional, but good practice for CSS)
    feedbackElement.classList.add("incorrect");
    feedbackElement.classList.remove("correct"); // Ensure correct class is removed
  }
}

// 4. Add an Event Listener to the Submit Button:
// Use document.getElementById to select the "Submit Answer" button.
const submitButton = document.getElementById("submit-answer");

// Add a click event listener to this button.
// Pass the checkAnswer function as the callback to be executed when the button is clicked.
// Ensure you are not calling the checkAnswer function directly (no parentheses).
submitButton.addEventListener("click", checkAnswer);
