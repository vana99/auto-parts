export const TYPE_OF_MESSAGE = {
  error: (mes) => ({
    type: "error",
    content: `Произошла ошибка: ${mes}`,
  }),
};
