import axios from "axios";

export const { REACT_APP_API_URL } = process.env;

const $api = axios.create({
  withCredentials: true,
  baseURL: REACT_APP_API_URL,
});

$api.interceptors.request.use((config) => {
  const configRequest = config;
  configRequest.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return configRequest;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/refresh`, { withCredentials: true });
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e, "User is not auth");
      }
    }
    throw error;
  }
);

export default $api;
