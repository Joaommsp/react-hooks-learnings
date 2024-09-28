import { useEffect, useState } from "react";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const UseEffect = () => {
  const [myName, setMyName] = useState("João");
  const [hasChanged, setHasChanged] = useState("Estado de criação");

  useEffect(() => {
    console.log("Estado de inicialização");
    changeState();

    return console.log("Componente desmontado");
  }, []);

  const changeState = () => {
    return setHasChanged("O Estado foi alterado");
  };

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useEffect</span>
      <div className="buttons"></div>
      <div className="useEffect_states">
        <span>{myName}</span>
        <span>{hasChanged}</span>
      </div>
      <button
        className="button-state"
        onClick={() => setMyName("João da Massa")}
      >
        Alterar estado
      </button>
      <div className="linkContainer_left">
        <LinkApp text="useContext" url="usecontext" />
      </div>
      <div className="linkContainer">
        <LinkApp text="useRef" url="useref" />
      </div>
    </Container>
  );
};

export default UseEffect;
