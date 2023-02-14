import React, {useState} from "react";

const Square = ({b, table, setTable}) => {

  const [onOrOff, setOnOrOff] = useState('off')

  console.log(table)

  const handleClick = (e) => {
    console.log('click')
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