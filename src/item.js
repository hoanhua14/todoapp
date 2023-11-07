import { useState } from "react";

const ToDoItem = (props) => {

    const [isDone, setIsDone] = useState(false);

    const style = {
        'textDecoration': isDone ? 'line-through' : 'none'
    };

    const handleCheck = () => {
        setIsDone(!isDone);

    };

    const handleDelete = (index) => {
        const updatedList = [...props.toDoList];
        updatedList.splice(index, 1);
        props.setToDoList(updatedList);
    };


    return (
        <li style={style}>
            <input type='checkbox' onChange={handleCheck}></input>
            {props.item}
            <button onClick={() => handleDelete(props.index) }>Delete</button>
        </li>
    );
};
export default ToDoItem;
