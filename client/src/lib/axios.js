import axios from 'axios';

export const getAxios = async(url) => {
    return await axios.get(url).then(res => res.data);
}

export const postAxios = async(url, postRequest) => {
    return await axios.post(url, postRequest).then(res => res.data);
}