import React, { useState } from "react";
import styles from "./todo.module.css";

const TodoItem = ({ onDel, item,handleToggle }) => {
  const [completed, setCompleted] = useState(item.completed);
  return (
    <div className = {styles.itemUpper} key={item.id}>
      <div className = {styles.itemContainer}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            setCompleted(e.target.checked);
            console.log(e.target.checked);
            

          }}
          onClick = {()=>(handleToggle(item.id))}

        />
        <div className={completed ? styles.striked : ""}>{item.val}</div>
        </div>

        <button className = {styles.delBtn}
          onClick={() => {
            onDel(item.id);
          }}
        >
          X
        </button>
      
    </div>
    
    

  );
};

export default TodoItem;
