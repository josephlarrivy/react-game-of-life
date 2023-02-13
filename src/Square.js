import React, {useState} from "react";

const Square = ({b}) => {

  const [onOrOff, setOnOrOff] = useState('off')


  const handleClick = () => {
    if (onOrOff == 'off') {
      setOnOrOff('on')
    } else if (onOrOff == 'on') {
      setOnOrOff('off')
    }
  }

  return (
    <div className={onOrOff} onClick={handleClick}>
    </div>
  )
}

export default Square;