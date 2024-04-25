import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setToDos]=useState([])
  const[todo,setToDo]=useState('')
  const deleteTodo = (id) => {
    setToDos(todos.filter(todo => todo.id !== id));
  }

  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> Pending task </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...todos,{id:Date.now() ,text:todo,status:false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
{     todos.map((obj)=>{
       return <div className="todo">
           <div className="left">
            <input onChange={(e)=>{
             console.log(e.target.checked)
             console.log(obj)
             setToDos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
             }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
})}
<div className="subHeading">
          <br />
          <h2>Completed task </h2>
        </div>
        {todos.map((obj)=>{
          if (obj.status) {
            return(
              <div>
                <h1>{obj.text}<button onClick={() => deleteTodo(obj.id)}>delete</button></h1>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
