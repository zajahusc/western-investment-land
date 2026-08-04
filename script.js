const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

const syncViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

syncViewportHeight();
window.addEventListener('resize', syncViewportHeight);
window.addEventListener('orientationchange', syncViewportHeight);

if (form) {
  form.addEventListener('submit', (event) => {
    feedback.textContent = 'Sending your message...';
  });
}
