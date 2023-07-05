import { useRef, useState } from "react";


function Counter() {
  const [number, setNumber] = useState(0);
  

  const num = useRef(0)

  function handleClick(e) {
    e.stopPropagation();

    setNumber((number) => number + 1);
//     console.log(number);
num.current++
    console.log(num.current)
  }

  return (
    <>
      <h1>{number} <span> ------ </span>{num.current}</h1>
      <button onClick={handleClick}>click me</button>
      <img src="" alt="" />
      <h1></h1>
    </>
  );
}

export default Counter;
