import axios from "axios";
import _ from "underscore";
const headers = {
  "Content-Type": "application/json"
};

export default {
  login: function(email, password) {
    return axios.post(
      "/user/login",
      {
        email: email,
        password: password
      },
      {
        headers: headers
      }
    );
  },

  signup: function(send) {
    return axios.post("/user/signup", send, {
      headers: headers
    });
  },

  products: () => {
    return axios.get("/product");
  }
};
