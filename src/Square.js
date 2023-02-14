import React, {useState} from "react";

const Square = ({b, table, setTable, xIndex, yIndex}) => {

  const [onOrOff, setOnOrOff] = useState('off')

  // console.log(table)
  // console.log(xIndex, yIndex)

  const handleClick = (e) => {
    console.log(table[xIndex][yIndex])
    if (table[xIndex][yIndex] == 0) {
      table[xIndex][yIndex] = 1;
      setTable(table);
    } else if (table[xIndex][yIndex] == 1) {
      table[xIndex][yIndex] = 0;
      setTable(table);
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
  }


  
}

export default Square;