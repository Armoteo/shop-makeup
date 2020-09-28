import React from "react";

import MainPage from '../Pages/MainPage/MainPage'
import AdminPage from '../Pages/AdminPage/AdminPage'
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

export const ROUTES_URLS = {
  HOME: '/',
  ADMIN_PAGE: '/admin',
  CONTACT: '/contact',
  ABOUT: '/aboutUs'
}

export const routes = [
  {
    path: ROUTES_URLS.HOME,
    exact: true,
    render: () => <MainPage />,
    title: 'home'
  },

  {
    path: ROUTES_URLS.ADMIN_PAGE,
    exact: true,
    render: () => <AdminPage />,
    title: 'admin',
    isProtected: true
  },
  {
    path: ROUTES_URLS.CONTACT,
    exact: true,
    render: () => <Contact />,
    title: 'contact',
  },
  {
    path: ROUTES_URLS.ABOUT,
    exact: true,
    render: () => <About />,
    title: 'aboutUs',
  },
]