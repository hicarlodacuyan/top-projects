const Input = () => {
    const inputGroup = document.createElement('div');
    const inputGroupText = document.createElement('div');
    const formControl = document.createElement('input');
    const addToDoBtn = document.createElement('i');

    inputGroup.classList.add('input-group');
    inputGroupText.classList.add('input-group-text');
    formControl.classList.add('form-control');
    addToDoBtn.classList.add('bi', 'bi-plus-circle');

    formControl.type = 'text';
    formControl.ariaLabel = 'Text input with radio button';

    inputGroupText.appendChild(addToDoBtn);
    inputGroup.appendChild(inputGroupText);
    inputGroup.appendChild(formControl);

    return inputGroup;
};

export default Input;