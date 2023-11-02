/*                              Module 6 Start
Next, we delved into enhancing user interactivity with clickable elements on our webpage – specifically, buttons. 
We transformed our 'Home', 'About', and 'Contact' navigation items into clickable buttons. Utilizing both CSS and 
JavaScript, we devised a color-changing mechanism for these buttons. When a user hovers over a button, it darkens 
slightly to indicate hover state, and upon pressing, it darkens even further to depict the active state. 
The real magic happens upon clicking: each button's color toggles between red and green. 

To achieve this dynamic behavior, we wrote a JavaScript function and placed it in an external file named script.js. 
This approach not only helps in organizing our code but also makes our main HTML more clean and readable. 
The external script is then linked to our HTML, ensuring the function runs as intended. 
This dynamic visual feedback elevates user engagement and ensures the user receives clear indications of their 
actions, enhancing overall usability."
*/
function changeColor(button) {
    const currentColor = button.style.backgroundColor;
    if (currentColor === "red" || !currentColor) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }
}

/*
Here, we delved into enhancing our webpage's interactivity by integrating control flow into our 
form submission process. Recognizing the possibility that users might inadvertently or intentionally 
submit empty data, we incorporated an If-Else statement to address this scenario. When a user attempts 
a submission, our script examines the input content. If it detects that the entry is empty or consists 
solely of white spaces, an alert informs the user to provide valid data. Otherwise, it proceeds to acknowledge 
the submitted data. This implementation showcases the application of fundamental programming constructs, 
like conditional statements, to bolster user experience and data integrity.
*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const input = document.getElementById('userData');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission action
        // Check if input is empty or only whitespace
        if (input.value.trim() === "") {
            alert('Please enter some data before submitting.');
        } else {
            alert('You submitted: ' + input.value);
        }
        //alert('You submitted: ' + input.value);
    });
});

/*                                  Module 6 End                */