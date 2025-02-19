// Algorithm for E-mail Validator
// 1, What element runs the validation function? (submit-button)
// 2, Where do I want to display the validation results? (beneath the submit-button)
// 3, What tag/element displays the results? (a span element)

const initialState =  "Initializing...";
const validationCheck =  "Email validation check in progress please wait...";
const validationResult = "Good news! This email is valid and verified.";
const errorMessageDisplay =  "email required before validation";
const submitBtn = document.getElementById('submit-btn');

let validationProgress = false;

// displays validation process and time-out function
function validateEmail() {
  // stops re-execution of validation on button click when validation is already running 
  if (validationProgress) {
    return;
  }
  validationProgress = true;
  
  const emailInput = document.getElementById('inputedEmail').value
  
  if (emailInput) {
    setTimeout(() => {
      const initialInfo = document.getElementById('validation-info');
      initialInfo.textContent = initialState;
      initialInfo.style.color = "#fff";
    }, 2000)

    setTimeout(() => {
      const emailPreview = document.getElementById('display-email');
      emailPreview.textContent = `Email Preview: ${emailInput}`;
    }, 10000)

    setTimeout(() => {
      const progressResult = document.getElementById('validation-info');
      progressResult.textContent = validationCheck;
      progressResult.style.color = "#fff";
    }, 30000)

    setTimeout(() => {
      const displayLine = document.getElementById('validation-info');
      displayLine.textContent = validationResult;
      displayLine.style.color = "green";
    }, 50000)

    setTimeout(() => {
      alert('Validation done.');
    }, 52000)

  } else if (!emailInput) {
    revokeValidation();
  }
}

// fuction that handles onkeydown event with keyboard Enter key
function handleValidateEnterKey(event) {
  if (event.key === 'Enter') { 
    validateEmail();
  }
} 

// displays error message or ( throws error ) if userInput is null or empty on validation button click
function revokeValidation() {
  const errorMessage = document.getElementById('validation-info');
  errorMessage.textContent = errorMessageDisplay;
  errorMessage.style.color = "red";
  return;
}

submitBtn.addEventListener('click', validateEmail);


