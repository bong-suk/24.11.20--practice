import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test">테스트용 div</div>
      <h2>SCSS 변수 연습</h2>
      <ul>
        <li>안녕하세요</li>
        <li>반갑습니다</li>
        <li>SCSS를</li>
        <li>공부해봅시다</li>
      </ul>
    </>
  );
}

export default App;
