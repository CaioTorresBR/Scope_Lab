// Defining variables and functions
let testText = "The quick brown fox jumps over the lazy dog";
let startTime, endTime;

    // functions to start testing the typing speed
function startTest() {
    //set the test text
    document.getElementById("inputText").value = testText;

    // reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

    // function to end the test and display when the user
    // finishes the text
function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;
     //retrieves user's typed text

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;  // computes the number of words typed by splitting
        // the input text using an expression to consider words separated
        // by spaces, tabs or newlines (considers only valid words)

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60)
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Reset";
    document.getElementById("userInput").value = "";
    button.onclick = startTest;
    
}

    
    
