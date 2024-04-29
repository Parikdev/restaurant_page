//contact page

const createContactPage = () => {
    const content = document.querySelector('#content');
    const pagecontent = document.createElement('div');
    pagecontent.classList.add('page-content');


    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.placeholder = 'Enter Phone Number';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.placeholder = 'Submit';
    form.appendChild(submitButton);

    pagecontent.appendChild(form);
    content.appendChild(pagecontent);

}

export default createContactPage;