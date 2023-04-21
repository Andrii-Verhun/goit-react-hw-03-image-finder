import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'https://pixabay.com',
    params: {
        key: '34119717-c2cb4bf5c1e24db7e8481730d',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12
    },
});

export default customAxios;
