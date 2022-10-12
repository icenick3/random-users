import axios from "axios";
import {baseURL} from "./baseURL";

const params = {gender: 'all', nat: 'all'}

export const userService = (gender, nat) => axios.get(baseURL, {
    params,
    paramsSerializer: function paramsSerializer(params) {
        return Object.entries(Object.assign({}, params,  {gender: gender, nat: nat}))
            .map(([key, value]) => `${key}=${value}`).join('&');
    }
})
