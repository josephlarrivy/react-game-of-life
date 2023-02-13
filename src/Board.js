import React from "react";
import './styles.css'

import table from "./data";
import Row from "./Row";

const Board = () => {

  console.log(table)

  return(
    <div className="board">
      {table.map((row) => {
        return <Row row={row} />
      })}
    </div>
  )
  
}

export default Board;