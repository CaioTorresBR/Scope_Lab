// Defining variables
    function performOperation() {
    // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
            let resultMult = multiply(num1, num2);
            let resultSum = sum(num1, num2);
            let resultDiv = div(num1, num2);

            // Display the result
            displayResult(resultMult, resultSum, resultDiv);
          
        } else {
            displayResult('Please enter valid number');
        }
    }

    function multiply(a, b) {
        // Introduce a debugger statement to pause the execution
        debugger;

        // Mulitply the numbers
        return a*b;
    }

    function sum(a, b) {
        debugger;

        // Sum numbers
        return a+b;
    }

    function div(a, b) {
        debugger;

        // Divide numbers
        return a/b;
    }

    function displayResult(resultMult, resultSum, resultDiv) {
        // Display the results in the paragraph elements
        const resultElementMult = document.getElementById('resultMult');
        resultElementMult.textContent = `The result of the multiplication is ${resultMult}`;

        const resultElementSum = document.getElementById('resultSum')
        resultElementSum.textContent = `The result of the sum is ${resultSum}`;

        const resultElementDiv = document.getElementById('resultDiv')
        resultElementDiv.textContent = `The result of the division ${resultDiv}`;
    }
