import { useState } from "react";
import useCounter from "../hook/useCounting";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const Hooks = () => {
  const { count, string, improve, decrease } = useCounter();

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
