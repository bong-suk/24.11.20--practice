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
        <li>
          안녕하세요
          <p>P 요소입니다</p>
        </li>
        <li>
          반갑습니다
          <section>section 요소입니다</section>
        </li>
        <li>
          SCSS를
          <article>
            Article 요소입니다
            <h3>H3 요소입니다</h3>
          </article>
        </li>
        <li>
          공부해봅시다
          <h2>h2요소 입니다</h2>
        </li>
      </ul>
    </>
  );
}

export default App;
