import React from "react";

import MainPage from '../Pages/MainPage/MainPage'
import AdminPage from '../Pages/AdminPage/AdminPage'

export const ROUTES_URLS = {
  HOME: '/',
  ADMIN_PAGE: '/admin'
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
]