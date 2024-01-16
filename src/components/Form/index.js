import { Form } from "antd";
import React, { useContext, useMemo } from "react";
import { FetchService } from "../../API";
import { FetchContext } from "../../App";
import Input from "../Input";
import Select from "../Select";
import Upload from "../Upload";

const FORM_ITEMS_MAP = (item, isOnlyRead, values, form) => ({
  textInput: <Input type="textInput" disabled={isOnlyRead} />,
  numberInput: <Input disabled={isOnlyRead} />,
  select: <Select data={item?.selectData} disabled={isOnlyRead} />,
  upload: (
    <Upload src={values[item?.dataIndex]} form={form} disabled={isOnlyRead} />
  ),
});

const FormItemComponent = ({
  config,
  values = {},
  generateBtn,
  displayType,
  formLayout = "horizontal",
}) => {
  const [form] = Form.useForm();
  const { fetchData, getData, loading } = useContext(FetchContext);
  const isOnlyRead = displayType === "view";
  const isFilter = displayType === "filter";
  const isAdd = displayType === "add";
  const isEdit = displayType === "edit";

  const onFinish = async (value) => {
    if (isAdd)
      fetchData(() => FetchService.addRecord(value).then(() => getData()));
    if (isEdit)
      fetchData(() =>
        FetchService.editRecord(values?.id, value).then(() => getData())
      );
    if (isFilter) {
      const filterOption = Object.fromEntries(
        Object.entries(value).filter(([_, value]) => value)
      );
      fetchData(() => getData(filterOption));
    }
  };

  const generateContent = useMemo(() => {
    return config?.map((item) => (
      <Form.Item
        style={{ marginBottom: isFilter ? 12 : 18 }}
        key={item?.key}
        name={item?.dataIndex}
        label={item?.title}
        rules={item?.rules}
        initialValue={values[item?.dataIndex]}
      >
        {FORM_ITEMS_MAP(item, isOnlyRead, values, form)[item?.type]}
      </Form.Item>
    ));
  }, [config, values, isOnlyRead, isFilter, form]);

  return (
    <Form
      form={form}
      name="basic"
      className="form"
      layout={formLayout}
      labelCol={{
        span: isFilter ? 12 : 9,
      }}
      wrapperCol={{
        span: isFilter ? 24 : 13,
      }}
      style={{
        maxWidth: 600,
        marginTop: isFilter ? 0 : 20,
        padding: 0,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {generateContent}
      <div className="form_actions">{generateBtn(form, loading)}</div>
    </Form>
  );
};
export default FormItemComponent;
