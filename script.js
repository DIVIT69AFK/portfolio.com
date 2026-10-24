// Divit's Portfolio — interactive features
const greeting = document.querySelector("#greeting-text");
const greetButton = document.querySelector("#greet-btn");

if (greeting && greetButton) {
    greetButton.addEventListener("click", () => {
        greeting.textContent = "Hello! I'm Divit.";
    });
}

const nameInput = document.querySelector("#visitor-name");
const welcomeButton = document.querySelector("#name-btn");
const welcomeMessage = document.querySelector("#personal-greeting");

if (nameInput && welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", () => {
        const visitorName = nameInput.value.trim();

        if (!visitorName) {
            welcomeMessage.textContent = "Please enter your name first.";
        } else {
            welcomeMessage.textContent = `Hello, ${visitorName}!`;
        }
    });
}

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-feedback");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formMessage.textContent =
            "Thanks for your message! This demo form does not send emails yet.";
        contactForm.reset();
    });
}
