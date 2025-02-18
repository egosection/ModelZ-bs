// Form validation

document.querySelector('.hero form').addEventListener('submit', (e) => {  
    const message = document.querySelector('.error-msg');
    e.preventDefault();
    const fullName = e.target.name.value;
    const phoneNumber = e.target.phone.value;
    const email = e.target.email.value;

    message.classList.remove('p-error', 'p-success');

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

//IntersectionObserver

const h3Elements = document.querySelectorAll('h3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('fadeOut')
            entry.target.classList.add('fadeIn')
        } else {
            entry.target.classList.remove('fadeIn')
            entry.target.classList.add('fadeOut')
        }
    });
});

h3Elements.forEach((el) => {
    observer.observe(el);
});


//Modals without bs (not ready)
const popups = document.querySelectorAll('.popup');
const overlay = document.querySelector('.modal-overlay');
const ok = document.querySelector('.ok');


popups.forEach((el) => {
    el.addEventListener('click', (e) => {   
        overlay.classList.add('op-1');
    })   
});
