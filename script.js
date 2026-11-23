const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('consultForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const value = key => (form.get(key) || '').toString().trim() || 'Not provided';
  const message = [
    'AUTO BOSS - CONSULTATION REQUEST',
    '',
    `Name: ${value('name')}`,
    `Phone: ${value('phone')}`,
    `Vehicle: ${value('vehicle')}`,
    `Year: ${value('year')}`,
    `Service required: ${value('service')}`,
    `Vehicle location: ${value('location')}`,
    `Problem details: ${value('message')}`,
    '',
    'Please contact me about this request.'
  ].join('\n');
  window.open(`https://wa.me/27606218464?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
