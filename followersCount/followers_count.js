let count = 0; //Initialize count to 0

function increaseCount() {
    count++ ; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); //Check count value and display
}


//display count in the HTML element with the ID countDisplay
// and updates its content to reflect the current count value.
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display
}

// function to check the value of count and trigger alerts when
//specific follower milestones (10 or 20) are reached
function checkCountValue() {
    if (count == 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count == 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
