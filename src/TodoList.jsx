import { useState } from "react";
import { v4 as uuidv4 } from "uuid";  

export default function TodoList(){
let [todos ,setTodos]= useState([
    { task: "sample-task", id:uuidv4() ,isDone: false }]);
let [newTodo, setNewTodo]= useState([""]);

let addNewTask = () => {
   setTodos((prevTodos)=>{

    return [...prevTodos , { task: newTodo, id:uuidv4() ,isDone: false }]

   })
    setNewTodo("");
}

let updateTodoValue =(event) =>{
    setNewTodo(event.target.value);  //event is a object and onchange it property
};

let deleteTodo =(id) =>{
    setTodos( (prevTodos) => todos.filter((prevTodos)=> prevTodos.id  !== id)); 

    //using callback fn bec. new value depend on old value
    
}

let markAllDone =() => {
    setTodos((prevTodos) => (
        prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        })
    ));
};

let markAsDone = (id) => {
    setTodos((prevTodos) => 
    prevTodos.map((todo) => {
          if(todo.id == id){ 
             return {
                ...todo,
             isDone: true
            };

          }else{
            return todo ;
          }
        })
    );

}
    return (
        <div style={{backgroundColor:"skyblue",  borderRadius:"30px", padding:"40px"}}>
             <input placeholder="add a task"
             value={newTodo}
             onChange={updateTodoValue}
            
             
              />
             <br />
             <br />
             <button style={{backgroundColor:"red" }} onClick={addNewTask}>
                Add Task
                </button>
             <br />
             <br />
             <br />
            <hr />
             <h4>Task Todo</h4>
             <ul>
                {todos.map((todo) =>(
                
                    <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine:"Line-through"} : {}}>
                        {todo.task}
                        </span> 
                    &nbsp;&nbsp;&nbsp;
                    <button style={{borderRadius:"50%"}}  onClick={() => deleteTodo(todo.id)}>
                        Delete
                        </button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => markAsDone(todo.id)}>MarkAsDone</button>
                    </li>
                )
                )}
             </ul>
             <br /><br />
             <button onClick={markAllDone}>MarkAllDone</button>

            </div>
    )
}
