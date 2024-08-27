document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission
    document.getElementById("formMessage").textContent = `Thank you, ${name}! We'll get back to you at ${email}.`;
    
    // Clear form fields
    document.getElementById("contactForm").reset();
});
