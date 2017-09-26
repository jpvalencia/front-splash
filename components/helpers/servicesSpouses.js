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
      if (getKey(error, 'response.status') === 401) {
          Router.push({ pathname: '/login'})
      }
      return Promise.reject(error);
  });

  return axios.put(servicesConfiguration.spouses + url,
    {data},
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })

}

const get = (url) => {
  const session = Session.getSession();
  axios.interceptors.response.use((response) => {
    return response;
  }, function (error) {
        if (getKey(error, 'response.status') === 401) {
            Router.push({ pathname: '/login'})
        }
        return Promise.reject(error);
  });

  return axios.get(servicesConfiguration.spouses + url,
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })

}

export default {update, get};
