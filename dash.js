document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    if (isLoggedIn !== 'true') {
      window.location.href = '/auth/login.html'; 
    }
  });
  