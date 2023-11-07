import { useState } from "react";

const ToDoItem = (props) => {

    const [isDone, setIsDone] = useState(false);
    const style = {
                textDecoration: isDone ? 'line-through' : 'none'
            };


    return (
        <li style={style} onClick={() => setIsDone(!isDone)}>{props.item}</li>
    );
};
export default ToDoItem;
