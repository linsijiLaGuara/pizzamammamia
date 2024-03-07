import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ComprarCard } from "../components/ComprarCard";

export const Cart = (props) => {
  return <div>{<ComprarCard />}</div>;
};

Cart.propTypes = {};
