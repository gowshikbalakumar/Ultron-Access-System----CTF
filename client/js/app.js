const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();

  const message = document.getElementById('message');

  if (data.success) {
    message.innerText = 'ACCESS GRANTED';
    message.style.color = '#00ff00';
  } else {
    message.innerText = data.message;
    message.style.color = 'red';
  }
});