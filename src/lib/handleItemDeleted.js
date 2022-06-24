import observable from "./Observable";

export const handleItemDeleted = index => {
    observable.notify('itemDeleted', index);
};