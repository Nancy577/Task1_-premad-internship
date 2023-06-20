document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupBtn = document.getElementById('signupBtn');
    const signupModal = document.getElementById('signupModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const signupForm = document.getElementById('signupForm');
    const submitSignup = document.getElementById('submitSignup');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (username === '' || password === '') {
        alert('Username or password is empty');
      } else {
       
        alert('Logged in successfully');
      }
    });
  
    signupBtn.addEventListener('click', function() {
      signupModal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      signupModal.style.display = 'none';
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const signupUsername = document.getElementById('signupUsername').value;
      const signupPassword = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (signupUsername === '' || signupPassword === '' || confirmPassword === '') {
        alert('Please fill in all the fields');
      } else if (signupPassword !== confirmPassword) {
        alert('Passwords do not match');
      } else {
       
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
          <span class="close">&times;</span>
          <h2>Sign up Details</h2>
          <p>Username: ${signupUsername}</p>
          <p>Password: ${signupPassword}</p>
          <button id="closeModal">Close</button>
        `;
  
        const closeModal = document.getElementById('closeModal');
        closeModal.addEventListener('click', function() {
          signupModal.style.display = 'none';
        });
      }
    });
  });
  