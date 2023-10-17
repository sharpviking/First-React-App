import { useState } from "react";
export default function Counter() {
  const [num, setNum] = useState(0);
  function changeNum() {
    setNum(num + 1);
  }
  return (
    <div>
      <p>The count is:{num}</p>
      <button onClick={changeNum}>increment</button>
    </div>
  );
}
