import React from "react";
import { Wrapper } from "./styles";

const ErrorMessage = ({ message, color }) => {
   return <Wrapper style={{ color: color }}>{message}</Wrapper>;
};

export default ErrorMessage;
