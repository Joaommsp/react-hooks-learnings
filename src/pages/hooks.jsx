import { useState } from "react";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

import { UserProvider } from "./UserProvider";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("João tem contagem de 0");

  const improve = () => {
    setCount((prevCount) => {
      setString(`João tem contagem de ${prevCount + 1}`);
      return prevCount + 1;
    });
  };

  const decrease = () => {
    setCount((prevCount) => {
      setString(`João tem contagem de ${prevCount - 1}`);
      return prevCount - 1;
    });
  };

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useState</span>
      <div className="buttons">
        <button className="button-state" onClick={() => improve()}>
          Aumentar
        </button>
        <button className="button-state" onClick={() => decrease()}>
          Diminuir
        </button>
      </div>
      <span>{count}</span>
      <span>{string}</span>
      <div className="linkContainer">
        <LinkApp text="useContext" url="usecontext" />
      </div>
    </Container>
  );
};

export default Hooks;
