import {
  DeleteFilled,
  EditFilled,
  EyeFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import Confirm from "../../components/Confirm";
import Modal from "../../components/Modal";
import { DEFAULT_MODAL_BTN } from "../modal";
import { RECORD_FIELDS } from "../recordConfig";

const { add, edit, cancel, ok } = DEFAULT_MODAL_BTN;

export const TABLE_COLUMNS = [
  {
    title: "Название запчасти",
    dataIndex: "partName",
    sorter: {
      compare: (a, b) => a?.partName.localeCompare(b?.partName),
    },
  },
  {
    title: "Марка авто",
    dataIndex: "carBrand",
    sorter: {
      compare: (a, b) => a?.carBrand.localeCompare(b?.carBrand),
    },
  },
  {
    title: "Производитель",
    dataIndex: "maker",
    sorter: {
      compare: (a, b) => a?.maker.localeCompare(b?.maker),
    },
  },
  {
    title: "Стоимость, руб",
    dataIndex: "sum",
    sorter: {
      compare: (a, b) => a.sum - b.sum,
    },
  },
  {
    title: "Наличие, шт",
    dataIndex: "available",
    sorter: {
      compare: (a, b) => a.available - b.available,
    },
  },
  {
    title: "Доставка, дней",
    dataIndex: "delivery",
    sorter: {
      compare: (a, b) => a.maker - b.maker,
    },
  },
  {
    title: "Действие",
    key: "operation",
    render: (_, item) => (
      <div className="table_actions">
        <Modal
          title="Просмотр записи"
          fieldsConfig={RECORD_FIELDS}
          modalBtn={[ok]}
          openBtn={<EyeFilled style={{ cursor: "pointer" }} />}
          currentValue={item}
          displayType="view"
        />
        <Modal
          title="Редактирование записи"
          fieldsConfig={RECORD_FIELDS}
          modalBtn={[cancel, edit]}
          openBtn={<EditFilled style={{ cursor: "pointer" }} />}
          currentValue={item}
          displayType="edit"
        />
        <Confirm
          title="Вы действительно хотите удалить запись?"
          okText="Да"
          cancelText="Отмена"
          currentItem={item}
        >
          <DeleteFilled style={{ color: "#b00000" }} />
        </Confirm>
      </div>
    ),
  },
];

export const TABLE_HEADER_ACTIONS = [
  {
    component: (
      <Modal
        title="Добавление записи"
        modalBtn={[cancel, add]}
        fieldsConfig={RECORD_FIELDS}
        displayType="add"
        openBtn={
          <Button ghost type="primary" icon={<PlusOutlined />}>
            Добавить запись
          </Button>
        }
      />
    ),
  },
];
