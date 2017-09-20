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

  return axios.put(servicesConfiguration.investments + url,
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
      if (getKey(error, 'response.status') === 401) {
          Router.push({ pathname: '/login'})
      }
      return Promise.reject(error);
  });

  if(!getKey(session, 'token')) {return }

  return axios.get(servicesConfiguration.investments + url,
    {
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })
};

const deleteInvestments = (url, investmentId) => {
  const data = {id: investmentId};
  const session = Session.getSession();
  axios.interceptors.response.use((response) => {
    return response;
  }, function (error) {
      if (getKey(error, 'response.status') === 401) {
          Router.push({ pathname: '/login'})
      }
      return Promise.reject(error);
  });

  return axios.delete(servicesConfiguration.investments + url,
    {
      data,
      headers: {
        authorization: getKey(session, 'token')
      },
      withCredentials:true
  })
}


export default {update, getResume, deleteInvestments};
