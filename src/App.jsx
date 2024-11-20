import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    //     <>
    //       <div className="test">테스트용 div</div>
    //       <h2>SCSS 변수 연습</h2>
    //       <ul>
    //         <li>
    //           안녕하세요
    //           <p>P 요소입니다</p>
    //         </li>
    //         <li>
    //           반갑습니다
    //           <section>section 요소입니다</section>
    //         </li>
    //         <li>
    //           SCSS를
    //           <article>
    //             Article 요소입니다
    //             <h3>H3 요소입니다</h3>
    //           </article>
    //         </li>
    //         <li>
    //           공부해봅시다
    //           <h2>h2요소 입니다</h2>
    //         </li>
    //       </ul>
    //     </>
    //   );
    // }

    <>
      <div className="test">테스트용 div</div>
      <h2>SCSS 변수 연습</h2>
      <ul>
        <li>안녕하세요</li>
        <li>반갑습니다</li>
        <li>SCSS를</li>
        <li>공부해봅시다</li>
      </ul>
      <section>
        <article>SCSS문법에는</article>
        <article>변수 사용과</article>
        <article>중첩 문법과</article>
        <article>믹스인 등이 있습니다</article>
      </section>
    </>
  );
}
export default App;
