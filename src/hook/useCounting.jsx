import { useState } from "react";

export default function useCounter() {
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

  return { count, string, improve, decrease };
}
