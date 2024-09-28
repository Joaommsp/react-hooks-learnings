import { useEffect, useRef, useState, useLayoutEffect } from "react";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

const userIDs = [1, 2];

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const UseLayoutEffect = () => {
  const [userID, setUserID] = useState(userIDs[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  let now = performance.now();
  while (performance.now() - now < 200) {
    // nothing yet
  }

  useLayoutEffect(() => {
    setIsAdmin(userID === userIDs[0]);
  }, [userID]);

  const handleChange = () => {
    const otherID = userIDs.find((id) => id !== userID);
    setUserID(otherID);
  };

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useLayoutEffect</span>
      <div className="buttons">
        <button className="button-state" onClick={handleChange}>
          Mudar
        </button>
      </div>
      <span>userID: {userID}</span>
      <span>Admin: {isAdmin ? "true" : "false"}</span>
      <span></span>
      <div className="linkContainer_left">
        <LinkApp text="useRef" url="useref" />
      </div>
      <div className="linkContainer">
        <LinkApp text="useReduce" url="usereduce" />
      </div>
    </Container>
  );
};

export default UseLayoutEffect;
