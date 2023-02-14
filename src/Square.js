import React, {useState, useEffect} from "react";

const Square = ({b, table, setTable, xIndex, yIndex, sum, setSum}) => {


  const handleClick = (e) => {
    console.log(table[xIndex][yIndex])
    console.log(xIndex, yIndex)
    if (table[xIndex][yIndex] == 0) {
      table[xIndex][yIndex] = 1;
      setTable(table);
      setSum(sum+1)
    } else if (table[xIndex][yIndex] == 1) {
      table[xIndex][yIndex] = 0;
      setTable(table);
      setSum(sum+1)
    }
    console.log(table)
  }

  
  
  if (b == 0) {
    return (
      <div 
        className="off"
        onClick={handleClick}
        >
      </div>
    )
  } else if (b == 1) {
    return (
      <div
        className="on"
        onClick={handleClick}
        >
      </div>
    )
  } else if (b == 2) {
    return (
      <div
        className="border"
      >
      </div>
    )
  }


  
}

export default Square;