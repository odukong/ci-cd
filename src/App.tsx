import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(sd);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        카운트 값 : {count}
      </button>
      <div>안녕하세요</div>
    </div>
  );
}

export default App;
