
import './App.css'
import icon from './assets/todo_icon.png'
import Todo from './COMPONENTS/Todo'

function App() {

  return (
   <>
   <div className='main'>
    <div className="main-sub">
    <img src={icon} alt="" />
    <h2>To-Do List</h2>
    </div>

    <Todo/>
   </div>
   </>
  )
}

export default App
