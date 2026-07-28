const messages = [
  'Seu sorriso ilumina tudo ✨',
  'Seu jeitinho me conquista todos os dias 💖',
  'Conversar com você é a melhor parte do meu dia 🌙',
  'Quando você me chama de Feh, meu coração sorri ❤️',
  'Você merece o mundo 🌸',
  'Obrigado por existir, minha Rô 💕'
];

const bigHeart = document.getElementById('bigHeart');
const heartMessage = document.getElementById('heartMessage');

bigHeart.addEventListener('click', () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  heartMessage.textContent = msg;
  bigHeart.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ],
    { duration: 400 }
  );
});

document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
    document.getElementById('starMessage').textContent = star.dataset.msg;
  });
});

const giftBtn = document.getElementById('giftBtn');
const giftMessage = document.getElementById('giftMessage');

giftBtn.addEventListener('click', () => {
  giftMessage.classList.remove('hidden');
  giftBtn.textContent = 'Aberto 💖';
  giftBtn.disabled = true;
});

const secretBtn = document.getElementById('secretBtn');
const secretModal = document.getElementById('secretModal');
const closeModal = document.getElementById('closeModal');

secretBtn.addEventListener('click', () => {
  secretModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  secretModal.classList.add('hidden');
});

secretModal.addEventListener('click', (e) => {
  if (e.target === secretModal) {
    secretModal.classList.add('hidden');
  }
});
