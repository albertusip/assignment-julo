import { GET, POST, PATCH } from './axios';

const TOKEN = (JSON.parse(localStorage.getItem('token'))) || null;

const MASTER_ENDPOINT = 'https://934fb300-09e1-4238-881c-f549d1eb7e2d.mock.pstmn.io/api/v1'
const END_POINT_INIT = `${MASTER_ENDPOINT}/init`;
const END_POINT_WALLET = `${MASTER_ENDPOINT}/wallet`;

const HEADERS = {
    'Content-Type': 'application/json',
    'x-mock-response-code': ''
}

const HEADERS_TOKEN = {
    'Content-Type': 'application/json',
    'x-mock-response-code': '',
    'Authorization': `Token ${TOKEN}`
}

const initializeAccount = (value) => {
    const { id, data } = value;
    const url = `${END_POINT_INIT}`;
    HEADERS['x-mock-response-code'] = id;
    const param = {
        data: data,
        url: url,
        headers: HEADERS
    };

    return POST(param);
}

const enableWallet = async (value) => {
    const url = `${END_POINT_WALLET}`;
    HEADERS_TOKEN['x-mock-response-code'] = 201;
    const param = {
        data: value,
        url: url,
        headers: HEADERS_TOKEN
    };

    return POST(param);
}

const viewWallet = async () => {
    const url = `${END_POINT_WALLET}`;
    HEADERS_TOKEN['x-mock-response-code'] = 200;
    const param = {
        url: url,
        headers: HEADERS_TOKEN
    };

    return GET(param);
}

const addVirtualMoney = async (value) => {
    const url = `${END_POINT_WALLET}/deposits`;
    HEADERS_TOKEN['x-mock-response-code'] = 201;
    const param = {
        data: value,
        url: url,
        headers: HEADERS_TOKEN
    };

    return POST(param);
}

const reduceVirtualMoney = async (value) => {
    const url = `${END_POINT_WALLET}/withdrawals`;
    HEADERS_TOKEN['x-mock-response-code'] = 201;
    const param = {
        data: value,
        url: url,
        headers: HEADERS_TOKEN
    };

    return POST(param);
}

const disableWallet = async () => {
    const url = `${END_POINT_WALLET}`;
    HEADERS_TOKEN['x-mock-response-code'] = 200;
    const param = {
        data: {
            is_disabled: true
        },
        url: url,
        headers: HEADERS_TOKEN
    };

    return PATCH(param);
}

export {
    initializeAccount,
    enableWallet,
    viewWallet,
    addVirtualMoney,
    reduceVirtualMoney,
    disableWallet
};