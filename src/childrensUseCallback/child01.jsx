import { memo } from "react";

import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
const Child01 = ({ value, setValue }) => {
  console.log("C1 renderizado");

  return (
    <Container>
      {value}
      <button onClick={setValue}>Incrementar01</button>
    </Container>
  );
};

export default memo(Child01);
