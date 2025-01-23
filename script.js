document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation-message").innerText = "Thank you! Your message has been sent.";
});