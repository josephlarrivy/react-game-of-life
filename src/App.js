import './App.css';
import React, {useEffect, useState} from 'react';
import './styles.css'

import initialTable from "./data";
import Board from './Board';
import useRunAlgorithm from './hooks/useRunAlgorithm';

function App() {

  const [table, setTable] = useState(initialTable);
  const [sum, setSum] = useState(0);
  const [run] = useRunAlgorithm();
  const [step, setStep] = useState(false)
  const [onOrOff, setOnOrOff] = useState('off')

  

  if (step == true) {
    setStep(false)
    let newTable = run(table)
    setTable(newTable)
    setSum(sum+1)
  }

  const handleAppClick = () => {
    setStep(true)
  } 

  const reset = () => {
    window.location.reload(false);
  }
  

  return (
    <div className="App">
      <button onClick={handleAppClick}>Step</button>
      <button onClick={reset}>Reset</button>
      <Board table={table} setTable={setTable} sum={sum} setSum={setSum}/>
    </div>
  );

}

export default App;
