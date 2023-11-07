import { useState } from "react";
import AddToDoItem from "./toDoItem";

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);

    return (
        <>
            <div><AddToDoItem setToDoList={setToDoList} toDoList={toDoList} /></div>
            <div>To Do List:
                <ul>
                    {toDoList.map((item, index) => {
                        return(
                        <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
export default ToDoList;
