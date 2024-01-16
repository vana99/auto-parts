import { Input as AntInput, InputNumber } from "antd";
import React from "react";

const Input = ({ type, defaultValue = "", ...rest }) => {
  return (
    <>
      {type === "textInput" ? (
        <AntInput defaultValue={defaultValue} {...rest} />
      ) : (
        <InputNumber {...rest} />
      )}
    </>
  );
};
export default Input;
