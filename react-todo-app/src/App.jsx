import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [addTodo, setAddTodo] = useState("");
  const [submit, setSubmit] = useState([]);

     function add(event){
      setAddTodo(event.target.value)
     }  

     function addButton(){
      if (addTodo.trim() !== ""){
        setSubmit([...submit, addTodo])
        setAddTodo("");
      }
     }

     function removeTodo(index){
        const newTodos = submit.filter((_, i) => i !== index)
        setSubmit(newTodos)
    }

    return (
    <>
    <div>
      <p>Input your todo list</p>
      <input type="text" onChange={add} value={addTodo}/>
      <button onClick={addButton}>add Todo</button>
       <ul>
           {submit.map((todo, index)=>(
           <li onClick={() => removeTodo(index)} key={index}>
            {todo}
            </li>
           ))}
       </ul>
       
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
