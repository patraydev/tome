import api from './api-config';


export const sendPasswordReset = async (resetData) => {
  const resp = await api.post('/reset', resetData);
  return resp.data;
}

export const confirmPasswordReset = async (resetData) => {
  const { token
  } = resetData;
  const resp = await api.post(`/reset-confirm/${token}`, resetData);
  return resp.data;
}