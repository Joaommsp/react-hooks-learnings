import { useCallback } from "react";

import Child01 from "../childrensUseCallback/child01";
import Child02 from "../childrensUseCallback/child02";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg";
import { useState } from "react";

const UseCallback = () => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);

  const handleIncrement1 = useCallback(() => {
    setValue((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleIncrement2 = useCallback(() => {
    setValue2((prev) => prev + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value2]);

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useCallback</span>
      <div className="buttons">
        <button
          className="button-state"
          onClick={() => setValue((prev) => prev + 1)}
        >
          INCREMENTAR 01 SEM FUNCÃO
        </button>
        <button
          className="button-state"
          onClick={() => setValue2((prev) => prev + 1)}
        >
          INCREMENTAR 02 SEM FUNCÃO
        </button>
      </div>
      <div className="childrens">
        <Child01 value={value} setValue={handleIncrement1} />
        <Child02 value={value2} setValue={handleIncrement2} />
      </div>
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
