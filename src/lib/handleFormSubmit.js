import observable from "./Observable";

export const handleFormSubmit = event => {
    event.preventDefault();
    let input = document.getElementById('content');
    let newItem = input.value;
    if(newItem === '') return;
    input.value = '';

    observable.notify('itemAdded', newItem);
};