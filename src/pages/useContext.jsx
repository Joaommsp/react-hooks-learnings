import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import LinkApp from "../components/LinkComponent";

import { Container } from "./styles";

import react_icon from "../assets/svg/react-svgrepo-com.svg"

const AppContext = createContext(null)

const UseContext = () => {
  
  const [name, setName] = useState("João Marcos")

  return (
    <AppContext.Provider value={{name, setName}}>
      <Container>
        <img className="logo-react" src={react_icon} alt="..." />
        <h1>React Hooks</h1>
        <span className="hook-type">useContext</span>
        <div className="useContext-app">
          <div>{name}</div>
          <ChildrenOne changeName={setName}/>
        </div>
        <div className="linkContainer_left">
          <LinkApp text="useState" url=""/>
        </div>
      </Container>
    </AppContext.Provider>
  );
};

const ChildrenOne = () => {
  return <ChildrenTwo/>
}

ChildrenOne.propTypes = {
  changeName: PropTypes.string.isRequired
}

const ChildrenTwo = () => {
  const {setName} = useContext(AppContext)

  return (
    <button onClick={() => setName("João da Massa")}>Mude o nome do usuário</button>
  )
}

ChildrenTwo.propTypes = {
  changeName: PropTypes.string.isRequired
}

export default UseContext;
