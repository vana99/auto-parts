import { Modal as AntModal } from "antd";
import React, { useState } from "react";
import FormItemComponent from "../Form";

const Modal = ({
  openBtn,
  title,
  modalBtn,
  fieldsConfig,
  currentValue,
  displayType,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const generateModalBtn = (form = {}, loading) => {
    return modalBtn?.map((btn) => btn(handleOk, form, loading));
  };

  return (
    <>
      <div onClick={showModal}>{openBtn}</div>
      <AntModal title={title} open={isModalOpen} onOk={handleOk} footer>
        <FormItemComponent
          config={fieldsConfig}
          generateBtn={generateModalBtn}
          values={currentValue}
          displayType={displayType}
        />
      </AntModal>
    </>
  );
};

export default Modal;
