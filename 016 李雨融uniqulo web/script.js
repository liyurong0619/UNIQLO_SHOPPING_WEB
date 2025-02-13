// Get the button and message element by their IDs
const button = document.getElementById("addButton");
const message = document.getElementById("message");

// Add an event listener to the button
button.addEventListener("click", function() {
    // Display the "Add Successful" message
    message.textContent = "添加成功";
    message.style.display = "block"; // Make the message visible

    // Set a timeout to hide the message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        message.style.display = "none"; // Hide the message
    }, 1000);
});
