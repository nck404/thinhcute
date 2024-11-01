document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem('isLoggedIn', 'true'); 
        alert('Login successful');
        window.location.href = '/dash.html'; 
      } else {
        alert('Invalid username or password');
      }
  
      form.reset();
    });
  });
  