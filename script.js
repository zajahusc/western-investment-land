const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    const robotAnswer = form.elements.robot_check?.value?.trim();
    if (robotAnswer !== '7') {
      event.preventDefault();
      feedback.textContent = 'Please complete the anti-robot check before submitting.';
      return;
    }

    feedback.textContent = 'Sending your message...';
  });
}
