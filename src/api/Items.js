import axios from 'axios';

export async function getItems() {
    return await resolve(axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/items`));
}
