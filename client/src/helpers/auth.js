import api from './api-config';

export const registerUser = async (registerData) => {
  const resp = await api.post('/sign-up', registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

export const loginUser = async (loginData) => {
  const resp = await api.post('/sign-in', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const resp = await api.get('/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}
