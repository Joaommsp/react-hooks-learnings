import { useContext } from "react";
import { CarContext } from "../context/CarContext";

export default function useCarContext() {
  const context = useContext(CarContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context
}

