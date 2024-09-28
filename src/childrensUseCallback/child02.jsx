import { memo } from "react";

import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
const Child02 = ({ value, setValue }) => {
  console.log("C2 renderizado")

  return (
    <Container>
      {value}
      <button onClick={setValue}>Incrementar02</button>
    </Container>
  );
};

export default memo(Child02);
