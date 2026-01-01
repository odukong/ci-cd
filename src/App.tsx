import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        카운트 값 : {count} 수정
      </button>
    </div>
  );
}

export default App;
