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

  return axios.put(servicesConfiguration.user + url,
    {data},
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })

}

const get = (url) => {
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

  return axios.get(servicesConfiguration.user + url,
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })

}

export default {update, get};