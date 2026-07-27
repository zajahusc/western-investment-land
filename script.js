const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    const robotCheck = form.elements.robot_check;
    if (!robotCheck?.checked) {
      event.preventDefault();
      feedback.textContent = 'Please confirm the anti-robot check before submitting.';
      return;
    }

    feedback.textContent = 'Sending your message...';
  });
}
