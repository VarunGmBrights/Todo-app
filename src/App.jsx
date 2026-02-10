
import './App.css'
import icon from './assets/todo_icon.png'
import Todo from './COMPONENTS/Todo'

function App() {

  return (
   <>
   <div className='main'>
    <div className="main-sub">
    <img src={icon} alt="" />
    <h2>Thanu bangara</h2>
    </div>

    <Todo/>
   </div>
   </>
  )
}

export default App
