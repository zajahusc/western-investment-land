const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.textContent = 'Thank you for reaching out. We will be in touch shortly.';
    form.reset();
  });
}
