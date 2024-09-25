

// eslint-disable-next-line react/prop-types
const ChildrenTwo = ({user, setUser}) => {

  return (
    <button onClick={() => setUser("João da Massa")}>Mude o nome do usuário</button>
  )
}

export default ChildrenTwo