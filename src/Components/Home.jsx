import Todos from "./Todos";
import style from "./home.module.css";

const Home = () => {
    const dummyTodo=[
        {
          id:1,
          title:"todo one",
          desc:"this is todo one"
          },
          {
            id:2,
            title:"todo two",
            desc:"this is todo two"
      
          },
          {
            id:3,
            title:"todo three",
            desc:"this is todo three"
          }
      
      ]
    return (
        <div className={style.container}>
          <h1 style={{color:"white"}}>Todo App</h1>
        <Todos todos={dummyTodo}/>
        </div>
    );
};

export default Home;