function submitFeedback() {
    // Defining variables 
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;


    // Display user feedback on webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // makes 'display: none' visible after button click
    document.getElementById('userInfo').style.display = 'block';
}



// fetches the HTML element with the ID 'submitBtn' using its unique
// identifier ('getElementById') and assigns it to the variable
// 'submitButton' 
const submitButton = document.getElementById('submitBtn');

// assigns the function submitFeedback to execute when the onclick
// event occurs on the HTML element referenced by the variable
// submitButton
submitButton.onclick = submitFeedback;

alert('Thank you for your valuable feedback')

// implement key press to submit feedback

    // adds an event listener to the entire document, listening
    // for any keydown event. When the event occurs, it checks if 
    // the pressed key is 'Enter'. If it is, it calls the function 
    // submitFeedback(), executing the feedback submission
    // functionality.
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
})

