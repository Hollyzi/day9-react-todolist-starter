import axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://localhost:8080",
        timeout: 5000
    }
);
let start;
let endTime;
instance.interceptors.request.use(
    (config) => {
        config.metadata = {startTime: new Date()};
        console.log("request", config);
        return config
    },
    (error) => {
        console.log("error", error);
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        endTime = new Date();
        const Duration = endTime - response.config.metadata.startTime;
        console.log(`${response.config.method} ${response.config.url} duration....`, Duration, 'ms')
        console.log("response", response);
        return response
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = '/not-found';
        }
        if (error.response && error.response.status === 500) {
            window.location.href = '/hard-stop';
        }
        console.log("error", error);
        return Promise.reject(error)
    }
)
export default instance;