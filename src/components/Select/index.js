import { Select as AntSelect } from "antd";
import React from "react";

const Select = ({ defaultValue, data, ...rest }) => (
  <AntSelect
    showSearch
    defaultValue={defaultValue}
    options={data}
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input)
    }
    {...rest}
  />
);
export default Select;
