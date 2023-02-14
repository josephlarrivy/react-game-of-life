import React, { useState } from "react";

const useToggleValue = () => {

  const [state, setState] = useState()

  const toggleValue = () => {
    if (state == 0) {
      setState(1)
    } else if (state == 1) {
      setState(0)
    }
  }




  return [toggleValue]
}

export default useToggleValue;