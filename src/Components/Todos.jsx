import Todo from "./Todo";


const Todos = ({todos}) => {
    console.log(todos)
  
    return (
        <div>
           {
            todos.map((todo)=>(
                <Todo key={id} todo={todo}/>
            ))
           }
        </div>
    );
};

export default Todos;