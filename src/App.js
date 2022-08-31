import React,{useState} from "react";



function App() {
  const [todoText, setTodoText]=useState("")
  const[todos,setTodos]=useState([])
  const changeISDone =(id)=>{
    console.log(id);
    const searchedTodo=todos.find((item)=>item.id ===id);
    const updatedTodo = {
      ...searchedTodo,
      isDone: !searchedTodo.isDone,
    };
    const filteredTodos = todos.filter(item=>item.id !==id);

    console.log(filteredTodos);
    setTodos([updatedTodo,...filteredTodos]);

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(todoText===""){
      alert("Todo text can't be empty!");
      return;
    }
    console.log(todoText);
  const hasTodos = todos.find(item=>item.text ===todoText)
  console.log(hasTodos);
  if(hasTodos !== undefined){
    alert("You have the todo already")
    return
  };
  const newTodo = {
    id:new Date().getTime(),
    isDone:false,
    text:todoText,
    date:new Date()
  };

  setTodos([newTodo,...todos]);
  setTodoText("");
  console.log(newTodo);
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className= "input-group mb-3">
      <input 
         value ={todoText}
         type="text" 
         className="form-control" 
         placeholder="Type your Todo" 
         onChange={(event)=>setTodoText(event.target.value)}
      />
         <button className="btn btn-primary" 
         type="submit">
          ADD
        </button>
        </div>
      </form>
      {
        todos.length <=0 ? (
          <p className="text-centers my-5"> You don't have any todos yet</p>
        ):
        (
     <React.Fragment>
      {
        todos.map(item =>(
          <div className="alert alert-secondary d-flex justify-content-between align-items-center" role="alert">
            <p>{item.text}</p>
            <button onClick={()=>changeISDone(item.id)} className="btn btn-secondary btn-sm">{item.isDone===false ? "Done":"Undone"}</button>
          </div>
        ))
      }
     </React.Fragment>
        )

      }
    </div>
  );
}

export default App;
