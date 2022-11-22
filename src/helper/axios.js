import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${window.location.origin}`,
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.response.use(
    response => response.data,
    err => {
        throw [err.response, err.response.status]
    }
);

export default axiosInstance;
