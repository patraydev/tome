import api from './api-config';

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, data);
  return resp.data;
};