import './App.css';
import React, {useState} from 'react';

import initialTable from "./data";
import Board from './Board';

function App() {

  const [table, setTable] = useState(initialTable)

  return (
    <div className="App">
      <Board table={table} setTable={setTable}/>
    </div>
  );
}

export default App;
