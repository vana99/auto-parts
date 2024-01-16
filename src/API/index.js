import axios from "axios";

export class FetchService {
  static fetchData = async (filterOption) => {
    const response = await axios.get(
      "https://64538344c18adbbdfe9f5c3b.mockapi.io/api/v1/all",
      {
        params: filterOption,
      }
    );
    return response?.data;
  };
  static addRecord = async (body) => {
    const response = await axios.post(
      "https://64538344c18adbbdfe9f5c3b.mockapi.io/api/v1/all",
      body
    );
    return response?.data;
  };
  static editRecord = async (id, body) => {
    const response = await axios.put(
      `https://64538344c18adbbdfe9f5c3b.mockapi.io/api/v1/all/${id}`,
      body
    );
    return response?.data;
  };
  static deleteRecord = async (id) => {
    const response = await axios.delete(
      `https://64538344c18adbbdfe9f5c3b.mockapi.io/api/v1/all/${id}`
    );
    return response?.data;
  };
}
