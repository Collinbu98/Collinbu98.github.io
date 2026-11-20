const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

/*
const aiToggle = document.getElementById('ai-toggle');
const root = document.documentElement;

function setAi(enabled) {
  root.dataset.ai = enabled ? 'on' : 'off';
  aiToggle.setAttribute('aria-pressed', String(enabled));
  localStorage.setItem('ai-enabled', String(enabled));
}

setAi(localStorage.getItem('ai-enabled') !== 'off');
aiToggle.addEventListener('click', () => setAi(root.dataset.ai !== 'on'));
*/
