import observable from "./Observable";

export const handleInputChange = (ev, index) => {
    const newInputValue = ev.target.value;
    observable.notify('itemEdited', {
        index,
        newInputValue
    });
};