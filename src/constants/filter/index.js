import { Button } from "antd";
import { CARS_BRANDS } from "../recordConfig";

export const FILTER_BTN = {
  search: (form) => (
    <Button type="primary" htmlType="search">
      Применить
    </Button>
  ),
  cancel: (form) => (
    <Button type="default" htmlType="cancel" onClick={() => form.resetFields()}>
      Сброс
    </Button>
  ),
};

export const FILTER_CONFIG = [
  {
    key: "PartName",
    title: "Название запчасти",
    dataIndex: "partName",
    type: "textInput",
  },
  {
    key: "CarBrand",
    title: "Марка авто",
    dataIndex: "carBrand",
    type: "select",
    selectData: CARS_BRANDS,
  },
  {
    key: "Maker",
    title: "Производитель",
    dataIndex: "maker",
    type: "textInput",
  },
  {
    key: "Sum",
    title: "Стоимость, руб",
    dataIndex: "sum",
    type: "numberInput",
  },
  {
    key: "Available",
    title: "Наличие, шт",
    dataIndex: "available",
    type: "numberInput",
  },
  {
    key: "Delivery",
    title: "Доставка, дней",
    dataIndex: "delivery",
    type: "numberInput",
  },
];
