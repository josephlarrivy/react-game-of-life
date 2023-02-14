import './App.css';
import React, {useEffect, useState} from 'react';

import initialTable from "./data";
import Board from './Board';
import useRunAlgorithm from './hooks/useRunAlgorithm';

function App() {

  const [table, setTable] = useState(initialTable);
  const [sum, setSum] = useState(0);
  const [run] = useRunAlgorithm();


  const [test, setTest] = useState(1)
  useEffect(() => {
    let newTable = run(table)
    console.log(newTable)
  }, [test])

  
  const handleAppClick = () => {
    setTest(test+1)
  } 

    
  

  return (
    <div className="App">
      <button onClick={handleAppClick}>run</button>
      <Board table={table} setTable={setTable} sum={sum} setSum={setSum}/>
    </div>
  );

}

export default App;
