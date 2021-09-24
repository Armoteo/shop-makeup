import ACTION_AUTH from "./types";

const INITIAL_STATE = {
  isAuth: false,
  user: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_AUTH.CHECK_AUTH:
      return { ...state, isAuth: payload.isAuth, user: payload.user, loading: false };
    case ACTION_AUTH.LOADING:
      return { ...state, loading: payload.loading };
    case ACTION_AUTH.SAVE_RESPONSE:
      return { ...state, isAuth: payload.isAuth, user: payload.user };
    case ACTION_AUTH.SAVE_CHECK_RESPONSE:
      return { ...state, isAuth: payload.isAuth, user: payload.user, loading: payload.loading };
    default:
      return state;
  }
};
