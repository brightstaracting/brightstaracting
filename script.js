document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  status.textContent = 'Sending…';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      status.textContent = 'Message sent — thank you!';
      form.reset();
    } else {
      const json = await res.json();
      status.textContent = json.error || 'Send failed.';
    }
  } catch (err) {
    status.textContent = 'Network error. Try later.';
  }
});