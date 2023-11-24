import observable from "../lib/Observable";
import { handleItemDeleted } from "../lib/handleItemDeleted";
import { handleInputChange } from "../lib/handleInputChange";
import { handleChangeStatus } from "../lib/handleChangeStatus";
import { handleClearCompletedItems } from "../lib/handleClearCompletedItems";

const todoList = (() => {
    const LOCAL_STORAGE_LIST_KEY = 'todo.items';
    let items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

    const init = () => {

        const container = document.createElement('section');
        container.classList.add('todo-list');

        const listHeading = document.createElement('div');
        listHeading.classList.add('list-heading');

        const h3 = document.createElement('h3');
        h3.textContent = 'TODO LIST';

        const itemCounter = document.createElement('p');
        itemCounter.id = 'item-counter';

        const clearCompletedBtn = document.createElement('button');
        clearCompletedBtn.textContent = 'Clear Completed';
        clearCompletedBtn.addEventListener('click', () => handleClearCompletedItems(todoList.items));

        const list = document.createElement('div');
        list.classList.add('list');
        list.id = 'todo-list';

        listHeading.appendChild(h3);
        listHeading.appendChild(itemCounter);
        listHeading.appendChild(clearCompletedBtn);

        container.appendChild(listHeading);
        container.appendChild(list);

        return container;
    };

    const updateList = () => {
        let container = document.getElementById('todo-list');
    
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
    
        todoList.items.forEach((item, index) => {
            let todoItem = document.createElement('div');
            if(item.status === false) {
                todoItem.classList.add('todo-item');
            } else {
                todoItem.classList.add('todo-item', 'done');
            }
            
            let label = document.createElement('label');
    
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.status;
            checkbox.addEventListener('change', ev => {
                handleChangeStatus(ev, index);
            });
    
            let bubble = document.createElement('span');
            bubble.classList.add('bubble');
    
            let todoContent = document.createElement('div');
            todoContent.classList.add('todo-content');
    
            let inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.disabled = 'disabled';
            inputText.value = `${item.item}`;
            inputText.addEventListener('change', ev => {
                handleInputChange(ev, index);
            });
    
            let actions = document.createElement('div');
            actions.classList.add('actions');
    
            let editBtn = document.createElement('button');
            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                inputText.disabled = false;
                inputText.focus();
            });
    
            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => handleItemDeleted(index));
    
            label.appendChild(checkbox);
            label.appendChild(bubble);
    
            todoContent.appendChild(inputText);
    
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
            
            todoItem.appendChild(label);
            todoItem.appendChild(todoContent);
            todoItem.appendChild(actions);
    
            container.appendChild(todoItem);
        });
    };

    const updateCounter = () => {
        const itemsCounter = document.getElementById('item-counter');
        itemsCounter.textContent = `${todoList.items.length} items left`;
    };

    const saveList = () => {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(todoList.items));
    };

    const saveAndRender = () => {
        updateList();
        updateCounter();
        saveList();
    };
    
    return { init, updateList, saveAndRender, items };
})();

const itemAdded = item => {
    todoList.items.push({
        item,
        status: false
    });

    todoList.saveAndRender();
};

const itemDeleted = index => {
    todoList.items.splice(index, 1);
    todoList.saveAndRender();
};

const itemEdited = todo => {
    let editedItemIndex = todo.index;
    let newItemValue = todo.newInputValue;

    todoList.items[editedItemIndex].item = newItemValue;
    todoList.saveAndRender();
};

const itemChangeStatus = todo => {
    let editedItemIndex = todo.index;
    let newItemStatus = todo.status;

    todoList.items[editedItemIndex].status = newItemStatus;
    todoList.saveAndRender();
};

const clearCompletedItems = filteredTodo => {
    todoList.items = filteredTodo;
    todoList.saveAndRender();
}

const countUpdateChangeStatus = () => {
    const itemsCounter = document.getElementById('item-counter');
    let ongoingItemsLength = todoList.items.filter(item => item.status === false).length;

    itemsCounter.textContent = `${ongoingItemsLength} items left`;
};

observable.subscribe('itemAdded', itemAdded);
observable.subscribe('itemDeleted', itemDeleted);
observable.subscribe('itemEdited', itemEdited);
observable.subscribe('itemStatusChange', itemChangeStatus);
observable.subscribe('clearCompletedItems', clearCompletedItems);
observable.subscribe('itemStatusChange', countUpdateChangeStatus);

export { todoList, countUpdateChangeStatus };