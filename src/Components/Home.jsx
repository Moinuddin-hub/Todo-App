import Todos from "./Todos";


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
        <div>
        <Todos todos={dummyTodo}/>
        </div>
    );
};

export default Home;