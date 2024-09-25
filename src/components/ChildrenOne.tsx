import PropTypes from "prop-types";
import React, { useContext } from "react";
import ChildrenTwo from "./ChildrenTwo";
import UseContext from "../pages/useContext";
import { AppContext } from "../pages/UserProvider";

const ChildrenOne = () => {
  const {user, setUser} = useContext(AppContext)

  return (
      <ChildrenTwo />
  );
};

ChildrenOne.propTypes = {
  changeName: PropTypes.string.isRequired,
};

export default ChildrenOne;
