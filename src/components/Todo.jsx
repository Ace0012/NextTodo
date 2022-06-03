import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import styles from './todo.module.css'


const Todo = () => {
  const [query, setQ] = useState("");
  const [tasks, setT] = useState([]);
const [show, setShow] = useState(true)



  const onDel= (id)=>{

     let newTasks =  tasks.filter(item=>item.id!==id)
      setT(newTasks)


    }
    const handleToggle = (id)=>{
      const update = tasks.map((item)=>(

          item.id===id?{...item,status :!item.status }:item
          ))
      setT(update);


  } 



  return (
    <div className = {styles.container}>

<div className = {styles.inputContainer}>
<button className = {styles.btn}
        onClick={() => {
          setT([...tasks, { id: Date.now(), val: query,status:false }]);
          setQ("");
        }}
        >
        +
      </button>

      <input
        type="text"
        value={query}
        placeholder = "Add Todo"

        
        onChange={(e) => {
          setQ(e.target.value);
        }}
        className = {styles.inp}
        />

     
        </div>
<div className = {styles.Intodo}>

      {tasks.filter((item)=>show?"true":!item.status).map((item) => {
        return <TodoItem  item={item}  onDel={onDel} handleToggle = {handleToggle}/>;
        
        
      })}
      </div>
      <button className = {styles.showBtn} onClick = {()=>(setShow(!show))}>{show?"SHOW COMPLETED TO-DO":"SHOW ALL"}</button>

    </div>
  );
};

export default Todo;
