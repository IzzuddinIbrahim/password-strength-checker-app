const passwordInput = document.querySelector("#password-input"); //find password input
const checkButton = document.querySelector("#check-btn");   //find check strength button
const clearButton = document.querySelector("#clear-btn");   //find clear button
const resultText = document.querySelector("#result")    //find result paragraph

//function password strength
function checkPasswordStrength(password) {
    if (password.length < 6) {
        return "Weak";
    } else if (password.length < 12) {
        return "Medium";
    } else {
        return "Strong";
    }
}

//connect check strength button
checkButton.addEventListener("click", function() {
    let password = passwordInput.value;             //get the password

    if (password === "") {
        alert("Please enter a password.");
    }

    let strength = checkPasswordStrength(password); //check password strength

    resultText.textContent = `Result: ${strength}`; //check the password strength
});

//connect clear button
clearButton.addEventListener("click", function() {
    passwordInput.value = "";                       //clear password input

    resultText.textContent = "Result: Not checked yet"; //reset result text
});