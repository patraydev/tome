import api from "./api-config";

export const createCocktail = async (data) => {
  const resp = await api.post("/cocktails", { cocktail: data });
  return resp.data;
};

export const readAllCocktails = async () => {
  const resp = await api.get("/cocktails");
  return resp.data;
};

export const readOneCocktail = async (id) => {
  const resp = await api.get(`/cocktails/${id}`);
  return resp.data;
};

export const updateCocktail = async (id, data) => {
  const resp = await api.put(`/cocktails/${id}`, data);
  return resp.data;
};

export const destroyCocktail = async (id) => {
  const resp = await api.delete(`/cocktails/${id}`);
  return resp.data;
};
