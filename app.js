const passwordEyeBtn = document.querySelector('.password-check')
const passwordForm = document.querySelector('.input-password')

passwordEyeBtn.addEventListener('click', () => {
    const type = passwordForm.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordForm.setAttribute('type',type);
})

// Functionality for Cart Quantity inc and dec.


const optionDec = document.querySelectorAll('.cart-option-dec')
const optionInc = document.querySelectorAll('.cart-option-inc')
const optionNo = document.querySelectorAll('.cart-quantity-no')
let value = 0;
for (let i = 0; i < optionNo.length; i++) {
    optionInc[i].addEventListener('click', ()=>{
        if(Number(optionNo[i].value) < Number(optionNo[i].max) ){
            optionNo[i].value= Number(optionNo[i].value)+1
        }})
    
    optionDec[i].addEventListener('click', ()=>{
        if(Number(optionNo[i].value) > Number(optionNo[i].min) ){
            optionNo[i].value= Number(optionNo[i].value)-1
        }})
    
}

