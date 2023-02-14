import React from "react";
import Square from "./Square";


const Row = ({row, table, setTable}) => {


  return (
    <div>
      {row.map((b, index) => {
        return <Square b={b} table={table} setTable={setTable}/>
      })}
    </div>
  )
  
}

export default Row;