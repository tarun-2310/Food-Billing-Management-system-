document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const togglePassword = document.getElementById('toggle-password');
    const loginBtn = document.getElementById('login-btn');
    
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Feature: Show / Hide Password Toggle
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Switch between open/closed eye icons
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Feature: Form Submission & Validation
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page refresh
        
        // Reset previously shown errors
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        let isValid = true;

        // Check for empty fields
        if (emailInput.value.trim() === '') {
            emailError.style.display = 'block';
            isValid = false;
        }
        
        if (passwordInput.value.trim() === '') {
            passwordError.style.display = 'block';
            isValid = false;
        }

        // Proceed if valid
        if (isValid) {
            // Trigger Loading Animation
            loginBtn.classList.add('btn-loading');

            // Simulate server authentication delay (1.5 seconds)
            setTimeout(() => {
                alert("Login Successful! Welcome to YumFoods.");
                window.location.href = 'index.html'; // Redirect back to Home Page
            }, 1500); 
        }
    });
});