import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'DWICache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = { value, timestamp: Date.now() };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, 'minutes') > expiryInMinutes;
  return isExpired;
};

const get = async (key) => {
  try {
    const stored = await AsyncStorage.getItem(prefix + key);
    console.log(key, stored);
    const item = JSON.parse(stored);

    if (!item) return null;

    if (isExpired(item)) {
      // Violate the Comamand Query Principle ( either on or the other, but not both)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get
};
