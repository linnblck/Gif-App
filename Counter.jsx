import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((estado) => estado + 1);
    setCounter((estado) => estado + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={onClick}>+2</button>
    </div>
  );
};
