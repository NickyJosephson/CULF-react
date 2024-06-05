import axios from 'axios';
import {resolve} from './resolve.js'

export async function getItems(jwt) {
    return await resolve(axios.get(
        `${import.meta.env.VITE_BASE_URL}api/v1/items`,
        {
            headers: {
                "Access-Control-Allow-Origin": "http://big-red-lost-found.us-east-1.elasticbeanstalk.com",
                "Authorization": `Bearer ${jwt}`
            }
        }
    ));
}
