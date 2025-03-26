document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Simulate form submission success
        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.display = "block";

        // Clear the form
        contactForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("xCm-ff0VLz98yQW9H"); // Replace with your EmailJS User ID

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            from_name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Send the email
        emailjs.send("service_zx8hv95", "template_3flhb9i", formData)
            .then(function () {
                alert("Message sent successfully!");
                contactForm.reset();
            }, function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeInElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
