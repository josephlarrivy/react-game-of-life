import './App.css';
import React, {useEffect, useState} from 'react';

import initialTable from "./data";
import Board from './Board';
import useRunAlgorithm from './hooks/useRunAlgorithm';

function App() {

  const [table, setTable] = useState(initialTable);
  const [sum, setSum] = useState(0);
  // const [run] = useRunAlgorithm();

  return (
    <div className="App">
      <Board table={table} setTable={setTable} sum={sum} setSum={setSum}/>
    </div>
  );

}

export default App;
