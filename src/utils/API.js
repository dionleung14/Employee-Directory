import axios from "axios";
const BASEURL = "https://randomuser.me/api/?nat=US&results=";
const quantity = 5;

export default {
  search: function() {
    return axios.get(BASEURL + quantity);
  }
};