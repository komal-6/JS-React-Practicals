import axios from 'axios'

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

function getAuthToken(){
    return 'Komal'
}

instance.interceptors.request.use(
    (config) =>{
        const token = getAuthToken();
        if(token){
            config.headers['Authorization'] = token
            
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
)

