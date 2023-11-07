import { useState } from "react";
import AddToDoItem from "./addToDoItem";
import ToDoItem from "./item";

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);



    return (
        <>
            <div><AddToDoItem setToDoList={setToDoList} toDoList={toDoList} /></div>
            <div>To Do List:
                <ul>
                    {toDoList.map((item, index) => {
                        return(

                                <ToDoItem
                                    key={index}
                                    index={index}
                                    item={item}
                                    toDoList={toDoList}
                                    setToDoList={setToDoList}
                                />
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
export default ToDoList;
