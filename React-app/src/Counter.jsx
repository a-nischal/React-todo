import "./App.css";
import { useReducer } from "react";
const InitialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {count : state.count +1}
  case "DECREMENT" :
      return {count :state.count - 1}
  case "RESET":
    return {count : 0};
  default: 
  return state ;
  }
}

function Counter() {
  const [ state, dispatch ] = useReducer(reducer, InitialState);
  return (
    <>
      {state.count}
      
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
      <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
     
    </>
  );
}

export default Counter;
