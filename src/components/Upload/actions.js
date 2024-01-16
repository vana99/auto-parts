import { uploadFile } from "@uploadcare/upload-client";

export const sendFile = async (options) => {
  const { onSuccess, onError, file } = options;
  try {
    const response = await uploadFile(file, {
      publicKey: "66898b1eac101b9c1598",
      store: "auto",
    });
    onSuccess(response);
  } catch (err) {
    onError(err?.response);
  }
};
