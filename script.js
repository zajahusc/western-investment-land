const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    feedback.textContent = 'Sending your message...';
  });
}
