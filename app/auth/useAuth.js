import { decode } from 'base-64'; // Needed for jwtDecode
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import AuthContext from './context';
import authStorage from './storage';

global.atob = decode;

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, login, logout };
};
