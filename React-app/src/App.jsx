
import './App.css'

function App() {
  const Todos=['Learn html ', 'Learn CSS ', 'learn PHP']

  return (
    <>
    <form action="">
      <h1>Hey There!</h1>
      <input type="text" name="todo" placeholder='New-todo' />
      {/* <button action="">
        Submit
      </button> */}
      <input type="submit" value={"Add"} />
    </form>
      <ul>
        {Todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </>
  );
}

export default App
