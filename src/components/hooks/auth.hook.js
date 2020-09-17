import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [adminStatus, setAdminStatus] = useState(false)

  const login = useCallback((token, id, adminStatus) => {
    setToken(token)
    setUserId(id)
    setAdminStatus(adminStatus)
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: token, adminStatus: adminStatus
    }))
  }, []);

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setAdminStatus(null)
    localStorage.removeItem(storageName)
  }, []);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.userId, data.adminStatus)
    }
    setReady(true)
  }, [login]);

  return { login, logout, token, userId, ready, adminStatus }
};
