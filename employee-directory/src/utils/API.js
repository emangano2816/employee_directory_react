import axios from 'axios';

const BASEURL = "https://randomuser.me/api/?seed=emp";

export default {
    search: function(query) {
        console.log(BASEURL + query);
        return axios.get(BASEURL + query);
    }
};