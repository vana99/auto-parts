import React from "react";
import { Image as AntImage } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const previewConfig = {
  mask: (
    <div>
      <EyeOutlined /> Просмотр
    </div>
  ),
};

const defaultPicture = "https://turbok.by/public/img/no-photo--lg.png";

const Image = ({ src }) => (
  <AntImage
    width={200}
    src={(src && `https://ucarecdn.com/${src}/`) || defaultPicture}
    preview={previewConfig}
  />
);
export default Image;
