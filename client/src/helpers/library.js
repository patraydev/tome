import api from "./api-config";

export const readLibrary = async (data) => {
  const resp = await api.post("/library", { userID: data });
  return resp.data;
};

export const addToLibrary = async (data) => {
  const resp = await api.post("/library/add", data);
  return resp.data;
};

export const removeFromLibrary = async (data) => {
  const resp = await api.post("/library/remove", data);
  return resp.data;
};