import { UploadOutlined } from "@ant-design/icons";
import { Upload as AntUpload, Button, message } from "antd";
import React, { useContext, useState } from "react";
import { FetchContext } from "../../App";
import Image from "../Image";
import { sendFile } from "./actions";

const Upload = ({ name = "file", form, src, disabled }) => {
  const { fetchData, loading } = useContext(FetchContext);
  const [fileId, setFileId] = useState();

  const uploadFile = (options) => fetchData(() => sendFile(options));

  const onChange = (info) => {
    if (info.file.status === "done") {
      setFileId(info?.file?.response?.uuid);
      message.success(`Загрузка файла: ${info.file.name} произошла успешно`);
      form.setFieldsValue({ image: info?.file?.response?.uuid });
    } else if (info.file.status === "error") {
      message.error(`Произошла ошибка при загрузке файла: ${info.file.name}`);
    }
  };

  return (
    <>
      <Image src={fileId || src} />
      <AntUpload
        name={name}
        className="ant-upload-wrapper"
        onChange={onChange}
        customRequest={uploadFile}
      >
        <Button
          loading={loading}
          disabled={loading || disabled}
          icon={<UploadOutlined />}
        >
          Загрузить
        </Button>
      </AntUpload>
    </>
  );
};

export default Upload;
