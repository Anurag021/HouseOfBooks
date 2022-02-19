var passwordEyeBtn = document.querySelector('.password-check')
var passwordForm = document.querySelector('.input-password')

passwordEyeBtn.addEventListener('click', () => {
    const type = passwordForm.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordForm.setAttribute('type',type);
})