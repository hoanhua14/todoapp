import { useState } from "react";
import AddToDoItem from "./addToDoItem";
import ToDoItem from "./item";

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);

    const handleDelete = (index) => {
        // Create a copy of the current toDoList
        const updatedList = [...toDoList];
        updatedList.splice(index, 1); // Remove the item at the specified index
        setToDoList(updatedList); // Update the state with the updated list
    };


    return (
        <>
            <div><AddToDoItem setToDoList={setToDoList} toDoList={toDoList} /></div>
            <div>To Do List:
                <ul>
                    {toDoList.map((item, index) => {
                        return(

                                <ToDoItem
                                    key={index}
                                    item={item}
                                />
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
export default ToDoList;
