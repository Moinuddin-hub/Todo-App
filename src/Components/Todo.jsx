import React from 'react';
import style from './todo.module.css';
const Todo = ({todo}) => {
    console.log(todo);
    const {id, title,desc} = todo; //destructuring
    return (
        <article className={style.todo}>
              <div> 
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <button className={style.btn}>
            <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
        </button>
        </article>
    );
};

export default Todo;