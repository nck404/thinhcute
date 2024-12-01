document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const repassword = document.getElementById('repassword').value;
  
      if (password !== repassword) {
        alert('Passwords do not match');
        return;
      }
  
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registration successful');
      form.reset();
    });
  });
  