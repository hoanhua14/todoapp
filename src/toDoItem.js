import { useState } from "react";

const ToDoItem = (props) => {
    const [item, setItem] = useState('');

    const handleAdd = (e) => {
        if (item) {
            let newList = [...props.toDoList, item];
            props.setToDoList(newList);
            setItem('');
        }
    };

    return (
        <div>
            <input type="text" placeholder="What to do?" value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default ToDoItem;
