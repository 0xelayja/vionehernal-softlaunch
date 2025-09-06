const modal = document.getElementById('fashionModal');
const closeBtn = document.getElementById('closeModal');
const triggers = document.querySelectorAll('.popup-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});


if (window.innerWidth <= 768) {
  window.location.href = "mobile-v1.html";
}

