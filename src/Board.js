import React, { useState } from "react";
import './styles.css'

import initialTable from "./data";
import Row from "./Row";
import useToggleValue from "./hooks/useToggleValue";

const Board = () => {

  const [table, setTable] = useState(initialTable)


  return(
    <div className="board">
      {table.map((row, index) => {
        return <Row row={row} />
      })}
    </div>
  )
  
}

export default Board;