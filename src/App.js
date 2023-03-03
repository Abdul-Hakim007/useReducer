// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* disabled={state === 0}  */}
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button disabled={state === 0} onClick={() => dispatch({ type: "DECREMENT" })}>-</button>



      <h4>This is my awesome counter using useReducer</h4>
    </div>
  );
}

export default App;
