import api from './api';

const loginAction = async ({ username, password }) => {
  const token = await api.login({ username, password });
  const { accessToken, refreshToken } = token;

  api.putAccessToken(accessToken);
  api.putRefreshToken(refreshToken);

  const authUser = await api.getOwnProfile();
  const { data } = authUser;
  return data;
}

const logoutAction = () => {
  api.deleteToken();
}

const registerAction = async ({ username, password, name, age }) => {
  const data = await api.register({ username, password, name, age });
  return data;
}

export {
  loginAction,
  logoutAction,
  registerAction,
}
