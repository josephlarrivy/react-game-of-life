import './App.css';
import React, {useEffect, useState} from 'react';

import initialTable from "./data";
import Board from './Board';

function App() {

  const [table, setTable] = useState(initialTable);
  const [sum, setSum] = useState(0)


  return (
    <div className="App">
      <Board table={table} setTable={setTable} sum={sum} setSum={setSum}/>
    </div>
  );

}

export default App;
