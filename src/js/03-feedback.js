// 
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const LS_KEY = 'feedback-form-state';
let obj = {};

console.log('ok');

form.addEventListener('input', throttle(onIput, 500));
form.addEventListener('submit', onSubmit);

obj = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};
fillForm();
function fillForm() {
    if(obj) {
        form.elements.email.value = obj.email;
        form.elements.message.value = obj.message;
    }
}

function onIput (evt) {
    obj[evt.target.name] = evt.target.value;
    
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log(obj);

    if(localStorage.getItem(LS_KEY)) {
        localStorage.removeItem(LS_KEY);
    }

    evt.currentTarget.reset();
    obj = {};
}



// const LOCAL_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');

// form.addEventListener('input', onInputData);
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// const { email, message } = form.elements;
// reloadPage();

// function onInputData(e) {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
// }

// function reloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
//   dataForm = {};
// }