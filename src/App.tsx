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
        카운트 값 : {count}
      </button>
      <div>안녕하세요 반갑습니다(수정) </div>
    </div>
  );
}

export default App;
