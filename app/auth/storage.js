import { decode } from 'base-64'; // Needed for jwtDecode
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';

global.atob = decode;

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token.');
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token.');
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error deleting the auth token.');
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken
};
