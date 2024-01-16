import React, { useContext } from "react";
import { Popconfirm } from "antd";
import { FetchContext } from "../../App";
import { FetchService } from "../../API";

const Confirm = ({ children, currentItem, ...rest }) => {
  const { fetchData, getData } = useContext(FetchContext);

  const deleteRecord = async (item) =>
    await fetchData(() =>
      FetchService.deleteRecord(item?.id).then(() => getData())
    );

  return (
    <Popconfirm onConfirm={() => deleteRecord(currentItem)} {...rest}>
      {children}
    </Popconfirm>
  );
};

export default Confirm;
