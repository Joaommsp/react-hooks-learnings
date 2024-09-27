import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  .logo-react {
    width: 256px;
    margin-bottom: 4rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .hook-type {
    color: #939185;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 2rem 0 2rem 0;
  }

  .button-state {
    padding: 0.5rem 2rem;
    border: 0;
    color: #000000;
    border: 2px solid #ffffff;
    border-radius: 25px;
    background-color: #ffffff;
    transition: 0.3s all ease-in-out;
  }

  .button-state:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .useContext-app {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .useContext-app button {
    padding: 0.5rem 2rem;
    border: 0;
    margin-top: 1rem;
    border: 2px solid #3c3d37;
    border-radius: 50px;
  }

  .useContext-app button:hover {
    cursor: pointer;
  }

  .linkContainer {
    position: fixed;
    right: 2rem;
  }

  .linkContainer_left {
    position: fixed;
    left: 2rem;
  }

  .useEffect_states {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
