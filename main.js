const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
  alert("Yay! I'm so happy!");
});

noButton.addEventListener('click', () => {
  alert("Aww, that's okay. I understand.");
  noButton.style.position = 'relative';
  noButton.style.left = `${Math.floor(Math.random() * 50) - 25}px`; 
  noButton.style.top = `${Math.floor(Math.random() * 50) - 25}px`; 
});