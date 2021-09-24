import React from "react";
import { useSelector } from "react-redux";
import MainPageView from "./MainPageView";

const MainPage = () => {
  const { isAuth } = useSelector((state) => state.authState);
  console.log(isAuth);

  return <MainPageView />;
};

export default MainPage;
