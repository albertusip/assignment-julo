import axios from 'axios';

const POST = async (value) => {
    const { url, data, headers } = value;
    try {
        const response = await axios.post(url, data, {
            headers: headers
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

const PATCH = async (value) => {
    const { url, data, headers } = value;
    try {
        const response = await axios.patch(url, data, {
            headers: headers
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

const GET = async (value) => {
    const { url, headers } = value;
    try {
        const response = await axios.get(url, {
            headers: headers
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    POST,
    PATCH,
    GET
};