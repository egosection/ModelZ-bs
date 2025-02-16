// Form validation
document.querySelector('.hero form').addEventListener('submit', (e) => {  
    const message = document.querySelector('.error-msg');
    e.preventDefault();
    const fullName = e.target.name.value;
    const phoneNumber = e.target.phone.value;
    const email = e.target.email.value;

    if(!fullName || !phoneNumber || !email) {
        message.classList.add('p-error');
        message.textContent = 'All fields are required!';
        return;
    }

    if(fullName.length < 8 || phoneNumber.length < 8 || email.length < 8) {
        message.classList.add('p-error');
        message.textContent = 'Name, Phone and Email must be at least 8 characters';
        return;
    }

    message.classList.remove('p-error');
    message.classList.add('p-success');
    message.textContent = 'Successfully sent!';
    e.target.name.value = '';
    e.target.phone.value = '';
    e.target.email.value = '';
  
});