import React from "react";
import Square from "./Square";


const Row = ({row, table, setTable, xIndex, sum, setSum}) => {


  return (
    <div>
      {row.map((b, index) => {
        return <Square b={b} table={table} setTable={setTable} xIndex={xIndex} yIndex={index} sum={sum} setSum={setSum} />
      })}
    </div>
  )
  
}

export default Row;