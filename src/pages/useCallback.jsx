import { useReducer } from "react";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, name: "João da Massa" };
    case "decrement":
      return { ...state, count: state.count - 1, name: "João da Banana" };
    case "reset":
      return { ...state, count: (state.count = 0), name: "João" };
    default:
      return state;
  }
};

const UseCallback = () => {
  const initialState = { count: 0, name: "João" };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useCallback</span>
      <div className="buttons">
        <button
          className="button-state"
          onClick={() => dispatch({ type: "increment" })}
        >
          Incrementar
        </button>
        <button
          className="button-state"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrementar
        </button>
        <button
          className="button-state"
          onClick={() => dispatch({ type: "reset" })}
        >
          Resetar
        </button>
      </div>
      <span>{state.count}</span>
      <span>{state.name}</span>
      <div className="linkContainer_left">
        <LinkApp text="useReduce" url="usereduce" />
      </div>
      <div className="linkContainer">
        <LinkApp text="useCallback" url="usecallback" />
      </div>
    </Container>
  );
};

export default UseCallback;
