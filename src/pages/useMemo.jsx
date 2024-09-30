import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";
import { useMemo, useState } from "react";

import { largeData } from "../largeData/largeDate";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(largeData);

  function increment() {
    setCount((prev) => prev + 1);
  }

  const selectedItem = useMemo(
    () =>
      items.find((item) => {
        console.log("Recalculando");
        return item.isActive;
      }),
    [items]
  );

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useMemo</span>
      <div className="buttons">
        <button className="button-state" onClick={increment}>
          Incrementar
        </button>
      </div>
      <div className="childrens">
        <span>{count}</span>
      </div>
      <div className="childrens">
        <span>Active: {selectedItem?.isActive ? "true" : "false"}</span>
      </div>
      <div className="linkContainer_left">
        <LinkApp text="useCallBack" url="usecallback" />
      </div>
    </Container>
  );
};

export default UseMemo;
