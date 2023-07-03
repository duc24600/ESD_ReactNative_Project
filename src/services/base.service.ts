import axios from "axios";

const baseEndpoint = 'http://localhost:3000/api/v1/';

const headerOptions = (token: string) => {
    return {
        'Authorization': `Bearer ${token}`,
        'Connection': 'keep-alive'
    }
}

const get = async (url: string, token: string) => {
    const response = await axios.get(baseEndpoint + url, {
        headers: headerOptions(token)
    });
    return response.data;
}

const post = async (url: string, token: string, body: any) => {
    const response = await axios.post(baseEndpoint + url, body, {
        headers: headerOptions(token)
    });
    return response.data;
}

const baseService = {
    get, post
}

export default baseService;