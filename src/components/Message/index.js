import { message } from "antd";
import React, { useEffect } from "react";

const Message = ({ messages }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    messageApi.open(messages);
  }, [messages, messageApi]);

  return <>{contextHolder}</>;
};
export default Message;
