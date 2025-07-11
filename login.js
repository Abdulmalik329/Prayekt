document.getElementById('register').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('password1').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const userData = {
    name,
    email,
    password
  };

  try {
    const response = await fetch('https://686fa9ea91e85fac42a201b2.mockapi.io/user', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      alert('Successfully registered!');
      document.getElementById('register').reset(); 
    } else {
      alert('Failed to register.');
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
});
