import { create } from 'apisauce';
import authStorage from '../auth/storage';
import cache from '../utilities/cache';

const apiClient = create({ baseURL: 'http://192.168.104.74:9000/api' });

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  if (!token) return;
  request.headers['x-auth-token'] = token;
});

const get = apiClient.get;
//redefine apiClient.get to use the cache if fetching server is failling
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  // response nok
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
