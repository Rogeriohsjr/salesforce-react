import React from "react";
import { Counter } from "./features/counter/Counter";
import { ListAccount } from "./features/salesforce/AccountList";

function App() {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <Counter></Counter>
      <ListAccount></ListAccount>
    </div>
  );
}

export default App;
