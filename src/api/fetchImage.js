import customAxios from './config';

const fetchImage = (query, page) => {
    return customAxios('/api', {
        params: {
            q: query,
            page
        },
    }).then((data) => data).catch((error) => error);
};

export default fetchImage;