const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});
