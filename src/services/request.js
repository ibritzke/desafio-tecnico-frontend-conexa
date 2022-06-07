import axiosIntegration from './axiosAuth';

export const getRequest = (url, resolve, reject) =>
  axiosIntegration
    .get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    .then(response => {
      const { data } = response;

      resolve(data);
    })
    .catch(error => {
      reject(error);
    });

export const putRequest = (url, data, resolve, reject) => {
  return axiosIntegration
    .put(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error.response.data);
    });
};

export const deleteRequest = (url, resolve, reject) => {
  return axiosIntegration
    .delete(url)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error.response.data);
    });
};

export const postRequest = (url, data, resolve, reject) => {
  return axiosIntegration
    .post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })

    .then(response => {
      resolve(response.data);
    })

    .catch(error => {
      reject(error.response.data);
    });
}; 
