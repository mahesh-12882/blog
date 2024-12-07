import { isEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import nextId from "react-id-generator";


export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [userInput,setUserInput] = useState("");
    const [itemId,setItemId] = useState(0);
    const [isEditable,setIsEditable] = useState(false);


    const handleChnage = (value)=>{
        setUserInput(value)
    }
    const addUser = (event) => {
        event.preventDefault();
        let uniqueId = nextId();
  
        setTodos([...todos,{id:uniqueId,name:userInput}]);
        setUserInput("");
    }

    const handleDelete = (id)=>{
        let data = todos.filter((item)=>(
             item.id !== id
        ))
        setTodos(data);
        console.log(data)
      
    }

    const handleEdit = (id)=>{

        let data = todos.filter((item)=>(
            item.id === id
       ))
       setItemId(data[0].id);
       setUserInput(data[0].name);
       setIsEditable(true);
    }

    const handleUpdate = (event)=>{
        event.preventDefault();
        let todosEdit = todos.map((item)=>{
             if(item.id === itemId){
                item.name = userInput;
             }
             return item;
        })

        setTodos([...todosEdit]);
    }

    const handleCancel = ()=>{
        setIsEditable(false);
        setUserInput("");
    }

    return (
        <>
            <div className="table-container">
                {!isEditable && 
                <div class="user-form">
                    <form onSubmit={addUser}>
                    <input type="text" name="username" value={userInput} onChange={(event)=>handleChnage(event.target.value)}/>
                    <button type="submit">Submit</button>
                   </form>
                </div>}
                {isEditable && 
                <div class="user-form">
                    <form onSubmit={handleUpdate}>
                    <input type="text" name="username" value={userInput} onChange={(event)=>handleChnage(event.target.value)}/>
                    <button type="submit">Update</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>

                   </form>
                </div>}
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {todos.map((item) => (
                        <tr key={item.id}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                <button type="button" onClick={()=>handleDelete(item.id)}>Delete</button>
                                <button type="button" onClick={()=>handleEdit(item.id)}>Update</button>

                            </td>
                        </tr>
                    ))}

                </table>
            </div>
        </>
    )
}