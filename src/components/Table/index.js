import { Table as AntTable } from "antd";
import React, { useCallback, useMemo } from "react";

const Table = ({ columns, data, headerActions, loading }) => {
  const generateHeaderActions = useCallback(() => {
    return headerActions?.map((item) => item?.component);
  }, [headerActions]);

  const generateTable = useMemo(() => {
    return (
      <AntTable
        title={() => generateHeaderActions(headerActions)}
        loading={loading}
        className="main_table"
        columns={columns}
        dataSource={data}
        size="middle"
        scroll={{
          x: 100,
        }}
      />
    );
  }, [data, columns, generateHeaderActions, headerActions, loading]);

  return generateTable;
};

export default Table;
