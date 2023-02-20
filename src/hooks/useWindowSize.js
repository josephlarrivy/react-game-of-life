import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);
  

  let numSquaresHorizontal = Math.floor(windowSize.width/50)
  let numSquaresVertical = Math.floor(windowSize.height/40)


  console.log(numSquaresHorizontal)
  console.log(numSquaresVertical)

  let row = [];
  let table = [];

  React.useEffect(() => {
    row = [];
    table = [];
    for (let i = 0; i <= numSquaresHorizontal; i++) {
      row.push(0)
    }
    for (let j = 0; j <= numSquaresVertical; j++) {
      table.push(row)
    }

    console.log(row)
    console.log(table)

  }, [numSquaresHorizontal, numSquaresVertical])
  


  


  let initialTable = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]

  return table;
}