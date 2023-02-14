import React, {useState, useEffect} from "react";

const Square = ({b, table, setTable, xIndex, yIndex, sum, setSum}) => {

  const [onOrOff, setOnOrOff] = useState('off')

    // useEffect(() => {
    //   for (let val of table[xIndex]) {
    //     setSum(sum + val)
    //     console.log(sum)
    //   }
    // }, [])

  const handleClick = (e) => {
    console.log(table[xIndex][yIndex])
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
  }


  
}

export default Square;