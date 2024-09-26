import LinkApp from "../components/LinkComponent";
import { Container } from "./styles";
import { useUserContext } from "../hook/useUseContext";

import react_icon from "../assets/svg/react-svgrepo-com.svg";

const UseContext = () => {
  const { user, setUser } = useUserContext();

  const changeName = () => {
    setUser({ ...user, name: "João da Massa" });
  };

  return (
    <Container>
      <img className="logo-react" src={react_icon} alt="..." />
      <h1>React Hooks</h1>
      <span className="hook-type">useContext</span>
      <div className="useContext-app">
        <div>{user.name}</div>
        <div>{user.age} anos</div>
        <button onClick={changeName}>Mudar nome</button>
      </div>
      <div className="linkContainer_left">
        <LinkApp text="useState" url="" />
      </div>
      <div className="linkContainer">
        <LinkApp text="useEffect" url="useeffect" />
      </div>
    </Container>
  );
};

export default UseContext;
