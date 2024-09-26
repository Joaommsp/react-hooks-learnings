import useCarContext from "../hook/useCarContext";

const ChildrenTwo = () => {
  const { car, setCar } = useCarContext;

  return (
    <button onClick={() => setCar("Mustang")}>Mude o nome do veículo</button>
  );
};

export default ChildrenTwo;
