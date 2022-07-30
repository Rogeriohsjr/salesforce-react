import React from "react";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <Counter></Counter>
    </div>
  );
}

export default App;
