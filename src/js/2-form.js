const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const savedData = localStorage.getItem(storageKey);
if(savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;

};

form.addEventListener('input', (event) => {
   formData[event.target.name] = event.target.value.trim();
   localStorage.setItem(storageKey, JSON.stringify(formData));
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return
    } else {
        console.log(formData);
    }
    localStorage.removeItem(storageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
    


})