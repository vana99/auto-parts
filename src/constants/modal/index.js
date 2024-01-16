import { Button } from "antd";

const isValidateFields = async (form) => {
  return await form
    .validateFields()
    .catch((values) => false)
    .then((values) => Boolean(values));
};

export const DEFAULT_MODAL_BTN = {
  add: (closeModal, form, loading) => (
    <Button
      onClick={async () => {
        (await isValidateFields(form)) && closeModal();
      }}
      htmlType="submit"
      type="primary"
      disabled={loading}
    >
      Добавить запись
    </Button>
  ),
  edit: (closeModal, form, loading) => (
    <Button
      onClick={async () => {
        (await isValidateFields(form)) && closeModal();
      }}
      disabled={loading}
      htmlType="submit"
      type="primary"
    >
      Сохранить
    </Button>
  ),
  cancel: (closeModal, form) => (
    <Button
      onClick={() => {
        closeModal();
        form.resetFields();
      }}
      ghost
      type="primary"
    >
      Отмена
    </Button>
  ),
  ok: (closeModal) => (
    <Button onClick={() => closeModal()} type="primary">
      Ок
    </Button>
  ),
};
