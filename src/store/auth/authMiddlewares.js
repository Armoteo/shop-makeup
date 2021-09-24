import axios from "axios";
import Cookies from "js-cookie";
import ACTION_AUTH from "./types";
import { setToLocalStorage, removeLocalStorage } from "../../utils/storageWorks";
import subscribe from "../subscribe";
import { saveResponseCheckAction, saveResponseAction, loadingAction } from "./actions";
import AuthServices from "../../services/authService";

const loginWorker = async ({ action, dispatch }) => {
  const { email, password } = action.payload;
  try {
    const response = await AuthServices.login(email, password);
    setToLocalStorage("token", response.data.accessToken);
    dispatch(saveResponseAction({ isAuth: true, user: response.data.user }));
  } catch (e) {
    console.log(e);
  }
};

const registrationWorker = async ({ action, dispatch }) => {
  const { email, password } = action.payload;
  try {
    const response = await AuthServices.registration(email, password);
    setToLocalStorage("token", response.data.accessToken);
    dispatch(saveResponseAction({ isAuth: true, user: response.data.user }));
  } catch (e) {
    console.log(e);
  }
};

const logoutWorker = async ({ dispatch }) => {
  try {
    removeLocalStorage("token");
    Cookies.remove("refreshToken");
    dispatch(saveResponseAction({ isAuth: false, user: {} }));
    await AuthServices.logout();
  } catch (e) {
    console.log(e.response.data);
  }
};

const checkAuthWorker = async ({ dispatch }) => {
  dispatch(loadingAction({ loading: true }));
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/refresh`, { withCredentials: true });
    setToLocalStorage("token", response.data.accessToken);
    dispatch(saveResponseCheckAction({ isAuth: true, user: response.data.user, loading: false }));
  } catch (e) {
    console.log(e);
  }
};

const loginMiddleware = ({ dispatch }) => (next) => subscribe(ACTION_AUTH.LOGIN, loginWorker)(next, dispatch);
const registrationMiddleware = ({ dispatch }) => (next) =>
  subscribe(ACTION_AUTH.REGISTRATION, registrationWorker)(next, dispatch);
const logoutMiddleware = ({ dispatch }) => (next) => subscribe(ACTION_AUTH.LOGOUT, logoutWorker)(next, dispatch);
const checkAuthMiddleware = ({ dispatch }) => (next) =>
  subscribe(ACTION_AUTH.CHECK_AUTH, checkAuthWorker)(next, dispatch);

const AuthMiddleware = [loginMiddleware, registrationMiddleware, logoutMiddleware, checkAuthMiddleware];

export default AuthMiddleware;
