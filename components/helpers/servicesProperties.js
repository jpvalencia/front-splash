import axios from 'axios';
import Router from 'next/router';
import {get as getKey, pickBy} from 'lodash';
import servicesConfiguration from '../../config/services';
import Session from '../../components/session';

const _getUserData = (state) => {
    return pickBy(state, (data) => {
      return data !== ""
    })
}
const update = (url, state) => {
  const data = _getUserData(state);
  const session = Session.getSession();
  axios.interceptors.response.use((response) => {
    return response;
  }, function (error) {
      if (error.response.status === 401) {
          Router.push({ pathname: '/login'})
      }
      return Promise.reject(error.response);
  });

  return axios.put(servicesConfiguration.properties + url,
    {data},
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })

}

const getResume = (url) => {
  const session = Session.getSession();

  axios.interceptors.response.use((response) => {
    return response;
  }, function (error) {
      if (error.response.status === 401) {
          Router.push({ pathname: '/login'})
      }
      return Promise.reject(error.response);
  });

  if(!getKey(session, 'token')) {return }

  return axios.get(servicesConfiguration.properties + url,
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })
};

const deleteProperty = (url, propertyId) => {
  const data = {id: propertyId};
  const session = Session.getSession();
  axios.interceptors.response.use((response) => {
    return response;
  }, function (error) {
      if (error.response.status === 401) {
          Router.push({ pathname: '/login'})
      }
      return Promise.reject(error.response);
  });

  return axios.delete(servicesConfiguration.properties + url,
    {
      data,
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })
}


export default {update, getResume, deleteProperty};
