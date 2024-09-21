import { useState, useCallback, memo } from "react";

function UseCallBack() {
  const [count, setCount] = useState(0);

  // Memoize the onClick function so it is not recreated on every render
  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []); // Empty dependency array means the function is only created once

  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");
  return (
    <div>
      <h1>4:useCallback</h1>
      <button onClick={onClick}>Button Clicked</button>
    </div>
  );
});

export default UseCallBack;
