import axios from 'axios';
import _ from 'underscore';
const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://localhost:8080"

export default {
  login : function(email,password) {
    return axios.post(
      burl + '/user/login',
      {
        'email' : email,
        'password' : password
      },
      {
        headers: headers
      }
    )
  },

  signup : function(send){
    return axios.post(
      burl + '/user/signup',
      send,
      {
        headers: headers
      }
    )
  },

  isAuth : function() {
    return !_.isEmpty(localStorage.getItem('token'));
  },
  logout : function() {
    localStorage.clear();
  },
  products: () => {
    return axios.get(burl + '/product');
  }
}
