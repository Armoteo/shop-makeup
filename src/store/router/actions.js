import { LOCATION_CHANGE } from "connected-react-router";

const navigate = (url) => ({
  type: LOCATION_CHANGE,
  payload: {
    location: {
      pathname: url,
    },
    action: "POP",
  },
});

export default navigate;
