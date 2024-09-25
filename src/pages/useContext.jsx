import { useContext } from "react";
import LinkApp from "../components/LinkComponent";
import { Container } from "./styles";

import { AppContext } from "./UserProvider";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const UseContext = () => {
  const {user, setUser} = useContext(AppContext); 

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useContext</span>
      <div className="useContext-app">
        <div>{user.name}</div>
        <div>{user.age} anos</div>
      </div>
      <div className="linkContainer_left">
        <LinkApp text="useState" url="" />
      </div>
    </Container>
  );
};

export default UseContext;