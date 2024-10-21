let toggleButton = document.getElementById("toggle-button");

// Event listener to toggle dark mode
toggleButton.addEventListener("click", () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is currently active
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Toggle Light Mode"; // Update button text
    } else {
        toggleButton.textContent = "Toggle Dark Mode"; // Update button text
    }
});

