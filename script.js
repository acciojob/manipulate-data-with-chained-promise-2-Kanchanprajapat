//your JS code here. If required.
 function getNumbers() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      });
    }

    // Function to update the output element with the provided array
    function updateOutput(arr) {
      document.getElementById('output').innerText = arr.join(', ');
    }

    // Start the promise chain
    getNumbers()
      .then((numbers) => {
        // Filter out odd numbers
        return new Promise((resolve) => {
          setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            updateOutput(evenNumbers);
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        // Multiply even numbers by 2
        return new Promise((resolve) => {
          setTimeout(() => {
            const multipliedNumbers = evenNumbers.map(num => num * 2);
            updateOutput(multipliedNumbers);
            resolve(multipliedNumbers);
          }, 2000);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });