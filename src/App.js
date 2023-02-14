import './App.css';
import React, {useEffect, useState} from 'react';

import initialTable from "./data";
import Board from './Board';
import useRunAlgorithm from './hooks/useRunAlgorithm';

function App() {

  const [table, setTable] = useState(initialTable);
  const [sum, setSum] = useState(0);
  const [run] = useRunAlgorithm();
  const [test, setTest] = useState(false)
  
  if (test == true) {
    console.log(table)
    setTest(false)
    let newTable = run(table)
    setTable(newTable)
    setSum(sum+1)
  }

  
  const handleAppClick = () => {
    setTest(true)
  } 

    
  

  return (
    <div className="App">
      <button onClick={handleAppClick}>run</button>
      <Board table={table} setTable={setTable} sum={sum} setSum={setSum}/>
    </div>
  );

}

export default App;
