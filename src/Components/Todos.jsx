import React from 'react';
import Todo from './Todo';
 import style from './todos.module.css';
const Todos = ({todos}) => {
    console.log(todos)
    return (
        <>
         <section className={style.todos}>
         {
            todos.map((todo)=>(
              <Todo key={todo.id} todo={todo}/>
            ))
           } 
         </section>
        </>
    );
};

export default Todos;