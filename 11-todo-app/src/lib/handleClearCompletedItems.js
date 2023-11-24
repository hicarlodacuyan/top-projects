import observable from "./Observable";

export const handleClearCompletedItems = items => {
    let filteredItems = items.filter(item => item.status === false);
    observable.notify('clearCompletedItems', filteredItems);
};