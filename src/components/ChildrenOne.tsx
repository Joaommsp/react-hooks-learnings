import PropTypes from "prop-types";
import React, { useContext } from "react";
import ChildrenTwo from "./ChildrenTwo";
import UseContext from "../pages/useContext";
import { AppContext } from "../pages/UserProvider";

const ChildrenOne = () => {
  return (
      <ChildrenTwo />
  );
};

export default ChildrenOne;
