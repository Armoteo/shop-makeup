import ACTION_AUTH from "./types";

export const loginAction = (payload) => ({
  type: ACTION_AUTH.LOGIN,
  payload,
});

export const saveResponseAction = (payload) => ({
  type: ACTION_AUTH.SAVE_RESPONSE,
  payload,
});

export const saveResponseCheckAction = (payload) => ({
  type: ACTION_AUTH.SAVE_RESPONSE,
  payload,
});

export const registrationAction = (payload) => ({
  type: ACTION_AUTH.REGISTRATION,
  payload,
});

export const logoutAction = () => ({
  type: ACTION_AUTH.LOGOUT,
});

export const checkAuthAction = (payload) => ({
  type: ACTION_AUTH.CHECK_AUTH,
  payload,
});

export const loadingAction = (payload) => ({
  type: ACTION_AUTH.LOADING,
  payload,
});
