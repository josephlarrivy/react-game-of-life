import React from "react";
import Square from "./Square";


const Row = ({row, table, setTable, xIndex}) => {

  // console.log(xIndex)

  return (
    <div>
      {row.map((b, index) => {
        return <Square b={b} table={table} setTable={setTable} xIndex={xIndex} yIndex={index}/>
      })}
    </div>
  )
  
}

export default Row;