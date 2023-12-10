document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Simulate form submission (Replace with actual submission code)
      setTimeout(() => {
        // Display a success message (replace this with actual submission handling)
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactForm.reset();
      }, 1000); // Simulating a delay before displaying success message (1 second)
    });
  });
  