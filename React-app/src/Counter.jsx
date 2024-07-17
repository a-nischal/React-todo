import "./App.css";
import { useReducer } from "react";
const InitialState = {count: 0};

function Counter() {
  const [ state, dispatch ] = useReducer(InitialState);
  return (
    <>
      {count}
      <br></br>
      <button onClick={() => dispatch(setCount(count + 1))}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count - count)}>Reset</button>
    </>
  );
}

export default Counter;
