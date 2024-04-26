import axios from 'axios';

export default async function getItems(){
    await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error(error);
      });
}