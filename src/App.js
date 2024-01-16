import { Layout } from "antd";
import React, { useEffect, createContext, useState } from "react";
import { FetchService } from "./API";
import "./App.css";
import Filter from "./components/Filter";
import Svg from "./components/Svg";
import Table from "./components/Table";
import { FILTER_CONFIG } from "./constants/filter";
import { TABLE_COLUMNS, TABLE_HEADER_ACTIONS } from "./constants/tableConfig";
import { UseFetching } from "./hooks/useFetching";
import Message from "./components/Message";
import { TYPE_OF_MESSAGE } from "./constants/messages";

const { Header, Content, Footer } = Layout;

export const FetchContext = createContext();

const App = () => {
  const [data, setData] = useState();
  const { loading, error, fetchData } = UseFetching();

  async function getData(filterOption) {
    setData(await FetchService.fetchData(filterOption));
  }

  useEffect(() => {
    fetchData(getData);
  }, []);

  return (
    <FetchContext.Provider value={{ getData, fetchData, loading }}>
      <Layout className="layout_container">
        <Header className="header">
          <Svg nameOfSvg="logo" />
          <div className="demo-logo">AUTO SKLAD</div>
          <Filter fieldsConfig={FILTER_CONFIG} />
        </Header>
        <Content className="site-layout">
          <Table
            columns={TABLE_COLUMNS}
            data={data}
            headerActions={TABLE_HEADER_ACTIONS}
            loading={loading}
          />
        </Content>
        <Footer className="footer">
          <Svg nameOfSvg="partCompanies" />
        </Footer>
        {error && <Message messages={TYPE_OF_MESSAGE?.error(error)} />}
      </Layout>
    </FetchContext.Provider>
  );
};

export default App;
