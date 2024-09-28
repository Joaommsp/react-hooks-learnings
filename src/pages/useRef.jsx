import { useEffect, useRef, useState } from "react";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const buttonRef = useRef(0);

  useEffect(() => {
    buttonRef.current.click();
  },[]);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    countRef.current++;

    console.log("State: ", count); // 0
    console.log("Ref: ", countRef.current); // 1
  };

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useRef</span>
      <div className="buttons">
        <button
          ref={buttonRef}
          className="button-state"
          onClick={() => handleIncrement()}
        >
          Incrementar
        </button>
      </div>
      <span>{count}</span>
      <span>{countRef.current}</span>
      <div className="linkContainer_left">
        <LinkApp text="useEffect" url="useeffect" />
      </div>
      <div className="linkContainer">
        <LinkApp text="useLayoutEffect" url="uselayouteffect" />
      </div>
    </Container>
  );
};

export default UseRef;
