// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = numbers.filter(num => num % 2 === 0);
            resolve(filtered);
        }, 1000);
    });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multiplied = numbers.map(num => num * 2);
            resolve(multiplied);
        }, 1000);
    });
}

// Update the text of the HTML element with ID 'output'
function updateOutput(text) {
    document.getElementById('output').textContent = text;
}

// Main function to chain promises
function manipulateData() {
    getNumbers()
        .then(numbers => {
            updateOutput(`Original array: ${numbers}`);
            return filterOddNumbers(numbers);
        })
        .then(filtered => {
            updateOutput(`Filtered even numbers: ${filtered}`);
            return multiplyEvenNumbers(filtered);
        })
        .then(multiplied => {
            updateOutput(`Multiplied even numbers: ${multiplied}`);
        });
}

// Call the main function to start the process
manipulateData();
