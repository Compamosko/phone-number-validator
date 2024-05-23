
// script.js
document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

function validatePhoneNumber() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    const validPatterns = [
        /^01\d{8}$/,          // 01XXXXXXXX
        /^07\d{8}$/,          // 07XXXXXXXX
        /^\+254\d{9}$/        // +254XXXXXXXXX
    ];

    const isValid = validPatterns.some(pattern => pattern.test(userInput));

    if (isValid) {
        resultsDiv.textContent = `Valid kenyan number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid kenyan number: ${userInput}`;
    }
}

function clearResults() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
}
