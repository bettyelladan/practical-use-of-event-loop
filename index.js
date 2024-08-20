// Declare a global counter variable starting at 15000
let counter = 15000;

// Define a function that increments the counter and calls itself recursively
function incrementCounter() {
    counter++;  // Increment the counter
    incrementCounter();  // Call the function recursively
}

// Surround the initial function call in a try/catch block
try {
    incrementCounter();  // Start the recursive function
} catch (error) {
    // Log the error and the value of the counter variable
    console.error("Error caught:", error.message);
    console.log("Counter value at error:", counter);
}
// Check if the result element exists
const resultElement = document.getElementById('result');

if (resultElement) {
    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Recursive function to display prime numbers and update the DOM incrementally
    function displayPrimes(n, current = 1, primes = []) {
        try {
            if (current > n) {
                // Base case: all numbers processed
                resultElement.textContent = primes.join(', ');
                setTimeout(() => {
                    alert('Calculation complete!');
                }, 0);
                return;
            }

            if (isPrime(current)) {
                primes.push(current);
                // Update the DOM incrementally
                resultElement.textContent = primes.join(', ');
            }

            // Use setTimeout to allow the browser to render the current state
            setTimeout(() => {
                displayPrimes(n, current + 1, primes);
            }, 0);
        } catch (error) {
            // Log the error and current state
            console.error('Error occurred:', error.message);
            console.log('Current value of primes:', primes);
        }
    }

    // Example usage: Display prime numbers up to 10,000
    displayPrimes(10000);
} else {
    console.error('Element with ID "result" not found in the DOM.');
}