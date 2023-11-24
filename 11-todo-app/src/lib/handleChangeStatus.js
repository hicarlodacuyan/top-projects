import observable from "./Observable";

export const handleChangeStatus = (ev, index) => {
    if(ev.target.checked === true) {
        observable.notify('itemStatusChange', {
            index,
            status: true
        });
    } else {
        observable.notify('itemStatusChange', {
            index,
            status: false
        });
    }
};